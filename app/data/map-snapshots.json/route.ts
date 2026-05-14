import { SITE_BUILD_TIMESTAMP } from "@/lib/build-metadata.generated";
import { buildMapSnapshotsDataset } from "@/lib/public-data";

export const dynamic = "force-static";

export function GET() {
  return Response.json(buildMapSnapshotsDataset(), {
    headers: {
      "access-control-allow-origin": "*",
      "content-type": "application/json; charset=utf-8",
      "last-modified": new Date(SITE_BUILD_TIMESTAMP).toUTCString(),
    },
  });
}
