# Tavily Source Candidate Discovery - 2026-05-14

Generated: 2026-05-14T11:06:36Z

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
- Unique candidates found: 27
- URLs sent to extraction: 8
- New candidates: 24
- Known backlog candidates: 3
- High-priority review candidates: 9
- Low-priority / weak candidates: 0
- Candidates with weak signals: 0
- Rejected/noise candidates removed from queue: 3
- Domains: `argentina.gob.ar`, `canada.ca`, `cdc.gov`, `cdph.ca.gov`, `ecdc.europa.eu`, `health.state.mn.us`, `iris.paho.org`, `paho.org`, `publichealthontario.ca`, `stacks.cdc.gov`, `thl.fi`, `who.int`

## Human review digest

High-priority official candidates to inspect first:

- **Remarks from the Chief Public Health Officer - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/remarks-from-the-chief-public-health-officer.html
- **Media update on Andes hantavirus situation - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation.html
- **Hantavirus Case Definition and Reporting - CDC** — cdc.gov — https://www.cdc.gov/hantavirus/php/surveillance/index.html
- **Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health** — health.state.mn.us — https://www.health.state.mn.us/news/pressrel/2026/statement051226.html
- **Epidemiological alerts and updates - PAHO/WHO** — paho.org — https://www.paho.org/en/epidemiological-alerts-and-updates
- **Coronavirus disease 2019 (COVID-19) and HIV: Key issues and actions - PAHO/WHO | Pan American Health Organization** — paho.org — https://www.paho.org/en/news/24-3-2020-coronavirus-disease-2019-covid-19-and-hiv-key-issues-and-actions
- **Hantavirus cluster linked to cruise ship travel, Multi-country** — who.int — https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599
- **Hantavirus cluster linked to cruise ship travel, Multi-country** — who.int — https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601

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
- Tavily score: 0.81630427
- Snippet: From: Public Health Agency of Canada. Since that time, the Public Health Agency of Canada and Global Affairs Canada, along with other Government of Canada departments and agencies, have been working with domestic and international partners, including the United States, the United Kingdom, Spain and the Netherlands, as well as the World Health Organization, to monitor the outbreak on the M*V Hondius* and to put in pl…
- Extract excerpt: It is also important to note that the hantavirus is quite different from viruses like COVID-19. Infections with hantavirus are rare, but are a real risk in Canada. However in Canada the source of infection is typically through contact with infected rodents or their urine, droppings or saliva or through contact with contaminated surfaces or environments, particularly when cleaning rodent-infested spaces. The hantavir…

