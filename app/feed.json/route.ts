import { FEED_DESCRIPTION, FEED_TITLE, feedUpdatedIso, reviewedFeedItems } from "@/lib/feed";
import { LAST_REVIEWED_ISO, SITE_URL } from "@/lib/routes";

export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      version: "https://jsonfeed.org/version/1.1",
      title: FEED_TITLE,
      home_page_url: SITE_URL,
      feed_url: `${SITE_URL}/feed.json`,
      description: FEED_DESCRIPTION,
      language: "en",
      updated: feedUpdatedIso(),
      authors: [{ name: "Hantavirus Maps" }],
      items: reviewedFeedItems.map((item) => ({
        id: item.id,
        url: item.url,
        title: item.title,
        content_text: item.summary,
        summary: item.summary,
        date_published: item.datePublished,
        tags: item.tags,
      })),
    },
    {
      headers: {
        "content-type": "application/feed+json; charset=utf-8",
        "last-modified": new Date(`${LAST_REVIEWED_ISO}T00:00:00Z`).toUTCString(),
      },
    },
  );
}
