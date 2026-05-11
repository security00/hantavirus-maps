# Tavily Source Candidate Discovery - 2026-05-11

Generated: 2026-05-11T15:54:10Z

**Review status:** Candidate discovery only. This report does not change public map data, case counts, alerts, source registry, or reservoir layers.

## Policy boundary

- Tavily is used for discovery/extraction only, not authority.
- Authority must come from the underlying publisher and human review.
- No candidate in this report may be auto-published into public JSON without review.
- Do not infer patient locations, exact local risk, live surveillance, or final case counts from candidates.

## Run summary

- Mode: dry-run from existing backlog
- Known backlog URLs before run: 22
- Search batches: 6
- Unique candidates found: 13
- URLs sent to extraction: 0

## Search batches

### global-official-alerts

- Query: `hantavirus official outbreak alert WHO PAHO ECDC 2026`
- Domains: `who.int`, `paho.org`, `ecdc.europa.eu`
- Raw result count: 3

### cdc-surveillance

- Query: `hantavirus surveillance reported cases CDC NNDSS 2026`
- Domains: `cdc.gov`, `data.cdc.gov`
- Raw result count: 3

### canada-official

- Query: `hantavirus Canada official public health surveillance 2026`
- Domains: `canada.ca`, `publichealthontario.ca`, `bccdc.ca`, `alberta.ca`
- Raw result count: 3

### us-state-health

- Query: `hantavirus state health department official alert 2026`
- Domains: `nmhealth.org`, `doh.wa.gov`, `cdph.ca.gov`, `azdhs.gov`, `cdphe.colorado.gov`, `health.state.mn.us`, `oregon.gov`, `epi.utah.gov`
- Raw result count: 1

### south-america-official

- Query: `hantavirus Andes virus official health ministry Argentina Chile 2026`
- Domains: `argentina.gob.ar`, `minsal.cl`, `www.gob.cl`, `paho.org`
- Raw result count: 2

### europe-official

- Query: `hantavirus Europe official surveillance ECDC national public health 2026`
- Domains: `ecdc.europa.eu`, `thl.fi`, `folkhalsomyndigheten.se`, `rki.de`, `gov.uk`
- Raw result count: 2

## Candidate queue

### Candidate 1 — Boletín Epidemiológico Nacional N°785, SE 48, Año 2025

- URL: https://www.argentina.gob.ar/sites/default/files/2025/01/ben-785-se-48-vf.pdf
- Domain: argentina.gob.ar
- Discovery batch: south-america-official
- Candidate ID: `argentina-bolet-n-epidemiol-gico-nacional-n-785-se-48-a-o-2025`
- Candidate tier: 4
- Candidate status: `known_backlog_candidate`
- Source type: Official PDF/report candidate
- Already in backlog: yes
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Argentina official-data pipeline candidate after Spanish PDF extraction and review.

### Candidate 2 — Surveillance of hantavirus related diseases

- URL: https://www.canada.ca/en/public-health/services/diseases/hantaviruses/surveillance-hantavirus-related-diseases.html
- Domain: canada.ca
- Discovery batch: canada-official
- Candidate ID: `canada-surveillance-of-hantavirus-related-diseases`
- Candidate tier: 1
- Candidate status: `known_backlog_candidate`
- Source type: Official surveillance dataset or surveillance page
- Already in backlog: yes
- Safe candidate use: Internal review candidate for surveillance context or future reviewed snapshots.
- Review need: Requires display rule before public use. Do not treat provisional rows as live/final/local case counts.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Canada historical surveillance context candidate.

### Candidate 3 — Risks of a hantavirus infection

- URL: https://www.canada.ca/en/public-health/services/diseases/hantaviruses/risks-hantavirus-infection.html
- Domain: canada.ca
- Discovery batch: canada-official
- Candidate ID: `canada-risks-of-a-hantavirus-infection`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official public health source candidate
- Already in backlog: yes
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Canada page candidate and MV Hondius related context.

### Candidate 4 — Interdepartmental Media Update – Hantavirus - May 10, 2026

- URL: https://www.canada.ca/en/global-affairs/news/2026/05/interdepartmental-media-update--hantavirus---may-10-2026.html
- Domain: canada.ca
- Discovery batch: canada-official
- Candidate ID: `canada-interdepartmental-media-update-hantavirus-may-10-2026`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official outbreak alert or public health update
- Already in backlog: yes
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: MV Hondius Canada response timeline candidate.

### Candidate 5 — CDC NNDSS Weekly Data Socrata endpoint

