# Tavily Source Candidate Discovery - 2026-05-18

Generated: 2026-05-18T10:43:16Z

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
- Unique candidates found: 24
- URLs sent to extraction: 8
- New candidates: 23
- Known backlog candidates: 1
- High-priority review candidates: 11
- Low-priority / weak candidates: 2
- Candidates with weak signals: 2
- Rejected/noise candidates removed from queue: 2
- Domains: `argentina.gob.ar`, `canada.ca`, `cdc.gov`, `ecdc.europa.eu`, `epi.minsal.cl`, `health.state.mn.us`, `nmhealth.org`, `publichealthontario.ca`, `stacks.cdc.gov`, `who.int`

## Human review digest

High-priority official candidates to inspect first:

- **Media update on Andes hantavirus situation - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation0.html
- **Remarks from the Chief Public Health Officer - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/remarks-from-the-chief-public-health-officer.html
- **Media update on Andes hantavirus situation - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation1.html
- **Hantavirus Case Definition and Reporting | Hantavirus | CDC** — cdc.gov — https://www.cdc.gov/hantavirus/php/surveillance/index.html
- **Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health** — health.state.mn.us — https://www.health.state.mn.us/news/pressrel/2026/statement051226.html
- **New Mexico’s hantavirus strain is different from cruise ship outbreak and does not spread between people** — nmhealth.org — https://www.nmhealth.org/news/information/2026/5/?view=2337
- **Hantavirus cluster linked to cruise ship travel, Multi-country** — who.int — https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599
- **Hantavirus cluster linked to cruise ship travel, Multi-country** — who.int — https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600

## Reviewer cleanup notes

- Flagged for strict paragraph filtering: Candidate 16, `ecdc-2026-wcp-0024-draft-docx`; it is a multi-disease ECDC bulletin with mpox and MERS-CoV noise.
- Flagged as discovery-only index page: Candidate 18, `ecdc-homepage-european-centre-for-disease-prevention-and-control`. Prefer specific ECDC outbreak/update/guidance URLs before promotion.
- Preserve strain attribution during any later promotion: Andes virus cruise-ship exposure records must not be merged with routine Sin Nombre virus risk language or rodent-exposure transmission chains.

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
- Raw result count: 3

### south-america-official

- Query: `hantavirus Andes virus official health ministry Argentina Chile 2026`
- Domains: `argentina.gob.ar`, `minsal.cl`, `www.gob.cl`, `paho.org`
- Raw result count: 5

### europe-official

- Query: `hantavirus Europe official surveillance ECDC national public health 2026`
- Domains: `ecdc.europa.eu`, `thl.fi`, `folkhalsomyndigheten.se`, `rki.de`, `gov.uk`
- Raw result count: 4

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
- Tavily score: 0.83710164
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
- Tavily score: 0.8138313
- Snippet: From: Public Health Agency of Canada. Since that time, the Public Health Agency of Canada and Global Affairs Canada, along with other Government of Canada departments and agencies, have been working with domestic and international partners, including the United States, the United Kingdom, Spain and the Netherlands, as well as the World Health Organization, to monitor the outbreak on the M*V Hondius* and to put in pl…
- Extract excerpt: It is also important to note that the hantavirus is quite different from viruses like COVID-19. Infections with hantavirus are rare, but are a real risk in Canada. However in Canada the source of infection is typically through contact with infected rodents or their urine, droppings or saliva or through contact with contaminated surfaces or environments, particularly when cleaning rodent-infested spaces. The hantavir…

### Candidate 3 — Media update on Andes hantavirus situation - Canada.ca

