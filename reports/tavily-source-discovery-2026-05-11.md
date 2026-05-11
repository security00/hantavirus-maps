# Tavily Source Discovery and Cleaning Report - 2026-05-11

Generated: 2026-05-11 UTC

**Review status:** Candidate source discovery only. This report does not change public map data, case counts, alerts, or reservoir layers.

## Purpose

Use Tavily to rediscover reliable, timely, source-linked information for Hantavirus Maps and classify it into a safe data-supply pipeline.

Tavily is used here as a discovery and extraction tool. It is not treated as a trust authority. Authority comes from the underlying publisher, publication context, and human review.

## Search batches run

1. `hantavirus official surveillance data cases CDC state health department`
   - Advanced search
   - Domain filter: `cdc.gov`, `data.cdc.gov`
2. `hantavirus official outbreak alert WHO PAHO ECDC`
   - Advanced search
   - Domain filter: `who.int`, `paho.org`, `ecdc.europa.eu`
3. `hantavirus cases state health department official`
   - Advanced search
   - Domain filter: selected U.S. state health department domains
4. `hantavirus official cases Canada public health surveillance`
   - Advanced search
   - Domain filter: `canada.ca`, `publichealthontario.ca`, `bccdc.ca`, `alberta.ca`
5. `hantavirus official cases Argentina Chile health ministry Andes virus`
   - Advanced search
   - Domain filter: `argentina.gob.ar`, `minsal.cl`, `www.gob.cl`, `paho.org`
6. `hantavirus official cases Europe surveillance ECDC national public health`
   - Advanced search
   - Domain filter: `ecdc.europa.eu`, `thl.fi`, `folkhalsomyndigheten.se`, `rki.de`, `gov.uk`

## Extraction batch run

Tavily extraction was run against seven priority URLs:

- `https://www.cdc.gov/hantavirus/data-research/cases/index.html`
- `https://www.cdc.gov/hantavirus/php/surveillance/index.html`
- `https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600`
- `https://www.who.int/emergencies/outbreak-toolkit/disease-outbreak-toolboxes/hantavirus-outbreak-toolbox`
- `https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and`
- `https://doh.wa.gov/you-and-your-family/illness-and-disease-z/hantavirus`
- `https://www.nmhealth.org/news/safety/2026/3/?view=2322`

Extraction query: `hantavirus cases surveillance source limitations official alert case counts risk wording`.

## Cleaned source candidates

### Candidate 1 — CDC reported cases page

- URL: `https://www.cdc.gov/hantavirus/data-research/cases/index.html`
- Publisher: Centers for Disease Control and Prevention
- Candidate tier: Tier 1 / Tier 3
- Candidate status: `approved_source_only`; public snapshot use already partly covered by existing registry
- Key extracted facts:
  - CDC says public data are reported by state only.
  - CDC says county-level data cannot be provided to protect identities.
  - CDC describes U.S. surveillance beginning in 1993 and HPS becoming nationally notifiable in 1995.
  - CDC page summarizes NNDSS-linked historical data.
- Safe use:
  - State-level U.S. historical context.
  - Source limitation language.
  - No county case map.
- Do not use for:
  - live/current local risk
  - patient locations
  - county-level case publication

### Candidate 2 — CDC case definition and reporting page

- URL: `https://www.cdc.gov/hantavirus/php/surveillance/index.html`
- Publisher: Centers for Disease Control and Prevention
- Candidate tier: Tier 3
- Candidate status: `approved_source_only`
- Key extracted facts:
  - NNDSS provides case definitions for HPS and non-HPS hantavirus infection.
  - Surveillance case definitions are for public health classification and counting.
  - Surveillance definitions are not for clinical diagnosis or individual care decisions.
  - CDC publishes weekly and annual surveillance data in NNDSS tables.
- Safe use:
  - Methodology page language.
  - NNDSS display rule support.
  - Disclaimer that case definitions are not diagnosis guidance.
- Do not use for:
  - self-diagnosis text
  - treatment guidance

### Candidate 3 — CDC Stacks weekly NNDSS HPS table

- URL found: `https://stacks.cdc.gov/view/cdc/256226`
- Publisher: CDC Stacks / NNDSS
- Candidate tier: Tier 1
- Candidate status: `review_candidate`
- Tavily snippet indicated:
  - Week 17, 2026 table for Hantavirus pulmonary syndrome.
  - Weekly data are provisional.
  - Case notifications are voluntarily submitted to CDC.
  - Weekly cumulative counts may increase or decrease as updates occur.
  - Finalized annual data can differ from provisional counts.
