import { EVENT_PAGE_IDS } from "@/lib/event-pages";
import { SOURCE_PAGE_IDS, WHERE_PAGE_SLUGS } from "@/lib/programmatic-pages";
import { SITE_URL, absoluteUrl } from "@/lib/routes";

export const dynamic = "force-static";


const eventPaths = Object.fromEntries(
  EVENT_PAGE_IDS.flatMap((id) => [
    [
      `/event/${id}/`,
      {
        get: {
          operationId: `getEventPage_${id.replaceAll("-", "_")}`,
          summary: `Reviewed event page: ${id}`,
          description: "Human-facing reviewed event/case page with Article, Dataset, ClaimReview, and BreadcrumbList structured data.",
          responses: { "200": { description: "HTML event page" } },
        },
      },
    ],
    [
      `/raw/event/${id}.md`,
      {
        get: {
          operationId: `getRawEventMarkdown_${id.replaceAll("-", "_")}`,
          summary: `Raw markdown event record: ${id}`,
          description: "Plain markdown shadow for LLM retrieval and citation systems.",
          responses: { "200": { description: "Markdown event record", content: { "text/markdown": { schema: { type: "string" } } } } },
        },
      },
    ],
  ]),
);

const sourcePaths = Object.fromEntries(
  SOURCE_PAGE_IDS.map((id) => [
    `/source/${id}/`,
    {
      get: {
        operationId: `getSourcePage_${id.replaceAll("-", "_")}`,
        summary: `Reviewed source page: ${id}`,
        description: "Human-facing source note explaining source use, limitations, and linked map/event records.",
        responses: { "200": { description: "HTML source page" } },
      },
    },
  ]),
);

const wherePaths = Object.fromEntries(
  WHERE_PAGE_SLUGS.map((slug) => [
    `/where/${slug}/`,
    {
      get: {
        operationId: `getWherePage_${slug.replaceAll("-", "_")}`,
        summary: `Reviewed location page: ${slug}`,
        description: "Human-facing location page for reviewed source-linked map context, not local live risk.",
        responses: { "200": { description: "HTML location page" } },
      },
    },
  ]),
);

export function GET() {
  return Response.json(
    {
      openapi: "3.1.0",
      info: {
        title: "Hantavirus Maps public data",
        version: "1.0.0",
        summary: "Reviewed official-source hantavirus map snapshots and source registry.",
        description:
          "Public educational dataset for reviewed map summaries, official alerts, reservoir ecology context, and source metadata. Not live surveillance, not medical advice, and not patient-location tracking.",
        termsOfService: absoluteUrl("/terms-of-use/"),
        contact: {
          name: "Hantavirus Maps",
          email: "support@hantavirusmaps.org",
        },
        license: {
          name: "CC-BY-4.0",
          url: "https://creativecommons.org/licenses/by/4.0/",
        },
      },
      servers: [{ url: SITE_URL, description: "Production" }],
      paths: {
        "/data/map-snapshots.json": {
          get: {
            operationId: "getMapSnapshots",
            summary: "Reviewed map snapshot bundle",
            description:
              "Returns reviewed case summaries, official alerts, reservoir ecology context, and linked source records. Not a live case feed.",
            responses: {
              "200": {
                description: "Map snapshot dataset",
                content: { "application/json": { schema: { $ref: "#/components/schemas/MapSnapshotBundle" } } },
              },
            },
          },
        },
        "/data/sources.json": {
          get: {
            operationId: "getSources",
            summary: "Reviewed source registry",
            description: "Returns source records used by Hantavirus Maps with review dates, publisher, use, and limitations.",
            responses: {
              "200": {
                description: "Source registry dataset",
                content: { "application/json": { schema: { $ref: "#/components/schemas/SourceRegistry" } } },
              },
            },
          },
        },
        "/openapi.json": {
          get: {
            operationId: "getOpenApi",
            summary: "OpenAPI description for all machine-readable discovery endpoints",
            responses: { "200": { description: "OpenAPI JSON document" } },
          },
        },
        "/llms.txt": {
          get: {
            operationId: "getLlmsTxt",
            summary: "LLM crawler manifest",
            responses: { "200": { description: "Plain-text LLM manifest" } },
          },
        },
        "/ai.txt": {
          get: {
            operationId: "getAiTxt",
            summary: "AI crawler guidance",
            responses: { "200": { description: "Plain-text AI crawler guidance" } },
          },
        },
        "/sitemap.xml": {
          get: {
            operationId: "getSitemap",
            summary: "Sitemap including human pages, data endpoints, and raw markdown records",
            responses: { "200": { description: "XML sitemap" } },
          },
        },
        ...sourcePaths,
        ...wherePaths,
        ...eventPaths,
      },
      components: {
        schemas: {
          MapSnapshotBundle: {
            type: "object",
            required: ["version", "dataset", "license", "status", "policy", "layers", "sources"],
            properties: {
              version: { type: "integer" },
              dataset: { type: "string" },
              license: { type: "string" },
              attribution: { type: "string" },
              citation: { type: "string" },
              generatedAt: { type: "string" },
              status: { type: "string" },
              policy: { type: "string" },
              stats: { type: "object" },
              layers: {
                type: "object",
                properties: {
                  caseSummaries: { type: "array", items: { $ref: "#/components/schemas/CaseSummary" } },
                  officialAlerts: { type: "array", items: { $ref: "#/components/schemas/OfficialAlert" } },
                  reservoirEcology: { type: "array", items: { type: "object" } },
                },
              },
              sources: { type: "array", items: { $ref: "#/components/schemas/SourceRecord" } },
            },
          },
          CaseSummary: {
            type: "object",
            properties: {
              id: { type: "string" },
              jurisdiction: { type: "string" },
              region: { type: "string" },
              period: { type: "string" },
              reportedCases: { type: ["integer", "null"] },
              reportedDeaths: { type: ["integer", "null"] },
              geographyPrecision: { type: "string" },
              sourceIds: { type: "array", items: { type: "string" } },
            },
          },
          OfficialAlert: {
            type: "object",
            properties: {
              id: { type: "string" },
              title: { type: "string" },
              agency: { type: "string" },
              date: { type: "string" },
              geography: { type: "string" },
              summary: { type: "string" },
              riskLanguage: { type: "string" },
              sourceIds: { type: "array", items: { type: "string" } },
            },
          },
          EventRecord: {
            type: "object",
            properties: {
              id: { type: "string" },
              type: { type: "string", enum: ["official-alert", "case-summary"] },
              title: { type: "string" },
              geography: { type: "string" },
              status: { type: "string" },
              summary: { type: "string" },
              sourceIds: { type: "array", items: { type: "string" } },
            },
          },
          SourceRegistry: {
            type: "object",
            properties: {
              version: { type: "integer" },
              dataset: { type: "string" },
              reviewPolicy: { type: "string" },
              sources: { type: "array", items: { $ref: "#/components/schemas/SourceRecord" } },
            },
          },
          SourceRecord: {
            type: "object",
            properties: {
              id: { type: "string" },
              title: { type: "string" },
              publisher: { type: "string" },
              url: { type: "string", format: "uri" },
              publicationDate: { type: "string" },
              reviewedDate: { type: "string" },
              sourceType: { type: "string" },
              use: { type: "string" },
              limitations: { type: "string" },
            },
          },
        },
      },
    },
    { headers: { "content-type": "application/json; charset=utf-8" } },
  );
}
