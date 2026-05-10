import type { Metadata } from "next";
import Link from "next/link";

import { SourceList } from "@/components/SourceList";
import { getAlerts, getSourcesByIds } from "@/lib/data";
import { LAST_REVIEWED_LABEL } from "@/lib/routes";

export const metadata: Metadata = {
  title: "MV Hondius Hantavirus Cluster: Official Source Notes",
  description:
    "Official-source explainer for the 2026 MV Hondius cruise-associated hantavirus cluster, with source notes and clear limits.",
  alternates: {
    canonical: "/outbreaks/mv-hondius-2026/",
  },
};

const eventSourceIds = ["who-don600-2026", "ecdc-cruise-2026", "paho-cruise-2026", "who-factsheet-2026"];

const whatThisPageCanShow = [
  "which official sources are currently linked in the site registry",
  "how those sources describe the cruise-associated cluster and response context",
  "why Andes virus wording needs extra care",
  "what this educational page does not claim or measure",
];

const whatThisPageCannotShow = [
  "live passenger, crew, or country-level case counts",
  "exact infection locations or exposure locations",
  "medical diagnosis, treatment, or emergency guidance",
  "travel safety decisions beyond links to official public health authorities",
];

export default function MvHondiusEventPage() {
  const cruiseAlert = getAlerts().find((alert) => alert.id === "who-don600-2026-cruise");
  const sources = getSourcesByIds(eventSourceIds);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.68fr_0.32fr]">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Official-source event explainer</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              MV Hondius hantavirus cluster: reviewed source notes and limits
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              This page summarizes source-linked official context for the 2026 cruise-associated
              hantavirus cluster involving Andes virus reporting and international public health
              response. It is not a live case tracker, travel advisory, diagnosis tool, or complete
              outbreak database.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/outbreaks/"
                className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                Back to outbreak notes
              </Link>
              <Link
                href="/sources-methodology/"
                className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
              >
                Review methodology
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-5">
            <p className="text-sm font-semibold text-amber-100">Important limit</p>
            <p className="mt-3 text-sm leading-6 text-amber-50/[0.88]">
              Reviewed {LAST_REVIEWED_LABEL}. Official outbreak information can change as
              investigations continue. Use current agency pages for operational, medical, travel,
              or local public health decisions.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="official-summary">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div>
            <p className="text-sm font-semibold text-emerald-200">What official sources say</p>
            <h2 id="official-summary" className="mt-2 text-3xl font-semibold">
              Event-specific notice, not general community spread
            </h2>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            {cruiseAlert ? (
              <>
                <p className="text-sm font-semibold text-amber-100">
                  {cruiseAlert.date} · {cruiseAlert.agency} · {cruiseAlert.status}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{cruiseAlert.title}</h3>
                <p className="mt-4 leading-8 text-slate-300">{cruiseAlert.summary}</p>
                <p className="mt-4 rounded-md border border-amber-200/20 bg-amber-200/[0.07] p-3 text-sm leading-6 text-amber-50/90">
                  {cruiseAlert.riskLanguage}
                </p>
              </>
            ) : (
              <p className="leading-7 text-slate-300">
                The reviewed cruise-associated alert record was not found in the local snapshot.
                Check the source list below for official pages.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="can-cannot-show">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          <article className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-semibold text-emerald-200">This page can show</p>
            <h2 id="can-cannot-show" className="mt-2 text-2xl font-semibold">Reviewed context</h2>
            <ul className="mt-4 space-y-3 text-slate-300">
              {whatThisPageCanShow.map((item) => (
                <li key={item} className="leading-7">• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-6">
            <p className="text-sm font-semibold text-amber-100">This page cannot show</p>
            <h2 className="mt-2 text-2xl font-semibold">Limits and exclusions</h2>
            <ul className="mt-4 space-y-3 text-amber-50/90">
              {whatThisPageCannotShow.map((item) => (
                <li key={item} className="leading-7">• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="andes-care">
        <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold text-emerald-200">Andes virus wording</p>
          <h2 id="andes-care" className="mt-2 text-3xl font-semibold">
            Why this event needs careful language
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            WHO source material notes that Andes virus is the hantavirus currently known to have
            documented limited person-to-person transmission, typically in close or prolonged contact
            contexts. That caveat should not be generalized to all hantaviruses, casual contact, or
            unrelated regions. Rodent exposure remains the main prevention focus across most hantavirus
            education pages.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="source-notes">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-200">Source notes</p>
            <h2 id="source-notes" className="mt-2 text-3xl font-semibold">
              Official pages used for this explainer
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              These sources are linked for context. Their wording, dates, and recommendations should
              be checked directly before making operational decisions.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {sources.map((source) => (
              <article key={source.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold text-slate-400">{source.publisher}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  <a className="hover:text-emerald-200" href={source.url} rel="noreferrer" target="_blank">
                    {source.title}
                  </a>
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{source.use}</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">{source.limitations}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SourceList sourceIds={eventSourceIds} compact />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/hantavirus-tracker/"
              className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Open tracker guide
            </Link>
            <Link
              href="/hantavirus-outbreak-map/"
              className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
            >
              Read outbreak map limits
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
