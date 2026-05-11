# Hantavirus Source Check - 2026-05-11

Generated: 2026-05-11T07:47:04Z

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

- Latest year/week found: 2026 week 17
- Latest rows included in report: 70
- U.S. Residents row present: yes
- Rows returned by latest-first query before filtering: 500

| Area | Year | Week | m1 | m1_flag | m2 | m2_flag | m3 | m3_flag | m4 | m4_flag | Geocode present |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| U.S. Residents | 2026 | 17 |  | - | 4.0 |  | 2.0 |  | 17.0 |  |  |
| Alabama | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Alaska | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| American Samoa | 2026 | 17 |  | N |  | NC |  | N |  | N |  |
| Arizona | 2026 | 17 |  | - | 1.0 |  |  | - | 3.0 |  | yes |
| Arkansas | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| California | 2026 | 17 |  | - | 1.0 |  |  | - | 4.0 |  | yes |
| Colorado | 2026 | 17 |  | - | 1.0 |  |  | - | 2.0 |  | yes |
| Commonwealth of Northern Mariana Islands | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| Connecticut | 2026 | 17 |  | N |  | NC |  | N |  | N | yes |
| Delaware | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| District of Columbia | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| East North Central | 2026 | 17 |  | - | 1.0 |  |  | - | 1.0 |  |  |
| East South Central | 2026 | 17 |  | - | 0.0 |  |  | - | 1.0 |  |  |
| Florida | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Georgia | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Guam | 2026 | 17 |  | N |  | NC |  | N |  | N |  |
| Hawaii | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Idaho | 2026 | 17 |  | - | 1.0 |  |  | - | 1.0 |  | yes |
| Illinois | 2026 | 17 |  | - | 0.0 |  |  | - | 1.0 |  | yes |
| Indiana | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Iowa | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Kansas | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Kentucky | 2026 | 17 |  | - | 0.0 |  |  | - | 1.0 |  | yes |
| Louisiana | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Maine | 2026 | 17 |  | - | 1.0 |  |  | - |  | - | yes |
| Maryland | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Massachusetts | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Michigan | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Middle Atlantic | 2026 | 17 |  | - | 1.0 |  | 1.0 |  |  | - |  |
| Minnesota | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Mississippi | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Missouri | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Montana | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Mountain | 2026 | 17 |  | - | 3.0 |  | 1.0 |  | 8.0 |  |  |
| Nebraska | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Nevada | 2026 | 17 |  | - | 1.0 |  |  | - | 1.0 |  | yes |
| New England | 2026 | 17 |  | - | 1.0 |  |  | - |  | - |  |
| New Hampshire | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| New Jersey | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| New Mexico | 2026 | 17 |  | - | 2.0 |  | 1.0 |  | 1.0 |  | yes |
| New York | 2026 | 17 |  | - | 1.0 |  | 1.0 |  |  | - | yes |
| New York City | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Non-U.S. Residents | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| North Carolina | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| North Dakota | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Ohio | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Oklahoma | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Oregon | 2026 | 17 |  | - | 1.0 |  |  | - | 1.0 |  | yes |
| Pacific | 2026 | 17 |  | - | 1.0 |  |  | - | 6.0 |  |  |
| Pennsylvania | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Puerto Rico | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Rhode Island | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| South Atlantic | 2026 | 17 |  | - | 0.0 |  |  | - | 1.0 |  | yes |
| South Carolina | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| South Dakota | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Tennessee | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Texas | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Total | 2026 | 17 |  | - | 4.0 |  | 2.0 |  | 17.0 |  |  |
| U.S. Territories | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| U.S. Virgin Islands | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| Utah | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Vermont | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Virginia | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Washington | 2026 | 17 |  | - | 0.0 |  |  | - | 1.0 |  | yes |
| West North Central | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| West South Central | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| West Virginia | 2026 | 17 |  | - | 0.0 |  |  | - | 1.0 |  | yes |
| Wisconsin | 2026 | 17 |  | - | 1.0 |  |  | - |  | - | yes |
| Wyoming | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |

### Hantavirus infection, non-hantavirus pulmonary syndrome

Query: `https://data.cdc.gov/resource/x9gk-5huc.json?%24select=states%2Cyear%2Cweek%2Clabel%2Cm1%2Cm1_flag%2Cm2%2Cm2_flag%2Cm3%2Cm3_flag%2Cm4%2Cm4_flag%2Cgeocode&%24where=label%3D%27Hantavirus+infection%2C+non-hantavirus+pulmonary+syndrome%27&%24order=year+DESC%2C+week+DESC&%24limit=500`

