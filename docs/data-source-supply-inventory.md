# Hantavirus Data Source Supply Inventory

Last updated: 2026-05-11

This inventory defines reliable and timely source classes that can feed the Hantavirus Maps review pipeline. It is intentionally conservative: sources can enter the candidate pool automatically, but public map/data updates still require human review under `docs/data-review-sop.md`.

## Core principle

Build a source supply chain, not an auto-publishing case map.

The pipeline may collect official links, weekly rows, alert pages, and ecology signals as **review candidates**. It must not automatically publish case counts, patient locations, exact local risk, or live outbreak claims.

## Tier model

| Tier | Source class | Timeliness | Reliability | Default use | Auto-public? |
| --- | --- | --- | --- | --- | --- |
| Tier 1 | Official surveillance datasets and agency dashboards | Weekly to annual | Highest | candidate case summaries, internal monitoring | No |
| Tier 2 | Official outbreak alerts, HAN advisories, press releases | Same day to event-driven | High | selected official alert candidates | No |
| Tier 3 | Official disease/prevention pages and case definitions | Periodic | High | source registry, page citations, policy boundaries | No |
| Tier 4 | Peer-reviewed public-health literature and agency reports | Slow | High | reservoir/history/context | No |
| Tier 5 | Biodiversity/ecology occurrence sources | Dynamic | Medium for ecology only | reservoir context candidates | No |
| Tier 6 | News/search/social signals | Fast | Low/variable | discovery only, never confirmed cases | No |

## Tier 1 — official surveillance datasets and dashboards

Use for internal review candidates and possible reviewed summaries.

### CDC NNDSS weekly Socrata dataset

- Endpoint: `https://data.cdc.gov/resource/x9gk-5huc.json`
- Current checker coverage: yes, in `scripts/check_hantavirus_sources.py`
- Candidate labels:
  - `Hantavirus pulmonary syndrome`
  - `Hantavirus infection, non-hantavirus pulmonary syndrome`
- Strength: timely official weekly rows.
- Risk: provisional values, flags, region/state duplication, field ambiguity, geocode misinterpretation.
- Public rule: internal candidate only until `docs/nndss-weekly-display-rule.md` exists and is approved.

### CDC national historical reported cases page

- Source ID: `cdc-reported-cases`
- Strength: stable public historical U.S. state-level context.
- Risk: not current weekly surveillance; county-level public data is not provided.
- Public rule: allowed for reviewed historical summaries with state-only limitation.

### State health department data products

Initial priority states based on current site and U.S. hantavirus context:

- New Mexico Department of Health
- California Department of Public Health
- Arizona Department of Health Services
- Colorado Department of Public Health and Environment
- Utah Department of Health and Human Services
- Oregon Health Authority
- Washington State Department of Health
- Nevada Division of Public and Behavioral Health
- Minnesota Department of Health
- South Dakota Department of Health
- Nebraska Department of Health and Human Services

Use cases:

- state disease pages
- annual/cumulative case summaries
- official dashboards or PDFs
- provider alerts or public advisories

Public rule: prefer state-level or broad geography summaries. Do not copy county values unless a separate policy says it is safe and necessary; default is no county map.

## Tier 2 — official alerts and event notices

Use for selected official alert candidates, outbreak explainers, and reviewed feed notes.

### Global/regional agencies

- WHO Disease Outbreak News: `https://www.who.int/emergencies/disease-outbreak-news`
- WHO hantavirus factsheet: `https://www.who.int/news-room/fact-sheets/detail/hantavirus`
- PAHO epidemiological alerts/documents: `https://www.paho.org/en/documents`
- PAHO news: `https://www.paho.org/en/news`
- ECDC publications: `https://www.ecdc.europa.eu/en/publications-data`
- ECDC disease topic/factsheet pages

Public rule: event-specific, limitation-first summaries only. Do not imply global live surveillance, travel clearance, or exact exposure locations.

### U.S. state Health Alert Network / advisories

