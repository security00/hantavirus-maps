# Tavily Source Candidate Discovery - 2026-05-21

Generated: 2026-05-21T10:05:44Z

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
- Unique candidates found: 26
- URLs sent to extraction: 8
- New candidates: 24
- Known backlog candidates: 2
- High-priority review candidates: 9
- Low-priority / weak candidates: 0
- Candidates with weak signals: 0
- Rejected/noise candidates removed from queue: 2
- Domains: `argentina.gob.ar`, `canada.ca`, `cdc.gov`, `cdph.ca.gov`, `ecdc.europa.eu`, `epi.minsal.cl`, `health.state.mn.us`, `paho.org`, `publichealthontario.ca`, `stacks.cdc.gov`, `who.int`

## Human review digest

High-priority official candidates to inspect first:

- **Media update on Andes hantavirus situation - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation0.html
- **Remarks from the Chief Public Health Officer - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/remarks-from-the-chief-public-health-officer.html
- **Hantavirus Case Definition and Reporting - CDC** — cdc.gov — https://www.cdc.gov/hantavirus/php/surveillance/index.html
- **Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health** — health.state.mn.us — https://www.health.state.mn.us/news/pressrel/2026/statement051226.html
- **[PDF] Health Advisory: Hantavirus Disease Outbreak Among Passengers ...** — health.state.mn.us — https://www.health.state.mn.us/communities/ep/han/2026/may13hantavirus.pdf
- **Epidemiological alerts and updates - PAHO/WHO | Pan American Health Organization** — paho.org — https://www.paho.org/en/epidemiological-alerts-and-updates
- **Hantavirus cluster linked to cruise ship travel, Multi-country** — who.int — https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600
- **Interdepartmental Media Update – Hantavirus - May 10, 2026 - Canada.ca** — canada.ca — https://www.canada.ca/en/global-affairs/news/2026/05/interdepartmental-media-update--hantavirus---may-10-2026.html

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
- Tavily score: 0.82425016
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
- Tavily score: 0.81097376
- Snippet: From: Public Health Agency of Canada. Since that time, the Public Health Agency of Canada and Global Affairs Canada, along with other Government of Canada departments and agencies, have been working with domestic and international partners, including the United States, the United Kingdom, Spain and the Netherlands, as well as the World Health Organization, to monitor the outbreak on the M*V Hondius* and to put in pl…
- Extract excerpt: It is also important to note that the hantavirus is quite different from viruses like COVID-19. Infections with hantavirus are rare, but are a real risk in Canada. However in Canada the source of infection is typically through contact with infected rodents or their urine, droppings or saliva or through contact with contaminated surfaces or environments, particularly when cleaning rodent-infested spaces. The hantavir…

### Candidate 3 — Hantavirus Case Definition and Reporting - CDC

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
- Tavily score: 0.6208291
- Snippet: # Hantavirus Case Definition and Reporting. The National Notifiable Disease Surveillance System (NNDSS) provides case definitions for hantavirus pulmonary syndrome (HPS) and non-HPS hantavirus infection. Surveillance case definitions enable public health officials to classify and count cases based on the same criteria across reporting jurisdictions. Surveillance case definitions are not intended for healthcare provi…
- Extract excerpt: ## CDC surveillance data CDC publishes weekly and annual surveillance data for hantavirus cases in the NNDSS notifiable infectious disease data tables. Aggregated data from CRFs is published here: Reported Cases of Hantavirus Disease. ## On This Page ## Hantavirus Learn about Hantavirus, how it spreads and how to protect yourself. ### For Everyone ### Health Care Providers ### Public Health Languages Language Assist…

