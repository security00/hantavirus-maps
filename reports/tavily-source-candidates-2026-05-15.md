# Tavily Source Candidate Discovery - 2026-05-15

Generated: 2026-05-15T09:26:01Z

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
- New candidates: 25
- Known backlog candidates: 2
- High-priority review candidates: 12
- Low-priority / weak candidates: 1
- Candidates with weak signals: 1
- Rejected/noise candidates removed from queue: 3
- Domains: `argentina.gob.ar`, `canada.ca`, `cdc.gov`, `cdph.ca.gov`, `ecdc.europa.eu`, `health.state.mn.us`, `iris.paho.org`, `nmhealth.org`, `oregon.gov`, `paho.org`, `publichealthontario.ca`, `stacks.cdc.gov`, `who.int`

## Human review digest

High-priority official candidates to inspect first:

- **Remarks from the Chief Public Health Officer - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/remarks-from-the-chief-public-health-officer.html
- **Media update on Andes hantavirus situation - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation.html
- **Hantavirus Case Definition and Reporting | Hantavirus | CDC** — cdc.gov — https://www.cdc.gov/hantavirus/php/surveillance/index.html
- **Questions and answers on the hantavirus outbreak in a cruise ship** — ecdc.europa.eu — https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/surveillance-and-updates/questions-answers-outbreak
- **Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health** — health.state.mn.us — https://www.health.state.mn.us/news/pressrel/2026/statement051226.html
- **New Mexico's hantavirus strain is different from cruise ship outbreak ...** — nmhealth.org — https://www.nmhealth.org/news/information/2026/5/?view=2337
- **[PDF] Andes virus in patients returning from cruise ship M/V Hondius** — oregon.gov — https://www.oregon.gov/oha/PH/PREPAREDNESS/PARTNERS/HEALTHALERTNETWORK/HAN%20Archive/2026-0508%20Clinician%20Alert%20-%20Andes%20virus%20in%20patients%20returning%20from%20cruise%20ship%20MV%20Hondius.pdf
- **Epidemiological alerts and updates - PAHO/WHO** — paho.org — https://www.paho.org/en/epidemiological-alerts-and-updates

## Reviewer cleanup notes

- Rejected and removed from the queue: the Chile MMA climate-report PDF (old Candidate 22, `mma-pdf-tercera-comunicaci-n-nacional-de-chile-ante-la-convenci-n-marco`). It is a 2017 UNFCCC/climate report with a very low Tavily score and no actionable hantavirus relevance.
- Flagged for strict paragraph filtering: Candidate 18, `ecdc-2026-wcp-0024-draft-docx`. The ECDC PDF is a multi-disease surveillance bulletin whose snippet includes mpox and MERS-CoV sections; only hantavirus or Andes virus paragraphs may be considered during manual review.
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
- Tavily score: 0.82082915
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
- Tavily score: 0.76992935
- Snippet: The Public Health Agency of Canada, along with other Government of Canada departments and agencies, continues to work closely with domestic and international partners, including the World Health Organization (WHO), to monitor the Andes hantavirus outbreak linked to passengers on the MV Hondius. The Public Health Agency of Canada, along with other Government of Canada departments and agencies, continues to work close…
- Extract excerpt: The travellers are required to self-isolate for a minimum of 21 days, up to a maximum of 42 days. This period began on May 10, which is the last day that a confirmed case was aboard the ship. There are currently five other individuals within Canada who are considered as having been potentially exposed to confirmed cases of Andes hantavirus: Two individuals who were aboard the MV Hondius, but disembarked on an earlie…

### Candidate 3 — Hantavirus Case Definition and Reporting | Hantavirus | CDC

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

### Candidate 4 — Questions and answers on the hantavirus outbreak in a cruise ship

