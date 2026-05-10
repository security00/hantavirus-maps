#!/usr/bin/env python3
"""Draft internal source checker for hantavirusmaps.org.

This script reads the reviewed source registry, checks a small set of
official/reliable endpoints, and writes a Markdown report for human review.
It does not modify public data JSON files.
"""

from __future__ import annotations

import argparse
import concurrent.futures
import json
import socket
import ssl
import sys
from dataclasses import dataclass
from datetime import date, datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, urljoin
from urllib.request import Request, urlopen


REPO_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_REGISTRY = REPO_ROOT / "data" / "sources" / "source-registry.json"
DEFAULT_REPORTS_DIR = REPO_ROOT / "reports"

USER_AGENT = (
    "hantavirusmaps.org source-checker/0.1 "
    "(review candidates only; https://hantavirusmaps.org/sources-methodology/)"
)
REQUEST_HEADERS = {
    "Accept": "application/json,text/html,application/pdf;q=0.9,*/*;q=0.8",
    "User-Agent": USER_AGENT,
}

NNDSS_ENDPOINT = "https://data.cdc.gov/resource/x9gk-5huc.json"
NNDSS_LABELS = [
    "Hantavirus pulmonary syndrome",
    "Hantavirus infection, non-hantavirus pulmonary syndrome",
]
NNDSS_FIELDS = [
    "states",
    "year",
    "week",
    "label",
    "m1",
    "m1_flag",
    "m2",
    "m2_flag",
    "m3",
    "m3_flag",
    "m4",
    "m4_flag",
    "geocode",
]

WHO_DON_INDEX = "https://www.who.int/emergencies/disease-outbreak-news"

GBIF_API = "https://api.gbif.org/v1"
GBIF_NAMES = [
    "Peromyscus maniculatus",
    "Clethrionomys glareolus",
    "Myodes glareolus",
]


@dataclass(frozen=True)
class FetchResult:
    url: str
    final_url: str
    status: int | None
    content_type: str
    content_length: str
    method: str
    body: bytes
    error: str
    note: str = ""


class AnchorExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.links: list[dict[str, str]] = []
        self._active_href: str | None = None
        self._active_text: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() != "a":
            return
        attrs_dict = {key.lower(): value for key, value in attrs}
        self._active_href = attrs_dict.get("href") or ""
        self._active_text = []

    def handle_data(self, data: str) -> None:
        if self._active_href is not None:
            self._active_text.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() != "a" or self._active_href is None:
            return
        text = " ".join("".join(self._active_text).split())
        self.links.append({"href": self._active_href, "text": text})
        self._active_href = None
        self._active_text = []


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Check official/reliable hantavirus source endpoints and write an "
            "internal Markdown review-candidate report."
        )
    )
    parser.add_argument(
        "--registry",
        type=Path,
        default=DEFAULT_REGISTRY,
        help="Path to data/sources/source-registry.json.",
    )
    parser.add_argument(
        "--reports-dir",
        type=Path,
        default=DEFAULT_REPORTS_DIR,
        help="Directory for source-check-YYYY-MM-DD.md output.",
    )
    parser.add_argument(
        "--report-date",
        default=date.today().isoformat(),
        help="Report date for the output filename, in YYYY-MM-DD format.",
    )
    parser.add_argument(
        "--timeout",
        type=float,
        default=20.0,
        help="Per-request timeout in seconds.",
    )
    parser.add_argument(
        "--source-workers",
        type=int,
        default=4,
        help="Concurrent workers for source registry URL checks.",
    )
    return parser.parse_args()


def utc_timestamp() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


def markdown_cell(value: Any) -> str:
    if value is None:
        return ""
    if isinstance(value, (dict, list)):
        value = json.dumps(value, sort_keys=True)
    text = " ".join(str(value).split())
    return text.replace("|", "\\|")


def status_label(status: int | None) -> str:
    if status is None:
        return "error"
    return str(status)