- URL: https://data.cdc.gov/resource/x9gk-5huc.json
- Domain: data.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `data-cdc-nndss-weekly-data-socrata-endpoint`
- Candidate tier: 1
- Candidate status: `known_backlog_candidate`
- Source type: Official surveillance dataset or surveillance page
- Already in backlog: yes
- Safe candidate use: Internal review candidate for surveillance context or future reviewed snapshots.
- Review need: Requires display rule before public use. Do not treat provisional rows as live/final/local case counts.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Internal weekly review candidates for HPS and non-HPS hantavirus rows.

### Candidate 6 — Washington epiTRENDS April 2025 hantavirus issue

- URL: https://doh.wa.gov/sites/default/files/2025-04/420-002-epitrends2025-04.pdf
- Domain: doh.wa.gov
- Discovery batch: us-state-health
- Candidate ID: `doh-washington-epitrends-april-2025-hantavirus-issue`
- Candidate tier: 4
- Candidate status: `known_backlog_candidate`
- Source type: Official PDF/report candidate
- Already in backlog: yes
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Washington state page and annual case context candidate.

### Candidate 7 — Cruise ship hantavirus outbreak: ECDC response activated

- URL: https://www.ecdc.europa.eu/en/news-events/cruise-ship-hantavirus-outbreak-ecdc-response-activated
- Domain: ecdc.europa.eu
- Discovery batch: global-official-alerts
- Candidate ID: `ecdc-cruise-ship-hantavirus-outbreak-ecdc-response-activated`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official outbreak alert or public health update
- Already in backlog: yes
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: MV Hondius event timeline candidate.

### Candidate 8 — ECDC guidance for passengers linked to Andes hantavirus outbreak on cruise ship

- URL: https://www.ecdc.europa.eu/en/news-events/ecdc-publishes-guidance-management-passengers-linked-andes-hantavirus-outbreak-cruise
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-ecdc-guidance-for-passengers-linked-to-andes-hantavirus-outbreak-on-crui`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official outbreak alert or public health update
- Already in backlog: yes
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: MV Hondius event timeline and public-health response context.

### Candidate 9 — CDC Stacks NNDSS weekly HPS table

- URL: https://stacks.cdc.gov/view/cdc/256226
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-cdc-stacks-nndss-weekly-hps-table`
- Candidate tier: 1
- Candidate status: `known_backlog_candidate`
- Source type: Official surveillance dataset or surveillance page
- Already in backlog: yes
- Safe candidate use: Internal review candidate for surveillance context or future reviewed snapshots.
- Review need: Requires display rule before public use. Do not treat provisional rows as live/final/local case counts.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Internal review candidate for weekly Hantavirus pulmonary syndrome tables and NNDSS field semantics.

### Candidate 10 — CDC Stacks NNDSS weekly non-HPS hantavirus table

- URL: https://stacks.cdc.gov/view/cdc/251471
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-cdc-stacks-nndss-weekly-non-hps-hantavirus-table`
- Candidate tier: 1
- Candidate status: `known_backlog_candidate`
- Source type: Official surveillance dataset or surveillance page
- Already in backlog: yes
- Safe candidate use: Internal review candidate for surveillance context or future reviewed snapshots.
- Review need: Requires display rule before public use. Do not treat provisional rows as live/final/local case counts.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Internal review candidate for non-HPS hantavirus weekly table semantics.

### Candidate 11 — WHO Disease Outbreak News index

- URL: https://www.who.int/emergencies/disease-outbreak-news
- Domain: who.int
- Discovery batch: global-official-alerts
- Candidate ID: `who-who-disease-outbreak-news-index`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official outbreak alert or public health update
- Already in backlog: yes
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Discovery of official hantavirus DON items.

### Candidate 12 — WHO Hantavirus Outbreak Toolbox

- URL: https://www.who.int/emergencies/outbreak-toolkit/disease-outbreak-toolboxes/hantavirus-outbreak-toolbox
- Domain: who.int
- Discovery batch: global-official-alerts
- Candidate ID: `who-who-hantavirus-outbreak-toolbox`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official outbreak alert or public health update
- Already in backlog: yes
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Methodology taxonomy, outbreak glossary, and source registry expansion.

### Candidate 13 — PAHO historical Americas hantavirus report, 1998

- URL: https://www1.paho.org/english/gov/ce/ce122_14.pdf
- Domain: www1.paho.org
- Discovery batch: south-america-official
- Candidate ID: `www1-paho-historical-americas-hantavirus-report-1998`
- Candidate tier: 4
- Candidate status: `known_backlog_candidate`
- Source type: Official PDF/report candidate
- Already in backlog: yes
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: n/a
- Snippet: Historical Americas context and country source discovery.

## Next manual-review steps

1. Open each new candidate URL and verify publisher/date/content directly.
2. Assign one review outcome: `approved_public_snapshot`, `approved_source_only`, `review_candidate`, or `rejected`.
3. Only after review, update public JSON or page copy in a separate commit.
4. Run `npm run lint`, `npm run build`, and `npm run validate:seo` before deploy.