- URL: https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/surveillance-and-updates/questions-answers-outbreak
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-questions-and-answers-on-the-hantavirus-outbreak-in-a-cruise-ship`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official surveillance dataset or surveillance page
- Review priority: high
- Already in backlog: no
- Safe candidate use: Internal review candidate for surveillance context or future reviewed snapshots.
- Review need: Requires display rule before public use. Do not treat provisional rows as live/final/local case counts.
- Public use allowed now: no
- Tavily score: 0.62742686
- Snippet: [Skip to main content](https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/surveillance-and-updates/questions-answers-outbreak#main-content). [Other sites](https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/surveillance-and-updates/questions-answers-outbreak#). [Close](https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/surveillance-and-upda…
- Extract excerpt: Contact us Media centre Social media NewsletterRSS ### Follow us: ## Footer Menu Legal notice Copyright Access to surveillance data Personal data protection Language policy Cookies Accessibility Sitemap © European Centre for Disease Prevention and Control (ECDC) 2026 [...] Image 6: podcast logo ### ECDC: On Air 1. Home 2. Infectious disease topics 3. Hantavirus infection 4. Surveillance and updates 5. Andes Hantavir…

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
- Tavily score: 0.76490957
- Snippet: + Health Care Cost and Quality. A-Z disease listing, diseases and conditions by type. + A-Z List of Diseases and Conditions. * Health Care Facilities, Providers, and Insurance. ## Health Care Facilities and Providers. ***The Minnesota Department of Health issued this statement today about monitoring a person who was potentially exposed to hantavirus overseas. Health risk to the public remains very low.***. The Minne…
- Extract excerpt: More information on hantavirus can be found on the MDH Hantavirus website and CDC’s About Hantavirus website. -MDH- Media inquiries: Amy Barrett MDH Communications 651-201-4993 Amy.Barrett@state.mn.us Tags news ## Sign up for news & alerts from MDH [...] Hantaviruses are a known group of viruses carried by rodents which can spread to people and make them very sick. The Andes virus is the only type of hantavirus know…

### Candidate 6 — New Mexico's hantavirus strain is different from cruise ship outbreak ...

- URL: https://www.nmhealth.org/news/information/2026/5/?view=2337
- Domain: nmhealth.org
- Discovery batch: us-state-health
- Candidate ID: `nmhealth-new-mexico-s-hantavirus-strain-is-different-from-cruise-ship-outbreak`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.6102915
- Snippet: Andes hantavirus is notable as the only type of hantavirus that can spread person-to-person, but it does not spread easily and requires close
- Extract excerpt: The cruise ship infections are caused by Andes hantavirus found in Argentina and Chile. No New Mexico residents were aboard the cruise ship, and there is low risk to the general public at this time. New Mexico's strain -Sin Nombre hantavirus-is transmitted through contact with infected rodents, such as when droppings or nests are disturbed and virus particles become airborne. Sin Nombre virus does not spread between…

### Candidate 7 — [PDF] Andes virus in patients returning from cruise ship M/V Hondius

- URL: https://www.oregon.gov/oha/PH/PREPAREDNESS/PARTNERS/HEALTHALERTNETWORK/HAN%20Archive/2026-0508%20Clinician%20Alert%20-%20Andes%20virus%20in%20patients%20returning%20from%20cruise%20ship%20MV%20Hondius.pdf
- Domain: oregon.gov
- Discovery batch: us-state-health
- Candidate ID: `oregon-pdf-andes-virus-in-patients-returning-from-cruise-ship-m-v-hondius`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.67706895
- Snippet: Title:Clinician Alert: Andes virus in patients returning from cruise ship M/V Hondius Situational Update Oregon Health Authority (OHA) is closely monitoring the cluster of Andes virus hantavirus cases associated with the M/V Hondius cruise ship which departed Ushuaia, Argentina on April 1, 2026. The Centers for Disease Control and Prevention will notify jurisdictions of passengers returning to their jurisdiction. An…
- Extract excerpt: Title:Clinician Alert: Andes virus in patients returning from cruise ship M/V Hondius Situational Update Oregon Health Authority (OHA) is closely monitoring the cluster of Andes virus hantavirus cases associated with the M/V Hondius cruise ship which departed Ushuaia, Argentina on April 1, 2026. As of May 8, eight cases (five confirmed and three suspect) have been reported, including three deaths. The Department of …

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
- Tavily score: 0.99608517
- Snippet: The Epidemiological Alerts are released in order to provide information about the occurrence of international public health events.
- Extract excerpt: # Epidemiological alerts and updates The Epidemiological Alerts are released in order to provide information about the occurrence of international public health events which have implications or could have implications for the countries and territories of the Americas; as well as recommendations issued by the Pan American Health Organization. The Epidemiological Updates are released as new information becomes availa…

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
- Tavily score: 0.96182173
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…

### Candidate 10 — Hantavirus cluster linked to cruise ship travel, Multi-country

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
- Tavily score: 0.909907
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…

### Candidate 11 — Hantavirus

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
- Tavily score: 0.8152325
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/news-room/fact-sheets/detail/hantavirus#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/news-room/fact-sheets/detail/hantavirus#). * [Fact sheets](https://www.who.int/mega-menu/health-topics/resources/fact-sheets). * [Multimedia](https://www.who.int/mega-menu/health-topics/resources/mult…

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
- Tavily score: 0.79845446
- Snippet: The Public Health Agency of Canada (PHAC) and Global Affairs Canada (GAC), along with other Government of Canada departments and agencies, are working with domestic public health authorities and international partners, including Spain, the World Health Organization (WHO), and the European Centre for Disease Prevention and Control to monitor the Andes Hantavirus outbreak on the MV Hondius and to put in place appropri…

### Candidate 13 — Actualización del Boletín Epidemiológico Nacional de la semana N° 17 | Argentina.gob.ar

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
- Tavily score: 0.5573882
- Snippet: En lo que refiere al brote de hantavirus que se detectó en el crucero MV Hondius la semana pasada, el Boletín Epidemiológico Nacional (BEN) correspondiente a la semana epidemiológica (SE) 17 de 2026 confirma que, hasta el momento, se identificaron ocho casos a bordo del buque (seis confirmados y dos probables), de los cuales tres fallecieron. A nivel nacional, el BEN confirma que en las últimas dos semanas sólo se n…

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
- Tavily score: 0.5183761
- Snippet: # Salud sostiene y refuerza la vigilancia epidemiológica de hantavirus en el país. El Ministerio de Salud de la Nación se reunió con autoridades sanitarias de las 24 jurisdicciones para actualizar la información vinculada al brote sucedido a bordo del crucero holandés y fortalecer las acciones de monitoreo. La cartera sanitaria nacional realizó un encuentro con referentes de epidemiología de los ministerios de salud…

### Candidate 15 — Argentina asiste a países europeos con insumos de diagnóstico para hantavirus | Argentina.gob.ar

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
- Tavily score: 0.47709182
- Snippet: # Argentina asiste a países europeos con insumos de diagnóstico para hantavirus. Luego de la confirmación de casos de hantavirus en el buque MV Hondius, la cartera sanitaria nacional activó mecanismos de cooperación internacional, enviando insumos para poder realizar 2500 pruebas diagnósticas y reforzó la vigilancia epidemiológica para acompañar la investigación del brote. El Ministerio de Salud de la Nación avanza …

### Candidate 16 — ​​Hantavirus Laboratory Testing Guidance - CDPH

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
- Tavily score: 0.62687886
- Snippet: Director / State Public Health Officer · Legislative and Governmental ... ​​Hantavirus Laboratory Testing Guidance. May 11, 2026. CLSLB-2026-02.

### Candidate 17 — [PDF] Hantavirus-associated cluster of illness on a cruise ship - ECDC

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
- Tavily score: 0.9801293
- Snippet: # What is the public health risk of ANDV infection for the EU/EEA population given the outbreak on the cruise ship? Even if transmission of ANDV were to happen from passengers evacuated from the cruise ship, ANDV does not transmit easily so it is unlikely that it would cause many cases or a widespread outbreak if infection prevention and control measures are applied. ECDC provides the following recommendations to pu…

### Candidate 18 — 2026-WCP-0024 Draft.docx

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
- Tavily score: 0.6991933
- Weak signals:
  - multi-disease ECDC surveillance bulletin
  - snippet includes mpox and MERS-CoV sections unrelated to hantavirus
  - requires hantavirus/Andes-virus paragraph filtering before any use
- Snippet: In March 2026, 80 mpox clade I cases were reported by 10 countries. In March 2026, 22 mpox clade II cases were reported by seven countries. Hantavirus disease outbreak on cruise ship - South Atlantic - 2026 Overview: Update (data cut off 10:00 AM) Updates on new reported cases. Geographical distribution of confirmed cases of MERS-CoV by reporting country, April 2012 - April 2026. In March 2026, 80 mpox clade I cases…

### Candidate 19 — Hantavirus-associated cluster of illness on a cruise ship - ECDC

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
- Tavily score: 0.6543875
- Snippet: [Skip to main content](https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and#main-content). [Accept all cookies](https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and#accept)[Accept only essential cookies](https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness…

### Candidate 20 — ECDC - European Union

- URL: https://www.ecdc.europa.eu/en
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-ecdc-european-union`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.638588
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### Video: Fighting a Candida auris outbreak - healthcare workers leading the change. ### Publications and data. ### The European Respiratory Virus Surveillance Summary (ERVISS). ## Cruise ship hantavirus outbreak: ECDC response activated. ECDC has deployed an expert from the EU Health Task Force to the cruise ship affected by the A…

