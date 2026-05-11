# Data Review - 2026-05-11

Reviewer: OpenClaw / 铸剑堂·剑主
Project: Hantavirus Maps
Related candidate report: `reports/source-check-2026-05-11.md`
SOP: `docs/data-review-sop.md`

## Summary

Reviewed a small sample of candidate records from the 2026-05-11 source checker run. This review intentionally promotes no provisional NNDSS weekly counts into public JSON. The safest immediate action is to keep weekly NNDSS rows as internal review candidates until the project has a display rule for provisional values, field flags, region/state double counting, and geocode interpretation.

Decisions in this file:

| Candidate | Decision | Public data change |
| --- | --- | --- |
| CDC NNDSS 2026 week 17 HPS rows | `review_candidate` | No |
| CDC NNDSS 2026 week 17 non-HPS rows | `review_candidate` | No |
| CDC source registry URL health check | `approved_source_only` with caveat | Reviewed date can be advanced; no case values changed |
| WHO DON 2026 cruise-associated cluster source | `approved_source_only` | Existing source remains valid; no new alert data needed |
| GBIF deer mouse / bank vole ecology counts | `review_candidate` | No |

## Candidate 1 — CDC NNDSS 2026 week 17 Hantavirus pulmonary syndrome rows

### Candidate

- Source ID: not yet in public registry as a public data source
- Candidate title: CDC NNDSS Weekly Data, Hantavirus pulmonary syndrome, 2026 week 17
- URL: `https://data.cdc.gov/resource/x9gk-5huc.json`
- Publisher: Centers for Disease Control and Prevention / CDC WONDER / NNDSS weekly data endpoint
- Source type: CDC provisional weekly surveillance dataset
- Publication date: dynamic weekly dataset
- Reviewed date: 2026-05-11
- Candidate data type: case summary / surveillance candidate

### Decision

- Status: `review_candidate`
- Reason: The dataset is official and useful, but the report rows are provisional weekly NNDSS data. Before public display, the project needs a display rule for `m1`/`m2`/`m3`/`m4`, flags, state vs region rows, U.S. Residents vs Total rows, and geocode handling. Publishing these values now could be mistaken for final current cases or local patient locations.
- Destination file if approved later: likely new source record in `data/sources/source-registry.json` plus a carefully labeled weekly review page/report, not direct replacement of historical state snapshots.

### Review checklist

- [x] Publisher is authoritative enough.
- [x] URL is public and stable enough for citation.
- [ ] Field meanings are clear enough for public display.
- [x] Time period is clear: 2026 week 17 in the generated report.
- [ ] Geography is safe for public display without additional rules.
- [x] Data cannot be mistaken for patient-location data only if geocode is explicitly excluded from display.
- [ ] Data cannot be mistaken for live/current local risk without stronger labeling.
- [x] Reservoir ecology is not involved.
- [ ] Provisional status is clearly labeled in current public data.
- [ ] Public wording avoids live/real-time/exact-risk claims unless a dedicated display rule is added.
- [ ] Limitations are written near the public summary.
- [ ] Source IDs are linked from any public JSON record.

### Safe public summary

Allowed wording if used later:

> CDC NNDSS weekly rows can be used as internal reviewer awareness for provisional national and state-level reporting signals. Hantavirus Maps does not treat these rows as final annual totals, patient locations, county-level risk, or live local surveillance.

Geography level: national/state/region only, no geocode display.

Time period: 2026 week 17 in the current source checker report.

Known limitations: provisional data, flagged rows, region/state double-count risk, geocode misinterpretation risk, field definitions require explicit documentation.

### Do not say

- live current cases by state
- exact case locations
- CDC confirms current local risk near the user

## Candidate 2 — CDC NNDSS 2026 week 17 non-HPS hantavirus rows

### Candidate

- Source ID: not yet in public registry as a public data source
- Candidate title: CDC NNDSS Weekly Data, Hantavirus infection, non-hantavirus pulmonary syndrome, 2026 week 17
- URL: `https://data.cdc.gov/resource/x9gk-5huc.json`
- Publisher: Centers for Disease Control and Prevention / CDC WONDER / NNDSS weekly data endpoint
- Source type: CDC provisional weekly surveillance dataset
- Publication date: dynamic weekly dataset
- Reviewed date: 2026-05-11
- Candidate data type: case summary / surveillance candidate

