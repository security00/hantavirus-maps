# Hantavirus Source Check - 2026-05-10

Generated: 2026-05-10T20:31:56Z

**Review status:** All findings in this report are internal review candidates only. They are not public site data, not final surveillance data, and not live/local risk claims.

This script reads the source registry and external official/reliable endpoints, then writes this Markdown report. It does not modify public data JSON files.

## Inputs and Scope

- Source registry read: `data/sources/source-registry.json`
- Source registry records checked: 22
- Registry lastReviewed: 2026-05-10
- Public data JSON files modified: no
- Reservoir ecology checks use GBIF counts only; they do not indicate infected animals, human cases, or local risk.

## CDC NNDSS Weekly Data Review Candidates

Endpoint: `https://data.cdc.gov/resource/x9gk-5huc.json`

These are provisional weekly NNDSS rows for reviewer awareness. Do not use the geocode field as a patient location, and do not aggregate rows without reviewing flags and area definitions.

### Hantavirus pulmonary syndrome

Query: `https://data.cdc.gov/resource/x9gk-5huc.json?%24select=states%2Cyear%2Cweek%2Clabel%2Cm1%2Cm1_flag%2Cm2%2Cm2_flag%2Cm3%2Cm3_flag%2Cm4%2Cm4_flag%2Cgeocode&%24where=label%3D%27Hantavirus+pulmonary+syndrome%27&%24order=year+DESC%2C+week+DESC&%24limit=500`

- Check result: review needed - <urlopen error [Errno -3] Temporary failure in name resolution>

### Hantavirus infection, non-hantavirus pulmonary syndrome

Query: `https://data.cdc.gov/resource/x9gk-5huc.json?%24select=states%2Cyear%2Cweek%2Clabel%2Cm1%2Cm1_flag%2Cm2%2Cm2_flag%2Cm3%2Cm3_flag%2Cm4%2Cm4_flag%2Cgeocode&%24where=label%3D%27Hantavirus+infection%2C+non-hantavirus+pulmonary+syndrome%27&%24order=year+DESC%2C+week+DESC&%24limit=500`

- Check result: review needed - <urlopen error [Errno -3] Temporary failure in name resolution>

## Source Registry URL Review Candidates

Status and content type are reachability checks only. A 200 response does not mean the source content has been reviewed for public data changes.

| ID | Status | Content-Type | Method | Length | Note | Final URL |
| --- | --- | --- | --- | --- | --- | --- |
| cdc-reported-cases | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.cdc.gov/hantavirus/data-research/cases/index.html |
| cdc-surveillance | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.cdc.gov/hantavirus/php/surveillance/index.html |
| cdc-about | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.cdc.gov/hantavirus/ |
| cdc-prevention | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.cdc.gov/hantavirus/prevention/index.html |
| cdc-rodent-cleanup | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html |
| cdc-eid-reservoir-table | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://wwwnc.cdc.gov/eid/article/31/2/24-1069-t1 |
| nmdoh-hantavirus | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.nmhealth.org/about/erd/ideb/zdp/hps/ |
| nmdoh-2026-case | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.nmhealth.org/news/safety/2026/3/?view=2322 |
| nmdoh-2025-death | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.nmhealth.org/news/awareness/2025/3/?view=2189 |
| cdph-hantavirus | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/HantavirusPulmonarySyndrome.aspx |
| cdph-occupational-2025 | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.cdph.ca.gov/Programs/CCDPHP/DEODC/OHB/Pages/February2025.aspx |
| adhs-han-2024 | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.azdhs.gov/documents/preparedness/epidemiology-disease-control/vector-borne-zoonotic-diseases/hantavirus-han.pdf |
| adhs-protocol-2025 | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.azdhs.gov/documents/preparedness/epidemiology-disease-control/investigation-manual/vectorborne/hantavirus-protocol.pdf |
| cdphe-hantavirus | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://cdphe.colorado.gov/communicable/animal-related-diseases/hantavirus |
| cdc-mmwr-denver-2018 | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.cdc.gov/mmwr/volumes/68/wr/mm6835a5.htm |
| ecdc-2023-aer | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.ecdc.europa.eu/en/publications-data/hantavirus-infection-annual-epidemiological-report-2023 |
| ecdc-factsheet | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.ecdc.europa.eu/en/hantavirus-infection/facts |
| ecdc-cruise-2026 | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and |
| who-factsheet-2026 | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.who.int/news-room/fact-sheets/detail/hantavirus |
| who-don600-2026 | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600 |
| paho-alert-2025 | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.paho.org/en/documents/epidemiological-alert-hantavirus-pulmonary-syndrome-americas-region-19-december-2025 |
| paho-cruise-2026 | error |  | GET |  | <urlopen error [Errno -3] Temporary failure in name resolution> | https://www.paho.org/en/news/7-5-2026-paho-supports-international-response-hantavirus-pulmonary-syndrome-cases-linked |

## WHO Disease Outbreak News Review Candidate

Index URL: `https://www.who.int/emergencies/disease-outbreak-news`

This check looks for the keyword `hantavirus` in the DON index response and extracts matching links when static HTML links are available. Human review is required before any DON item is reflected publicly.

- HTTP status: error
- Content-Type: 
- Keyword present in response: no
- Check result: review needed - <urlopen error [Errno -3] Temporary failure in name resolution>

No static DON links containing `hantavirus` were extracted from the response.

## GBIF Reservoir Ecology Review Candidates

GBIF checks are limited to species match and occurrence count endpoints. These counts are biodiversity occurrence context only. They are not infected-animal counts, human case counts, or local risk indicators.

| Queried name | Match | Status | Usage key | Accepted key | Scientific name count | Scientific name coord count | Accepted taxon count | Accepted taxon coord count | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Peromyscus maniculatus |  |  |  |  |  |  |  |  | <urlopen error [Errno -3] Temporary failure in name resolution> |
| Clethrionomys glareolus |  |  |  |  |  |  |  |  | <urlopen error [Errno -3] Temporary failure in name resolution> |
| Myodes glareolus |  |  |  |  |  |  |  |  | <urlopen error [Errno -3] Temporary failure in name resolution> |

## Reviewer Notes

- Treat every item above as a candidate for manual review.
- Do not copy provisional NNDSS rows into public JSON without deciding display rules, flag handling, and source wording.
- Do not convert GBIF occurrence counts or reservoir range context into exact human risk claims.
- Public updates should remain source-linked, reviewed, conservative, and explicit about limitations.
