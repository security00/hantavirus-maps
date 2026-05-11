import { buildMapSnapshotsDataset } from "@/lib/public-data";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildMapSnapshotsDataset(), {
    headers: {
      "access-control-allow-origin": "*",
      "content-type": "application/json; charset=utf-8",
    },
  });
}