### Candidate 2 — Media update on Andes hantavirus situation - Canada.ca

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
- Tavily score: 0.7703443
- Snippet: The Public Health Agency of Canada, along with other Government of Canada departments and agencies, continues to work closely with domestic and international partners, including the World Health Organization (WHO), to monitor the Andes hantavirus outbreak linked to passengers on the MV Hondius. The Public Health Agency of Canada, along with other Government of Canada departments and agencies, continues to work close…
- Extract excerpt: The travellers are required to self-isolate for a minimum of 21 days, up to a maximum of 42 days. This period began on May 10, which is the last day that a confirmed case was aboard the ship. There are currently five other individuals within Canada who are considered as having been potentially exposed to confirmed cases of Andes hantavirus: Two individuals who were aboard the MV Hondius, but disembarked on an earlie…

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
- Tavily score: 0.7016523
- Snippet: [Here's how you know](https://www.cdc.gov/hantavirus/php/surveillance/index.html#gov-notice). [Hantavirus](https://www.cdc.gov/hantavirus/about/index.html). * [Reported Cases of Hantavirus Disease](https://www.cdc.gov/hantavirus/data-research/cases/index.html). * [About Hantavirus](https://www.cdc.gov/hantavirus/about/index.html). * [Hantavirus Prevention](https://www.cdc.gov/hantavirus/prevention/index.html). * [FA…
- Extract excerpt: ## CDC surveillance data CDC publishes weekly and annual surveillance data for hantavirus cases in the NNDSS notifiable infectious disease data tables. Aggregated data from CRFs is published here: Reported Cases of Hantavirus Disease. ## On This Page Case definition Reporting criteria Reporting methods Report forms CDC surveillance data May 8, 2026 SourcesPrintShare ## Hantavirus Learn about Hantavirus, how it sprea…

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
- Tavily score: 0.76300776
- Snippet: + Health Care Cost and Quality. A-Z disease listing, diseases and conditions by type. + A-Z List of Diseases and Conditions. * Health Care Facilities, Providers, and Insurance. ## Health Care Facilities and Providers. ***The Minnesota Department of Health issued this statement today about monitoring a person who was potentially exposed to hantavirus overseas. Health risk to the public remains very low.***. The Minne…
- Extract excerpt: More information on hantavirus can be found on the MDH Hantavirus website and CDC’s About Hantavirus website. -MDH- Media inquiries: Amy Barrett MDH Communications 651-201-4993 Amy.Barrett@state.mn.us Tags news ## Sign up for news & alerts from MDH [...] Hantaviruses are a known group of viruses carried by rodents which can spread to people and make them very sick. The Andes virus is the only type of hantavirus know…

### Candidate 5 — Epidemiological alerts and updates - PAHO/WHO

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
- Tavily score: 0.29196453
- Snippet: The Epidemiological Alerts are released in order to provide information about the occurrence of international public health events.
- Extract excerpt: # Epidemiological alerts and updates The Epidemiological Alerts are released in order to provide information about the occurrence of international public health events which have implications or could have implications for the countries and territories of the Americas; as well as recommendations issued by the Pan American Health Organization. The Epidemiological Updates are released as new information becomes availa…

### Candidate 6 — Coronavirus disease 2019 (COVID-19) and HIV: Key issues and actions - PAHO/WHO | Pan American Health Organization

- URL: https://www.paho.org/en/news/24-3-2020-coronavirus-disease-2019-covid-19-and-hiv-key-issues-and-actions
- Domain: paho.org
- Discovery batch: global-official-alerts
- Candidate ID: `paho-coronavirus-disease-2019-covid-19-and-hiv-key-issues-and-actions-paho-wh`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.077190235
- Snippet: 3. Virtual Campus for Public Health. 1. Alliance for Primary Health Care in the Americas. The following key actions addressing issues that may arise for the HIV response amid COVID-19 outbreak should be taken by governments, civil society organizations (CSOs) and networks, and PLWVIH to ensure that the response to COVID-19 is aligned with human rights principles. * There is currently no strong data to suggest that p…
- Extract excerpt: Nurses gather in hospital setting PAHO urges countries to expand the role of nursing to strengthen health systems in the Americas online q&a PAHO held Q&A session on hantavirus after outbreak on cruise ship See all the news [...] Avoid touching your eyes, nose and mouth. Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there the viru…

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
- Tavily score: 0.68191797
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…
- Extract excerpt: # Hantavirus cluster linked to cruise ship travel, Multi-country Skip to main content ) Greater Horn of Africa Israel and occupied Palestinian territory Mpox Sudan Ukraine [Latest]( Disease Outbreak News Situation reports Rapid risk assessments Weekly Epidemiological Record [WHO in emergencies]( Surveillance Alert and response Operations Research Funding Partners Health emergency appeals International Health Regulat…

### Candidate 8 — Hantavirus cluster linked to cruise ship travel, Multi-country

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
- Tavily score: 0.6816637
- Snippet: This is the third Disease Outbreak News report on the hantavirus cluster, following the notification to the World Health Organization (WHO) on 2 May 2026 of severe respiratory illness cases aboard MV Hondius, a cruise ship. All were passengers on the ship. Eight cases were laboratory-confirmed for Andes virus (ANDV) infection, two are probable, and one case remains inconclusive and undergoing further testing. WHO ha…
- Extract excerpt: Pan American Health Organization / World Health Organization. PAHO supports the international response to hantavirus pulmonary syndrome cases linked to a cruise ship in the Atlantic. Epidemiological Alert Hantavirus Pulmonary Syndrome (HPS). Hantavirus in the Americas: Guidelines for diagnosis, treatment, prevention and control. Available at: Hantavirus Prevention, CDC: Martínez Valeria, Paola N, et al.. (2020). “Su…

### Candidate 9 — Interdepartmental Media Update – Hantavirus - May 10, 2026 - Canada.ca

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
- Tavily score: 0.7975099
- Snippet: The Public Health Agency of Canada (PHAC) and Global Affairs Canada (GAC), along with other Government of Canada departments and agencies, are working with domestic public health authorities and international partners, including Spain, the World Health Organization (WHO), and the European Centre for Disease Prevention and Control to monitor the Andes Hantavirus outbreak on the MV Hondius and to put in place appropri…

### Candidate 10 — Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país | Argentina.gob.ar

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
- Tavily score: 0.5236402
- Snippet: # Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país. El Ministerio de Salud de la Nación se reunió con autoridades sanitarias de las 24 jurisdicciones para actualizar la información vinculada al brote sucedido a bordo del crucero holandés y fortalecer las acciones de monitoreo. La cartera sanitaria nacional realizó un encuentro con referentes de epidemiología de los ministerios de salud…

### Candidate 11 — Argentina asiste a países europeos con insumos de diagnóstico para hantavirus | Argentina.gob.ar

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
- Tavily score: 0.47913864
- Snippet: # Argentina asiste a países europeos con insumos de diagnóstico para hantavirus. Luego de la confirmación de casos de hantavirus en el buque MV Hondius, la cartera sanitaria nacional activó mecanismos de cooperación internacional, enviando insumos para poder realizar 2500 pruebas diagnósticas y reforzó la vigilancia epidemiológica para acompañar la investigación del brote. El Ministerio de Salud de la Nación avanza …

### Candidate 12 — Actualización del Boletín Epidemiológico Nacional de la semana N ...

- URL: https://www.argentina.gob.ar/noticias/actualizacion-del-boletin-epidemiologico-nacional-de-la-semana-ndeg-17
- Domain: argentina.gob.ar
- Discovery batch: south-america-official
- Candidate ID: `argentina-actualizaci-n-del-bolet-n-epidemiol-gico-nacional-de-la-semana-n`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.44333586
- Snippet: En esta edición se incluyen actualizaciones de Hantavirus, Coqueluche, y Síndrome Urémico Hemolítico (SUH). 12 de mayo de 2026.

### Candidate 13 — ​​Hantavirus Laboratory Testing Guidance - CDPH

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
- Tavily score: 0.6816637
- Snippet: Director / State Public Health Officer · Legislative and Governmental ... ​​Hantavirus Laboratory Testing Guidance. May 11, 2026. CLSLB-2026-02.

### Candidate 14 — Hantavirus Infection - CDPH - CA.gov

- URL: https://www.cdph.ca.gov/Programs/CID/DCDC/pages/hantaviruspulmonarysyndrome.aspx
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
- Tavily score: 0.6755297
- Snippet: [](https://www.cdph.ca.gov/Programs/CID/DCDC/pages/hantaviruspulmonarysyndrome.aspx). [](https://www.cdph.ca.gov/Programs/CID/DCDC/pages/hantaviruspulmonarysyndrome.aspx). * * [+ Increase Increase](https://www.cdph.ca.gov/Programs/CID/DCDC/pages/hantaviruspulmonarysyndrome.aspx#). [](https://www.cdph.ca.gov/Programs/CID/DCDC/pages/hantaviruspulmonarysyndrome.aspx). * ## [Disease Reporting](https://www.cdph.ca.gov/Pr…

### Candidate 15 — Hantavirus Infection - CDPH - CA.gov

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
- Tavily score: 0.5417246
- Snippet: Hantavirus is a virus that spreads through the urine, droppings (poop), or saliva of wild rodents, including deer mice, which are common in many parts of

### Candidate 16 — [PDF] Hantavirus-associated cluster of illness on a cruise ship - ECDC

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
- Tavily score: 0.56575525
- Snippet: # What is the public health risk of ANDV infection for the EU/EEA population given the outbreak on the cruise ship? Even if transmission of ANDV were to happen from passengers evacuated from the cruise ship, ANDV does not transmit easily so it is unlikely that it would cause many cases or a widespread outbreak if infection prevention and control measures are applied. ECDC provides the following recommendations to pu…

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
- Tavily score: 0.7060491
- Snippet: In March 2026, 80 mpox clade I cases were reported by 10 countries. In March 2026, 22 mpox clade II cases were reported by seven countries. Hantavirus disease outbreak on cruise ship - South Atlantic - 2026 Overview: Update (data cut off 10:00 AM) Updates on new reported cases. Geographical distribution of confirmed cases of MERS-CoV by reporting country, April 2012 - April 2026. In March 2026, 80 mpox clade I cases…

### Candidate 18 — Hantavirus-associated cluster of illness on a cruise ship - ECDC

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
- Tavily score: 0.6682966
- Snippet: [Skip to main content](https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and#main-content). [Accept all cookies](https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and#accept)[Accept only essential cookies](https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness…

### Candidate 19 — Homepage | European Centre for Disease Prevention and Control

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
- Tavily score: 0.650934
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### Video: Fighting a Candida auris outbreak - healthcare workers leading the change. ### Publications and data. ### The European Respiratory Virus Surveillance Summary (ERVISS). ## Cruise ship hantavirus outbreak: ECDC response activated. ECDC has deployed an expert from the EU Health Task Force to the cruise ship affected by the A…

### Candidate 20 — [PDF] 164th SESSION OF THE EXECUTIVE COMMITTEE - Iris Paho

- URL: https://iris.paho.org/bitstreams/986f8711-c0ec-4944-99bc-0cdb5f988270/download
- Domain: iris.paho.org
- Discovery batch: south-america-official
- Candidate ID: `iris-pdf-164th-session-of-the-executive-committee-iris-paho`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.10044563
- Snippet: consultation comprises individual assessments by senior public health officials who have a broad understanding of the national public health context. The

### Candidate 21 — [PDF] Infection Prevention and Control Precautions for Hantavirus (Andes ...

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
- Tavily score: 0.7707586
- Snippet: Infection Prevention and Control Precautions for Hantavirus (Andes Virus) 1 AT A GLANCE Infection Prevention and Control Precautions for Hantavirus (Andes Virus) Published: May 11, 2026 Purpose This document was created to support health care providers and public health units based on a rapid review of the latest available evidence. Personal Protective Equipment (PPE):5 Health care workers are to wear the following:…

### Candidate 22 — Hantavirus infection, non-hantavirus pulmonary syndrome: (Week 5) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents…

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
- Tavily score: 0.71088976
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus infection, non-hantavirus pulmonary syndrome: (Week 5) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending February 07, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Te…

### Candidate 23 — Hantavirus pulmonary syndrome (Week 13) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 04, 2026

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
- Tavily score: 0.70750624
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus pulmonary syndrome (Week 13) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 04, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Territories, and Non-U.S. Resid…

### Candidate 24 — Hantavirus pulmonary syndrome: (Week 2) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 17, 2…

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
- Tavily score: 0.68571854
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus pulmonary syndrome: (Week 2) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 17, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Territories, and Non-U.S. Res…

### Candidate 25 — Haku - THL

- URL: https://thl.fi/haku?p_p_id=fi_yja_fess_open_search_FessOpenSearchPortlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&_fi_yja_fess_open_search_FessOpenSearchPortlet_orderByType=desc&_fi_yja_fess_open_search_FessOpenSearchPortlet_keywords=infectious+diseases&_fi_yja_fess_open_search_FessOpenSearchPortlet_navigation=all&_fi_yja_fess_open_search_FessOpenSearchPortlet_orderByCol=last_modified
- Domain: thl.fi
- Discovery batch: europe-official
- Candidate ID: `thl-haku-thl`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.7031221
- Snippet: 1. ## Very low risk of hantavirus to the European population - THL. 8.5.2026 | The wider spread of disease caused by hantavirus in Europe is unlikely, and the risk to the public is very low, according to a risk assessment published by the European Centre for Disease Prevention and Control (ECDC). https://thl.fi/en/-/very-low-risk-of-hantavirus-to-the-european-population. 5.5.2026 | The Finnish Institute for Health a…

### Candidate 26 — Risks of a hantavirus infection - Canada.ca

- URL: https://www.canada.ca/en/public-health/services/diseases/hantaviruses/risks-hantavirus-infection.html
- Domain: canada.ca
- Discovery batch: canada-official
- Candidate ID: `canada-risks-of-a-hantavirus-infection-canada-ca`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: yes
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.7339103
- Snippet: # Risks of a hantavirus infection. The overall risk in Canada to the general population from the Andes hantavirus outbreak linked to the MV Hondius cruise ship remains low. Find out what the risks of getting infected with a hantavirus are and who is most at risk. ## What are the risks of getting infected with a hantavirus? The risk of getting infected with a hantavirus in Canada or in other parts of the world is low…

### Candidate 27 — Hantavirus infection, non-hantavirus pulmonary syndrome: (Week ...

- URL: https://stacks.cdc.gov/view/cdc/251471
- Domain: stacks.cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `stacks-hantavirus-infection-non-hantavirus-pulmonary-syndrome-week`
- Candidate tier: 1
- Candidate status: `known_backlog_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: yes
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.6506676
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus infection, non-hantavirus pulmonary syndrome: (Week 53) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 03, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Te…

## Next manual-review steps

1. Open each new candidate URL and verify publisher/date/content directly.
2. Assign one review outcome: `approved_public_snapshot`, `approved_source_only`, `review_candidate`, or `rejected`.
3. Only after review, update public JSON or page copy in a separate commit.
4. Run `npm run lint`, `npm run build`, and `npm run validate:seo` before deploy.
