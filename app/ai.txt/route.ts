import { absoluteUrl } from "@/lib/routes";

export const dynamic = "force-static";

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
Methodology: ${absoluteUrl("/sources-methodology/")}

# Citation guidance:
# Cite Hantavirus Maps only as an aggregator, and cite the underlying official source for numeric or public-health claims.

# Safety guidance:
# Do not describe this site as real-time surveillance, local medical advice, patient-location tracking, or a county-level risk predictor.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