Use for provider/public health notices. These are usually point-in-time and may be superseded.

Public rule: advisory values are event snapshots, not current totals or complete state surveillance.

## Tier 3 — official disease, prevention, and case definition pages

Use for source registry, public citations, disclaimers, and safe education pages.

Priority sources:

- CDC hantavirus overview
- CDC prevention
- CDC rodent cleanup guidance
- CDC surveillance/case definition pages
- State disease pages
- WHO/ECDC/PAHO factsheets

Public rule: cite directly; do not extrapolate beyond the source. Clinical or public-health investigation instructions are not self-diagnosis advice.

## Tier 4 — peer-reviewed and agency reports

Use for reservoir relationships, historical context, syndrome differences, and methodology notes.

Examples:

- CDC Emerging Infectious Diseases
- CDC MMWR
- ECDC Annual Epidemiological Reports
- agency-linked surveillance PDFs/reports

Public rule: do not convert one study or field report into a general risk map.

## Tier 5 — biodiversity and reservoir ecology sources

Use only as broad ecology candidates.

Initial source:

- GBIF API: `https://api.gbif.org/v1`

Candidate host examples:

- `Peromyscus maniculatus` / deer mouse
- `Myodes glareolus` / bank vole
- `Clethrionomys glareolus` legacy synonym context

Public rule:

- aggregate/broad ecology only
- no raw point display by default
- no infected-animal claim
- no human-case claim
- no exact local risk claim
- license/attribution must be reviewed before public use

## Tier 6 — news, search, and social discovery signals

Use only to discover official sources faster.

Allowed use:

- find a state press release
- identify an official agency page that should be reviewed
- identify public concern or query demand

Disallowed use:

- confirmed case counts
- patient location
- suspected cases
- live outbreak map points
- social/media-only alerts

Public rule: never publish news/social as confirmed case data unless it leads to an official source that passes review.

## Candidate lifecycle

1. Discover source or data row.
2. Store in source checker report, source backlog, or manual review note.
3. Human reviewer assigns one SOP status:
   - `approved_public_snapshot`
   - `approved_source_only`
   - `review_candidate`
   - `rejected`
4. Only approved records can update public JSON or page copy.
5. Every public data point must link to source IDs and limitations.

## Recommended source checker expansion backlog

### P0 — safe and immediate

- Add a source backlog config file for official source URLs and categories.
- Keep NNDSS as internal candidate output only.
- Add reachability checks for priority state health department source pages.
- Add report sections grouped by tier and decision risk.

### P1 — reviewed alert discovery

- Check WHO DON, PAHO documents/news, and ECDC publications for `hantavirus` keyword.
- Add state health department press-release/advisory search pages where stable and official.
- Emit links as `alert_discovery_candidate`, not public alerts.

### P2 — ecology pipeline

- Add GBIF attribution/license review notes.
- Add broad host species checks only after a written display rule exists.
- Avoid raw occurrence point ingestion.

### P3 — non-official discovery

- Optional news/search scan to discover official URLs only.
- Store as discovery notes; never use as public case facts.

## Public promotion guardrails

Before any candidate becomes public data, confirm:

- source is official or otherwise approved for the specific use
- wording is source-linked and limitation-first
- geography is broad enough to avoid patient-location or exact-risk interpretation
- time period is explicit
- provisional status is explicit, if applicable
- no region/state/Total double counting
- no live/real-time/local-risk wording
- no medical diagnosis or emergency guidance

## Fit with current project files

Current public data files:

- `data/cases/us-state-historical.json`
- `data/alerts/official-alerts.json`
- `data/reservoirs/rodent-reservoirs.json`
- `data/sources/source-registry.json`

Current review/report files:

- `scripts/check_hantavirus_sources.py`
- `reports/source-check-YYYY-MM-DD.md`
- `reports/data-review-template.md`
- `docs/data-review-sop.md`

Recommended next file:

- `docs/nndss-weekly-display-rule.md` before any NNDSS public display.
