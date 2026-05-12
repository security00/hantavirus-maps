import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { SourceList } from "@/components/SourceList";
import { getAlerts, getCaseRecords } from "@/lib/data";
import { WHERE_PAGE_SLUGS, wherePath } from "@/lib/programmatic-pages";
import { LAST_REVIEWED_ISO, LAST_REVIEWED_LABEL } from "@/lib/routes";
import { breadcrumbJsonLd, whereArticleJsonLd, whereDatasetJsonLd } from "@/lib/structured-data";

type PageParams = { slug: string };

function titleCaseSlug(slug: string) {
  return slug.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");
}

function getWhereRecord(slug: string) {
  if (slug === "united-states") {
    return getCaseRecords().find((record) => record.jurisdiction === "United States");
  }

  return getCaseRecords().find((record) => record.slug === slug);
}

function getRelatedAlerts(recordName: string) {
  const name = recordName.toLowerCase();
  return getAlerts().filter((alert) => alert.geography.toLowerCase().includes(name));
}

export function generateStaticParams(): PageParams[] {
  return WHERE_PAGE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const resolvedParams = await params;
  const record = getWhereRecord(resolvedParams.slug);
  const specialTitles: Record<string, string> = {
    canada: "Hantavirus Map Canada: PHAC and Official Source Context",
    florida: "Hantavirus Florida Map: DOH Source and Reservoir Context",
    washington: "Hantavirus Washington Map: DOH Source and Case Context",
  };
  const specialDescriptions: Record<string, string> = {
    canada: "Reviewed hantavirus map Canada context using PHAC and Government of Canada sources, with limits on confirmed infections, travel notices, geography, and live surveillance claims.",
    florida: "Reviewed hantavirus Florida map context using Florida Department of Health sources, reservoir ecology, prevention language, and limits on live case-count claims.",
    washington: "Reviewed hantavirus Washington map context using Washington State Department of Health sources, annual range language, prevention context, and local-risk limits.",
  };
  const title = specialTitles[resolvedParams.slug]
    ?? (record ? `${record.jurisdiction} Hantavirus Map and Source Context` : `${titleCaseSlug(resolvedParams.slug)} Hantavirus Map`);
  const description = specialDescriptions[resolvedParams.slug]
    ?? `Reviewed source-linked hantavirus map context for ${record?.jurisdiction ?? titleCaseSlug(resolvedParams.slug)}, with limits on case counts, geography precision, and live surveillance claims.`;

  return {
    title,
    description,
    alternates: { canonical: wherePath(resolvedParams.slug) },
  };
}