### Candidate 4 — Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health

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
- Tavily score: 0.76554126
- Snippet: + Health Care Cost and Quality. A-Z disease listing, diseases and conditions by type. + A-Z List of Diseases and Conditions. * Health Care Facilities, Providers, and Insurance. ## Health Care Facilities and Providers. ***The Minnesota Department of Health issued this statement today about monitoring a person who was potentially exposed to hantavirus overseas. Health risk to the public remains very low.***. The Minne…
- Extract excerpt: More information on hantavirus can be found on the MDH Hantavirus website and CDC’s About Hantavirus website. -MDH- Media inquiries: Amy Barrett MDH Communications 651-201-4993 Amy.Barrett@state.mn.us Tags news ## Sign up for news & alerts from MDH [...] Hantaviruses are a known group of viruses carried by rodents which can spread to people and make them very sick. The Andes virus is the only type of hantavirus know…

### Candidate 5 — [PDF] Health Advisory: Hantavirus Disease Outbreak Among Passengers ...

- URL: https://www.health.state.mn.us/communities/ep/han/2026/may13hantavirus.pdf
- Domain: health.state.mn.us
- Discovery batch: us-state-health
- Candidate ID: `health-pdf-health-advisory-hantavirus-disease-outbreak-among-passengers`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.6811549
- Snippet: We want to emphasize that the risk to the public remains very low. o Hantaviruses are usually transmitted by exposure to droppings, urine and

### Candidate 6 — Epidemiological alerts and updates - PAHO/WHO | Pan American Health Organization