def parse_int(value: Any) -> int | None:
    if value is None:
        return None
    try:
        return int(str(value).split(".", 1)[0])
    except ValueError:
        return None


def is_us_residents_row(row: dict[str, Any]) -> bool:
    state = str(row.get("states", "")).lower()
    compact = state.replace(".", "")
    return "resident" in compact and ("united states" in compact or compact.startswith("us "))


def request_url(
    url: str,
    *,
    timeout: float,
    method: str = "GET",
    read_limit: int = 0,
    headers: dict[str, str] | None = None,
) -> FetchResult:
    request_headers = dict(REQUEST_HEADERS)
    if headers:
        request_headers.update(headers)
    request = Request(url, headers=request_headers, method=method)
    try:
        with urlopen(request, timeout=timeout) as response:  # noqa: S310 - fixed official URLs only.
            body = response.read(read_limit) if read_limit else b""
            return FetchResult(
                url=url,
                final_url=response.geturl(),
                status=getattr(response, "status", response.getcode()),
                content_type=response.headers.get("Content-Type", ""),
                content_length=response.headers.get("Content-Length", ""),
                method=method,
                body=body,
                error="",
            )
    except HTTPError as exc:
        body = exc.read(min(read_limit, 65536)) if read_limit else b""
        return FetchResult(
            url=url,
            final_url=exc.geturl() or url,
            status=exc.code,
            content_type=exc.headers.get("Content-Type", "") if exc.headers else "",
            content_length=exc.headers.get("Content-Length", "") if exc.headers else "",
            method=method,
            body=body,
            error=str(exc.reason),
        )
    except (URLError, TimeoutError, socket.timeout, ssl.SSLError, OSError) as exc:
        return FetchResult(
            url=url,
            final_url=url,
            status=None,
            content_type="",
            content_length="",
            method=method,
            body=b"",
            error=str(exc),
        )


def read_json_url(url: str, timeout: float) -> tuple[Any | None, FetchResult]:
    result = request_url(url, timeout=timeout, method="GET", read_limit=5_000_000)
    if result.error or result.status is None or result.status >= 400:
        return None, result
    try:
        text = result.body.decode("utf-8")
        return json.loads(text), result
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        return None, FetchResult(
            url=result.url,
            final_url=result.final_url,
            status=result.status,
            content_type=result.content_type,
            content_length=result.content_length,
            method=result.method,
            body=result.body,
            error=f"JSON parse error: {exc}",
        )


def source_url_check(source: dict[str, Any], timeout: float) -> dict[str, Any]:
    url = str(source.get("url", ""))
    source_id = str(source.get("id", ""))
    if not url.startswith(("http://", "https://")):
        return {
            "id": source_id,
            "url": url,
            "status": None,
            "content_type": "",
            "content_length": "",
            "method": "",
            "final_url": url,
            "note": "Missing or non-HTTP URL.",
            "error": "Invalid URL",
        }

    head = request_url(url, timeout=timeout, method="HEAD")
    fallback_statuses = {403, 405, 406, 501}
    if head.status in fallback_statuses or (head.status is None and head.error):
        get = request_url(
            url,
            timeout=timeout,
            method="GET",
            read_limit=512,
            headers={"Range": "bytes=0-2047"},
        )
        note = f"HEAD returned {status_label(head.status)}; used GET fallback."
        return {
            "id": source_id,
            "url": url,
            "status": get.status,
            "content_type": get.content_type,
            "content_length": get.content_length,
            "method": get.method,
            "final_url": get.final_url,
            "note": note,
            "error": get.error,
        }

    return {
        "id": source_id,
        "url": url,
        "status": head.status,
        "content_type": head.content_type,
        "content_length": head.content_length,
        "method": head.method,
        "final_url": head.final_url,
        "note": "Redirect followed." if head.final_url != url else "",
        "error": head.error,
    }


def load_registry(path: Path) -> dict[str, Any]:
    with path.open("r", encoding="utf-8") as handle:
        data = json.load(handle)
    if not isinstance(data, dict) or not isinstance(data.get("sources"), list):
        raise ValueError(f"{path} does not look like a source registry.")
    return data


