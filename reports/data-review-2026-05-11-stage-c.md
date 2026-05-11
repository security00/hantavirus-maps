# Data Review - 2026-05-11 Stage C

Reviewer: OpenClaw / 铸剑堂·剑主  
Project: Hantavirus Maps  
Related candidate report: `reports/tavily-source-candidates-2026-05-11.md`  
SOP: `docs/data-review-sop.md`

## Summary

Reviewed the merged Tavily source-candidate queue after PR #1. This review promotes only conservative, official-source, event-level or national-summary information into public JSON. It does not create a live tracker, patient-location map, county/local risk map, or provisional NNDSS display.

| Candidate | Decision | Public data change |
| --- | --- | --- |
| WHO DON600, 2026-05-08 | `approved_public_snapshot` | Refine existing WHO alert with 8 cases / 3 deaths / 6 lab-confirmed Andes virus wording |
| WHO DON599, 2026-05-04 | `approved_source_only` | Add source registry record as timeline context; do not double-count |
| Argentina Ministry of Health, 2026-05-07 | `approved_public_snapshot` | Add Argentina national surveillance alert and case-summary snapshot: 42 cases YTD; 101 since SE 27 2025 in text only |
| Canada CPHO remarks, 2026-05 | `approved_source_only` | Add source registry record and refine Canada MV Hondius alert wording |
| Canada interdepartmental update, 2026-05-10 | `approved_public_snapshot` already present | Keep existing alert; refine risk wording |
| ECDC rapid assessment, 2026-05-06 | `approved_public_snapshot` already present | Refine ECDC alert wording with preliminary 7 symptomatic / 3 deaths context |
| CDC surveillance page / CDC Stacks NNDSS weekly non-HPS | `review_candidate` | No public count change; still needs NNDSS display rule |
| ECDC weekly communicable threats PDF | `approved_source_only` candidate | No public JSON change; too broad for current map data |

## Public-use boundary

- All promoted records remain reviewed snapshots or source-linked summaries.
- No candidate is treated as a live surveillance feed.
- No patient-level locations, exact local risk, or county-level risk inference is published.
- WHO DON599 is used only as a timeline/source reference because DON600 supersedes it for updated counts.
- Argentina’s 42-case number is national and year-to-date; the broader 101 confirmed notifications since SE 27 of 2025 are retained in text only and not mixed into the `reportedCases` field.
- Andes virus person-to-person wording remains narrow: rare and associated with close/prolonged contact in the event context.

## Candidate decisions

### WHO DON600 — approved public snapshot

- URL: `https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600`
- Publisher: World Health Organization
- Public fields approved:
  - Event: MV Hondius cruise-associated Andes virus cluster
  - Date: 2026-05-08
  - Cases/deaths wording: as of 8 May 2026, eight cases and three deaths; six laboratory-confirmed hantavirus infections identified as Andes virus
  - Risk wording: WHO assessed global population risk as low while investigations/contact tracing continued
- Public destination:
  - `data/alerts/official-alerts.json`
  - `data/sources/source-registry.json`
- Not approved:
  - Case-by-case passenger details
  - Patient travel routes as map points
  - Live travel-risk tracker language

### WHO DON599 — approved source-only

- URL: `https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599`
- Publisher: World Health Organization
- Use: initial Disease Outbreak News timeline source for the same MV Hondius cluster.
- Public destination:
  - `data/sources/source-registry.json`
  - referenced by the WHO alert source list
- Not approved:
  - Separate public alert count, because DON600 supersedes DON599.

### Argentina Ministry of Health update — approved public snapshot

- URL: `https://www.argentina.gob.ar/noticias/salud-sostiene-y-refuerza-la-vigilancia-epidemiologica-de-hantavirus-en-el-pais`
- Publisher: Argentina Ministry of Health / Argentina.gob.ar
- Public fields approved:
  - Date: 2026-05-07
  - National surveillance coordination after MV Hondius outbreak
  - 42 hantavirus cases notified in Argentina so far in 2026
  - 101 confirmed notifications since epidemiological week 27 of 2025, text-only context
- Public destination:
  - `data/alerts/official-alerts.json`
  - `data/cases/us-state-historical.json`
  - `data/sources/source-registry.json`
- Not approved:
  - Locality-level mapping from the Chubut family cluster mention
  - Patient/household linkage details
  - Treating 101 as the 2026 case value

### Canada CPHO and interdepartmental updates — approved source/context

- URLs:
  - `https://www.canada.ca/en/public-health/news/2026/05/remarks-from-the-chief-public-health-officer.html`
  - `https://www.canada.ca/en/global-affairs/news/2026/05/interdepartmental-media-update--hantavirus---may-10-2026.html`
- Publisher: Government of Canada / PHAC / Global Affairs Canada
- Public fields approved:
  - Canada passenger response context
  - screening/monitoring/isolation protocols for returning passengers
  - overall Canada population risk remained low, consistent with WHO
  - person-to-person Andes virus transmission is rare and requires close, prolonged contact
- Public destination:
  - source registry addition for CPHO remarks
  - refined Canada MV Hondius alert wording
- Not approved:
  - travel clearance guidance
  - live Canada case counter

### ECDC rapid assessment — approved existing public snapshot refinement

- URL: `https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and`
- Publisher: ECDC
- Public fields approved:
  - preliminary rapid assessment as of 2026-05-06
  - seven symptomatic people and three deaths
  - all people on the ship treated as close contacts under precautionary principle
- Public destination:
  - refined ECDC alert wording
- Not approved:
  - replacing WHO DON600 updated totals
  - live European outbreak feed

### CDC NNDSS / CDC Stacks weekly non-HPS — review candidate only

- URLs:
  - `https://www.cdc.gov/hantavirus/php/surveillance/index.html`
  - `https://stacks.cdc.gov/view/cdc/255695`
- Decision: `review_candidate`
- Reason: Still requires the NNDSS weekly display rule before any public value is shown. Non-HPS rows must not be mixed into HPS-focused public map summaries.

### ECDC weekly communicable threats PDF — source-only candidate

- URL: `https://www.ecdc.europa.eu/sites/default/files/documents/2026-WCP-0024%20Final.pdf`
- Decision: no public JSON change in this pass.
- Reason: Broad weekly PDF includes multiple disease signals. Useful as a future source-only citation if needed, but the dedicated ECDC assessment page is cleaner for the MV Hondius event.

## Files changed after review

- `data/sources/source-registry.json`
- `data/alerts/official-alerts.json`
- `data/cases/us-state-historical.json`
- `lib/event-pages.ts`
- `scripts/seo-constants.mjs`

## Required validation

- `python3 -m json.tool` on modified JSON files
- `npm run generate:event-markdown`
- `npm run generate:geo-markdown`
- `npm run lint`
- `npm run build`
- `npm run validate:seo`
