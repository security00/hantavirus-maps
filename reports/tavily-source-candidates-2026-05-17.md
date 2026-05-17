# Tavily Source Candidate Discovery - 2026-05-17

Generated: 2026-05-17T08:34:32Z

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
- Search batch errors: 0
- Unique candidates found: 28
- URLs sent to extraction: 8
- New candidates: 26
- Known backlog candidates: 2
- High-priority review candidates: 13
- Low-priority / weak candidates: 0
- Candidates with weak signals: 0
- Rejected/noise candidates removed from queue: 2
- Domains: `argentina.gob.ar`, `canada.ca`, `cdc.gov`, `cdph.ca.gov`, `ecdc.europa.eu`, `epi.minsal.cl`, `health.state.mn.us`, `nmhealth.org`, `paho.org`, `publichealthontario.ca`, `stacks.cdc.gov`, `who.int`

## Human review digest

High-priority official candidates to inspect first:

- **Media update on Andes hantavirus situation - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation0.html
- **Remarks from the Chief Public Health Officer - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/remarks-from-the-chief-public-health-officer.html
- **Media update on Andes hantavirus situation - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation.html
- **Hantavirus Case Definition and Reporting | Hantavirus | CDC** — cdc.gov — https://www.cdc.gov/hantavirus/php/surveillance/index.html
- **Outbreak of Andes virus 2026 - Recommendations for self-quarantine** — ecdc.europa.eu — https://www.ecdc.europa.eu/en/publications-data/outbreak-andes-virus-2026-recommendations-self-quarantine
- **Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health** — health.state.mn.us — https://www.health.state.mn.us/news/pressrel/2026/statement051226.html
- **New Mexico’s hantavirus strain is different from cruise ship outbreak and does not spread between people** — nmhealth.org — https://www.nmhealth.org/news/information/2026/5/?view=2337
- **Epidemiological alerts and updates - PAHO/WHO** — paho.org — https://www.paho.org/en/epidemiological-alerts-and-updates

## Search batches

### global-official-alerts

- Query: `hantavirus official outbreak alert WHO PAHO ECDC 2026`
- Domains: `who.int`, `paho.org`, `ecdc.europa.eu`
- Raw result count: 5

### cdc-surveillance

- Query: `hantavirus surveillance reported cases CDC NNDSS 2026`
- Domains: `cdc.gov`, `data.cdc.gov`
- Raw result count: 5

### canada-official

- Query: `hantavirus Canada official public health surveillance 2026`
- Domains: `canada.ca`, `publichealthontario.ca`, `bccdc.ca`, `alberta.ca`
- Raw result count: 5

### us-state-health

- Query: `hantavirus state health department official alert 2026`
- Domains: `nmhealth.org`, `doh.wa.gov`, `cdph.ca.gov`, `azdhs.gov`, `cdphe.colorado.gov`, `health.state.mn.us`, `oregon.gov`, `epi.utah.gov`
- Raw result count: 5

### south-america-official

- Query: `hantavirus Andes virus official health ministry Argentina Chile 2026`
- Domains: `argentina.gob.ar`, `minsal.cl`, `www.gob.cl`, `paho.org`
- Raw result count: 5

### europe-official

- Query: `hantavirus Europe official surveillance ECDC national public health 2026`
- Domains: `ecdc.europa.eu`, `thl.fi`, `folkhalsomyndigheten.se`, `rki.de`, `gov.uk`
- Raw result count: 5

## Candidate queue

### Candidate 1 — Media update on Andes hantavirus situation - Canada.ca

- URL: https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation0.html
- Domain: canada.ca
- Discovery batch: canada-official
- Candidate ID: `canada-media-update-on-andes-hantavirus-situation-canada-ca`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.8446273
- Snippet: From: Public Health Agency of Canada. On May 16, 2026, the British Columbia Provincial Health Officer reported that one of the four high risk individuals who was self-isolating and being monitored for symptoms has tested presumptive positive for Andes hantavirus. Those involved in the repatriation are not considered at risk given the public health protective measures that were in place, in addition to the length of …
- Extract excerpt: May 16, 2026 | Ottawa, ON On May 16, 2026, the British Columbia Provincial Health Officer reported that one of the four high risk individuals who was self-isolating and being monitored for symptoms has tested presumptive positive for Andes hantavirus. The person was transported to hospital for assessment and care on May 14 along with their spouse who also has mild symptoms. The couple were passengers on the MV Hondi…