- Safe use:
  - Internal review candidate and NNDSS weekly display-rule evidence.
- Do not use for:
  - public map counts before approved NNDSS display rule
  - final counts
  - local risk or patient geography

### Candidate 4 — CDC Stacks weekly NNDSS non-HPS table

- URL found: `https://stacks.cdc.gov/view/cdc/251471`
- Publisher: CDC Stacks / NNDSS
- Candidate tier: Tier 1
- Candidate status: `review_candidate`
- Tavily snippet indicated:
  - Week 53, 2026 table for non-HPS hantavirus infection.
  - Weekly data are provisional and subject to updates.
- Safe use:
  - Internal review candidate only.
- Do not use for:
  - public case maps before field/flag policy is approved.

### Candidate 5 — WHO DON600 cruise-associated cluster

- URL: `https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600`
- Publisher: World Health Organization
- Candidate tier: Tier 2
- Candidate status: `approved_source_only`; event public page already exists
- Key extracted facts:
  - Event-specific cruise-associated Andes hantavirus cluster.
  - WHO listed case statuses and operational outbreak definitions.
  - Ongoing investigation/contact tracing context.
- Safe use:
  - Event-specific outbreak explainer.
  - Official-source timeline with limitations.
- Do not use for:
  - general global live surveillance
  - travel clearance
  - local current-risk scoring

### Candidate 6 — WHO Hantavirus Outbreak Toolbox

- URL: `https://www.who.int/emergencies/outbreak-toolkit/disease-outbreak-toolboxes/hantavirus-outbreak-toolbox`
- Publisher: World Health Organization
- Candidate tier: Tier 3
- Candidate status: `approved_source_only`
- Key extracted facts:
  - Includes WHO factsheet, PAHO guidelines, CDC hantavirus resources, CDC case definition/reporting.
  - Provides suggested surveillance case definitions.
  - Notes different case definitions may be used during outbreaks and contexts.
- Safe use:
  - Source registry expansion.
  - Methodology taxonomy.
  - Future outbreak glossary.
- Do not use for:
  - replacing local/national case definitions.

### Candidate 7 — ECDC cruise-associated cluster assessment

- URL: `https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and`
- Publisher: European Centre for Disease Prevention and Control
- Candidate tier: Tier 2 / Tier 4
- Candidate status: `approved_source_only`; event public page already cites ECDC
- Key extracted facts:
  - Orthohantavirus infections are zoonotic and usually transmitted through aerosolized rodent urine/faeces/saliva.
  - HPS is associated with the Americas; HFRS is associated with Europe/Asia.
  - ECDC risk assessment involved precautionary close-contact assumptions in a closed ship setting.
- Safe use:
  - Event-specific ECDC assessment.
  - Syndrome/geography caveats.
- Do not use for:
  - generalized Europe HPS endemicity claims.
  - broad person-to-person transmission claims outside Andes-virus context.

### Candidate 8 — ECDC news and guidance chain

- URLs found:
  - `https://www.ecdc.europa.eu/en/news-events/cruise-ship-hantavirus-outbreak-ecdc-response-activated`
  - `https://www.ecdc.europa.eu/en/news-events/hantavirus-outbreak-cruise-ship-under-investigation-risk-europe-very-low`
  - `https://www.ecdc.europa.eu/en/news-events/ecdc-publishes-guidance-management-passengers-linked-andes-hantavirus-outbreak-cruise`
  - `https://www.ecdc.europa.eu/en/news-events/ecdc-monitoring-outbreak-associated-cruise-ship`
- Publisher: ECDC
- Candidate tier: Tier 2
- Candidate status: `review_candidate`
- Safe use:
  - Build event timeline after manual review.
  - Support alert page updates.
- Do not use for:
  - duplicate separate outbreak records unless timeline model is created.

### Candidate 9 — Washington State DOH hantavirus page

- URL: `https://doh.wa.gov/you-and-your-family/illness-and-disease-z/hantavirus`
- Publisher: Washington State Department of Health
- Candidate tier: Tier 3 / possible Tier 1 state context
- Candidate status: `review_candidate`
- Key extracted facts:
  - Washington page says typically one to five cases are reported each year.
  - Washington page says about one out of three people diagnosed with HPS have died.
  - It describes deer mice throughout the state and exposure via disturbed droppings/nests.
  - It states there is no evidence the disease spreads person-to-person in that context.
