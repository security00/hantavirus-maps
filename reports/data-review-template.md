# Data Review - YYYY-MM-DD

Reviewer:
Project: Hantavirus Maps
Related candidate report: `reports/source-check-YYYY-MM-DD.md`

## Candidate

- Source ID:
- Candidate title:
- URL:
- Publisher:
- Source type: CDC / WHO / PAHO / ECDC / state health department / peer-reviewed / other
- Publication date:
- Reviewed date:
- Candidate data type: case summary / official alert / reservoir ecology / prevention guidance / source metadata / other

## Decision

- Status: `approved_public_snapshot` / `approved_source_only` / `review_candidate` / `rejected`
- Reason:
- Destination file if approved:
  - `data/sources/source-registry.json`
  - `data/cases/us-state-historical.json`
  - `data/alerts/official-alerts.json`
  - `data/reservoirs/rodent-reservoirs.json`
  - other:

## Review checklist

- [ ] Publisher is authoritative enough.
- [ ] URL is public and stable enough for citation.
- [ ] Field meanings are clear.
- [ ] Time period is clear.
- [ ] Geography is safe for public display.
- [ ] Data cannot be mistaken for patient-location data.
- [ ] Data cannot be mistaken for live/current local risk.
- [ ] Reservoir ecology, if any, is not presented as infected-animal or human-case data.
- [ ] Provisional status, if any, is clearly labeled.
- [ ] Public wording avoids live/real-time/exact-risk claims.
- [ ] Limitations are written near the public summary.
- [ ] Source IDs are linked from any public JSON record.

## Safe public summary

Allowed wording:

>

Geography level:

Time period:

Known limitations:

## Do not say

- 
- 
- 

## Notes / conflicts / follow-up

- 

## Validation after changes

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] affected page smoke check:
- [ ] sitemap/feed check if route/feed changed:
