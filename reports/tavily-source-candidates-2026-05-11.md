# Tavily Source Candidate Discovery - 2026-05-11

Generated: 2026-05-11T16:50:55Z

**Review status:** Candidate discovery only. This report does not change public map data, case counts, alerts, source registry, or reservoir layers.

## Policy boundary

- Tavily is used for discovery/extraction only, not authority.
- Authority must come from the underlying publisher and human review.
- No candidate in this report may be auto-published into public JSON without review.
- Do not infer patient locations, exact local risk, live surveillance, or final case counts from candidates.

## Run summary

- Mode: live Tavily search/extract
- Known backlog URLs before run: 22
- Search batches: 6
- Unique candidates found: 10
- URLs sent to extraction: 2
- New candidates: 9
- Known backlog candidates: 1
- High-priority review candidates: 6
- Low-priority / weak candidates: 0
- Candidates with weak signals: 0
- Rejected/noise candidates removed from queue: 2
- Domains: `argentina.gob.ar`, `canada.ca`, `cdc.gov`, `ecdc.europa.eu`, `nmhealth.org`, `stacks.cdc.gov`, `who.int`

## Human review digest

High-priority official candidates to inspect first:

- **Remarks from the Chief Public Health Officer - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/remarks-from-the-chief-public-health-officer.html
- **Hantavirus Case Definition and Reporting - CDC** — cdc.gov — https://www.cdc.gov/hantavirus/php/surveillance/index.html
- **Hantavirus confirmed in Santa Fe County resident** — nmhealth.org — https://www.nmhealth.org/news/safety/2026/3/?view=2322
- **Hantavirus cluster linked to cruise ship travel, Multi-country** — who.int — https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600
- **Hantavirus cluster linked to cruise ship travel, Multi-country** — who.int — https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599
- **Interdepartmental Media Update – Hantavirus - May 10, 2026 - Canada.ca** — canada.ca — https://www.canada.ca/en/global-affairs/news/2026/05/interdepartmental-media-update--hantavirus---may-10-2026.html

## Search batches

### global-official-alerts

- Query: `hantavirus official outbreak alert WHO PAHO ECDC 2026`
- Domains: `who.int`, `paho.org`, `ecdc.europa.eu`
- Raw result count: 2

### cdc-surveillance

- Query: `hantavirus surveillance reported cases CDC NNDSS 2026`
- Domains: `cdc.gov`, `data.cdc.gov`
- Raw result count: 2

### canada-official

- Query: `hantavirus Canada official public health surveillance 2026`
- Domains: `canada.ca`, `publichealthontario.ca`, `bccdc.ca`, `alberta.ca`
- Raw result count: 2

### us-state-health

- Query: `hantavirus state health department official alert 2026`
- Domains: `nmhealth.org`, `doh.wa.gov`, `cdph.ca.gov`, `azdhs.gov`, `cdphe.colorado.gov`, `health.state.mn.us`, `oregon.gov`, `epi.utah.gov`
- Raw result count: 2

### south-america-official

- Query: `hantavirus Andes virus official health ministry Argentina Chile 2026`
- Domains: `argentina.gob.ar`, `minsal.cl`, `www.gob.cl`, `paho.org`
- Raw result count: 2

### europe-official

- Query: `hantavirus Europe official surveillance ECDC national public health 2026`
- Domains: `ecdc.europa.eu`, `thl.fi`, `folkhalsomyndigheten.se`, `rki.de`, `gov.uk`
- Raw result count: 2

## Candidate queue

### Candidate 1 — Remarks from the Chief Public Health Officer - Canada.ca

- URL: https://www.canada.ca/en/public-health/news/2026/05/remarks-from-the-chief-public-health-officer.html
- Domain: canada.ca
- Discovery batch: canada-official
- Candidate ID: `canada-remarks-from-the-chief-public-health-officer-canada-ca`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.81770587
- Snippet: From: Public Health Agency of Canada. Since that time, the Public Health Agency of Canada and Global Affairs Canada, along with other Government of Canada departments and agencies, have been working with domestic and international partners, including the United States, the United Kingdom, Spain and the Netherlands, as well as the World Health Organization, to monitor the outbreak on the M*V Hondius* and to put in pl…
- Extract excerpt: It is also important to note that the hantavirus is quite different from viruses like COVID-19. Infections with hantavirus are rare, but are a real risk in Canada. However in Canada the source of infection is typically through contact with infected rodents or their urine, droppings or saliva or through contact with contaminated surfaces or environments, particularly when cleaning rodent-infested spaces. The hantavir…

### Candidate 2 — Hantavirus Case Definition and Reporting - CDC