def check_source_registry_urls(
    sources: list[dict[str, Any]], timeout: float, workers: int
) -> list[dict[str, Any]]:
    workers = max(1, min(workers, len(sources) or 1))
    indexed_results: list[tuple[int, dict[str, Any]]] = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
        future_to_index = {
            executor.submit(source_url_check, source, timeout): index
            for index, source in enumerate(sources)
        }
        for future in concurrent.futures.as_completed(future_to_index):
            index = future_to_index[future]
            try:
                indexed_results.append((index, future.result()))
            except Exception as exc:  # pragma: no cover - defensive reporting.
                source = sources[index]
                indexed_results.append(
                    (
                        index,
                        {
                            "id": str(source.get("id", "")),
                            "url": str(source.get("url", "")),
                            "status": None,
                            "content_type": "",
                            "content_length": "",
                            "method": "",
                            "final_url": str(source.get("url", "")),
                            "note": "Unhandled checker exception.",
                            "error": str(exc),
                        },
                    )
                )
    return [result for _, result in sorted(indexed_results, key=lambda item: item[0])]


def nndss_query_url(label: str) -> str:
    where_label = label.replace("'", "''")
    params = {
        "$select": ",".join(NNDSS_FIELDS),
        "$where": f"label='{where_label}'",
        "$order": "year DESC, week DESC",
        "$limit": "500",
    }
    return f"{NNDSS_ENDPOINT}?{urlencode(params)}"


def check_nndss_label(label: str, timeout: float) -> dict[str, Any]:
    url = nndss_query_url(label)
    data, result = read_json_url(url, timeout)
    if result.error or data is None:
        return {"label": label, "url": url, "error": result.error or "No JSON data.", "rows": []}
    if not isinstance(data, list):
        return {"label": label, "url": url, "error": "Expected a JSON list from Socrata.", "rows": []}

    keyed_rows: list[tuple[int, int, dict[str, Any]]] = []
    for row in data:
        if not isinstance(row, dict):
            continue
        year = parse_int(row.get("year"))
        week = parse_int(row.get("week"))
        if year is None or week is None:
            continue
        keyed_rows.append((year, week, row))

    if not keyed_rows:
        return {"label": label, "url": url, "error": "No rows with year/week found.", "rows": []}

    latest_year, latest_week = max((year, week) for year, week, _ in keyed_rows)
    latest_rows = [
        row for year, week, row in keyed_rows if year == latest_year and week == latest_week
    ]
    latest_rows.sort(
        key=lambda row: (
            0 if is_us_residents_row(row) else 1,
            str(row.get("states", "")),
        )
    )
    return {
        "label": label,
        "url": url,
        "error": "",
        "latest_year": latest_year,
        "latest_week": latest_week,
        "rows": latest_rows,
        "us_residents_present": any(is_us_residents_row(row) for row in latest_rows),
        "returned_rows": len(data),
    }


def check_nndss(timeout: float) -> list[dict[str, Any]]:
    return [check_nndss_label(label, timeout) for label in NNDSS_LABELS]


def decode_response_text(result: FetchResult) -> str:
    charset = "utf-8"
    content_type = result.content_type.lower()
    if "charset=" in content_type:
        charset = content_type.rsplit("charset=", 1)[-1].split(";", 1)[0].strip()
    try:
        return result.body.decode(charset, errors="replace")
    except LookupError:
        return result.body.decode("utf-8", errors="replace")


