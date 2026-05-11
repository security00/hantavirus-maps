import { notFound } from "next/navigation";

import { EVENT_PAGE_IDS, getEventRecord, renderEventMarkdown } from "@/lib/event-pages";

type PageParams = { id: string };

export const dynamic = "force-static";

export function generateStaticParams(): PageParams[] {
  return EVENT_PAGE_IDS.map((id) => ({ id }));
}

export async function GET(_request: Request, { params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;
  const event = getEventRecord(resolvedParams.id);

  if (!event) notFound();

  return new Response(renderEventMarkdown(event), {
    headers: { "content-type": "text/markdown; charset=utf-8" },
  });
}
