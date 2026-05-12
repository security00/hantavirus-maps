import Link from "next/link";

import { SourceList } from "@/components/SourceList";
import { getStateCaseRecord } from "@/lib/data";
import type { ContentPageData } from "@/lib/page-content";
import { getRouteForPath } from "@/lib/page-content";
import { LAST_REVIEWED_ISO, LAST_REVIEWED_LABEL } from "@/lib/routes";

type ContentPageProps = {
  page: ContentPageData;
};

export function ContentPage({ page }: ContentPageProps) {
  const stateRecord = getStateCaseRecord(page.key);
  const relatedRoutes = page.relatedPaths
    .map((path) => getRouteForPath(path))
    .filter((route): route is NonNullable<typeof route> => Boolean(route));

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_0.55fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-emerald-200">{page.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{page.intro}</p>
          </div>

          <aside className="rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-5">
            <p className="text-sm font-semibold text-amber-100">Educational use only</p>
            <p className="mt-3 text-sm leading-6 text-amber-50/[0.85]">
              This page is not medical advice, diagnosis, emergency guidance, or a
              professional public health determination. Updated map/source snapshot:{" "}
              <time dateTime={LAST_REVIEWED_ISO}>{LAST_REVIEWED_LABEL}</time>.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
        <div className="space-y-10">
          <section aria-labelledby="key-points-heading">
            <h2 id="key-points-heading" className="text-2xl font-semibold">
              Key Points
            </h2>
            <div className="mt-5 grid gap-3">
              {page.keyPoints.map((point) => (
                <div key={point} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {stateRecord && (
            <section aria-labelledby="state-data-heading" className="rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] p-5">
              <p className="text-sm font-semibold text-emerald-100">{stateRecord.status}</p>
              <h2 id="state-data-heading" className="mt-2 text-2xl font-semibold">
                {stateRecord.reportLabel}
              </h2>
              <p className="mt-3 leading-7 text-slate-200">{stateRecord.summary}</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-md bg-slate-950/70 p-4">
                  <dt className="text-xs font-semibold text-slate-400">Period</dt>
                  <dd className="mt-2 text-lg font-semibold">{stateRecord.period}</dd>
                </div>
                <div className="rounded-md bg-slate-950/70 p-4">
                  <dt className="text-xs font-semibold text-slate-400">Reported cases</dt>
                  <dd className="mt-2 text-lg font-semibold">
                    {stateRecord.reportedCases ?? "Linked source"}
                  </dd>
                </div>
                <div className="rounded-md bg-slate-950/70 p-4">
                  <dt className="text-xs font-semibold text-slate-400">Precision</dt>
                  <dd className="mt-2 text-lg font-semibold">{stateRecord.geographyPrecision}</dd>
                </div>
              </dl>
            </section>
          )}

          {page.sections.map((section) => (
            <section key={section.heading} aria-labelledby={`${page.key}-${section.heading}`}>
              <h2 id={`${page.key}-${section.heading}`} className="text-2xl font-semibold">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-5 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="rounded-md border border-white/10 bg-white/[0.04] p-4 text-slate-200">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <SourceList sourceIds={page.sourceIds} />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold">Layer Rules</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <p>Reported cases are source-linked surveillance summaries.</p>
              <p>Official alerts are selected notices, not complete datasets.</p>
              <p>Reservoir regions are ecological evidence, not infected animals or human cases.</p>
            </div>
          </section>

          {relatedRoutes.length > 0 && (
            <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-lg font-semibold">Related Pages</h2>
              <div className="mt-4 grid gap-2">
                {relatedRoutes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className="rounded-md border border-white/10 px-3 py-3 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white"
                  >
                    {route.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </main>
  );
}