export default async function WherePage({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;

  if (!WHERE_PAGE_SLUGS.includes(resolvedParams.slug as (typeof WHERE_PAGE_SLUGS)[number])) {
    notFound();
  }

  const record = getWhereRecord(resolvedParams.slug);

  if (!record) {
    notFound();
  }

  const relatedAlerts = getRelatedAlerts(record.jurisdiction);
  const canonicalPath = wherePath(resolvedParams.slug);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Where", path: "/where-is-hantavirus-found/" },
    { name: record.jurisdiction, path: canonicalPath },
  ]);
  const articleJsonLd = whereArticleJsonLd(record, canonicalPath);
  const datasetJsonLd = whereDatasetJsonLd(record, canonicalPath);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script id="where-breadcrumb-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Script id="where-article-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Script id="where-dataset-json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <section className="border-b border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Where hantavirus is reported</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              {record.jurisdiction} hantavirus map and source context
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              This page gives reviewed map context for {record.jurisdiction}. It is a source-linked public health summary, not a live case counter or local risk predictor.
            </p>
            {record.slug === "canada" && (
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                For searches such as <strong className="text-white">hantavirus map Canada</strong>, this page summarizes PHAC and Government of Canada source context while avoiding patient locations or unsupported local risk claims.
              </p>
            )}
            {record.slug === "florida" && (
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                For searches such as <strong className="text-white">hantavirus Florida map</strong>, this page explains Florida Department of Health source context and southeastern reservoir ecology without claiming a live Florida case counter.
              </p>
            )}
            {record.slug === "washington" && (
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                For searches such as <strong className="text-white">hantavirus Washington map</strong>, this page summarizes Washington DOH context and annual range language without publishing county-level current risk.
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/hantavirus-tracker/" className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200">
                Open tracker
              </Link>
              <Link href="/sources-methodology/" className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50">
                Review methodology
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-5">
            <p className="text-sm font-semibold text-amber-100">Precision limit</p>
            <p className="mt-3 text-sm leading-6 text-amber-50/[0.88]">
              Updated map/source snapshot: <time dateTime={LAST_REVIEWED_ISO}>{LAST_REVIEWED_LABEL}</time>. This page does not publish patient locations, county-level current risk, or diagnosis/treatment guidance.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.7fr_0.3fr] lg:px-8">
        <div className="space-y-10">
          <section aria-labelledby="answer-ready-location" className="rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] p-5">
            <p className="text-sm font-semibold text-emerald-100">Answer-ready summary</p>
            <h2 id="answer-ready-location" className="mt-2 text-2xl font-semibold">What this {record.jurisdiction} map page says</h2>
            <p className="mt-4 leading-8 text-slate-200">
              This {record.jurisdiction} page is a reviewed, source-linked hantavirus map summary. It can be cited for public health context, source limitations, and geography precision, but it is not a live outbreak feed, patient-location dataset, or local risk score.
            </p>
            <div className="mt-5 rounded-md border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-300">
              Suggested citation: Hantavirus Maps, “{record.jurisdiction} hantavirus map and source context,” updated {LAST_REVIEWED_LABEL}, {`https://hantavirusmaps.org${canonicalPath}`}.
            </div>
          </section>

          <section aria-labelledby="snapshot" className="rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] p-5">
            <p className="text-sm font-semibold text-emerald-100">{record.status}</p>
            <h2 id="snapshot" className="mt-2 text-2xl font-semibold">{record.reportLabel}</h2>
            <p className="mt-3 leading-7 text-slate-200">{record.summary}</p>
            <dl className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-md bg-slate-950/70 p-4"><dt className="text-xs font-semibold text-slate-400">Period</dt><dd className="mt-2 text-lg font-semibold">{record.period}</dd></div>
              <div className="rounded-md bg-slate-950/70 p-4"><dt className="text-xs font-semibold text-slate-400">Reported cases</dt><dd className="mt-2 text-lg font-semibold">{record.reportedCases ?? "Linked source"}</dd></div>
              <div className="rounded-md bg-slate-950/70 p-4"><dt className="text-xs font-semibold text-slate-400">Geography</dt><dd className="mt-2 text-lg font-semibold">{record.geographyPrecision}</dd></div>
            </dl>
          </section>

          <section aria-labelledby="interpretation">
            <p className="text-sm font-semibold text-emerald-200">How to interpret this page</p>
            <h2 id="interpretation" className="mt-2 text-2xl font-semibold">What the {record.jurisdiction} marker means</h2>
            <div className="mt-5 grid gap-3">
              <p className="rounded-md border border-white/10 bg-white/[0.04] p-4 leading-7 text-slate-200">It is a reviewed public summary or official source link for map context.</p>
              <p className="rounded-md border border-white/10 bg-white/[0.04] p-4 leading-7 text-slate-200">It is not a statement that current exposure risk exists at any exact address, county, park, workplace, or travel stop.</p>
              <p className="rounded-md border border-white/10 bg-white/[0.04] p-4 leading-7 text-slate-200">For current public health action, use the linked official agency sources and local health authorities.</p>
            </div>
          </section>

          <section aria-labelledby="limits">
            <p className="text-sm font-semibold text-emerald-200">Limits</p>
            <h2 id="limits" className="mt-2 text-2xl font-semibold">Known limitations</h2>
            <ul className="mt-5 grid gap-3">
              {record.limitations.map((item) => (
                <li key={item} className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-slate-200">{item}</li>
              ))}
            </ul>
          </section>

          {relatedAlerts.length > 0 && (
            <section aria-labelledby="alerts">
              <p className="text-sm font-semibold text-emerald-200">Official alerts</p>
              <h2 id="alerts" className="mt-2 text-2xl font-semibold">Related reviewed alerts</h2>
              <div className="mt-5 grid gap-4">
                {relatedAlerts.map((alert) => (
                  <article key={alert.id} className="rounded-lg border border-red-300/20 bg-red-300/[0.06] p-5">
                    <p className="text-xs font-semibold text-red-100">{alert.agency} · {alert.date}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{alert.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{alert.summary}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{alert.riskLanguage}</p>
                  </article>
                ))}
              </div>
            </section>
          )}

          <SourceList sourceIds={record.sourceIds} />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold">Map rule</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <p>Case summaries are source-linked snapshots.</p>
              <p>Official alerts are selected notices, not complete datasets.</p>
              <p>Reservoir ecology is context, not proof of infected animals or human cases.</p>
            </div>
          </section>
          <Link href="/data/map-snapshots.json" className="block rounded-lg border border-white/10 bg-white/[0.04] p-5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/50">
            Open machine-readable map data →
          </Link>
        </aside>
      </div>
    </main>
  );
}
