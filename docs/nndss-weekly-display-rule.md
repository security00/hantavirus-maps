# NNDSS Weekly Display Rule

Last updated: 2026-05-11

This rule governs whether CDC NNDSS weekly hantavirus rows may be used in Hantavirus Maps public pages, data endpoints, reports, or map layers.

## Decision

NNDSS weekly rows are allowed as **internal reviewer awareness** and future **source-linked weekly notes** only. They are not approved for public map markers, current-case counters, county/local risk claims, or replacement of reviewed historical summaries.

Public use remains blocked until a human reviewer documents the exact row set, field interpretation, aggregation level, and labels for that specific weekly note.

## Source scope

Covered sources include:

- CDC NNDSS weekly data pages and downloadable tables
- Data.CDC.gov / Socrata NNDSS weekly endpoints
- CDC Stacks weekly notifiable disease table snapshots

Current known candidate examples:

- `https://data.cdc.gov/resource/x9gk-5huc.json`
- `https://stacks.cdc.gov/view/cdc/255695`

## Non-negotiable public boundaries

Never present NNDSS weekly rows as:

- live or real-time case tracking
- final confirmed annual totals
- patient locations
- county-level or local risk
- current cases near the user
- map points for outbreak location
- a complete public surveillance feed

## Disease rows must stay separate

Hantavirus pulmonary syndrome (HPS) and non-HPS hantavirus infection must not be mixed.

Allowed wording:

> CDC NNDSS weekly tables include provisional rows for different hantavirus reporting categories. Hantavirus Maps keeps HPS and non-HPS rows separate and does not combine them into one public case count.

Do not say:

- non-HPS rows are HPS cases
- all hantavirus rows are interchangeable
- weekly rows equal the site’s public reported-case layer

## Provisional status

NNDSS weekly values are provisional. Public copy must include a nearby limitation if a future reviewer approves a weekly note.

Required wording pattern:

> This is a provisional weekly reporting signal from CDC NNDSS. It may change and should not be compared directly with final historical CDC summaries or state health department cumulative pages.

## Field interpretation rule

Do not display numeric fields such as `m1`, `m2`, `m3`, or `m4` unless the reviewer has documented their exact meaning from CDC metadata or table documentation for that endpoint/table.

If field meaning is not documented, allowed public use is limited to:

- source citation
- internal review note
- “candidate weekly reporting signal” wording without numeric display

## Aggregation and double-counting rule

Do not combine rows across:

- Total
- U.S. Residents
- Non-U.S. Residents
- regions
- states
- territories

unless the reviewed source documentation explicitly says the rows are additive for the intended display.

Default rule: treat these rows as separate views of the same surveillance table, not as values to sum.

## Geography rule

Allowed geography, if separately reviewed:

- national
- U.S. Residents / Total labels
- state-level aggregate labels
- region-level aggregate labels

Disallowed geography:

- county
- address
- exact exposure site
- patient travel route
- geocode-derived map point

If a CDC row includes geocode metadata, do not display it as a case location or infer local risk from it.

## Allowed destinations

Currently allowed:

- `reports/data-review-YYYY-MM-DD*.md`
- `reports/source-check-YYYY-MM-DD.md`
- internal candidate JSON or backlog notes
- source registry citation only, if useful

Conditionally allowed after separate review:

- a non-map weekly reviewer note page
- source-methodology explanation
- an event/source page paragraph clearly labeled as provisional

Not allowed:

- `data/alerts/official-alerts.json` as an alert marker
- `data/cases/us-state-historical.json` as final case counts
- map popup counts
- homepage current case counters

## Review checklist before any public weekly note

A reviewer must answer all items:

- [ ] Which exact CDC page/API/snapshot is being cited?
- [ ] What week ending date and publication date are used?
- [ ] Which disease row is used: HPS or non-HPS?
- [ ] What do the displayed fields mean?
- [ ] Is the row Total, U.S. Residents, state, region, or territory?
- [ ] Could the row double count with another displayed row?
- [ ] Is provisional status visible in the public copy?
- [ ] Is geography limited to safe aggregate labels?
- [ ] Are geocode fields ignored?
- [ ] Is the note clearly separate from final CDC historical summaries?

## Current decision for 2026-05-11 candidates

- CDC NNDSS 2026 week 17 HPS rows: `review_candidate`, no public value.
- CDC NNDSS 2026 week 17 non-HPS rows: `review_candidate`, no public value.
- CDC Stacks week 16 non-HPS snapshot: `review_candidate`, source-only at most until field and category rules are documented.

## Reconsideration trigger

Revisit this rule if CDC publishes clearer endpoint metadata or an official weekly table format with unambiguous field labels suitable for public citation.
