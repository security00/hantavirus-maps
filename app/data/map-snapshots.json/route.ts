import { buildMapSnapshotsDataset } from "@/lib/public-data";
import { LAST_REVIEWED_ISO } from "@/lib/routes";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildMapSnapshotsDataset(), {
    headers: {
      "access-control-allow-origin": "*",
      "content-type": "application/json; charset=utf-8",
      "last-modified": new Date(`${LAST_REVIEWED_ISO}T00:00:00Z`).toUTCString(),
    },
  });
}
