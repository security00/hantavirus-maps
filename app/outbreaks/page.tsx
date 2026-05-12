import type { Metadata } from "next";
import Link from "next/link";

import { SourceList } from "@/components/SourceList";
import { formatDateLabel, getAlerts } from "@/lib/data";
import { getEventRecords } from "@/lib/event-pages";
import { LAST_REVIEWED_ISO, LAST_REVIEWED_LABEL } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Hantavirus Outbreak Explainers: Official Source Notes",
  description:
    "Conservative official-source hantavirus outbreak explainers and reviewed source notes, with links to the outbreak map and tracker.",
  alternates: {
    canonical: "/outbreaks/",
  },
};

const selectedAlertIds = ["who-don600-2026-cruise", "paho-alert-2025-americas"];

const alertLinks: Record<string, { href: string; label: string }> = {
  "who-don600-2026-cruise": {
    href: "/outbreaks/mv-hondius-2026/",
    label: "Read the event explainer",
  },
  "paho-alert-2025-americas": {
    href: "/south-america/",
    label: "Read South America context",
  },
};

const sourceIds = [
  "who-don600-2026",
  "ecdc-cruise-2026",
  "paho-cruise-2026",
  "paho-alert-2025",
  "who-factsheet-2026",
];

const pageLimits = [
  "These pages are official-source event explainers and reviewed source notes.",
  "They are not a live timeline, current case tracker, exact local risk page, travel clearance tool, or medical advice.",
  "Official agencies remain the authoritative source for current investigations, case definitions, contact follow-up, and local public health actions.",
];

const explainerRules = [
  "Use registered official sources first: WHO, ECDC, PAHO/WHO, and related agency notices already reviewed for this site.",
  "Summarize the event at the level the official source supports, and avoid inferring route, cabin, port, household, or neighborhood risk.",
  "Keep Andes virus wording narrow: documented limited person-to-person transmission does not mean all hantaviruses spread that way.",
];

export default function OutbreaksPage() {
  const alerts = getAlerts().filter((alert) => selectedAlertIds.includes(alert.id));
  const eventRecords = getEventRecords().filter((event) => event.type === "official-alert");

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.74fr_0.26fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Official-source outbreak notes</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              Hantavirus outbreak explainers from reviewed official sources
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              This section collects conservative, source-linked outbreak content drafts.
              It explains selected official alerts and keeps each note separate from live
              surveillance, exact local risk, or medical advice.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/hantavirus-outbreak-map/"
                className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                Open outbreak map
              </Link>
              <Link
                href="/hantavirus-tracker/"
                className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
              >
                Open tracker
              </Link>
              <Link
                href="/outbreaks/mv-hondius-2026/"
                className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
              >
                MV Hondius 2026 explainer
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-5">
            <p className="text-sm font-semibold text-amber-100">Reviewed source notes</p>
            <p className="mt-3 text-sm leading-6 text-amber-50/[0.88]">
              Updated map/source snapshot: <time dateTime={LAST_REVIEWED_ISO}>{LAST_REVIEWED_LABEL}</time>. This page is an official-source event
              explainer hub, not a live timeline, current case tracker, exact local
              risk assessment, or medical advice.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="selected-alerts">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-200">Selected alerts</p>
            <h2 id="selected-alerts" className="mt-2 text-3xl font-semibold">
              Official alerts currently summarized
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              The cards below reuse existing reviewed alert records and source registry IDs.
              They are point-in-time summaries, not current counts.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {alerts.map((alert) => {
              const link = alertLinks[alert.id];

              return (
                <article key={alert.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm font-semibold text-amber-100">
                    {formatDateLabel(alert.date)} · {alert.agency}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{alert.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{alert.summary}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{alert.riskLanguage}</p>
                  {link && (
                    <Link
                      href={link.href}
                      className="mt-5 inline-flex rounded-md border border-emerald-300/35 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>


      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="reviewed-event-records">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-200">Event records</p>
            <h2 id="reviewed-event-records" className="mt-2 text-3xl font-semibold">
              Citation-ready reviewed event pages
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Each reviewed event has a human page plus a raw markdown shadow for AI retrieval and citation systems.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {eventRecords.map((event) => (
              <article key={event.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs font-semibold text-slate-400">{event.date} · {event.geography}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{event.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{event.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link href={event.canonicalPath} className="rounded-md border border-emerald-300/35 px-3 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-200 hover:text-white">
                    Event page
                  </Link>
                  <Link href={event.rawPath} className="rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-300/50 hover:text-white">
                    Raw markdown
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="outbreak-limits">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Scope</p>
            <h2 id="outbreak-limits" className="mt-2 text-3xl font-semibold">
              What this section can and cannot show
            </h2>
          </div>
          <div className="grid gap-3">
            {pageLimits.map((limit) => (
              <div key={limit} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-slate-200">
                {limit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="drafting-rules">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-200">Drafting rules</p>
            <h2 id="drafting-rules" className="mt-2 text-3xl font-semibold">
              How outbreak explainers are written
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {explainerRules.map((rule) => (
              <article key={rule} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="leading-7 text-slate-200">{rule}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SourceList sourceIds={sourceIds} compact />
        </div>
      </section>
    </main>
  );
}