def check_who_don(timeout: float) -> dict[str, Any]:
    result = request_url(WHO_DON_INDEX, timeout=timeout, method="GET", read_limit=2_000_000)
    if result.error or result.status is None or result.status >= 400:
        return {
            "url": WHO_DON_INDEX,
            "status": result.status,
            "content_type": result.content_type,
            "error": result.error,
            "keyword_present": False,
            "links": [],
        }

    html = decode_response_text(result)
    keyword_present = "hantavirus" in html.lower()
    extractor = AnchorExtractor()
    extractor.feed(html)
    links: list[dict[str, str]] = []
    seen: set[str] = set()
    for link in extractor.links:
        href = link["href"]
        text = link["text"]
        absolute_url = urljoin(result.final_url or WHO_DON_INDEX, href)
        haystack = f"{href} {absolute_url} {text}".lower()
        if "hantavirus" not in haystack or absolute_url in seen:
            continue
        seen.add(absolute_url)
        links.append({"url": absolute_url, "text": text})

    return {
        "url": WHO_DON_INDEX,
        "status": result.status,
        "content_type": result.content_type,
        "error": "",
        "keyword_present": keyword_present,
        "links": links,
    }


def gbif_json(path: str, params: dict[str, Any], timeout: float) -> tuple[Any | None, FetchResult]:
    url = f"{GBIF_API}{path}?{urlencode(params)}"
    return read_json_url(url, timeout)


def gbif_count(params: dict[str, Any], timeout: float) -> tuple[int | None, str]:
    data, result = gbif_json("/occurrence/search", {**params, "limit": 0}, timeout)
    if result.error or data is None:
        return None, result.error or f"HTTP {status_label(result.status)}"
    if isinstance(data, dict) and isinstance(data.get("count"), int):
        return data["count"], ""
    return None, "Missing integer count."


def accepted_taxon_key(match: dict[str, Any]) -> int | None:
    for key in ("acceptedUsageKey", "speciesKey", "usageKey"):
        parsed = parse_int(match.get(key))
        if parsed is not None:
            return parsed
    return None


def check_gbif_name(name: str, timeout: float) -> dict[str, Any]:
    match_data, match_result = gbif_json("/species/match", {"name": name}, timeout)
    if match_result.error or not isinstance(match_data, dict):
        return {
            "name": name,
            "match_error": match_result.error or f"HTTP {status_label(match_result.status)}",
        }

    sci_count, sci_error = gbif_count({"scientificName": name}, timeout)
    sci_coord_count, sci_coord_error = gbif_count(
        {"scientificName": name, "hasCoordinate": "true"}, timeout
    )

    taxon_key = accepted_taxon_key(match_data)
    taxon_count: int | None = None
    taxon_coord_count: int | None = None
    taxon_error = ""
    taxon_coord_error = ""
    if taxon_key is not None:
        taxon_count, taxon_error = gbif_count({"taxonKey": taxon_key}, timeout)
        taxon_coord_count, taxon_coord_error = gbif_count(
            {"taxonKey": taxon_key, "hasCoordinate": "true"}, timeout
        )

    return {
        "name": name,
        "match_type": match_data.get("matchType", ""),
        "status": match_data.get("status", ""),
        "rank": match_data.get("rank", ""),
        "usage_key": match_data.get("usageKey", ""),
        "accepted_usage_key": match_data.get("acceptedUsageKey", ""),
        "species_key": match_data.get("speciesKey", ""),
        "accepted_taxon_key": taxon_key,
        "canonical_name": match_data.get("canonicalName", ""),
        "scientific_name": match_data.get("scientificName", ""),
        "scientific_name_count": sci_count,
        "scientific_name_count_error": sci_error,
        "scientific_name_coordinate_count": sci_coord_count,
        "scientific_name_coordinate_count_error": sci_coord_error,
        "accepted_taxon_count": taxon_count,
        "accepted_taxon_count_error": taxon_error,
        "accepted_taxon_coordinate_count": taxon_coord_count,
        "accepted_taxon_coordinate_count_error": taxon_coord_error,
    }


def check_gbif(timeout: float) -> list[dict[str, Any]]:
    return [check_gbif_name(name, timeout) for name in GBIF_NAMES]