### Candidate 2 — Remarks from the Chief Public Health Officer - Canada.ca

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
- Tavily score: 0.82288796
- Snippet: From: Public Health Agency of Canada. Since that time, the Public Health Agency of Canada and Global Affairs Canada, along with other Government of Canada departments and agencies, have been working with domestic and international partners, including the United States, the United Kingdom, Spain and the Netherlands, as well as the World Health Organization, to monitor the outbreak on the M*V Hondius* and to put in pl…
- Extract excerpt: It is also important to note that the hantavirus is quite different from viruses like COVID-19. Infections with hantavirus are rare, but are a real risk in Canada. However in Canada the source of infection is typically through contact with infected rodents or their urine, droppings or saliva or through contact with contaminated surfaces or environments, particularly when cleaning rodent-infested spaces. The hantavir…

### Candidate 3 — Media update on Andes hantavirus situation - Canada.ca

- URL: https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation.html
- Domain: canada.ca
- Discovery batch: canada-official
- Candidate ID: `canada-media-update-on-andes-hantavirus-situation-canada-ca`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.78054583
- Snippet: The Public Health Agency of Canada, along with other Government of Canada departments and agencies, continues to work closely with domestic and international partners, including the World Health Organization (WHO), to monitor the Andes hantavirus outbreak linked to passengers on the MV Hondius. The Public Health Agency of Canada, along with other Government of Canada departments and agencies, continues to work close…
- Extract excerpt: The travellers are required to self-isolate for a minimum of 21 days, up to a maximum of 42 days. This period began on May 10, which is the last day that a confirmed case was aboard the ship. There are currently five other individuals within Canada who are considered as having been potentially exposed to confirmed cases of Andes hantavirus: Two individuals who were aboard the MV Hondius, but disembarked on an earlie…

### Candidate 4 — Hantavirus Case Definition and Reporting | Hantavirus | CDC