### Candidate 21 — [PDF] 164th SESSION OF THE EXECUTIVE COMMITTEE - Iris Paho

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
- Tavily score: 0.11429952
- Snippet: consultation comprises individual assessments by senior public health officials who have a broad understanding of the national public health context. The

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
- Tavily score: 0.769306
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

### Candidate 24 — Hantavirus pulmonary syndrome (Week 13) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 04, 2026

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

### Candidate 25 — Hantavirus pulmonary syndrome: (Week 2) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 17, 2…

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
- Tavily score: 0.6932451
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus pulmonary syndrome: (Week 2) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 17, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Territories, and Non-U.S. Res…

### Candidate 26 — Interim Guidance for Public Health Assessment and Management of People with Potential Exposure to Andes Virus

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

### Candidate 27 — Risks of a hantavirus infection - Canada.ca

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
- Tavily score: 0.734139
- Snippet: # Risks of a hantavirus infection. The overall risk in Canada to the general population from the Andes hantavirus outbreak linked to the MV Hondius cruise ship remains low. Find out what the risks of getting infected with a hantavirus are and who is most at risk. ## What are the risks of getting infected with a hantavirus? The risk of getting infected with a hantavirus in Canada or in other parts of the world is low…

## Next manual-review steps

1. Open each new candidate URL and verify publisher/date/content directly.
2. Assign one review outcome: `approved_public_snapshot`, `approved_source_only`, `review_candidate`, or `rejected`.
3. Only after review, update public JSON or page copy in a separate commit.
4. Run `npm run lint`, `npm run build`, and `npm run validate:seo` before deploy.
