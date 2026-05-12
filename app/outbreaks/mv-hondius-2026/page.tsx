import type { Metadata } from "next";
import Link from "next/link";

import { SourceList } from "@/components/SourceList";
import { LAST_REVIEWED_ISO, LAST_REVIEWED_LABEL } from "@/lib/routes";

export const metadata: Metadata = {
  title: "MV Hondius 2026 Hantavirus Cluster: Official Source Explainer",
  description:
    "Reviewed official-source notes for the 2026 cruise-associated hantavirus cluster, with clear limits on live tracking, local risk, and medical advice.",
  alternates: {
    canonical: "/outbreaks/mv-hondius-2026/",
  },
};

const sourceIds = [
  "who-don600-2026",
  "ecdc-cruise-2026",
  "paho-cruise-2026",
  "paho-alert-2025",
  "who-factsheet-2026",
];

const officialSourceNotes = [
  "WHO Disease Outbreak News reported that, as of May 8, 2026, eight cases including three deaths had been reported in the cruise-associated cluster; six cases were laboratory-confirmed and identified as Andes virus.",
  "WHO assessed the risk to the global population from this event as low and the risk for passengers and crew on the ship as moderate, while investigations and international contact tracing continued.",
  "ECDC described its May 6, 2026 assessment as preliminary for a rapidly evolving incident and summarized a Dutch-flagged cruise-ship cluster in the South Atlantic with passengers and crew from multiple countries.",
  "PAHO described support for international coordination, technical information exchange, laboratory diagnosis, clinical management, infection prevention, and control activities related to the event.",
];

const pageCapabilities = [
  "Can show: a reviewed official-source summary, the source dates used, the agencies involved, and links to the site's outbreak map and tracker context.",
  "Cannot show: a live timeline, current case tracker, exact local risk for a person, port, cabin, home, workplace, campsite, or trip, or a medical decision about symptoms or exposure.",
  "Cannot replace: WHO, ECDC, PAHO/WHO, national health authorities, local public health, clinicians, employers, vessel operators, or emergency services.",
];

const andesVirusNotes = [
  "WHO and ECDC distinguish Andes virus from many other hantaviruses because limited person-to-person transmission has been documented among close or prolonged contacts.",
  "That wording should stay narrow. It does not mean casual spread is expected, and it should not be generalized to all hantaviruses or all regions.",
  "Official sources still describe rodent exposure as the primary transmission route for hantaviruses, especially contact with contaminated urine, droppings, saliva, or aerosols.",
];

const reviewedNotes = [
  {
    title: "WHO Disease Outbreak News",
    body: "Primary event notice for the May 8, 2026 point-in-time case summary, risk wording, investigation status, and contact-tracing context.",
  },
  {
    title: "ECDC rapid assessment",
    body: "European preliminary assessment and recommendations for a rapidly evolving cruise-associated event, including uncertainty and precautionary language.",
  },
  {
    title: "PAHO response update",
    body: "Regional coordination context for the international response and technical support across diagnosis, clinical management, and infection prevention.",
  },
  {
    title: "PAHO/WHO Americas alert",
    body: "Broader December 2025 regional context for hantavirus pulmonary syndrome surveillance and environmental or occupational risk reduction in the Americas.",
  },
  {
    title: "WHO hantavirus factsheet",
    body: "Background source for global hantavirus disease context and careful Andes virus transmission wording.",
  },
];

const relatedPages = [
  {
    href: "/outbreaks/",
    title: "Outbreak Explainers",
    body: "Index of selected official-source outbreak notes.",
  },
  {
    href: "/hantavirus-outbreak-map/",
    title: "Outbreak Map",
    body: "Map context for official alerts and source limits.",
  },
  {
    href: "/hantavirus-tracker/",
    title: "Hantavirus Tracker",
    body: "Reviewed map layers for cases, alerts, reservoirs, and prevention.",
  },
  {
    href: "/south-america/",
    title: "South America Context",
    body: "Andes virus and PAHO/WHO regional context.",
  },
  {
    href: "/europe/",
    title: "Europe Context",
    body: "ECDC surveillance and rapid-assessment context.",
  },
  {
    href: "/sources-methodology/",
    title: "Sources and Methodology",
    body: "Review rules and precision limits for this static site.",
  },
];

