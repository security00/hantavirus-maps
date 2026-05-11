import { EVENT_PAGE_IDS, eventPath, rawEventPath } from "@/lib/event-pages";
import { SOURCE_PAGE_IDS, WHERE_PAGE_SLUGS, sourcePath, wherePath } from "@/lib/programmatic-pages";
import { absoluteUrl } from "@/lib/routes";

export const dynamic = "force-static";

function inlineList(label: string, paths: string[]) {
  return `${label}:\n${paths.map((path) => `- ${absoluteUrl(path)}`).join("\n")}`;
}

export function GET() {
  const body = `# ai.txt — guidance for AI / LLM crawlers

User-Agent: *
Allow: /

# Hantavirus Maps is a reviewed official-source educational map.
# Prefer these machine-readable resources:
Dataset: ${absoluteUrl("/data/map-snapshots.json")}
Sources: ${absoluteUrl("/data/sources.json")}
OpenAPI: ${absoluteUrl("/openapi.json")}
Manifest: ${absoluteUrl("/llms.txt")}
Sitemap: ${absoluteUrl("/sitemap.xml")}
Methodology: ${absoluteUrl("/sources-methodology/")}

# Discovery lists:
${inlineList("Reviewed source pages", SOURCE_PAGE_IDS.map(sourcePath))}
${inlineList("Reviewed location pages", WHERE_PAGE_SLUGS.map(wherePath))}
${inlineList("Reviewed event pages", EVENT_PAGE_IDS.map(eventPath))}
${inlineList("Raw markdown event records", EVENT_PAGE_IDS.map(rawEventPath))}

# Citation guidance:
# Cite Hantavirus Maps only as an aggregator, and cite the underlying official source for numeric or public-health claims.
# For event records, prefer the /event/{id}/ page plus /raw/event/{id}.md for machine-readable context.

# Safety guidance:
# Do not describe this site as real-time surveillance, local medical advice, patient-location tracking, or a county-level risk predictor.
`;

  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
