import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getAlerts, getCaseRecords, getReservoirs, getSourceById } from "@/lib/data";
import { SOURCE_PAGE_IDS, sourcePath } from "@/lib/programmatic-pages";
import { LAST_REVIEWED_LABEL } from "@/lib/routes";
import { breadcrumbJsonLd, sourceArticleJsonLd, sourceDatasetJsonLd } from "@/lib/structured-data";

type PageParams = { id: string };

export function generateStaticParams(): PageParams[] {
  return SOURCE_PAGE_IDS.map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const resolvedParams = await params;
  const source = getSourceById(resolvedParams.id);

  if (!source || !SOURCE_PAGE_IDS.includes(resolvedParams.id as (typeof SOURCE_PAGE_IDS)[number])) {
    return {};
  }

  const isCdcReportedCases = source.id === "cdc-reported-cases";

  return {
    title: isCdcReportedCases ? "CDC Hantavirus Map Source: Reported Cases and Limits" : `${source.publisher}: ${source.title} | Hantavirus Maps Source`,
    description: isCdcReportedCases
      ? "How Hantavirus Maps uses CDC reported hantavirus case summaries, including state-level public precision and limits on county-level or live risk claims."
      : `Reviewed source note for ${source.title}, including how Hantavirus Maps uses it and what limits apply.`,
    alternates: { canonical: sourcePath(source.id) },
  };
}

function linkedMapUse(sourceId: string) {
  const cases = getCaseRecords().filter((record) => record.sourceIds.includes(sourceId));
  const alerts = getAlerts().filter((alert) => alert.sourceIds.includes(sourceId));
  const reservoirs = getReservoirs().filter((reservoir) => reservoir.sourceIds.includes(sourceId));

  return { cases, alerts, reservoirs };
}

export default async function SourcePage({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;
  if (!SOURCE_PAGE_IDS.includes(resolvedParams.id as (typeof SOURCE_PAGE_IDS)[number])) {
    notFound();
  }

  const source = getSourceById(resolvedParams.id);

  if (!source) {
    notFound();
  }

  const linked = linkedMapUse(source.id);
  const linkedCount = linked.cases.length + linked.alerts.length + linked.reservoirs.length;
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Sources and methodology", path: "/sources-methodology/" },
    { name: source.title, path: sourcePath(source.id) },
  ]);
  const articleJsonLd = sourceArticleJsonLd(source, sourcePath(source.id));
  const datasetJsonLd = sourceDatasetJsonLd(source, sourcePath(source.id));

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script id="source-breadcrumb-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="source-article-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Script id="source-dataset-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <section className="border-b border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Reviewed source note</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              {source.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              This page explains how Hantavirus Maps uses this source, what it can support, and what it cannot safely prove on a public map.
            </p>
            {source.id === "cdc-reported-cases" && (
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                For searches such as <strong className="text-white">CDC hantavirus map</strong>, this source note explains how CDC reported case summaries support state-level map context without becoming a live local risk map.
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={source.url} rel="noreferrer" target="_blank" className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200">
                Open official source
              </a>
              <Link href="/sources-methodology/" className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50">
                Review methodology
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-5">
            <p className="text-sm font-semibold text-amber-100">Publication boundary</p>
            <p className="mt-3 text-sm leading-6 text-amber-50/[0.88]">
              Reviewed {LAST_REVIEWED_LABEL}. This is a source note for map context, not medical advice, diagnosis, live surveillance, or a patient-location record.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.7fr_0.3fr] lg:px-8">
        <div className="space-y-10">
          <section aria-labelledby="source-summary" className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 id="source-summary" className="text-2xl font-semibold">Source summary</h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Publisher</dt><dd className="mt-2 text-slate-200">{source.publisher}</dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Source type</dt><dd className="mt-2 text-slate-200">{source.sourceType}</dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Publication date</dt><dd className="mt-2 text-slate-200">{source.publicationDate}</dd></div>
              <div><dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">Reviewed date</dt><dd className="mt-2 text-slate-200">{source.reviewedDate}</dd></div>
            </dl>
          </section>

          <section aria-labelledby="how-used">
            <p className="text-sm font-semibold text-emerald-200">Map use</p>
            <h2 id="how-used" className="mt-2 text-2xl font-semibold">How this source is used</h2>
            <p className="mt-4 leading-8 text-slate-300">{source.use}</p>
          </section>

          <section aria-labelledby="limits">
            <p className="text-sm font-semibold text-emerald-200">Limits</p>
            <h2 id="limits" className="mt-2 text-2xl font-semibold">What this source does not prove</h2>
            <p className="mt-4 leading-8 text-slate-300">{source.limitations}</p>
            <ul className="mt-5 grid gap-3">
              <li className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-slate-200">No patient address or exact exposure point is published from this source.</li>
              <li className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-slate-200">No county-level risk is inferred unless an official source explicitly supports safe public display.</li>
              <li className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-slate-200">Provisional or event-specific notices are not treated as a complete live case feed.</li>
            </ul>
          </section>

          {linkedCount > 0 && (
            <section aria-labelledby="linked-records">
              <p className="text-sm font-semibold text-emerald-200">Linked map records</p>
              <h2 id="linked-records" className="mt-2 text-2xl font-semibold">Where this source appears</h2>
              <div className="mt-5 grid gap-4">
                {linked.cases.map((record) => (
                  <article key={record.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xs font-semibold text-slate-400">Case summary · {record.period}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{record.jurisdiction}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{record.summary}</p>
                  </article>
                ))}
                {linked.alerts.map((alert) => (
                  <article key={alert.id} className="rounded-lg border border-red-300/20 bg-red-300/[0.06] p-5">
                    <p className="text-xs font-semibold text-red-100">Official alert · {alert.date}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{alert.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{alert.summary}</p>
                  </article>
                ))}
                {linked.reservoirs.map((reservoir) => (
                  <article key={reservoir.id} className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.06] p-5">
                    <p className="text-xs font-semibold text-cyan-100">Reservoir ecology</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{reservoir.commonName}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{reservoir.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold">Source rule</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Source pages explain why a record is included and prevent map readers from over-interpreting official public health material.
            </p>
          </section>
          <Link href="/data/sources.json" className="block rounded-lg border border-white/10 bg-white/[0.04] p-5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/50">
            Open machine-readable source registry →
          </Link>
        </aside>
      </div>
    </main>
  );
}