export default function MvHondiusOutbreakPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.74fr_0.26fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Official-source event explainer</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              MV Hondius 2026 hantavirus cluster source notes
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              This page is a conservative draft for the 2026 cruise-associated
              hantavirus event commonly referenced by the MV Hondius route label.
              The event facts below stay tied to reviewed WHO, ECDC, and PAHO
              source notes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/outbreaks/"
                className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                Back to outbreak notes
              </Link>
              <Link
                href="/hantavirus-outbreak-map/"
                className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
              >
                Open outbreak map
              </Link>
              <Link
                href="/hantavirus-tracker/"
                className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
              >
                Open tracker
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-5">
            <p className="text-sm font-semibold text-amber-100">Important limit</p>
            <p className="mt-3 text-sm leading-6 text-amber-50/[0.88]">
              Updated map/source snapshot: <time dateTime={LAST_REVIEWED_ISO}>{LAST_REVIEWED_LABEL}</time>. This is not a live timeline, not a
              current case tracker, not exact local risk, and not medical advice.
              Use official agencies and healthcare professionals for current
              instructions.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.7fr_0.3fr] lg:px-8">
        <div className="space-y-10">
          <section aria-labelledby="official-sources-say">
            <p className="text-sm font-semibold text-emerald-200">Reviewed source notes</p>
            <h2 id="official-sources-say" className="mt-2 text-3xl font-semibold">
              What official sources say
            </h2>
            <div className="mt-5 grid gap-3">
              {officialSourceNotes.map((note) => (
                <div key={note} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="leading-7 text-slate-200">{note}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="can-cannot-show">
            <p className="text-sm font-semibold text-emerald-200">Scope</p>
            <h2 id="can-cannot-show" className="mt-2 text-3xl font-semibold">
              What this page can and cannot show
            </h2>
            <div className="mt-5 grid gap-3">
              {pageCapabilities.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="andes-wording">
            <p className="text-sm font-semibold text-emerald-200">Terminology caution</p>
            <h2 id="andes-wording" className="mt-2 text-3xl font-semibold">
              Why Andes virus wording needs care
            </h2>
            <div className="mt-4 space-y-4">
              {andesVirusNotes.map((note) => (
                <p key={note} className="leading-8 text-slate-300">
                  {note}
                </p>
              ))}
            </div>
          </section>

          <section aria-labelledby="source-notes">
            <p className="text-sm font-semibold text-emerald-200">Source transparency</p>
            <h2 id="source-notes" className="mt-2 text-3xl font-semibold">
              Source notes
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {reviewedNotes.map((note) => (
                <article key={note.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="text-lg font-semibold text-white">{note.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{note.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="related-pages">
            <p className="text-sm font-semibold text-emerald-200">Related pages</p>
            <h2 id="related-pages" className="mt-2 text-3xl font-semibold">
              Related pages
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-emerald-300/45 hover:bg-white/[0.07]"
                >
                  <h3 className="text-lg font-semibold text-white">{page.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{page.body}</p>
                </Link>
              ))}
            </div>
          </section>

          <SourceList sourceIds={sourceIds} />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold">Reading Rules</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <p>Read all numbers as source-date snapshots, not live totals.</p>
              <p>Read risk language at the population and setting level stated by the agency.</p>
              <p>Use official authorities for current instructions, exposure follow-up, or care.</p>
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold">Not Included</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <p>No live timeline.</p>
              <p>No current case tracker.</p>
              <p>No exact local risk.</p>
              <p>No medical advice.</p>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
