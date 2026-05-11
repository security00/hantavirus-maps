import type { MetadataRoute } from "next";

import { absoluteUrl, ALL_SITE_ROUTES, LAST_REVIEWED_ISO } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_SITE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: LAST_REVIEWED_ISO,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
