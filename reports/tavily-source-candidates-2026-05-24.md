# Tavily Source Candidate Discovery - 2026-05-24

Generated: 2026-05-24T08:45:59Z

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
- New candidates: 26
- Known backlog candidates: 1
- High-priority review candidates: 12
- Low-priority / weak candidates: 0
- Candidates with weak signals: 0
- Rejected/noise candidates removed from queue: 2
- Domains: `argentina.gob.ar`, `canada.ca`, `cdc.gov`, `cdph.ca.gov`, `ecdc.europa.eu`, `epi.minsal.cl`, `health.state.mn.us`, `oregon.gov`, `publichealthontario.ca`, `stacks.cdc.gov`, `who.int`

## Human review digest

High-priority official candidates to inspect first:

- **Media update on Andes hantavirus situation - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation0.html
- **Remarks from the Chief Public Health Officer - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/remarks-from-the-chief-public-health-officer.html
- **Media update on Andes hantavirus situation - Canada.ca** — canada.ca — https://www.canada.ca/en/public-health/news/2026/05/media-update-on-andes-hantavirus-situation1.html
- **Hantavirus Case Definition and Reporting | Hantavirus | CDC** — cdc.gov — https://www.cdc.gov/hantavirus/php/surveillance/index.html
- **Hantavirus outbreak on cruise ship under investigation: risk for Europe very low** — ecdc.europa.eu — https://www.ecdc.europa.eu/en/news-events/hantavirus-outbreak-cruise-ship-under-investigation-risk-europe-very-low
- **ECDC monitoring outbreak associated with cruise ship** — ecdc.europa.eu — https://www.ecdc.europa.eu/en/news-events/ecdc-monitoring-outbreak-associated-cruise-ship
- **Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health** — health.state.mn.us — https://www.health.state.mn.us/news/pressrel/2026/statement051226.html
- **[PDF] Andes virus in patients returning from cruise ship M/V Hondius** — oregon.gov — https://www.oregon.gov/oha/PH/PREPAREDNESS/PARTNERS/HEALTHALERTNETWORK/HAN%20Archive/2026-0508%20Clinician%20Alert%20-%20Andes%20virus%20in%20patients%20returning%20from%20cruise%20ship%20MV%20Hondius.pdf

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
- Raw result count: 4

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
- Tavily score: 0.82795376
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
- Tavily score: 0.81133276
- Snippet: From: Public Health Agency of Canada. Since that time, the Public Health Agency of Canada and Global Affairs Canada, along with other Government of Canada departments and agencies, have been working with domestic and international partners, including the United States, the United Kingdom, Spain and the Netherlands, as well as the World Health Organization, to monitor the outbreak on the M*V Hondius* and to put in pl…
- Extract excerpt: The species of hantavirus in this outbreak is the Andes virus which is the only species of hantavirus known to cause limited human to human transmission. Andes virus is found in South America and is not found in Canada. At this point in the investigation, it is believed that the first case was exposed while travelling in South America before boarding the cruise ship. At this time, the overall risk to the general pop…

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
- Tavily score: 0.7742597
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
- Tavily score: 0.99918324
- Snippet: # Hantavirus Case Definition and Reporting. The National Notifiable Disease Surveillance System (NNDSS) provides case definitions for hantavirus pulmonary syndrome (HPS) and non-HPS hantavirus infection. Surveillance case definitions enable public health officials to classify and count cases based on the same criteria across reporting jurisdictions. Surveillance case definitions are not intended for healthcare provi…
- Extract excerpt: ## CDC surveillance data CDC publishes weekly and annual surveillance data for hantavirus cases in the NNDSS notifiable infectious disease data tables. Aggregated data from CRFs is published here: Reported Cases of Hantavirus Disease. ## On This Page ## Hantavirus Learn about Hantavirus, how it spreads and how to protect yourself. ### For Everyone ### Health Care Providers ### Public Health Languages Language Assist…

### Candidate 5 — Hantavirus outbreak on cruise ship under investigation: risk for Europe very low

