import type { MetadataRoute } from "next";

import { absoluteUrl, LAST_REVIEWED_ISO, SITE_ROUTES } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: LAST_REVIEWED_ISO,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