- Safe use:
  - Future Washington state page candidate.
  - State-level context and prevention wording.
- Do not use for:
  - county risk map
  - raw annual time series without a reviewed data table
  - exact local prediction

### Candidate 10 — Washington DOH epiTRENDS PDF

- URL: `https://doh.wa.gov/sites/default/files/2025-04/420-002-epitrends2025-04.pdf`
- Publisher: Washington State Department of Health
- Candidate tier: Tier 4 / state report
- Candidate status: `review_candidate`
- Tavily snippet indicated:
  - Washington notifiable status.
  - Cases reported most years, about 2 annually.
  - Eastern counties exposure context.
  - U.S. cases through 2022 in context.
- Safe use:
  - Future Washington page after PDF review.
- Do not use for:
  - public exact counts without page/PDF verification and date labeling.

### Candidate 11 — New Mexico 2026 official case notice

- URL: `https://www.nmhealth.org/news/safety/2026/3/?view=2322`
- Publisher: New Mexico Department of Health
- Candidate tier: Tier 2
- Candidate status: already in public alert registry; `approved_source_only`
- Key extracted facts:
  - Santa Fe County resident hospitalized with HPS and recovered.
  - First New Mexico case in 2026 per notice.
  - New Mexico recorded seven cases in 2025, three fatal, per notice.
  - Prevention language around airing out cabins, sheds, garages, and other spaces.
- Safe use:
  - Existing event alert and New Mexico page context.
- Do not use for:
  - full live New Mexico surveillance feed.
  - county-level active risk map.

### Candidate 12 — New Mexico 2025 official fatal case notice

- URL: `https://www.nmhealth.org/news/awareness/2025/3/?view=2189`
- Publisher: New Mexico Department of Health
- Candidate tier: Tier 2
- Candidate status: already in public source registry; `approved_source_only`
- Tavily snippet indicated:
  - Santa Fe County woman died of HPS.
  - First reported New Mexico case that year.
  - Prevention reminders and state veterinarian quote.
- Safe use:
  - Existing source-linked event context.
- Do not use for:
  - live risk or patient location beyond official wording.

### Candidate 13 — Government of Canada surveillance page

- URL: `https://www.canada.ca/en/public-health/services/diseases/hantaviruses/surveillance-hantavirus-related-diseases.html`
- Publisher: Public Health Agency of Canada / Government of Canada
- Candidate tier: Tier 1 / Tier 3
- Candidate status: `review_candidate`
- Tavily snippet indicated:
  - National Microbiology Laboratory diagnostic/testing and trend role.
  - Historical Canada counts as of January 2015.
  - Page is older but official.
- Safe use:
  - Historical Canada surveillance context after review.
- Do not use for:
  - current Canada counts, because newer page exists.

### Candidate 14 — Government of Canada risks page

- URL: `https://www.canada.ca/en/public-health/services/diseases/hantaviruses/risks-hantavirus-infection.html`
- Publisher: Government of Canada
- Candidate tier: Tier 2 / Tier 3
- Candidate status: `review_candidate`
- Tavily snippet indicated:
  - Page detail date: 2026-05-08.
  - As of May 1, 2026, National Microbiology Laboratory confirmed 168 cases in Canada since active surveillance began in 1994.
  - Overall Canada general-population risk from MV Hondius Andes hantavirus outbreak remains low.
- Safe use:
  - Strong candidate for Canada page and MV Hondius related notes.
- Do not use for:
  - Canada live case tracker without recurring official data rule.

### Candidate 15 — Government of Canada interdepartmental MV Hondius media update

- URL: `https://www.canada.ca/en/global-affairs/news/2026/05/interdepartmental-media-update--hantavirus---may-10-2026.html`
- Publisher: Government of Canada / PHAC / Global Affairs Canada
- Candidate tier: Tier 2
- Candidate status: `review_candidate`
- Tavily snippet indicated:
  - Canada monitoring Andes hantavirus outbreak on MV Hondius with WHO/ECDC/Spain.
  - Canadian passengers under specific public health protocols.
  - No evidence asymptomatic individuals can spread hantavirus to others, per official statement.
- Safe use:
  - Event timeline after review.
- Do not use for:
  - travel advice beyond official language.

### Candidate 16 — Canada national case definition

