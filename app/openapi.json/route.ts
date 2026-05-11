import { SITE_URL, absoluteUrl } from "@/lib/routes";

export const dynamic = "force-static";

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
        "/llms.txt": {
          get: {
            operationId: "getLlmsTxt",
            summary: "LLM crawler manifest",
            responses: { "200": { description: "Plain-text LLM manifest" } },
          },
        },
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