- Latest year/week found: 2026 week 17
- Latest rows included in report: 70
- U.S. Residents row present: yes
- Rows returned by latest-first query before filtering: 500

| Area | Year | Week | m1 | m1_flag | m2 | m2_flag | m3 | m3_flag | m4 | m4_flag | Geocode present |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| U.S. Residents | 2026 | 17 |  | - | 1.0 |  | 1.0 |  | 1.0 |  |  |
| Alabama | 2026 | 17 |  | N |  | NC |  | N |  | N | yes |
| Alaska | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| American Samoa | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| Arizona | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Arkansas | 2026 | 17 |  | N |  | NC |  | N |  | N | yes |
| California | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Colorado | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Commonwealth of Northern Mariana Islands | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| Connecticut | 2026 | 17 |  | N |  | NC |  | N |  | N | yes |
| Delaware | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| District of Columbia | 2026 | 17 |  | N |  | NC |  | N |  | N |  |
| East North Central | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| East South Central | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| Florida | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Georgia | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Guam | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| Hawaii | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Idaho | 2026 | 17 |  | N |  | NC |  | N |  | N | yes |
| Illinois | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Indiana | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Iowa | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Kansas | 2026 | 17 |  | - | 0.0 |  |  | - | 1.0 |  | yes |
| Kentucky | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Louisiana | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Maine | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Maryland | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Massachusetts | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Michigan | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Middle Atlantic | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| Minnesota | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Mississippi | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Missouri | 2026 | 17 |  | N |  | NC |  | N |  | N | yes |
| Montana | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Mountain | 2026 | 17 |  | - | 1.0 |  |  | - |  | - |  |
| Nebraska | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Nevada | 2026 | 17 |  | - | 1.0 |  |  | - |  | - | yes |
| New England | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| New Hampshire | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| New Jersey | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| New Mexico | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| New York | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| New York City | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Non-U.S. Residents | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| North Carolina | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| North Dakota | 2026 | 17 |  | - | 1.0 |  | 1.0 |  |  | - | yes |
| Ohio | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Oklahoma | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Oregon | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Pacific | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| Pennsylvania | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Puerto Rico | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Rhode Island | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| South Atlantic | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| South Carolina | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| South Dakota | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Tennessee | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Texas | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Total | 2026 | 17 |  | - | 1.0 |  | 1.0 |  | 1.0 |  |  |
| U.S. Territories | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| U.S. Virgin Islands | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| Utah | 2026 | 17 |  | - | 1.0 |  |  | - |  | - | yes |
| Vermont | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Virginia | 2026 | 17 |  | N |  | NC |  | N |  | N | yes |
| Washington | 2026 | 17 |  | N |  | NC |  | N |  | N | yes |
| West North Central | 2026 | 17 |  | - | 1.0 |  | 1.0 |  | 1.0 |  |  |
| West South Central | 2026 | 17 |  | - | 0.0 |  |  | - |  | - |  |
| West Virginia | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Wisconsin | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |
| Wyoming | 2026 | 17 |  | - | 0.0 |  |  | - |  | - | yes |

## Source Registry URL Review Candidates

Status and content type are reachability checks only. A 200 response does not mean the source content has been reviewed for public data changes.

