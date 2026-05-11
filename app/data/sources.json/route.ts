import { buildSourcesDataset } from "@/lib/public-data";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSourcesDataset(), {
    headers: {
      "access-control-allow-origin": "*",
      "content-type": "application/json; charset=utf-8",
    },
  });
}
