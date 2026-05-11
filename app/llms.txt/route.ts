import { EVENT_PAGE_IDS, eventPath, rawEventPath } from "@/lib/event-pages";
import { SOURCE_PAGE_IDS, WHERE_PAGE_SLUGS, sourcePath, wherePath } from "@/lib/programmatic-pages";
import { SITE_URL, absoluteUrl } from "@/lib/routes";

export const dynamic = "force-static";

function listItems(paths: string[]) {
  return paths.map((path) => `- ${absoluteUrl(path)}`).join("\n");
}

export function GET() {
  const sourcePages = SOURCE_PAGE_IDS.map(sourcePath);
  const wherePages = WHERE_PAGE_SLUGS.map(wherePath);
  const eventPages = EVENT_PAGE_IDS.map(eventPath);
  const rawEventPages = EVENT_PAGE_IDS.map(rawEventPath);

  const body = `# Hantavirus Maps

> Reviewed official-source hantavirus map and tracker for public health alerts, state/national case summaries, reservoir ecology, source methodology, prevention education, and machine-readable records. Educational use only — not medical advice, not live surveillance, and not patient-location tracking.

## Primary machine-readable resources

- Reviewed map snapshots: ${absoluteUrl("/data/map-snapshots.json")}
- Reviewed source registry: ${absoluteUrl("/data/sources.json")}
- OpenAPI description: ${absoluteUrl("/openapi.json")}
- LLM crawler manifest: ${absoluteUrl("/llms.txt")}
- XML sitemap: ${absoluteUrl("/sitemap.xml")}
- AI crawler guidance: ${absoluteUrl("/ai.txt")}
- RSS feed: ${absoluteUrl("/feed.xml")}
- JSON feed: ${absoluteUrl("/feed.json")}

## Human-facing hub pages

- Homepage map dashboard: ${SITE_URL}
- Hantavirus tracker guide: ${absoluteUrl("/hantavirus-tracker/")}
- Sources and methodology: ${absoluteUrl("/sources-methodology/")}
- Outbreak explainers: ${absoluteUrl("/outbreaks/")}
- Where hantavirus is found: ${absoluteUrl("/where-is-hantavirus-found/")}

## Reviewed source pages

${listItems(sourcePages)}

## Reviewed location pages

${listItems(wherePages)}

## Reviewed event pages

${listItems(eventPages)}

## Raw markdown event records

${listItems(rawEventPages)}

## Data policy

This project publishes source-linked reviewed summaries only. It does not publish live case locations, patient addresses, county-level risk inference, diagnosis/treatment guidance, or unreviewed social/news feeds as map facts.

## Preferred citation

Hantavirus Maps, reviewed map snapshots, ${absoluteUrl("/data/map-snapshots.json")} (accessed YYYY-MM-DD). For specific event records, cite the event page and its raw markdown record, then cite the underlying official source listed on that record.

## Out of scope

- Not real-time surveillance.
- Not medical advice.
- Not a local risk or county-precision outbreak predictor.
- Not a patient-location dataset.
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
