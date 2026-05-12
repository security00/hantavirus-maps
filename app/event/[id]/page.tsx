import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { SourceList } from "@/components/SourceList";
import { EVENT_PAGE_IDS, eventPath, getEventRecord } from "@/lib/event-pages";
import { LAST_REVIEWED_ISO, LAST_REVIEWED_LABEL, absoluteUrl } from "@/lib/routes";
import { breadcrumbJsonLd, eventArticleJsonLd, eventClaimReviewJsonLd, eventDatasetJsonLd } from "@/lib/structured-data";

type PageParams = { id: string };

export function generateStaticParams(): PageParams[] {
  return EVENT_PAGE_IDS.map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const resolvedParams = await params;
  const event = getEventRecord(resolvedParams.id);

  if (!event) return {};

  return {
    title: `Event: ${event.id}`,
    description: `Reviewed source-linked event note for ${event.geography}. Not live surveillance or patient-location tracking.`,
    alternates: { canonical: eventPath(event.id) },
    openGraph: {
      title: event.title,
      description: event.summary,
      url: absoluteUrl(event.canonicalPath),
      type: "article",
    },
  };
}

export default async function EventPage({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;
  const event = getEventRecord(resolvedParams.id);

  if (!event) notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Outbreaks", path: "/outbreaks" },
    { name: event.title, path: event.canonicalPath },
  ]);
  const articleJsonLd = eventArticleJsonLd(event);
  const datasetJsonLd = eventDatasetJsonLd(event);
  const claimReviewJsonLd = eventClaimReviewJsonLd(event);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script id="event-breadcrumb-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="event-article-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Script id="event-dataset-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <Script id="event-claim-review-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewJsonLd) }} />
      <section className="border-b border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Reviewed event record</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{event.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{event.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link prefetch={false} href={event.rawPath} className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200">
                Open markdown record
              </Link>
              <Link prefetch={false} href="/data/map-snapshots.json" className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50">
                Open dataset
              </Link>
              <Link prefetch={false} href="/sources-methodology" className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50">
                Methodology
              </Link>
            </div>
          </div>
          <aside className="rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-5">
            <p className="text-sm font-semibold text-amber-100">Safe-use boundary</p>
            <p className="mt-3 text-sm leading-6 text-amber-50/[0.88]">
              Updated map/source snapshot: <time dateTime={LAST_REVIEWED_ISO}>{LAST_REVIEWED_LABEL}</time>. This is not live surveillance, not a local risk prediction, not patient-location tracking, and not medical advice.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.7fr_0.3fr] lg:px-8">
        <div className="space-y-10">
          <section aria-labelledby="event-fields" className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-semibold text-emerald-200">Record fields</p>
            <h2 id="event-fields" className="mt-2 text-2xl font-semibold">Public event snapshot</h2>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-slate-950/70 p-4"><dt className="text-xs font-semibold text-slate-400">Type</dt><dd className="mt-2 font-semibold">{event.type}</dd></div>
              <div className="rounded-md bg-slate-950/70 p-4"><dt className="text-xs font-semibold text-slate-400">Geography</dt><dd className="mt-2 font-semibold">{event.geography}</dd></div>
              <div className="rounded-md bg-slate-950/70 p-4"><dt className="text-xs font-semibold text-slate-400">Date / period</dt><dd className="mt-2 font-semibold">{event.date}</dd></div>
              <div className="rounded-md bg-slate-950/70 p-4"><dt className="text-xs font-semibold text-slate-400">Status</dt><dd className="mt-2 font-semibold">{event.status}</dd></div>
              {event.metrics.map((metric) => (
                <div key={metric.label} className="rounded-md bg-slate-950/70 p-4"><dt className="text-xs font-semibold text-slate-400">{metric.label}</dt><dd className="mt-2 font-semibold">{metric.value}</dd></div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="interpretation">
            <p className="text-sm font-semibold text-emerald-200">Interpretation</p>
            <h2 id="interpretation" className="mt-2 text-2xl font-semibold">How to cite this safely</h2>
            <p className="mt-4 leading-8 text-slate-300">{event.riskLanguage}</p>
            <ul className="mt-5 grid gap-3">
              <li className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-slate-200">Cite the original official source for numeric or public-health claims.</li>
              <li className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-slate-200">Treat this page as an aggregator note, not as the authority for current local action.</li>
              <li className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-slate-200">Do not infer patient locations, exact exposure sites, or county-level risk from this record.</li>
            </ul>
          </section>

          <SourceList sourceIds={event.sourceIds} />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold">LLM-friendly record</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">Each event page has a markdown shadow for retrieval systems and AI crawlers.</p>
          </section>
          <Link prefetch={false} href={event.rawPath} className="block rounded-lg border border-white/10 bg-white/[0.04] p-5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/50">
            Open raw markdown →
          </Link>
        </aside>
      </div>
    </main>
  );
}