### Decision

- Status: `review_candidate`
- Reason: Official dataset, but it is provisional and clinically/epidemiologically distinct from HPS. Mixing it into the current public HPS-oriented map without explanation could confuse users.
- Destination file if approved later: source registry and a separate methodology note or weekly reviewer report; not the current HPS state-summary records.

### Review checklist

- [x] Publisher is authoritative enough.
- [x] URL is public and stable enough for citation.
- [ ] Field meanings are clear enough for public display.
- [x] Time period is clear: 2026 week 17 in the generated report.
- [ ] Geography is safe for public display without additional rules.
- [x] Data cannot be mistaken for patient-location data only if geocode is explicitly excluded from display.
- [ ] Data cannot be mistaken for live/current local risk without stronger labeling.
- [x] Reservoir ecology is not involved.
- [ ] Provisional status is clearly labeled in current public data.
- [ ] Public wording avoids live/real-time/exact-risk claims unless a dedicated display rule is added.
- [ ] Limitations are written near the public summary.
- [ ] Source IDs are linked from any public JSON record.

### Safe public summary

Allowed wording if used later:

> CDC NNDSS includes separate weekly rows for hantavirus infection, non-hantavirus pulmonary syndrome. Hantavirus Maps treats those rows as internal review candidates until the site has a public explanation separating HPS, non-HPS hantavirus infection, provisional weekly reporting, and final historical summaries.

Geography level: national/state/region only, no geocode display.

Time period: 2026 week 17 in the current source checker report.

Known limitations: provisional weekly data, syndrome distinction, flags, aggregation ambiguity, potential confusion with HPS-focused public pages.

### Do not say

- non-HPS rows are the same as HPS cases
- live local hantavirus counts
- final annual totals

## Candidate 3 — CDC source registry URL health check

### Candidate

- Source IDs: `cdc-reported-cases`, `cdc-surveillance`, `cdc-about`, `cdc-prevention`, `cdc-rodent-cleanup`, `cdc-mmwr-denver-2018`
- Candidate title: CDC source registry URL reachability refresh
- URL: existing source registry URLs
- Publisher: Centers for Disease Control and Prevention
- Source type: source metadata / health check
- Publication date: varies by source
- Reviewed date: 2026-05-11
- Candidate data type: source metadata

### Decision

- Status: `approved_source_only`
- Reason: The source checker returned HTTP 200 for these CDC source URLs. This supports keeping the existing source records active. It does not justify changing case values or public map points.
- Destination file if approved: `data/sources/source-registry.json` reviewedDate only, if we want to record the reachability refresh.

### Review checklist

- [x] Publisher is authoritative enough.
- [x] URL is public and stable enough for citation.
- [x] Field meanings are clear for source metadata only.
- [x] Time period is clear for the check date.
- [x] Geography is not changed.
- [x] Data cannot be mistaken for patient-location data.
- [x] Data cannot be mistaken for live/current local risk.
- [x] Reservoir ecology is not changed.
- [x] Provisional status is not relevant.
- [x] Public wording avoids live/real-time/exact-risk claims.
- [x] Limitations already exist in source registry records.
- [x] Source IDs already exist.

### Safe public summary

Allowed wording:

> CDC source URLs used by Hantavirus Maps were reachable during the 2026-05-11 source check. This confirms citation reachability only and does not change public case counts or risk interpretation.

Geography level: unchanged.

Time period: URL check on 2026-05-11.

Known limitations: URL status is not content re-analysis; pages can change later.

### Do not say

- CDC updated all values today
- CDC confirms the map is current
- URL reachability equals content approval

## Candidate 4 — WHO DON 2026 cruise-associated cluster source

### Candidate

- Source ID: `who-don600-2026`
- Candidate title: WHO Disease Outbreak News DON600, cruise-associated hantavirus cluster
- URL: `https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600`
- Publisher: World Health Organization
- Source type: Disease Outbreak News
- Publication date: 2026-05-08
- Reviewed date: 2026-05-11
- Candidate data type: official alert / source metadata

### Decision

