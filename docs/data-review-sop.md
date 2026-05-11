# Hantavirus Maps Data Review SOP

Last updated: 2026-05-11

This SOP defines how candidate hantavirus data is reviewed before it can be added to public JSON snapshots, source-linked map layers, outbreak explainers, feeds, or SEO pages.

Hantavirus Maps is a conservative YMYL public-health education site. Human review is required because source fields can be provisional, geographic precision can be misunderstood, and unsafe wording can make the site look like live surveillance or medical guidance.

## Non-negotiable boundaries

Never publish or imply:

- live or real-time infection tracking
- current local cases near a user
- exact household, campsite, cabin, workplace, port, county, or patient-location risk
- patient locations or personally identifying health information
- medical diagnosis, treatment advice, emergency guidance, or case reporting
- CDC county-level public case precision where CDC does not provide it
- reservoir range as infected-animal data or exact human risk
- news, social posts, rumors, or scraped pages as confirmed case data

Preferred public language:

- reviewed official-source summary
- historical state-level or country-level context
- selected official alert
- reviewed source note
- source-linked prevention guidance
- reservoir ecology context
- provisional review candidate, when the data has not been promoted

## Review inputs

Candidate inputs may come from:

- `python3 scripts/check_hantavirus_sources.py`
- existing source registry refreshes
- CDC / WHO / PAHO / ECDC / state health department pages
- peer-reviewed CDC or public-health publications
- internal competitor or SERP audits
- manually found official notices

The source checker writes `reports/source-check-YYYY-MM-DD.md`. Treat every row in that report as an internal review candidate only. The checker must not update public JSON directly.

## Review decisions

Assign exactly one status to each candidate:

| Status | Meaning | Allowed destination |
| --- | --- | --- |
| `approved_public_snapshot` | Safe enough for public map/data layer after conservative summarization. | `data/cases/*.json`, `data/alerts/*.json`, `data/reservoirs/*.json`, plus source registry if needed. |
| `approved_source_only` | Good official source, but not safe/needed as a public data point. | `data/sources/source-registry.json`, page citations, methodology notes. |
| `review_candidate` | Potentially useful but not ready. Needs more review, clearer fields, or policy decision. | `reports/*.md` only. |
| `rejected` | Do not use. | Review log only, with reason. |

## Manual review checklist

For each candidate, answer all questions before changing public data.

1. **Is the publisher authoritative enough?**
   - Preferred: CDC, WHO, PAHO/WHO, ECDC, state/national health department, peer-reviewed CDC/public-health publication.
   - Avoid: social media, unsourced news, scraped aggregators, anonymous maps, AI summaries.

2. **Is the URL public and stable?**
   - Confirm that the link opens without private access.
   - Record if it is a PDF, API endpoint, dashboard, press release, advisory, or dataset.

3. **Are the fields unambiguous?**
   - Example: NNDSS `current week`, `YTD`, `state`, `region`, flags, and geocode fields must not be confused with final annual totals or patient locations.

4. **Is the time period clear?**
   - Historical cumulative, annual, weekly provisional, incident alert, publication date, reviewed date, or current source page snapshot.

5. **Is the geography safe?**
   - Safe by default: country, region, state, broad ecology region.
   - High risk: county, neighborhood, address, route, cabin, ship cabin, port, workplace, patient location.
   - If exact geography is not necessary, do not publish it.

6. **Could users misunderstand risk?**
   - GBIF occurrence or rodent range does not mean infected rodents.
   - Reservoir ecology does not mean human cases.
   - Provisional surveillance does not mean final confirmed case totals.
   - Official alerts are selected notices, not complete live outbreak feeds.

7. **Does public wording stay conservative?**
   - Avoid `live`, `real-time`, `current cases`, `confirmed near you`, `safe/unsafe`, `exact risk`, `local outbreak` unless the official source directly supports that exact wording and it is safe to repeat.
   - Prefer limitation-first summaries.

8. **Does the source add value?**
   - Do not add duplicates unless they provide a better official source, clearer geography, newer reviewed date, or a needed page citation.

## Promotion workflow

1. Run or collect candidate source material.
2. Create or update a review note using `reports/data-review-template.md`.
3. Assign a decision status.
4. If approved, update the smallest necessary public file:
   - `data/sources/source-registry.json`
   - `data/cases/us-state-historical.json`
   - `data/alerts/official-alerts.json`
   - `data/reservoirs/rodent-reservoirs.json`
5. Link every public record to one or more source IDs.
6. Add limitation text near any public data point that could be misread.
7. Run validation:

```bash
npm run lint
npm run build
```

8. After deploy, smoke-check the affected URL and sitemap/feed when relevant.

## File-specific rules

### `data/sources/source-registry.json`

Use for source metadata only. A source can be approved here without becoming a public map point.

Required review focus:

- publisher
- source type
- public URL
- publication/review date
- permitted use
- limitations

### `data/cases/us-state-historical.json`

Use only for reviewed case summaries at safe geography.

Required review focus:

- time period
- reported cases/deaths labels
- final vs provisional status
- geography precision
- source limitations

Do not infer county or local risk from state-level data.

### `data/alerts/official-alerts.json`

Use only for selected official alerts/notices.

Required review focus:

- agency
- alert date
- event geography
- whether wording implies broad public risk
- whether the alert is point-in-time and may be superseded

Do not turn selected alerts into a complete live outbreak feed.

### `data/reservoirs/rodent-reservoirs.json`

Use only for ecology context.

Required review focus:

- host species and virus relationship
- evidence region
- whether source supports the claimed host/region
- limitations explaining that ecology is not infected-animal or human-case data

Do not publish raw occurrence points as risk points.

## Safe summary pattern

When promoting data, write summaries like this:

> Official-source summary: [agency/source] reports/describes [what] for [time period/geography]. Hantavirus Maps uses this as [historical context / selected official alert / reservoir ecology]. It is not [live surveillance / exact local risk / medical advice / patient-location data].

## Required validation before commit

```bash
npm run lint
npm run build
```

Recommended content checks after deploy:

```bash
curl -L -s https://hantavirusmaps.org/sources-methodology/ | grep -Ei "Source taxonomy|review workflow|not live"
curl -L -s https://hantavirusmaps.org/sitemap.xml | grep -E "hantavirus|sources-methodology"
```

## When to escalate instead of publishing

Escalate or keep as `review_candidate` if:

- a source contradicts another official source
- the geography is more precise than the site policy allows
- the data is provisional and the display rule is not decided
- the source is news-only or cannot be verified
- the wording could imply live/local risk
- medical interpretation is needed
- copyright/license terms are unclear for reused data

## Reuse / compounding note

This SOP is the reusable review gate for future official-source map MVP sites. If another health/YMYL map project appears, reuse this pattern instead of inventing a new ad hoc process: source registry, reviewed JSON snapshots, public limitations, no-live/no-diagnosis language, and a human review template before promotion.