- URL: https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation1.html
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
- Tavily score: 0.78154784
- Snippet: From: Public Health Agency of Canada. The Public Health Agency of Canada has confirmed a case of Andes hantavirus in Canada through laboratory testing. This case was reported by the British Columbia Provincial Health Officer on May 16 and was among the passengers on the MV Hondius cruise ship. The Public Health Agency of Canada (PHAC) has confirmed a case of Andes hantavirus in Canada through laboratory testing. PHA…
- Extract excerpt: Samples from British Columbia were sent to PHAC’s National Microbiology Laboratory (NML) in Winnipeg for confirmatory testing. One individual’s sample was confirmed positive for hantavirus on May 16. A second individual who was a travelling partner of the confirmed case was confirmed negative by the NML. There have been no further cases identified at this time. All high-risk contacts are isolating and will continue …

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
- Tavily score: 0.6279746
- Snippet: # Hantavirus Case Definition and Reporting. The National Notifiable Disease Surveillance System (NNDSS) provides case definitions for hantavirus pulmonary syndrome (HPS) and non-HPS hantavirus infection. Surveillance case definitions enable public health officials to classify and count cases based on the same criteria across reporting jurisdictions. Surveillance case definitions are not intended for healthcare provi…
- Extract excerpt: ## CDC surveillance data CDC publishes weekly and annual surveillance data for hantavirus cases in the NNDSS notifiable infectious disease data tables. Aggregated data from CRFs is published here: Reported Cases of Hantavirus Disease. ## On This Page ## Hantavirus Learn about Hantavirus, how it spreads and how to protect yourself. ### For Everyone ### Health Care Providers ### Public Health Languages Language Assist…

### Candidate 5 — Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health

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
- Tavily score: 0.7771143
- Snippet: + Health Care Cost and Quality. A-Z disease listing, diseases and conditions by type. + A-Z List of Diseases and Conditions. * Health Care Facilities, Providers, and Insurance. ## Health Care Facilities and Providers. ***The Minnesota Department of Health issued this statement today about monitoring a person who was potentially exposed to hantavirus overseas. Health risk to the public remains very low.***. The Minne…
- Extract excerpt: More information on hantavirus can be found on the MDH Hantavirus website and CDC’s About Hantavirus website. -MDH- Media inquiries: Amy Barrett MDH Communications 651-201-4993 Amy.Barrett@state.mn.us Tags news ## Sign up for news & alerts from MDH [...] Hantaviruses are a known group of viruses carried by rodents which can spread to people and make them very sick. The Andes virus is the only type of hantavirus know…

### Candidate 6 — New Mexico’s hantavirus strain is different from cruise ship outbreak and does not spread between people

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
- Tavily score: 0.6999322
- Snippet: Our public health clinics are some of the primary ways in which we support the health of all New Mexicans. Hours of operation and contact information are provided below. # New Mexico’s hantavirus strain is different from cruise ship outbreak and does not spread between people. SANTA FE – As news coverage of a hantavirus outbreak linked to a cruise ship raises questions, New Mexico health officials want residents to …
- Extract excerpt: The cruise ship infections are caused by Andes hantavirus found in Argentina and Chile. No New Mexico residents were aboard the cruise ship, and there is low risk to the general public at this time. New Mexico's strain -Sin Nombre hantavirus-is transmitted through contact with infected rodents, such as when droppings or nests are disturbed and virus particles become airborne. Sin Nombre virus does not spread between…

### Candidate 7 — Hantavirus cluster linked to cruise ship travel, Multi-country

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
- Tavily score: 0.6747586
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…
- Extract excerpt: # Hantavirus cluster linked to cruise ship travel, Multi-country Skip to main content ) Greater Horn of Africa Israel and occupied Palestinian territory Mpox Sudan Ukraine [Latest]( Disease Outbreak News Situation reports Rapid risk assessments Weekly Epidemiological Record [WHO in emergencies]( Surveillance Alert and response Operations Research Funding Partners Health emergency appeals International Health Regulat…

### Candidate 8 — Hantavirus cluster linked to cruise ship travel, Multi-country

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
- Tavily score: 0.67243975
- Snippet: On 2 May 2026, a cluster of passengers with severe respiratory illness aboard a cruise ship was reported to the World Health Organization (WHO). Since the last Disease Outbreak News published on 4 May, three of the suspected cases were confirmed, and one additional confirmed case was reported. As of 8 May, a total of eight cases, including three deaths (case fatality ratio 38%), have been reported. Six cases have be…
- Extract excerpt: Further investigations into the potential exposure of the first case and the source of the outbreak are ongoing in collaboration with authorities in Argentina and Chile. The outbreak is being managed through a coordinated international response, including in-depth epidemiological investigations, case isolation and clinical management, medical evacuations, laboratory testing and international contact tracing and moni…