- URL: https://www.ecdc.europa.eu/en/news-events/hantavirus-outbreak-cruise-ship-under-investigation-risk-europe-very-low
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-hantavirus-outbreak-on-cruise-ship-under-investigation-risk-for-europe-v`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.98501
- Snippet: [Skip to main content](https://www.ecdc.europa.eu/en/news-events/hantavirus-outbreak-cruise-ship-under-investigation-risk-europe-very-low#main-content). [Accept all cookies](https://www.ecdc.europa.eu/en/news-events/hantavirus-outbreak-cruise-ship-under-investigation-risk-europe-very-low#accept)[Accept only essential cookies](https://www.ecdc.europa.eu/en/news-events/hantavirus-outbreak-cruise-ship-under-investigati…
- Extract excerpt: ECDC monitoring outbreak associated with cruise ship 4 May 2026 Image 7: Hantavirus. © Science Photo Library Factsheet on orthohantavirus infections Image 8: Surveillance experts looking at data Surveillance and updates for hantavirus Image 9: Hantavirus Hantavirus infection Share this page Facebook LinkedIn BlueSky Threads E-mail ## Doormat menu ### About us What we do Who we are Governance ### Work with us Vacanci…

### Candidate 6 — ECDC monitoring outbreak associated with cruise ship

- URL: https://www.ecdc.europa.eu/en/news-events/ecdc-monitoring-outbreak-associated-cruise-ship
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-ecdc-monitoring-outbreak-associated-with-cruise-ship`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: no
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.97948
- Snippet: European Centre for Disease Prevention and Control. An agency of the European Union. 4. ECDC monitoring outbreak associated with cruise ship. ECDC is aware of suspected cases of hantavirus infection, including three deaths, associated with a cruise ship travelling in the Atlantic. ECDC is closely monitoring the situation and is in contact with relevant national public health authorities and the World Health Organiza…
- Extract excerpt: [![Home](/profiles/custom/ecdc/themes/zika/build/images/logos/logo-ecdc.svg)](/en) [European Centre for Disease Prevention and Control](/en) An agency of the European Union 1. [Home](/en) 2. [About ECDC](/en/about-ecdc) 3. [Media centre](/en/news-events) 4. ECDC monitoring outbreak associated with cruise ship [Media centre](/en/news-events) # ECDC monitoring outbreak associated with cruise ship News story ECDC is aw…

### Candidate 7 — Statement on monitoring a person potentially exposed to hantavirus overseas - MN Dept. of Health

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
- Tavily score: 0.76512027
- Snippet: + Health Care Cost and Quality. A-Z disease listing, diseases and conditions by type. + A-Z List of Diseases and Conditions. * Health Care Facilities, Providers, and Insurance. ## Health Care Facilities and Providers. ***The Minnesota Department of Health issued this statement today about monitoring a person who was potentially exposed to hantavirus overseas. Health risk to the public remains very low.***. The Minne…
- Extract excerpt: More information on hantavirus can be found on the MDH Hantavirus website and CDC’s About Hantavirus website. -MDH- Media inquiries: Amy Barrett MDH Communications 651-201-4993 Amy.Barrett@state.mn.us Tags news ## Sign up for news & alerts from MDH [...] Hantaviruses are a known group of viruses carried by rodents which can spread to people and make them very sick. The Andes virus is the only type of hantavirus know…

### Candidate 8 — [PDF] Andes virus in patients returning from cruise ship M/V Hondius

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
- Tavily score: 0.6757865
- Snippet: Title:Clinician Alert: Andes virus in patients returning from cruise ship M/V Hondius Situational Update Oregon Health Authority (OHA) is closely monitoring the cluster of Andes virus hantavirus cases associated with the M/V Hondius cruise ship which departed Ushuaia, Argentina on April 1, 2026. The Centers for Disease Control and Prevention will notify jurisdictions of passengers returning to their jurisdiction. An…
- Extract excerpt: Title:Clinician Alert: Andes virus in patients returning from cruise ship M/V Hondius Situational Update Oregon Health Authority (OHA) is closely monitoring the cluster of Andes virus hantavirus cases associated with the M/V Hondius cruise ship which departed Ushuaia, Argentina on April 1, 2026. As of May 8, eight cases (five confirmed and three suspect) have been reported, including three deaths. The Department of …

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
- Tavily score: 0.6755297
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…