- URL: `https://www.canada.ca/en/public-health/services/diseases/hantaviruses/health-professionals-treating-hantavirus-infection/national-case-definition.html`
- Publisher: Government of Canada
- Candidate tier: Tier 3
- Candidate status: `approved_source_only` after content review
- Tavily snippet indicated:
  - National notification: only confirmed cases should be notified.
  - Routine case-by-case notification to federal level.
  - Laboratory criteria include IgM, IgG rise, RNA, or immunohistochemistry.
- Safe use:
  - Canada methodology and case-definition citation.
- Do not use for:
  - clinical decision support for readers.

### Candidate 17 — PAHO historical Americas PDFs

- URLs found:
  - `https://www1.paho.org/english/gov/ce/ce122_14.pdf`
  - `https://iris.paho.org/bitstreams/8791f750-3802-4b2c-b62a-d766919e6dea/download`
  - `https://www.paho.org/sites/default/files/2020-09/2013-cha-report-epi-alert-updates.pdf`
- Publisher: PAHO
- Candidate tier: Tier 4
- Candidate status: `review_candidate`
- Tavily snippets indicated historical Americas case context for Argentina, Brazil, Canada, Chile, Paraguay, United States, Uruguay, and regional reports.
- Safe use:
  - Historical Americas context and source discovery.
- Do not use for:
  - current 2026 counts.
  - exact modern country maps without updated national sources.

### Candidate 18 — Argentina national epidemiological bulletin PDF

- URL found: `https://www.argentina.gob.ar/sites/default/files/2025/01/ben-785-se-48-vf.pdf?utm_source`
- Publisher: Argentina.gob.ar
- Candidate tier: Tier 1 / Tier 4
- Candidate status: `review_candidate`
- Tavily snippet indicated confirmed event tables and a specific hantavirus algorithm in national bulletin context.
- Safe use:
  - Potential Argentina official-data pipeline after Spanish PDF extraction and schema review.
- Do not use for:
  - public country counts until translation, table extraction, week/date handling, and source policy are reviewed.

## Cleaned priority list

### P0 — add to source registry/backlog soon

1. WHO Hantavirus Outbreak Toolbox
2. Government of Canada risks page, because it has 2026 update and Canada confirmed cumulative count language
3. Washington State DOH hantavirus page
4. ECDC cruise outbreak news/guidance chain as event timeline candidates

### P1 — write display rules before public use

1. CDC Stacks weekly NNDSS pages and Socrata rows
2. Government of Canada cumulative surveillance claims
3. Washington annual state case statements
4. Argentina national epidemiological bulletin PDFs

### P2 — research only

1. Historical PAHO Americas PDFs
2. Canada older surveillance overview
3. ECDC Europe annual/background data, when not event-specific

## Recommended data-cleaning rules from Tavily run

1. **Deduplicate event pages.** WHO DON599/DON600, ECDC news, PAHO news, and Canada media updates may all refer to the same MV Hondius event. They should be modeled as one event with multiple source notes, not separate outbreaks.
2. **Separate stable disease pages from dynamic alerts.** CDC/WHO factsheets belong in source registry; DON/news/advisories belong in alerts or timeline candidates.
3. **Treat all weekly NNDSS outputs as provisional.** They must not enter public map counts until field semantics and display rules are approved.
4. **Preserve state/country source dates.** Washington, Canada, Argentina, and PAHO historical sources mix different time windows. Each record needs `asOfDate` or explicit publication date.
5. **Avoid exact local geography.** County names in official releases may be cited only as event-note text where the agency published it; do not convert them into case-location markers.
6. **Keep ecology separate from cases.** Reservoir/exposure text is not case data.

## Recommended next implementation

1. Update `data/sources/source-backlog.json` with the new Tavily-discovered candidates.
2. Add source checker support for:
   - WHO toolbox URL reachability
   - Canada risks/surveillance/case-definition pages
   - Washington DOH page and epiTRENDS PDF
   - ECDC event timeline URLs
3. Create `docs/nndss-weekly-display-rule.md` before any public weekly NNDSS values.
4. Consider a Canada landing page only after reviewing Canada source candidates.
5. Consider a Washington state page only after reviewing Washington source candidates.

## Not promoted in this run

No public JSON files were modified:

- `data/cases/us-state-historical.json`
- `data/alerts/official-alerts.json`
- `data/reservoirs/rodent-reservoirs.json`
- `data/sources/source-registry.json`

No public map markers, case counts, or alert records were added.
