# Hantavirus Maps Data Source Audit — 2026-05-10

This note tracks additional reliable data sources for `hantavirusmaps.org` and how they should be used. The priority remains: official, source-linked, reviewed, conservative public-health interpretation. Do not turn any source into a live/local risk claim.

## Current source registry baseline

`data/sources/source-registry.json` currently contains 22 reviewed sources across CDC, NMDOH, CDPH, ADHS, CDPHE, CDC MMWR/EID, ECDC, WHO, and PAHO.

## Newly confirmed useful sources / endpoints

### 1) CDC NNDSS Weekly Data — Socrata dataset `x9gk-5huc`

- URL: `https://data.cdc.gov/resource/x9gk-5huc.json`
- Metadata URL: `https://data.cdc.gov/api/views/x9gk-5huc`
- Dataset name: `NNDSS Weekly Data`
- Attribution: CDC Office of Public Health Data, Surveillance, and Technology.
- Relevant labels confirmed by query:
  - `Hantavirus pulmonary syndrome`
  - `Hantavirus infection, non-hantavirus pulmonary syndrome`
- Useful fields:
  - `states`
  - `year`
  - `week`
  - `label`
  - `m1` / `m1_flag` current week
  - `m2` / `m2_flag` previous 52-week max
  - `m3` / `m3_flag` cumulative YTD current year
  - `m4` / `m4_flag` cumulative YTD previous year
  - `geocode` for state/area centroid where present
- Example query:
  ```text
  https://data.cdc.gov/resource/x9gk-5huc.json?$limit=20&$where=label='Hantavirus pulmonary syndrome'&$order=year DESC, week DESC
  ```
- Confirmed sample: 2026 week 17 includes U.S. Residents HPS row with `m3=2.0`, `m4=17.0`; state/region rows follow.

Recommended use:
- Strong candidate for an internal weekly checker and reviewed public snapshot.
- Use for U.S. weekly provisional signal / YTD context only.
- Public display should label this as provisional NNDSS weekly data, not final annual totals and not local patient locations.
- Do not use geocode centroids as actual case locations.

Risk / limitations:
- Weekly data is provisional.
- Rows include flags (`N`, `NC`, `-`) that must be interpreted safely.
- There are region aggregate rows and state rows; avoid double counting if aggregating.
- This is still state/area-level public reporting, not county precision.

### 2) CDC Hantavirus surveillance page additional PDFs

Existing page: `https://www.cdc.gov/hantavirus/php/surveillance/index.html`

Additional useful links discovered on the page:
- Andes virus guidance PDF:
  - `https://www.cdc.gov/hantavirus/media/pdfs/2026/05/Andes_virus_guidance_8FINAL.pdf`
- Hantavirus case report form PDF:
  - `https://www.cdc.gov/hantavirus/media/pdfs/2025/06/357437-A_FRM_NCEZID_Hantavirus_CRF_508pass.pdf`
- Case definitions:
  - `https://ndc.services.cdc.gov/case-definitions/hantavirus-pulmonary-syndrome-2015/`
  - `https://ndc.services.cdc.gov/case-definitions/hantavirus-infection-non-hantavirus-pulmonary-syndrome-2015/`

Recommended use:
- Add to source registry as methodology/supporting sources, not map markers.
- Useful for `/sources-methodology/`, `/symptoms/`, and tracker limitations around surveillance definitions and reporting.
- Andes guidance is relevant to the 2026 cruise/Andes-virus context and should remain guidance/context, not a live outbreak feed.

### 3) ECDC Annual Epidemiological Report PDF

- Page already in registry: `https://www.ecdc.europa.eu/en/publications-data/hantavirus-infection-annual-epidemiological-report-2023`
- Direct PDF discovered and verified:
  - `https://www.ecdc.europa.eu/sites/default/files/documents/HANTA_AER_2023.pdf`
- Verified HTTP 200, content type `application/pdf`, size about 858 KB.

Recommended use:
- Add direct PDF URL to source registry or source notes.
- Good candidate for a manual/periodic Europe CSV-style extraction, but do not automate public changes without review.
- Keep Europe page at national/regional context; do not compare directly with U.S. HPS.

Risk / limitations:
- ECDC report data represents EU/EEA reporting context and HFRS/orthohantavirus surveillance, not the same syndrome framing as U.S. HPS maps.
- Direct PDF extraction should be reviewed by a human.

### 4) WHO Disease Outbreak News index and RSS/news feed

- DON index: `https://www.who.int/emergencies/disease-outbreak-news`
- DON item already in registry: `https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600`
- WHO news RSS exists: `https://www.who.int/rss-feeds/news-english.xml`

Recommended use:
- WHO DON index can be checked for new official outbreak notices.
- Treat as official alert discovery, not a complete case database.
- Human review required before showing a new DON item publicly.

Risk / limitations:
- The generic WHO news RSS is not specific to DON or hantavirus; it may be noisy.
- Need a robust filter and review queue if automated.

### 5) GBIF species and occurrence API for reservoir ecology

Confirmed endpoints:
- Species match, deer mouse:
  - `https://api.gbif.org/v1/species/match?name=Peromyscus%20maniculatus`
  - Accepted `usageKey=2437967`.
- Species match, bank vole synonym:
  - `https://api.gbif.org/v1/species/match?name=Clethrionomys%20glareolus`
  - Returns synonym with accepted species `Myodes glareolus`, `speciesKey=5706764`.
- Occurrence count, deer mouse:
  - `https://api.gbif.org/v1/occurrence/search?scientificName=Peromyscus%20maniculatus&limit=0`
  - Count observed: `321227`; with coordinates count observed: `259366`.
- Occurrence count, bank vole:
  - `https://api.gbif.org/v1/occurrence/search?scientificName=Clethrionomys%20glareolus&limit=0`
  - Count observed: `216762`.

Recommended use:
- Good source for reservoir ecology/background maps after license review and data thinning/generalization.
- Prefer aggregated/generalized region overlays or density summaries, not raw points.
- Include `license`, `datasetKey`, `publishingOrgKey`, `basisOfRecord`, `hasCoordinate`, and `coordinateUncertaintyInMeters` in any internal record.

Risk / limitations:
- GBIF occurrence records are biodiversity observations, not infected-animal records.
- iNaturalist and similar data are observation-biased.
- Raw coordinates can imply false precision; use generalized display only.
- License/attribution must be checked before commercial use.

## Candidate next implementation tasks

1. Add new source records to `data/sources/source-registry.json`:
   - `cdc-nndss-weekly-socrata`
   - `cdc-hps-case-definition-2015`
   - `cdc-non-hps-case-definition-2015`
   - `cdc-andes-virus-guidance-2026`
   - `cdc-hantavirus-case-report-form-2025`
   - `ecdc-hanta-aer-2023-pdf`
   - `gbif-deer-mouse-occurrences`
   - `gbif-bank-vole-occurrences`
2. Create an internal script, e.g. `scripts/check_hantavirus_sources.py`, that:
   - checks CDC Socrata latest year/week for both hantavirus labels,
   - checks WHO DON index for hantavirus keyword URLs,
   - checks source URLs for HTTP status/content-type,
   - writes a markdown diff report for human review.
3. Add a reviewed NNDSS snapshot JSON only after deciding display rules for provisional weekly fields and flags.
4. Add a reservoir-source methodology paragraph explaining GBIF occurrence bias and why raw points are not shown.

## Public display rule

Only `review_status="reviewed"` records should be public. Automated checks may discover candidate changes, but they should not directly change map claims without human review.