### Candidate 10 — Hantavirus cluster linked to cruise ship travel, Multi-country

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
- Tavily score: 0.6755297
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600#). * [Publications](https://www.who.int/mega-menu/health-topics/resources/publications). * [[Popular](https://www.who.int/mega-menu/health…

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
- Tavily score: 0.6366926
- Snippet: * [[Health Topics](https://www.who.int/mega-menu/health-topics)](https://www.who.int/news-room/fact-sheets/detail/hantavirus#). * [[Resources](https://www.who.int/mega-menu/health-topics/resources)](https://www.who.int/news-room/fact-sheets/detail/hantavirus#). * [Fact sheets](https://www.who.int/mega-menu/health-topics/resources/fact-sheets). * [Multimedia](https://www.who.int/mega-menu/health-topics/resources/mult…

### Candidate 12 — ECDC publishes guidance for the management of passengers linked to the Andes hantavirus outbreak on cruise ship

- URL: https://www.ecdc.europa.eu/en/news-events/ecdc-publishes-guidance-management-passengers-linked-andes-hantavirus-outbreak-cruise
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-ecdc-publishes-guidance-for-the-management-of-passengers-linked-to-the-a`
- Candidate tier: 2
- Candidate status: `known_backlog_candidate`
- Source type: Official outbreak alert or public health update
- Review priority: high
- Already in backlog: yes
- Safe candidate use: Candidate for reviewed official alert/event timeline after deduplication.
- Review need: Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.
- Public use allowed now: no
- Tavily score: 0.98559
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### The European Respiratory Virus Surveillance Summary (ERVISS). # ECDC publishes guidance for the management of passengers linked to the Andes hantavirus outbreak on cruise ship. The document includes advice on:. In addition to the ECDC expert already deployed on board the ship, Spain requested support through the EU Health Task F…

### Candidate 13 — Argentina mantiene activos sus sistemas de vigilancia, monitoreo sanitario y cooperación internacional | Argentina.gob.ar

- URL: https://www.argentina.gob.ar/noticias/argentina-mantiene-activos-sus-sistemas-de-vigilancia-monitoreo-sanitario-y-cooperacion
- Domain: argentina.gob.ar
- Discovery batch: south-america-official
- Candidate ID: `argentina-argentina-mantiene-activos-sus-sistemas-de-vigilancia-monitoreo-sanitari`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.5608546
- Snippet: En relación a los casos de hantavirus detectados a bordo del crucero MV Hondius, las autoridades sanitarias nacionales continúan realizando la investigación epidemiológica correspondiente y colaborando con todos los Estados involucrados sobre la base de criterios epidemiológicos, evidencia científica, trazabilidad documental y respeto a las competencias institucionales de cada jurisdicción interviniente. Desde el in…

### Candidate 14 — Argentina asiste a países europeos con insumos de diagnóstico para hantavirus | Argentina.gob.ar

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
- Tavily score: 0.49567938
- Snippet: Luego de la confirmación de casos de hantavirus en el buque MV Hondius, la cartera sanitaria nacional activó mecanismos de cooperación internacional, enviando insumos para poder realizar 2500 pruebas diagnósticas y reforzó la vigilancia epidemiológica para acompañar la investigación del brote. El Ministerio de Salud de la Nación avanza en una doble estrategia para abordar el brote de hantavirus vinculado al buque MV…

### Candidate 15 — Nación acompaña a Río Negro en la vigilancia del hantavirus | Argentina.gob.ar

- URL: https://www.argentina.gob.ar/noticias/nacion-acompana-rio-negro-en-la-vigilancia-del-hantavirus
- Domain: argentina.gob.ar
- Discovery batch: south-america-official
- Candidate ID: `argentina-naci-n-acompa-a-a-r-o-negro-en-la-vigilancia-del-hantavirus-argentina-go`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.48294178
- Snippet: # Nación acompaña a Río Negro en la vigilancia del hantavirus. La cartera sanitaria está brindando soporte técnico a la provincia para reforzar las medidas de control y prevención en la zona y dar seguimiento a los contactos estrechos. El Ministerio de Salud de la Nación refuerza el soporte y acompañamiento técnico a la provincia de Río Negro y en Bariloche para las acciones de vigilancia epidemiológica y laboratori…

### Candidate 16 — Reported Cases of Hantavirus Disease | Hantavirus | CDC

- URL: https://www.cdc.gov/hantavirus/data-research/cases/index.html
- Domain: cdc.gov
- Discovery batch: cdc-surveillance
- Candidate ID: `cdc-reported-cases-of-hantavirus-disease-hantavirus-cdc`
- Candidate tier: 1
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.9984633
- Snippet: [For Everyone](/hantavirus/site.html#gen). * [Reported Cases of Hantavirus Disease](/hantavirus/data-research/cases/index.html). * [About Hantavirus](/hantavirus/about/index.html). * [FAQs](/hantavirus/faq/index.html). * [Hantavirus Disease Trainings for Healthcare Providers](/hantavirus/hcp/training/index.html). * [View all](/hantavirus/site.html#hcp). * [Case Definition and Reporting](/hantavirus/php/surveillance/…

### Candidate 17 — ​​Hantavirus Laboratory Testing Guidance - CDPH

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
- Tavily score: 0.63804686
- Snippet: Director / State Public Health Officer · Legislative and Governmental ... ​​Hantavirus Laboratory Testing Guidance. May 11, 2026. CLSLB-2026-02.

### Candidate 18 — Threat assessment brief: Hantavirus-associated cluster of illness on ...

- URL: https://www.ecdc.europa.eu/en/publications-data/threat-assessment-brief-hantavirus-associated-cluster-illness-cruise-ship-ecdc
- Domain: ecdc.europa.eu
- Discovery batch: global-official-alerts
- Candidate ID: `ecdc-threat-assessment-brief-hantavirus-associated-cluster-of-illness-on`
- Candidate tier: 2
- Candidate status: `review_candidate`
- Source type: Official public health source candidate
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for human review and possible source registry/backlog expansion.
- Review need: Verify official publisher, publication date, disease context, geography, and safe public wording before use.
- Public use allowed now: no
- Tavily score: 0.5942929
- Snippet: ## Global Navigation. An agency of the European Union. ## Main Navigation (desktop). ### The European Respiratory Virus Surveillance Summary (ERVISS). ECDC was notified on 2 May 2026 by the Netherlands via the European Union (EU) Early Warning and Response System (EWRS) about a cluster of unknown disease with severe respiratory symptoms on a cruise ship in the South Atlantic, operating under a Dutch flag. Of these s…

### Candidate 19 — TAB-hantavirus-06052026.pdf

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
- Tavily score: 0.59344494
- Snippet: # What is the public health risk of ANDV infection for the EU/EEA population given the outbreak on the cruise ship? Even if transmission of ANDV were to happen from passengers evacuated from the cruise ship, ANDV does not transmit easily so it is unlikely that it would cause many cases or a widespread outbreak if infection prevention and control measures are applied. ECDC provides the following recommendations to pu…

### Candidate 20 — Factsheet on orthohantavirus infections - ECDC - European Union

- URL: https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/factsheet-orthohantavirus-infections
- Domain: ecdc.europa.eu
- Discovery batch: europe-official
- Candidate ID: `ecdc-factsheet-on-orthohantavirus-infections-ecdc-european-union`
- Candidate tier: 3
- Candidate status: `review_candidate`
- Source type: Official disease, prevention, case definition, or methodology page
- Review priority: medium
- Already in backlog: no
- Safe candidate use: Candidate for methodology/source citation or educational page support.
- Review need: Use as source context only unless a human reviewer promotes a specific snapshot.
- Public use allowed now: no
- Tavily score: 0.98439
- Snippet: Orthohantavirus infections can cause haemorrhagic fever with renal syndrome (HFRS), a clinical syndrome characterised by fever and acute kidney injury. HFRS is a notifiable disease in the EU under viral haemorrhagic fevers (VHF), and the EU case definition for surveillance of VHF is set out in Commission Implementing Decision (EU) 2018/945 of 22 June 2018 [1]. Members of *Orthohantavirus* genus are carried by rodent…

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
- Tavily score: 0.98335
- Snippet: [Skip to main content](https://www.ecdc.europa.eu/en#main-content). [Other sites](https://www.ecdc.europa.eu/en#). * [ECDC](https://www.ecdc.europa.eu/en/home). [European Centre for Disease Prevention and Control](https://www.ecdc.europa.eu/en). [Close](https://www.ecdc.europa.eu/en#wtEtransModal "Close this window"). ### [Infectious disease topics](https://www.ecdc.europa.eu/en/all-topics). * [Related public health…

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
- Tavily score: 0.5224708
- Snippet: En el 2025 se confirmaron 44 casos de hantavirus. Un 70 % correspondió a hombres. (n=31). Se presentó una mediana de edad de 36 años (rango: 6-74 años),

### Candidate 23 — [PDF] Public Health Guidance for Hantavirus (Andes Virus)

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
- Tavily score: 0.81665546
- Snippet: Public Health Guidance for Hantavirus (Andes Virus) 1 AT A GLANCE Public Health Guidance for Hantavirus (Andes Virus) Published: May 15, 2026 This guidance reflects current evidence as of May 13, 2026, and will be updated as new information becomes available. Gastrointestinal symptoms such as nausea, abdominal pain and vomiting are also common.3,4 • In severe cases (HPS) the disease can rapidly progress to include a…

### Candidate 24 — [PDF] Infection Prevention and Control Precautions for Hantavirus (Andes ...

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
- Tavily score: 0.776708
- Snippet: Infection Prevention and Control Precautions for Hantavirus (Andes Virus) 1 AT A GLANCE Infection Prevention and Control Precautions for Hantavirus (Andes Virus) Published: May 11, 2026 Purpose This document was created to support health care providers and public health units based on a rapid review of the latest available evidence. Personal Protective Equipment (PPE):5 Health care workers are to wear the following:…

### Candidate 25 — [PDF] Nationally Notifiable Infectious Diseases and Conditions, United ...

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
- Tavily score: 0.99877447
- Snippet: Hantavirus infection, non-hantavirus pulmonary syndrome §. Reporting Area. Current week. Previous 52 weeks Max †. Cum YTD 2026 †. Cum YTD 2025 †.

### Candidate 26 — Hantavirus pulmonary syndrome: (Week 2) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 17, 2…

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
- Tavily score: 0.99869555
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus pulmonary syndrome: (Week 2) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending January 17, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Territories, and Non-U.S. Res…

### Candidate 27 — Hantavirus pulmonary syndrome (Week 13) Weekly cases* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 04, 2026

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
- Tavily score: 0.998259
- Snippet: U.S. flag An official website of the United States government. A .gov website belongs to an official government organization in the United States. # Hantavirus pulmonary syndrome (Week 13) Weekly cases\* of notifiable diseases, United States, U.S. Territories, and Non-U.S. Residents week ending April 04, 2026. This data includes weekly cases of notifiable diseases, United States, U.S. Territories, and Non-U.S. Resid…

## Next manual-review steps

1. Open each new candidate URL and verify publisher/date/content directly.
2. Assign one review outcome: `approved_public_snapshot`, `approved_source_only`, `review_candidate`, or `rejected`.
3. Only after review, update public JSON or page copy in a separate commit.
4. Run `npm run lint`, `npm run build`, and `npm run validate:seo` before deploy.