| ID | Status | Content-Type | Method | Length | Note | Final URL |
| --- | --- | --- | --- | --- | --- | --- |
| cdc-reported-cases | 200 | text/html | HEAD |  |  | https://www.cdc.gov/hantavirus/data-research/cases/index.html |
| cdc-surveillance | 200 | text/html | HEAD |  |  | https://www.cdc.gov/hantavirus/php/surveillance/index.html |
| cdc-about | 200 | text/html | HEAD |  | Redirect followed. | https://www.cdc.gov/hantavirus/about/index.html |
| cdc-prevention | 200 | text/html | HEAD |  |  | https://www.cdc.gov/hantavirus/prevention/index.html |
| cdc-rodent-cleanup | 200 | text/html | HEAD |  |  | https://www.cdc.gov/healthy-pets/rodent-control/clean-up.html |
| cdc-eid-reservoir-table | 200 | text/html | HEAD |  | Redirect followed. | https://wwwnc.cdc.gov/eid/404.html?aspxerrorpath=/eid/article/31/2/24-1069-t1 |
| nmdoh-hantavirus | 200 | text/html | HEAD | 57708 |  | https://www.nmhealth.org/about/erd/ideb/zdp/hps/ |
| nmdoh-2026-case | 200 | text/html | HEAD | 0 |  | https://www.nmhealth.org/news/safety/2026/3/?view=2322 |
| nmdoh-2025-death | 200 | text/html | HEAD | 0 |  | https://www.nmhealth.org/news/awareness/2025/3/?view=2189 |
| cdph-hantavirus | error |  | GET |  | <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1000)> | https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/HantavirusPulmonarySyndrome.aspx |
| cdph-occupational-2025 | error |  | GET |  | <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:1000)> | https://www.cdph.ca.gov/Programs/CCDPHP/DEODC/OHB/Pages/February2025.aspx |
| adhs-han-2024 | 403 | text/html; charset=UTF-8 | GET |  | Forbidden | https://www.azdhs.gov/documents/preparedness/epidemiology-disease-control/vector-borne-zoonotic-diseases/hantavirus-han.pdf |
| adhs-protocol-2025 | 403 | text/html; charset=UTF-8 | GET |  | Forbidden | https://www.azdhs.gov/documents/preparedness/epidemiology-disease-control/investigation-manual/vectorborne/hantavirus-protocol.pdf |
| cdphe-hantavirus | 403 | text/html | GET | 986 | Forbidden | https://cdphe.colorado.gov/communicable/animal-related-diseases/hantavirus |
| cdc-mmwr-denver-2018 | 200 | text/html | HEAD |  |  | https://www.cdc.gov/mmwr/volumes/68/wr/mm6835a5.htm |
| ecdc-2023-aer | 200 | text/html; charset=UTF-8 | HEAD | 0 |  | https://www.ecdc.europa.eu/en/publications-data/hantavirus-infection-annual-epidemiological-report-2023 |
| ecdc-factsheet | 200 | text/html; charset=UTF-8 | HEAD | 101493 | Redirect followed. | https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/factsheet-orthohantavirus-infections |
| ecdc-cruise-2026 | 200 | text/html; charset=UTF-8 | HEAD | 0 |  | https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and |
| who-factsheet-2026 | 200 | text/html; charset=utf-8 | HEAD |  |  | https://www.who.int/news-room/fact-sheets/detail/hantavirus |
| who-don600-2026 | 200 | text/html; charset=utf-8 | HEAD |  |  | https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600 |
| paho-alert-2025 | 200 | text/html; charset=UTF-8 | HEAD |  |  | https://www.paho.org/en/documents/epidemiological-alert-hantavirus-pulmonary-syndrome-americas-region-19-december-2025 |
| paho-cruise-2026 | 200 | text/html; charset=UTF-8 | HEAD |  |  | https://www.paho.org/en/news/7-5-2026-paho-supports-international-response-hantavirus-pulmonary-syndrome-cases-linked |

## WHO Disease Outbreak News Review Candidate

Index URL: `https://www.who.int/emergencies/disease-outbreak-news`

This check looks for the keyword `hantavirus` in the DON index response and extracts matching links when static HTML links are available. Human review is required before any DON item is reflected publicly.

- HTTP status: 200
- Content-Type: text/html; charset=utf-8
- Keyword present in response: no

No static DON links containing `hantavirus` were extracted from the response.

## GBIF Reservoir Ecology Review Candidates

GBIF checks are limited to species match and occurrence count endpoints. These counts are biodiversity occurrence context only. They are not infected-animal counts, human case counts, or local risk indicators.

| Queried name | Match | Status | Usage key | Accepted key | Scientific name count | Scientific name coord count | Accepted taxon count | Accepted taxon coord count | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Peromyscus maniculatus | EXACT | ACCEPTED | 2437967 | 2437967 | 321227 | 259366 | 321227 | 259366 |  |
| Clethrionomys glareolus | EXACT | SYNONYM | 2439140 | 5706764 | 216762 | 191708 | 216762 | 191708 |  |
| Myodes glareolus | EXACT | ACCEPTED | 5706764 | 5706764 | 216762 | 191708 | 216762 | 191708 |  |

## Reviewer Notes

- Treat every item above as a candidate for manual review.
- Do not copy provisional NNDSS rows into public JSON without deciding display rules, flag handling, and source wording.
- Do not convert GBIF occurrence counts or reservoir range context into exact human risk claims.
- Public updates should remain source-linked, reviewed, conservative, and explicit about limitations.