- URL: https://www.cdc.gov/hantavirus/php/surveillance/index.html
- Domain: cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `cdc-hantavirus-case-definition-and-reporting-cdc`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official surveillance dataset or surveillance page
- Review priority: high
- Already in backlog: no
- Safe candidate use: Internal review candidate for surveillance context or future reviewed snapshots.
- Review need: Requires display rule before public use. Do not treat provisional rows as live/final/local case counts.
- Public use allowed now: no
- Tavily score: 0.7178241
- Snippet: [Here's how you know](https://www.cdc.gov/hantavirus/php/surveillance/index.html#gov-notice). [Hantavirus](https://www.cdc.gov/hantavirus/about/index.html). * [Reported Cases of Hantavirus Disease](https://www.cdc.gov/hantavirus/data-research/cases/index.html). * [About Hantavirus](https://www.cdc.gov/hantavirus/about/index.html). * [Hantavirus Prevention](https://www.cdc.gov/hantavirus/prevention/index.html). * [FA…
- Extract excerpt: ## CDC surveillance data CDC publishes weekly and annual surveillance data for hantavirus cases in the NNDSS notifiable infectious disease data tables. Aggregated data from CRFs is published here: Reported Cases of Hantavirus Disease. ## On This Page Case definition Reporting criteria Reporting methods Report forms CDC surveillance data May 8, 2026 SourcesPrintShare ## Hantavirus Learn about Hantavirus, how it sprea…

### Candidate 3 — Hantavirus confirmed in Santa Fe County resident

- URL: https://www.nmhealth.org/news/safety/2026/3/?view=2322
- Domain: nmhealth.org
- Discovery batch: us-state-health
- Candidate ID: `nmhealth-hantavirus-confirmed-in-santa-fe-county-resident`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.6399392
- Snippet: Feel free to contact us or use our A to Z page to find an alphabetical list of pages and services available on this site. Our public health clinics are some of the primary ways in which we support the health of all New Mexicans. The New Mexico Department of Health operates several administrative offices around the state that oversee regional and statewide office operations. Hours of operation and contact information…

### Candidate 4 — Hantavirus cluster linked to cruise ship travel, Multi-country

- URL: https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600
- Domain: who.int
- Discovery batch: global-official-alerts
- Candidate ID: `who-hantavirus-cluster-linked-to-cruise-ship-travel-multi-country`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.68874115
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…

### Candidate 5 — Hantavirus cluster linked to cruise ship travel, Multi-country

- URL: https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599
- Domain: who.int
- Discovery batch: global-official-alerts
- Candidate ID: `who-hantavirus-cluster-linked-to-cruise-ship-travel-multi-country`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.6852132
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…

### Candidate 6 — Interdepartmental Media Update – Hantavirus - May 10, 2026 - Canada.ca

- URL: https://www.canada.ca/en/global-affairs/news/2026/05/interdepartmental-media-update--hantavirus---may-10-2026.html
- Domain: canada.ca
- Discovery batch: canada-official
- Candidate ID: `canada-interdepartmental-media-update-hantavirus-may-10-2026-canada-ca`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: yes
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.7940821
- Snippet: The Public Health Agency of Canada (PHAC) and Global Affairs Canada (GAC), along with other Government of Canada departments and agencies, are working with domestic public health authorities and international partners, including Spain, the World Health Organization (WHO), and the European Centre for Disease Prevention and Control to monitor the Andes Hantavirus outbreak on the MV Hondius and to put in place appropri…

### Candidate 7 — Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus ...

- URL: https://www.argentina.gob.ar/noticias/salud-sostiene-y-refuerza-la-vigilancia-epidemiologica-de-hantavirus-en-el-pais
- Domain: argentina.gob.ar
- Discovery batch: south-america-official
- Candidate ID: `argentina-salud-sostiene-y-refuerza-la-vigilancia-epidemiol-gica-de-hantavirus`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.9975466
- Snippet: # Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país. El Ministerio de Salud de la Nación se reunió con autoridades sanitarias de las 24 jurisdicciones para actualizar la información vinculada al brote sucedido a bordo del crucero holandés y fortalecer las acciones de monitoreo. La cartera sanitaria nacional realizó un encuentro con referentes de epidemiología de los ministerios de salud…

### Candidate 8 — [PDF] 2026-WCP-0024 Draft.docx - ECDC

- URL: https://www.ecdc.europa.eu/sites/default/files/documents/2026-WCP-0024%20Final.pdf
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-pdf-2026-wcp-0024-draft-docx-ecdc`
- Candidate tier: 4
- Candidate status: `review_candidate`
- Source type: Official PDF/report candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: 0.68140936
- Snippet: In March 2026, 80 mpox clade I cases were reported by 10 countries. In March 2026, 22 mpox clade II cases were reported by seven countries. Hantavirus disease outbreak on cruise ship - South Atlantic - 2026 Overview: Update (data cut off 10:00 AM) Updates on new reported cases. Geographical distribution of confirmed cases of MERS-CoV by reporting country, April 2012 - April 2026. In March 2026, 80 mpox clade I cases…

### Candidate 9 — Hantavirus-associated cluster of illness on a cruise ship - ECDC

- URL: https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-hantavirus-associated-cluster-of-illness-on-a-cruise-ship-ecdc`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.65252984
- Snippet: [Skip to main content](https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and#main-content). [Accept all cookies](https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and#accept)[Accept only essential cookies](https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness…

### Candidate 10 — Hantavirus infection, non-hantavirus pulmonary syndrome (Week 16) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents…

- URL: https://stacks.cdc.gov/view/cdc/255695
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-hantavirus-infection-non-hantavirus-pulmonary-syndrome-week-16-weekly-ca`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.7283819
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus infection, non-hantavirus pulmonary syndrome (Week 16) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 25, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Terri…

## Next manual-review steps

1. Open each new candidate URL and verify publisher/date/content directly.
2. Assign one review outcome: `approved_public_snapshot`, `approved_source_only`, `review_candidate`, or `rejected`.
3. Only after review, update public JSON or page copy in a separate commit.
4. Run `npm run lint`, `npm run build`, and `npm run validate:seo` before deploy.