def add_markdown_table(lines: list[str], headers: list[str], rows: list[list[Any]]) -> None:
    lines.append("| " + " | ".join(headers) + " |")
    lines.append("| " + " | ".join(["---"] * len(headers)) + " |")
    for row in rows:
        lines.append("| " + " | ".join(markdown_cell(cell) for cell in row) + " |")
    lines.append("")


def display_path(path: Path) -> str:
    try:
        return str(path.relative_to(REPO_ROOT))
    except ValueError:
        return str(path)


def render_report(
    *,
    report_date: str,
    registry_path: Path,
    registry: dict[str, Any],
    source_checks: list[dict[str, Any]],
    nndss_checks: list[dict[str, Any]],
    who_check: dict[str, Any],
    gbif_checks: list[dict[str, Any]],
) -> str:
    sources = registry.get("sources", [])
    lines: list[str] = [
        f"# Hantavirus Source Check - {report_date}",
        "",
        f"Generated: {utc_timestamp()}",
        "",
        "**Review status:** All findings in this report are internal review candidates only. "
        "They are not public site data, not final surveillance data, and not live/local risk claims.",
        "",
        "This script reads the source registry and external official/reliable endpoints, then writes "
        "this Markdown report. It does not modify public data JSON files.",
        "",
        "## Inputs and Scope",
        "",
        f"- Source registry read: `{display_path(registry_path)}`",
        f"- Source registry records checked: {len(sources)}",
        f"- Registry lastReviewed: {registry.get('lastReviewed', '')}",
        "- Public data JSON files modified: no",
        "- Reservoir ecology checks use GBIF counts only; they do not indicate infected animals, human cases, or local risk.",
        "",
        "## CDC NNDSS Weekly Data Review Candidates",
        "",
        f"Endpoint: `{NNDSS_ENDPOINT}`",
        "",
        "These are provisional weekly NNDSS rows for reviewer awareness. Do not use the geocode field "
        "as a patient location, and do not aggregate rows without reviewing flags and area definitions.",
        "",
    ]

    for check in nndss_checks:
        lines.append(f"### {check['label']}")
        lines.append("")
        lines.append(f"Query: `{check['url']}`")
        lines.append("")
        if check.get("error"):
            lines.append(f"- Check result: review needed - {check['error']}")
            lines.append("")
            continue

        lines.extend(
            [
                f"- Latest year/week found: {check.get('latest_year')} week {check.get('latest_week')}",
                f"- Latest rows included in report: {len(check.get('rows', []))}",
                f"- U.S. Residents row present: {'yes' if check.get('us_residents_present') else 'no'}",
                f"- Rows returned by latest-first query before filtering: {check.get('returned_rows')}",
                "",
            ]
        )
        rows = []
        for row in check.get("rows", []):
            rows.append(
                [
                    row.get("states", ""),
                    row.get("year", ""),
                    row.get("week", ""),
                    row.get("m1", ""),
                    row.get("m1_flag", ""),
                    row.get("m2", ""),
                    row.get("m2_flag", ""),
                    row.get("m3", ""),
                    row.get("m3_flag", ""),
                    row.get("m4", ""),
                    row.get("m4_flag", ""),
                    "yes" if row.get("geocode") else "",
                ]
            )
        add_markdown_table(
            lines,
            [
                "Area",
                "Year",
                "Week",
                "m1",
                "m1_flag",
                "m2",
                "m2_flag",
                "m3",
                "m3_flag",
                "m4",
                "m4_flag",
                "Geocode present",
            ],
            rows,
        )

    lines.extend(
        [
            "## Source Registry URL Review Candidates",
            "",
            "Status and content type are reachability checks only. A 200 response does not mean the "
            "source content has been reviewed for public data changes.",
            "",
        ]
    )
    add_markdown_table(
        lines,
        ["ID", "Status", "Content-Type", "Method", "Length", "Note", "Final URL"],
        [
            [
                check.get("id", ""),
                status_label(check.get("status")),
                check.get("content_type", ""),
                check.get("method", ""),
                check.get("content_length", ""),
                check.get("error") or check.get("note", ""),
                check.get("final_url", ""),
            ]
            for check in source_checks
        ],
    )

    lines.extend(
        [
            "## WHO Disease Outbreak News Review Candidate",
            "",
            f"Index URL: `{WHO_DON_INDEX}`",
            "",
            "This check looks for the keyword `hantavirus` in the DON index response and extracts "
            "matching links when static HTML links are available. Human review is required before "
            "any DON item is reflected publicly.",
            "",
            f"- HTTP status: {status_label(who_check.get('status'))}",
            f"- Content-Type: {who_check.get('content_type', '')}",
            f"- Keyword present in response: {'yes' if who_check.get('keyword_present') else 'no'}",
        ]
    )
    if who_check.get("error"):
        lines.append(f"- Check result: review needed - {who_check['error']}")
    lines.append("")
    who_links = who_check.get("links", [])
    if who_links:
        add_markdown_table(
            lines,
            ["Link text", "URL"],
            [[link.get("text", ""), link.get("url", "")] for link in who_links],
        )
    else:
        lines.append("No static DON links containing `hantavirus` were extracted from the response.")
        lines.append("")

    lines.extend(
        [
            "## GBIF Reservoir Ecology Review Candidates",
            "",
            "GBIF checks are limited to species match and occurrence count endpoints. These counts are "
            "biodiversity occurrence context only. They are not infected-animal counts, human case "
            "counts, or local risk indicators.",
            "",
        ]
    )
    add_markdown_table(
        lines,
        [
            "Queried name",
            "Match",
            "Status",
            "Usage key",
            "Accepted key",
            "Scientific name count",
            "Scientific name coord count",
            "Accepted taxon count",
            "Accepted taxon coord count",
            "Notes",
        ],
        [
            [
                check.get("name", ""),
                check.get("match_type", ""),
                check.get("status", ""),
                check.get("usage_key", ""),
                check.get("accepted_taxon_key", ""),
                check.get("scientific_name_count", ""),
                check.get("scientific_name_coordinate_count", ""),
                check.get("accepted_taxon_count", ""),
                check.get("accepted_taxon_coordinate_count", ""),
                check.get("match_error")
                or check.get("scientific_name_count_error")
                or check.get("scientific_name_coordinate_count_error")
                or check.get("accepted_taxon_count_error")
                or check.get("accepted_taxon_coordinate_count_error")
                or "",
            ]
            for check in gbif_checks
        ],
    )

    lines.extend(
        [
            "## Reviewer Notes",
            "",
            "- Treat every item above as a candidate for manual review.",
            "- Do not copy provisional NNDSS rows into public JSON without deciding display rules, flag handling, and source wording.",
            "- Do not convert GBIF occurrence counts or reservoir range context into exact human risk claims.",
            "- Public updates should remain source-linked, reviewed, conservative, and explicit about limitations.",
            "",
        ]
    )
    return "\n".join(lines)


def main() -> int:
    args = parse_args()
    try:
        report_date = date.fromisoformat(args.report_date).isoformat()
    except ValueError:
        print("--report-date must use YYYY-MM-DD.", file=sys.stderr)
        return 2

    registry_path = args.registry.resolve()
    registry = load_registry(registry_path)
    sources = [source for source in registry.get("sources", []) if isinstance(source, dict)]

    nndss_checks = check_nndss(args.timeout)
    source_checks = check_source_registry_urls(sources, args.timeout, args.source_workers)
    who_check = check_who_don(args.timeout)
    gbif_checks = check_gbif(args.timeout)

    report = render_report(
        report_date=report_date,
        registry_path=registry_path,
        registry=registry,
        source_checks=source_checks,
        nndss_checks=nndss_checks,
        who_check=who_check,
        gbif_checks=gbif_checks,
    )

    reports_dir = args.reports_dir.resolve()
    reports_dir.mkdir(parents=True, exist_ok=True)
    report_path = reports_dir / f"source-check-{report_date}.md"
    report_path.write_text(report, encoding="utf-8")
    print(report_path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