- Status: `approved_source_only`
- Reason: The source is official and already used by the public MV Hondius explainer and alert record. No new public data value is required from the 2026-05-11 checker run because the DON index keyword scan did not discover additional static DON links.
- Destination file if approved: keep existing `data/sources/source-registry.json` source; no change needed beyond optional reviewedDate refresh.

### Review checklist

- [x] Publisher is authoritative enough.
- [x] URL is public and stable enough for citation.
- [x] Field meanings are clear enough for the existing event explainer.
- [x] Time period is clear.
- [x] Geography is event-level and already limited.
- [x] Data cannot be mistaken for patient-location data under current copy.
- [x] Data cannot be mistaken for live/current local risk under current copy.
- [x] Reservoir ecology is not involved.
- [x] Provisional/investigation status is handled by limitations.
- [x] Public wording avoids live/real-time/exact-risk claims.
- [x] Limitations are written near the public summary.
- [x] Source IDs are linked from public records.

### Safe public summary

Allowed wording:

> WHO published an event-specific Disease Outbreak News notice for a cruise-associated hantavirus cluster. Hantavirus Maps uses the notice as an official-source explainer reference, not as a live travel-risk tracker or patient-location dataset.

Geography level: multi-country / event-level.

Time period: 2026-05-08 publication, reviewed again 2026-05-11.

Known limitations: event-specific notice, investigation context can evolve, official agencies remain authoritative.

### Do not say

- live cruise tracker
- current ship or cabin risk
- general travel risk for all cruises

## Candidate 5 — GBIF deer mouse and bank vole occurrence counts

### Candidate

- Source ID: no public source ID approved yet
- Candidate title: GBIF reservoir occurrence count checks for deer mouse and bank vole
- URL: GBIF species match and occurrence count endpoints, as recorded in `reports/source-check-2026-05-11.md`
- Publisher: Global Biodiversity Information Facility
- Source type: biodiversity occurrence API
- Publication date: dynamic API
- Reviewed date: 2026-05-11
- Candidate data type: reservoir ecology candidate

### Decision

- Status: `review_candidate`
- Reason: GBIF can be useful for reservoir ecology context, but raw occurrence counts and coordinate availability are not infected-animal data, human case data, or local risk data. License/attribution and aggregation rules should be reviewed before any public use.
- Destination file if approved later: possibly `data/sources/source-registry.json` and a broad ecology methodology note; not raw public map points.

### Review checklist

- [x] Publisher is credible for biodiversity occurrence data.
- [x] URL/API is public.
- [ ] Field meanings and taxon matching need additional documentation for public use.
- [x] Time period is dynamic API snapshot.
- [ ] Geography is not safe for public raw point display.
- [x] Data cannot be mistaken for patient-location data if no raw points are published.
- [ ] Data cannot be mistaken for live/current local risk without strong limitations.
- [ ] Reservoir ecology needs explicit not-infected-animal / not-human-case labeling.
- [ ] Provisional/dynamic API status is not yet explained publicly.
- [x] Public wording can avoid live/real-time/exact-risk claims if used only as broad context.
- [ ] Limitations are not yet attached to a GBIF source ID.
- [ ] Source IDs are not yet linked from public JSON.

### Safe public summary

Allowed wording if used later:

> GBIF occurrence data can help reviewers understand broad host-species occurrence context. Hantavirus Maps does not use GBIF raw points as human case locations, infected-animal records, or exact local hantavirus risk.

Geography level: broad ecology region only.

Time period: dynamic API snapshot; record reviewed date required.

Known limitations: occurrence bias, taxon matching, coordinate quality, license/attribution, no infection status, no human case status.

### Do not say

- infected deer mouse map
- current rodent infection hotspots
- human risk based on GBIF points

## Follow-up decisions before public data promotion

1. Create a public methodology rule for CDC NNDSS weekly data before adding it to any public page.
2. Decide whether NNDSS should remain internal-only or become a reviewed weekly source note/feed item.
3. If GBIF is used later, add license/attribution handling and aggregate-only display rules.
4. Optional safe change: refresh `reviewedDate` for source registry records whose URLs were rechecked, but do not alter case or alert values without a separate approved review.

## Validation after this review file

- No public JSON changed in this review.
- Validation required only if this report is committed with docs/reports changes.
