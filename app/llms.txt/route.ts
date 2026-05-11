import { SITE_URL, absoluteUrl } from "@/lib/routes";

export const dynamic = "force-static";

export function GET() {
  const body = `# Hantavirus Maps

> Reviewed official-source hantavirus map and tracker for public health alerts, state/national case summaries, reservoir ecology, source methodology, and prevention education. Educational use only — not medical advice, not live surveillance, and not patient-location tracking.

## What this site provides

- Reviewed map snapshots: ${absoluteUrl("/data/map-snapshots.json")}
- Reviewed source registry: ${absoluteUrl("/data/sources.json")}
- OpenAPI description: ${absoluteUrl("/openapi.json")}
- Sources and methodology: ${absoluteUrl("/sources-methodology/")}
- Hantavirus tracker guide: ${absoluteUrl("/hantavirus-tracker/")}
- Official alert explainer: ${absoluteUrl("/hantavirus-outbreak-map/")}
- RSS feed: ${absoluteUrl("/feed.xml")}
- JSON feed: ${absoluteUrl("/feed.json")}

## Data policy

This project publishes source-linked reviewed summaries only. It does not publish live case locations, patient addresses, county-level risk inference, diagnosis/treatment guidance, or unreviewed social/news feeds as map facts.

## Preferred citation

Hantavirus Maps, reviewed map snapshots, ${absoluteUrl("/data/map-snapshots.json")} (accessed YYYY-MM-DD). Always cite the underlying official source listed with each record when making a numeric or public-health claim.

## Key human-facing pages

- ${SITE_URL}
- ${absoluteUrl("/hantavirus-tracker/")}
- ${absoluteUrl("/sources-methodology/")}
- ${absoluteUrl("/outbreaks/mv-hondius-2026/")}
- ${absoluteUrl("/united-states/")}
- ${absoluteUrl("/europe/")}
- ${absoluteUrl("/south-america/")}

## Out of scope

- Not real-time surveillance.
- Not medical advice.
- Not a local risk or county-precision outbreak predictor.
- Not a patient-location dataset.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