### Candidate 9 — Hantavirus cluster linked to cruise ship travel, Multi-country

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
- Tavily score: 0.5634506
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…

### Candidate 10 — Hantavirus - World Health Organization (WHO)

- URL: https://www.who.int/news-room/fact-sheets/detail/hantavirus
- Domain: who.int
- Discovery batch: global-official-alerts
- Candidate ID: `who-hantavirus-world-health-organization-who`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.29985347
- Snippet: * Hantaviruses are a group of viruses carried by rodents that can cause severe disease in humans. * In the Americas, hantaviruses can cause hantavirus cardiopulmonary syndrome (HCPS), a severe respiratory illness, with a case fatality rate up to 50%. * *Andes* virus, found in South America, is a currently known hantavirus for which limited human‑to‑human transmission among contacts has been documented. In the Americ…

### Candidate 11 — Interdepartmental Media Update – Hantavirus - May 10, 2026 - Canada.ca

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
- Tavily score: 0.8127637
- Snippet: The Public Health Agency of Canada (PHAC) and Global Affairs Canada (GAC), along with other Government of Canada departments and agencies, are working with domestic public health authorities and international partners, including Spain, the World Health Organization (WHO), and the European Centre for Disease Prevention and Control to monitor the Andes Hantavirus outbreak on the MV Hondius and to put in place appropri…

### Candidate 12 — Actualización del Boletín Epidemiológico Nacional de la semana N° 17 | Argentina.gob.ar

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
- Tavily score: 0.9995523
- Snippet: En lo que refiere al brote de hantavirus que se detectó en el crucero MV Hondius la semana pasada, el Boletín Epidemiológico Nacional (BEN) correspondiente a la semana epidemiológica (SE) 17 de 2026 confirma que, hasta el momento, se identificaron ocho casos a bordo del buque (seis confirmados y dos probables), de los cuales tres fallecieron. A nivel nacional, el BEN confirma que en las últimas dos semanas sólo se n…

### Candidate 13 — Argentina asiste a países europeos con insumos de diagnóstico para hantavirus | Argentina.gob.ar

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
- Tavily score: 0.9984988
- Snippet: # Argentina asiste a países europeos con insumos de diagnóstico para hantavirus. Luego de la confirmación de casos de hantavirus en el buque MV Hondius, la cartera sanitaria nacional activó mecanismos de cooperación internacional, enviando insumos para poder realizar 2500 pruebas diagnósticas y reforzó la vigilancia epidemiológica para acompañar la investigación del brote. El Ministerio de Salud de la Nación avanza …

### Candidate 14 — Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país | Argentina.gob.ar

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
- Tavily score: 0.9982993
- Snippet: # Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país. El Ministerio de Salud de la Nación se reunió con autoridades sanitarias de las 24 jurisdicciones para actualizar la información vinculada al brote sucedido a bordo del crucero holandés y fortalecer las acciones de monitoreo. La cartera sanitaria nacional realizó un encuentro con referentes de epidemiología de los ministerios de salud…

### Candidate 15 — TAB-hantavirus-06052026.pdf

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
- Tavily score: 0.59372765
- Snippet: # What is the public health risk of ANDV infection for the EU/EEA population given the outbreak on the cruise ship? Even if transmission of ANDV were to happen from passengers evacuated from the cruise ship, ANDV does not transmit easily so it is unlikely that it would cause many cases or a widespread outbreak if infection prevention and control measures are applied. ECDC provides the following recommendations to pu…

### Candidate 16 — 2026-WCP-0024 Draft.docx

- URL: https://www.ecdc.europa.eu/sites/default/files/documents/2026-WCP-0024%20Final.pdf
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-2026-wcp-0024-draft-docx`
- Candidate tier: 4
- Candidate status: `review_candidate`
- Source type: Official PDF/report candidate
- Review priority: low
- Already in backlog: no
- Safe candidate use: Candidate for manual PDF review only; not suitable for direct source-linked extraction without disease-specific paragraph filtering.
- Review need: Use only after strict paragraph-level filtering for hantavirus or Andes virus content; discard mpox, MERS-CoV, and other non-hantavirus sections.
- Public use allowed now: no
- Tavily score: 0.70483154
- Weak signals:
  - multi-disease ECDC surveillance bulletin
  - snippet includes mpox and MERS-CoV sections unrelated to hantavirus
  - requires hantavirus/Andes-virus paragraph filtering before any use
- Snippet: In March 2026, 80 mpox clade I cases were reported by 10 countries. In March 2026, 22 mpox clade II cases were reported by seven countries. Hantavirus disease outbreak on cruise ship - South Atlantic - 2026 Overview: Update (data cut off 10:00 AM) Updates on new reported cases. Geographical distribution of confirmed cases of MERS-CoV by reporting country, April 2012 - April 2026. In March 2026, 80 mpox clade I cases…

### Candidate 17 — Threat Assessment Brief: Hantavirus-associated cluster of illness on a cruise ship: ECDC assessment and recommendations

- URL: https://www.ecdc.europa.eu/en/publications-data/threat-assessment-brief-hantavirus-associated-cluster-illness-cruise-ship-ecdc
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-threat-assessment-brief-hantavirus-associated-cluster-of-illness-on-a-cr`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.6685563
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### The European Respiratory Virus Surveillance Summary (ERVISS). ECDC was notified on 2 May 2026 by the Netherlands via the European Union (EU) Early Warning and Response System (EWRS) about a cluster of unknown disease with severe respiratory symptoms on a cruise ship in the South Atlantic, operating under a Dutch flag. Of these s…

### Candidate 18 — Homepage | European Centre for Disease Prevention and Control

- URL: https://www.ecdc.europa.eu/en
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-homepage-european-centre-for-disease-prevention-and-control`
- Candidate tier: 3
- Candidate status: `review_candidate`
- Source type: Official disease, prevention, case definition, or methodology page
- Review priority: low
- Already in backlog: no
- Safe candidate use: Index-page candidate for discovery only; do not promote directly into public JSON.
- Review need: Use only as a discovery pointer. Prefer the specific ECDC outbreak/Q&A/assessment URLs as review candidates.
- Public use allowed now: no
- Tavily score: 0.6461259
- Weak signals:
  - agency homepage/index page rather than a stable source document
  - contains unrelated front-page disease/news modules
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### The European Respiratory Virus Surveillance Summary (ERVISS). ## Cruise ship hantavirus outbreak: ECDC response activated. ECDC has deployed an expert from the EU Health Task Force to the cruise ship affected by the Andes hantavirus outbreak and published a threat assessment brief. Deadline for submissions is 18 May. Image showi…

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
- Tavily score: 0.99346113
- Snippet: En el 2025 se confirmaron 44 casos de hantavirus. Un 70 % correspondió a hombres. (n=31). Se presentó una mediana de edad de 36 años (rango: 6-74 años),

### Candidate 20 — [PDF] Public Health Guidance for Hantavirus (Andes Virus)

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
- Tavily score: 0.8036831
- Snippet: Public Health Guidance for Hantavirus (Andes Virus) 1 AT A GLANCE Public Health Guidance for Hantavirus (Andes Virus) Published: May 15, 2026 This guidance reflects current evidence as of May 13, 2026, and will be updated as new information becomes available. Gastrointestinal symptoms such as nausea, abdominal pain and vomiting are also common.3,4 • In severe cases (HPS) the disease can rapidly progress to include a…

### Candidate 21 — Hantavirus infection, non-hantavirus pulmonary syndrome: (Week 5) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents…

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

### Candidate 22 — Hantavirus pulmonary syndrome (Week 13) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 04, 2026

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

### Candidate 23 — Hantavirus pulmonary syndrome: (Week 2) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 17, 2…

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

### Candidate 24 — Interim Guidance for Public Health Assessment and Management of People with Potential Exposure to Andes Virus

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