- URL: https://www.paho.org/en/epidemiological-alerts-and-updates
- Domain: paho.org
- Discovery batch: global-official-alerts
- Candidate ID: `paho-epidemiological-alerts-and-updates-paho-who-pan-american-health-organiza`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.9927672
- Snippet: * [English](https://www.paho.org/en/epidemiological-alerts-and-updates). * [Home](https://www.paho.org/en). [Publications](https://www.paho.org/en/publications). 8. [Alerts and Epidemiologic Updates](https://www.paho.org/en/epidemiological-alerts-and-updates). [Documents](https://www.paho.org/en/documents). [One Health](https://www.paho.org/en/one-health). * [About](https://www.paho.org/en/who-we-are). [About PAHO/W…
- Extract excerpt: Image 13 22 Dec 2025 Briefing Note: Prevention and control measures to prevent the transmission of seasonal influenza. 19 December 2025 Image 14 19 Dec 2025 Epidemiological Alert Hantavirus Pulmonary Syndrome in Americas Region - 19 December 2025 Image 15 11 Dec 2025 Briefing note - Influenza A(H3N2) subclade K (J.2.4.1), considerations for the Americas Region - 11 December 2025 Image 16 8 Dec 2025 Epidemiological U…

### Candidate 7 — Hantavirus cluster linked to cruise ship travel, Multi-country

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
- Tavily score: 0.9719925
- Snippet: The outbreak is being managed through a coordinated international response, including in-depth epidemiological investigations, case isolation and clinical management, medical evacuations, laboratory testing and international contact tracing and monitoring. * WHO shared information about the event, technical guidance on the management of hantavirus on board the ship, a technical note for the disembarkation and onward…
- Extract excerpt: Further investigations into the potential exposure of the first case and the source of the outbreak are ongoing in collaboration with authorities in Argentina and Chile. The outbreak is being managed through a coordinated international response, including in-depth epidemiological investigations, case isolation and clinical management, medical evacuations, laboratory testing and international contact tracing and moni…

### Candidate 8 — Interdepartmental Media Update – Hantavirus - May 10, 2026 - Canada.ca

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
- Tavily score: 0.7933146
- Snippet: The Public Health Agency of Canada (PHAC) and Global Affairs Canada (GAC), along with other Government of Canada departments and agencies, are working with domestic public health authorities and international partners, including Spain, the World Health Organization (WHO), and the European Centre for Disease Prevention and Control to monitor the Andes Hantavirus outbreak on the MV Hondius and to put in place appropri…

### Candidate 9 — Cruise ship hantavirus outbreak: ECDC response activated

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
- Tavily score: 0.57894874
- Snippet: [Skip to main content](https://www.ecdc.europa.eu/en/news-events/cruise-ship-hantavirus-outbreak-ecdc-response-activated#main-content). [Other sites](https://www.ecdc.europa.eu/en/news-events/cruise-ship-hantavirus-outbreak-ecdc-response-activated#). * [ECDC](https://www.ecdc.europa.eu/en/home). [European Centre for Disease Prevention and Control](https://www.ecdc.europa.eu/en). [Close](https://www.ecdc.europa.eu/en…

### Candidate 10 — Actualización del Boletín Epidemiológico Nacional de la semana N° 17 | Argentina.gob.ar

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
- Tavily score: 0.57666177
- Snippet: En lo que refiere al brote de hantavirus que se detectó en el crucero MV Hondius la semana pasada, el Boletín Epidemiológico Nacional (BEN) correspondiente a la semana epidemiológica (SE) 17 de 2026 confirma que, hasta el momento, se identificaron ocho casos a bordo del buque (seis confirmados y dos probables), de los cuales tres fallecieron. A nivel nacional, el BEN confirma que en las últimas dos semanas sólo se n…
- Extract excerpt: A nivel nacional, el BEN confirma que en las últimas dos semanas sólo se notificó un caso nuevo de hantavirus en el país, con residencia en la provincia de Buenos Aires (PBA). El total de casos de toda la temporada 2025-2026 (que comprende desde la SE 27 de 2025 hasta la SE 17 de 2026) asciende a 102 confirmados. La región Centro concentró el 54% de los casos principalmente en PBA (43 casos). La tasa de incidencia m…

### Candidate 11 — Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país | Argentina.gob.ar

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
- Tavily score: 0.52612424
- Snippet: # Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país. El Ministerio de Salud de la Nación se reunió con autoridades sanitarias de las 24 jurisdicciones para actualizar la información vinculada al brote sucedido a bordo del crucero holandés y fortalecer las acciones de monitoreo. La cartera sanitaria nacional realizó un encuentro con referentes de epidemiología de los ministerios de salud…

### Candidate 12 — ​​Hantavirus Laboratory Testing Guidance - CDPH

- URL: https://www.cdph.ca.gov/Programs/cls/Pages/Laboratory-Bulletins/CLSLB-2026-02.aspx
- Domain: cdph.ca.gov
- Discovery batch: us-state-health
- Candidate ID: `cdph-hantavirus-laboratory-testing-guidance-cdph`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.63723457
- Snippet: Director / State Public Health Officer · Legislative and Governmental ... ​​Hantavirus Laboratory Testing Guidance. May 11, 2026. CLSLB-2026-02.

### Candidate 13 — Hantavirus Infection - CDPH - CA.gov

- URL: https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/HantavirusPulmonarySyndrome.aspx
- Domain: cdph.ca.gov
- Discovery batch: us-state-health
- Candidate ID: `cdph-hantavirus-infection-cdph-ca-gov`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.61279696
- Snippet: [](https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/HantavirusPulmonarySyndrome.aspx). [](https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/HantavirusPulmonarySyndrome.aspx). * * [+ Increase Increase](https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/HantavirusPulmonarySyndrome.aspx#). [](https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/HantavirusPulmonarySyndrome.aspx). * ## [Disease Reporting](https://www.cdph.ca.gov/Pr…

### Candidate 14 — [PDF] Hantavirus-associated cluster of illness on a cruise ship - ECDC

- URL: https://www.ecdc.europa.eu/sites/default/files/documents/TAB-hantavirus-06052026.pdf
- Domain: ecdc.europa.eu
- Discovery batch: global-official-alerts
- Candidate ID: `ecdc-pdf-hantavirus-associated-cluster-of-illness-on-a-cruise-ship-ecdc`
- Candidate tier: 4
- Candidate status: `review_candidate`
- Source type: Official PDF/report candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: 0.99128854
- Snippet: # What is the public health risk of ANDV infection for the EU/EEA population given the outbreak on the cruise ship? Even if transmission of ANDV were to happen from passengers evacuated from the cruise ship, ANDV does not transmit easily so it is unlikely that it would cause many cases or a widespread outbreak if infection prevention and control measures are applied. ECDC provides the following recommendations to pu…

### Candidate 15 — Hantavirus-associated cluster of illness on a cruise ship - ECDC

- URL: https://www.ecdc.europa.eu/en/publications-data/threat-assessment-brief-hantavirus-associated-cluster-illness-cruise-ship-ecdc
- Domain: ecdc.europa.eu
- Discovery batch: global-official-alerts
- Candidate ID: `ecdc-hantavirus-associated-cluster-of-illness-on-a-cruise-ship-ecdc`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.99036634
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### The European Respiratory Virus Surveillance Summary (ERVISS). ECDC was notified on 2 May 2026 by the Netherlands via the European Union (EU) Early Warning and Response System (EWRS) about a cluster of unknown disease with severe respiratory symptoms on a cruise ship in the South Atlantic, operating under a Dutch flag. Of these s…

### Candidate 16 — Factsheet on orthohantavirus infections - ECDC - European Union

- URL: https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/factsheet-orthohantavirus-infections
- Domain: ecdc.europa.eu
- Discovery batch: global-official-alerts
- Candidate ID: `ecdc-factsheet-on-orthohantavirus-infections-ecdc-european-union`
- Candidate tier: 3
- Candidate status: `review_candidate`
- Source type: Official disease, prevention, case definition, or methodology page
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for methodology/source citation or educational page support.
- Review need: Use as source context only unless a human reviewer promotes a specific snapshot.
- Public use allowed now: no
- Tavily score: 0.979354
- Snippet: Orthohantavirus infections can cause haemorrhagic fever with renal syndrome (HFRS), a clinical syndrome characterised by fever and acute kidney injury. HFRS is a notifiable disease in the EU under viral haemorrhagic fevers (VHF), and the EU case definition for surveillance of VHF is set out in Commission Implementing Decision (EU) 2018/945 of 22 June 2018 [1]. Members of *Orthohantavirus* genus are carried by rodent…

### Candidate 17 — 2026-WCP-0024 Draft.docx

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
- Tavily score: 0.69049704
- Snippet: In March 2026, 80 mpox clade I cases were reported by 10 countries. In March 2026, 22 mpox clade II cases were reported by seven countries. Hantavirus disease outbreak on cruise ship - South Atlantic - 2026 Overview: Update (data cut off 10:00 AM) Updates on new reported cases. Geographical distribution of confirmed cases of MERS-CoV by reporting country, April 2012 - April 2026. In March 2026, 80 mpox clade I cases…

### Candidate 18 — Homepage | European Centre for Disease Prevention and Control

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
- Tavily score: 0.5752307
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### Infectious disease topics. ### Publications and data. ### The European Respiratory Virus Surveillance Summary (ERVISS). ### ECDC: On Air. Image of laboratory worker testing for Ebola. ## Ebola virus disease outbreak in the Democratic Republic of the Congo. Over 500 suspected cases and 130 deaths have been reported in DRC. ECDC h…

### Candidate 19 — [PDF] HANTAVIRUS SE 17 - BOLETÍN EPIDEMIOLÓGICO SEMANAL

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
- Tavily score: 0.5264164
- Snippet: En el 2025 se confirmaron 44 casos de hantavirus. Un 70 % correspondió a hombres. (n=31). Se presentó una mediana de edad de 36 años (rango: 6-74 años),

### Candidate 20 — Epidemic Intelligence - Pan American Health Organization (PAHO)

- URL: https://www.paho.org/en/topics/epidemic-intelligence
- Domain: paho.org
- Discovery batch: south-america-official
- Candidate ID: `paho-epidemic-intelligence-pan-american-health-organization-paho`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.51691306
- Snippet: ... Hantavirus outbreak caused by Andes virus, Global. 18 May 2026. WHO Rapid Risk Assessment - Hantavirus outbreak caused by Andes virus, Global v.2. 15 Apr 2026.

### Candidate 21 — [PDF] Public Health Guidance for Hantavirus (Andes Virus)

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
- Tavily score: 0.81770587
- Snippet: Public Health Guidance for Hantavirus (Andes Virus) 1 AT A GLANCE Public Health Guidance for Hantavirus (Andes Virus) Published: May 15, 2026 This guidance reflects current evidence as of May 13, 2026, and will be updated as new information becomes available. Gastrointestinal symptoms such as nausea, abdominal pain and vomiting are also common.3,4 • In severe cases (HPS) the disease can rapidly progress to include a…

### Candidate 22 — [PDF] Infection Prevention and Control Precautions for Hantavirus (Andes ...

- URL: https://www.publichealthontario.ca/-/media/Documents/H/26/hantavirus-andes-strain-ipac-precautions.pdf?rev=c617a39a653c45f7b9e708c8415277fe&sc_lang=en&hash=5F449685A095B8FF117729C21B5FD706
- Domain: publichealthontario.ca
- Discovery batch: canada-official
- Candidate ID: `publichealthontario-pdf-infection-prevention-and-control-precautions-for-hantavirus-andes`
- Candidate tier: 3
- Candidate status: `review_candidate`
- Source type: Official disease, prevention, case definition, or methodology page
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for methodology/source citation or educational page support.
- Review need: Use as source context only unless a human reviewer promotes a specific snapshot.
- Public use allowed now: no
- Tavily score: 0.77792513
- Snippet: Infection Prevention and Control Precautions for Hantavirus (Andes Virus) 1 AT A GLANCE Infection Prevention and Control Precautions for Hantavirus (Andes Virus) Published: May 11, 2026 Purpose This document was created to support health care providers and public health units based on a rapid review of the latest available evidence. Personal Protective Equipment (PPE):5 Health care workers are to wear the following:…

### Candidate 23 — Hantavirus infection, non-hantavirus pulmonary syndrome: (Week 5) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents…

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

### Candidate 24 — Hantavirus pulmonary syndrome - CDC Stacks

- URL: http://stacks.cdc.gov/view/cdc/252082
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-hantavirus-pulmonary-syndrome-cdc-stacks`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.71425
- Snippet: National Notifiable Diseases Surveillance System (NNDSS). Topic: Hantavirus pulmonary syndrome. Location: North America. Volume: 2026. Issue: 2. Collection(s):.

### Candidate 25 — Hantavirus pulmonary syndrome (Week 13) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 04, 2026

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

### Candidate 26 — [PDF] Nationally Notifiable Infectious Diseases and Conditions, United ...

- URL: https://stacks.cdc.gov/view/cdc/252814/cdc_252814_DS1.pdf
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-pdf-nationally-notifiable-infectious-diseases-and-conditions-united`
- Candidate tier: 4
- Candidate status: `review_candidate`
- Source type: Official PDF/report candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for manual PDF review and source-linked context.
- Review need: Requires PDF extraction, table/date review, language review where needed, and safe summary rules.
- Public use allowed now: no
- Tavily score: 0.6033015
- Snippet: Hantavirus infection, non-hantavirus pulmonary syndrome §. Reporting Area. Current week. Previous 52 weeks Max †. Cum YTD 2026 †. Cum YTD 2025 †.

## Next manual-review steps

1. Open each new candidate URL and verify publisher/date/content directly.
2. Assign one review outcome: `approved_public_snapshot`, `approved_source_only`, `review_candidate`, or `rejected`.
3. Only after review, update public JSON or page copy in a separate commit.
4. Run `npm run lint`, `npm run build`, and `npm run validate:seo` before deploy.