- URL: https://www.cdc.gov/hantavirus/php/surveillance/index.html
- Domain: cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `cdc-hantavirus-case-definition-and-reporting-hantavirus-cdc`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official surveillance dataset or surveillance page
- Review priority: high
- Already in backlog: no
- Safe candidate use: Internal review candidate for surveillance context or future reviewed snapshots.
- Review need: Requires display rule before public use. Do not treat provisional rows as live/final/local case counts.
- Public use allowed now: no
- Tavily score: 0.73023266
- Snippet: [Here's how you know](https://www.cdc.gov/hantavirus/php/surveillance/index.html#gov-notice). [Hantavirus](https://www.cdc.gov/hantavirus/about/index.html). * [Reported Cases of Hantavirus Disease](https://www.cdc.gov/hantavirus/data-research/cases/index.html). * [About Hantavirus](https://www.cdc.gov/hantavirus/about/index.html). * [Hantavirus Prevention](https://www.cdc.gov/hantavirus/prevention/index.html). * [FA…
- Extract excerpt: ## CDC surveillance data CDC publishes weekly and annual surveillance data for hantavirus cases in the NNDSS notifiable infectious disease data tables. Aggregated data from CRFs is published here: Reported Cases of Hantavirus Disease. ## On This Page Case definition Reporting criteria Reporting methods Report forms CDC surveillance data May 8, 2026 SourcesPrintShare ## Hantavirus Learn about Hantavirus, how it sprea…

### Candidate 5 — Outbreak of Andes virus 2026 - Recommendations for self-quarantine

- URL: https://www.ecdc.europa.eu/en/publications-data/outbreak-andes-virus-2026-recommendations-self-quarantine
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-outbreak-of-andes-virus-2026-recommendations-for-self-quarantine`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.9969246
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### Infectious disease topics. ### Spotlight. ### Video: Fighting a Candida auris outbreak - healthcare workers leading the change. ### Publications and data. ### The European Respiratory Virus Surveillance Summary (ERVISS). ### Training and tools. ### Learning Portal. ### About ECDC. ### ECDC: On Air. # Outbreak of Andes virus 2026…
- Extract excerpt: ## Global Navigation ![Home](/profiles/custom/ecdc/themes/zika/build/images/logos/logo-ecdc.svg) An agency of the European Union ## Main Navigation (desktop) ### [Infectious disease topics](/en/all-topics) ### Spotlight ![cover candida auris video](/sites/default/files/styles/col_lg_4_16x9/public/images/candida-video.png.webp?itok=fVTJ6M3C) ### [Video: Fighting a Candida auris outbreak - healthcare workers leading t…

### Candidate 6 — Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health

- URL: https://www.health.state.mn.us/news/pressrel/2026/statement051226.html
- Domain: health.state.mn.us
- Discovery batch: us-state-health
- Candidate ID: `health-statement-on-monitoring-a-person-potentially-exposed-to-hantavirus-overs`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.776708
- Snippet: + Health Care Cost and Quality. A-Z disease listing, diseases and conditions by type. + A-Z List of Diseases and Conditions. * Health Care Facilities, Providers, and Insurance. ## Health Care Facilities and Providers. ***The Minnesota Department of Health issued this statement today about monitoring a person who was potentially exposed to hantavirus overseas. Health risk to the public remains very low.***. The Minne…
- Extract excerpt: More information on hantavirus can be found on the MDH Hantavirus website and CDC’s About Hantavirus website. -MDH- Media inquiries: Amy Barrett MDH Communications 651-201-4993 Amy.Barrett@state.mn.us Tags news ## Sign up for news & alerts from MDH [...] Hantaviruses are a known group of viruses carried by rodents which can spread to people and make them very sick. The Andes virus is the only type of hantavirus know…

### Candidate 7 — New Mexico’s hantavirus strain is different from cruise ship outbreak and does not spread between people

- URL: https://www.nmhealth.org/news/information/2026/5/?view=2337
- Domain: nmhealth.org
- Discovery batch: us-state-health
- Candidate ID: `nmhealth-new-mexico-s-hantavirus-strain-is-different-from-cruise-ship-outbreak-an`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.6947383
- Snippet: Our public health clinics are some of the primary ways in which we support the health of all New Mexicans. Hours of operation and contact information are provided below. # New Mexico’s hantavirus strain is different from cruise ship outbreak and does not spread between people. SANTA FE – As news coverage of a hantavirus outbreak linked to a cruise ship raises questions, New Mexico health officials want residents to …
- Extract excerpt: The cruise ship infections are caused by Andes hantavirus found in Argentina and Chile. No New Mexico residents were aboard the cruise ship, and there is low risk to the general public at this time. New Mexico's strain -Sin Nombre hantavirus-is transmitted through contact with infected rodents, such as when droppings or nests are disturbed and virus particles become airborne. Sin Nombre virus does not spread between…

### Candidate 8 — Epidemiological alerts and updates - PAHO/WHO

- URL: https://www.paho.org/en/epidemiological-alerts-and-updates
- Domain: paho.org
- Discovery batch: global-official-alerts
- Candidate ID: `paho-epidemiological-alerts-and-updates-paho-who`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.29451463
- Snippet: The Epidemiological Alerts are released in order to provide information about the occurrence of international public health events.
- Extract excerpt: # Epidemiological alerts and updates The Epidemiological Alerts are released in order to provide information about the occurrence of international public health events which have implications or could have implications for the countries and territories of the Americas; as well as recommendations issued by the Pan American Health Organization. The Epidemiological Updates are released as new information becomes availa…

### Candidate 9 — Hantavirus cluster linked to cruise ship travel, Multi-country

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
- Tavily score: 0.68874115
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…

### Candidate 10 — Hantavirus

- URL: https://www.who.int/news-room/fact-sheets/detail/hantavirus
- Domain: who.int
- Discovery batch: global-official-alerts
- Candidate ID: `who-hantavirus`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.64880073
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/news-room/fact-sheets/detail/hantavirus#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/news-room/fact-sheets/detail/hantavirus#). * [Fact sheets](https://www.who.int/mega-menu/health-topics/resources/fact-sheets). * [Multimedia](https://www.who.int/mega-menu/health-topics/resources/mult…

### Candidate 11 — Hantavirus cluster linked to cruise ship travel, Multi-country

- URL: https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601
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
- Tavily score: 0.5829428
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…

### Candidate 12 — Interdepartmental Media Update – Hantavirus - May 10, 2026 - Canada.ca

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
- Tavily score: 0.81595254
- Snippet: The Public Health Agency of Canada (PHAC) and Global Affairs Canada (GAC), along with other Government of Canada departments and agencies, are working with domestic public health authorities and international partners, including Spain, the World Health Organization (WHO), and the European Centre for Disease Prevention and Control to monitor the Andes Hantavirus outbreak on the MV Hondius and to put in place appropri…

### Candidate 13 — Cruise ship hantavirus outbreak: ECDC response activated

- URL: https://www.ecdc.europa.eu/en/news-events/cruise-ship-hantavirus-outbreak-ecdc-response-activated
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-cruise-ship-hantavirus-outbreak-ecdc-response-activated`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: yes
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.9964342
- Snippet: [Skip to main content](https://www.ecdc.europa.eu/en/news-events/cruise-ship-hantavirus-outbreak-ecdc-response-activated#main-content). [Other sites](https://www.ecdc.europa.eu/en/news-events/cruise-ship-hantavirus-outbreak-ecdc-response-activated#). * [ECDC](https://www.ecdc.europa.eu/en/home). [European Centre for Disease Prevention and Control](https://www.ecdc.europa.eu/en). [Close](https://www.ecdc.europa.eu/en…

### Candidate 14 — Actualización del Boletín Epidemiológico Nacional de la semana N° 17 | Argentina.gob.ar

- URL: https://www.argentina.gob.ar/noticias/actualizacion-del-boletin-epidemiologico-nacional-de-la-semana-ndeg-17
- Domain: argentina.gob.ar
- Discovery batch: south-america-official
- Candidate ID: `argentina-actualizaci-n-del-bolet-n-epidemiol-gico-nacional-de-la-semana-n-17-arge`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.5709301
- Snippet: En lo que refiere al brote de hantavirus que se detectó en el crucero MV Hondius la semana pasada, el Boletín Epidemiológico Nacional (BEN) correspondiente a la semana epidemiológica (SE) 17 de 2026 confirma que, hasta el momento, se identificaron ocho casos a bordo del buque (seis confirmados y dos probables), de los cuales tres fallecieron. A nivel nacional, el BEN confirma que en las últimas dos semanas sólo se n…

### Candidate 15 — Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país | Argentina.gob.ar

- URL: https://www.argentina.gob.ar/noticias/salud-sostiene-y-refuerza-la-vigilancia-epidemiologica-de-hantavirus-en-el-pais
- Domain: argentina.gob.ar
- Discovery batch: south-america-official
- Candidate ID: `argentina-salud-sostiene-y-refuerza-la-vigilancia-epidemiol-gica-de-hantavirus-en-`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.53619206
- Snippet: # Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país. El Ministerio de Salud de la Nación se reunió con autoridades sanitarias de las 24 jurisdicciones para actualizar la información vinculada al brote sucedido a bordo del crucero holandés y fortalecer las acciones de monitoreo. La cartera sanitaria nacional realizó un encuentro con referentes de epidemiología de los ministerios de salud…

### Candidate 16 — Argentina asiste a países europeos con insumos de diagnóstico para hantavirus | Argentina.gob.ar

- URL: https://www.argentina.gob.ar/noticias/argentina-asiste-paises-europeos-con-insumos-de-diagnostico-para-hantavirus
- Domain: argentina.gob.ar
- Discovery batch: south-america-official
- Candidate ID: `argentina-argentina-asiste-a-pa-ses-europeos-con-insumos-de-diagn-stico-para-hanta`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.49582586
- Snippet: # Argentina asiste a países europeos con insumos de diagnóstico para hantavirus. Luego de la confirmación de casos de hantavirus en el buque MV Hondius, la cartera sanitaria nacional activó mecanismos de cooperación internacional, enviando insumos para poder realizar 2500 pruebas diagnósticas y reforzó la vigilancia epidemiológica para acompañar la investigación del brote. El Ministerio de Salud de la Nación avanza …

### Candidate 17 — CDPH Aware of California Passengers Exposed to Andes ...

- URL: https://www.cdph.ca.gov/Programs/OPA/Pages/NR26-017.aspx
- Domain: cdph.ca.gov
- Discovery batch: us-state-health
- Candidate ID: `cdph-cdph-aware-of-california-passengers-exposed-to-andes`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.6133529
- Snippet: CDPH Aware of California Passengers Exposed to Andes Hantavirus Outbreak on International Cruise Ship. May 8, 2026. NR26-017. Risk to the Public

### Candidate 18 — TAB-hantavirus-06052026.pdf

- URL: https://www.ecdc.europa.eu/sites/default/files/documents/TAB-hantavirus-06052026.pdf
- Domain: ecdc.europa.eu
- Discovery batch: global-official-alerts
- Candidate ID: `ecdc-tab-hantavirus-06052026-pdf`
- Candidate tier: 4
- Candidate status: `review_candidate`
- Source type: Official PDF/report candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: 0.59401023
- Snippet: # What is the public health risk of ANDV infection for the EU/EEA population given the outbreak on the cruise ship? Even if transmission of ANDV were to happen from passengers evacuated from the cruise ship, ANDV does not transmit easily so it is unlikely that it would cause many cases or a widespread outbreak if infection prevention and control measures are applied. ECDC provides the following recommendations to pu…

### Candidate 19 — 2026-WCP-0024 Draft.docx

- URL: https://www.ecdc.europa.eu/sites/default/files/documents/2026-WCP-0024%20Final.pdf
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-2026-wcp-0024-draft-docx`
- Candidate tier: 4
- Candidate status: `review_candidate`
- Source type: Official PDF/report candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: 0.9983516
- Snippet: In March 2026, 80 mpox clade I cases were reported by 10 countries. In March 2026, 22 mpox clade II cases were reported by seven countries. Hantavirus disease outbreak on cruise ship - South Atlantic - 2026 Overview: Update (data cut off 10:00 AM) Updates on new reported cases. Geographical distribution of confirmed cases of MERS-CoV by reporting country, April 2012 - April 2026. In March 2026, 80 mpox clade I cases…

### Candidate 20 — Annual Epidemiological Reports (AERs) - ECDC - European Union

- URL: https://www.ecdc.europa.eu/en/publications-data/monitoring/all-annual-epidemiological-reports
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-annual-epidemiological-reports-aers-ecdc-european-union`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.99758446
- Snippet: ECDC's annual surveillance reports provide a wealth of epidemiological data to support decision-making at the national level.

### Candidate 21 — Homepage | European Centre for Disease Prevention and Control

- URL: https://www.ecdc.europa.eu/en
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-homepage-european-centre-for-disease-prevention-and-control`
- Candidate tier: 3
- Candidate status: `review_candidate`
- Source type: Official disease, prevention, case definition, or methodology page
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for methodology/source citation or educational page support.
- Review need: Use as source context only unless a human reviewer promotes a specific snapshot.
- Public use allowed now: no
- Tavily score: 0.99583375
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### The European Respiratory Virus Surveillance Summary (ERVISS). ## Cruise ship hantavirus outbreak: ECDC response activated. ECDC has deployed an expert from the EU Health Task Force to the cruise ship affected by the Andes hantavirus outbreak and published a threat assessment brief. Deadline for submissions is 18 May. Image showi…

### Candidate 22 — [PDF] HANTAVIRUS SE 17 - BOLETÍN EPIDEMIOLÓGICO SEMANAL

- URL: https://epi.minsal.cl/wp-content/uploads/2026/05/Boletin_Epidemiologico_Hantavirus_SE_17_2026.pdf
- Domain: epi.minsal.cl
- Discovery batch: south-america-official
- Candidate ID: `epi-pdf-hantavirus-se-17-bolet-n-epidemiol-gico-semanal`
- Candidate tier: 4
- Candidate status: `review_candidate`
- Source type: Official PDF/report candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: 0.5249554
- Snippet: En el 2025 se confirmaron 44 casos de hantavirus. Un 70 % correspondió a hombres. (n=31). Se presentó una mediana de edad de 36 años (rango: 6-74 años),

### Candidate 23 — Health Emergency Management - New Mexico Department of Health

- URL: https://www.nmhealth.org/about/erd/bhem/
- Domain: nmhealth.org
- Discovery batch: us-state-health
- Candidate ID: `nmhealth-health-emergency-management-new-mexico-department-of-health`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.5697814
- Snippet: New Mexico Health Alert Network (HAN) Advisories: · 2026 · 2025 · 2024 · 2023 · 2022 · 2021 · 2020.

### Candidate 24 — [PDF] Public Health Guidance for Hantavirus (Andes Virus)

- URL: https://www.publichealthontario.ca/-/media/Documents/H/26/hantavirus-andes-virus-public-health-guidance.pdf?rev=3ee4da69141348b282996056bb09a46d&la=fr
- Domain: publichealthontario.ca
- Discovery batch: canada-official
- Candidate ID: `publichealthontario-pdf-public-health-guidance-for-hantavirus-andes-virus`
- Candidate tier: 4
- Candidate status: `review_candidate`
- Source type: Official PDF/report candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: 0.8098936
- Snippet: Public Health Guidance for Hantavirus (Andes Virus) 1 AT A GLANCE Public Health Guidance for Hantavirus (Andes Virus) Published: May 15, 2026 This guidance reflects current evidence as of May 13, 2026, and will be updated as new information becomes available. Gastrointestinal symptoms such as nausea, abdominal pain and vomiting are also common.3,4 • In severe cases (HPS) the disease can rapidly progress to include a…

### Candidate 25 — Hantavirus infection, non-hantavirus pulmonary syndrome: (Week 5) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents…

- URL: http://stacks.cdc.gov/view/cdc/252622
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-hantavirus-infection-non-hantavirus-pulmonary-syndrome-week-5-weekly-cas`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.71758664
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus infection, non-hantavirus pulmonary syndrome: (Week 5) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending February 07, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Te…

### Candidate 26 — Hantavirus pulmonary syndrome (Week 13) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 04, 2026

- URL: http://stacks.cdc.gov/view/cdc/255200
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-hantavirus-pulmonary-syndrome-week-13-weekly-cases-of-notifiable-disease`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.7140107
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus pulmonary syndrome (Week 13) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 04, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Territories, and Non-U.S. Resid…

### Candidate 27 — Hantavirus pulmonary syndrome: (Week 2) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 17, 2…

- URL: http://stacks.cdc.gov/view/cdc/252082
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-hantavirus-pulmonary-syndrome-week-2-weekly-cases-of-notifiable-diseases`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.6929958
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus pulmonary syndrome: (Week 2) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 17, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Territories, and Non-U.S. Res…

### Candidate 28 — Interim Guidance for Public Health Assessment and Management of People with Potential Exposure to Andes Virus

- URL: https://stacks.cdc.gov/view/cdc/256281
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-interim-guidance-for-public-health-assessment-and-management-of-people-w`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.6399392
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. A **lock** ( ) or **https://** means you've safely connected to the .gov website. # Interim Guidance for Public Health Assessment and Management of People with Potential Exposure to Andes Virus. Andes Virus Public Health Investigation Guidance and Exposure Assessment Ques…

## Next manual-review steps

1. Open each new candidate URL and verify publisher/date/content directly.
2. Assign one review outcome: `approved_public_snapshot`, `approved_source_only`, `review_candidate`, or `rejected`.
3. Only after review, update public JSON or page copy in a separate commit.
4. Run `npm run lint`, `npm run build`, and `npm run validate:seo` before deploy.
