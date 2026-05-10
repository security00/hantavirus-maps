import type { Metadata } from "next";
import Link from "next/link";

import { MapPanel } from "@/components/MapPanel";
import { SourceList } from "@/components/SourceList";
import { collectSourceIds, getAlerts, getCaseDataset, getReservoirDataset } from "@/lib/data";
import { LAST_REVIEWED_LABEL } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Hantavirus Tracker: Reviewed Map, Cases, Alerts and Reservoirs",
  description:
    "A source-linked hantavirus tracker for reviewed map layers: historical case summaries, official outbreak alerts, rodent reservoir ecology, and prevention guidance.",
  alternates: {
    canonical: "/hantavirus-tracker/",
  },
};

const intents = [
  {
    title: "Where has hantavirus appeared?",
    body: "Use the map to start with reviewed country, region, and state-level context, then open source links for official detail.",
    href: "/where-is-hantavirus-found/",
  },
  {
    title: "Does my state or region have historical cases?",
    body: "The U.S. layer follows public state-level limitations and links to CDC and state health department records.",
    href: "/united-states/",
  },
  {
    title: "Are there recent official outbreak notices?",
    body: "The alert layer summarizes selected WHO, PAHO/WHO, ECDC, CDC, and state public health notices with limitations.",
    href: "/outbreaks/",
  },
  {
    title: "Which rodents and environments matter?",
    body: "Reservoir ecology pages explain host-virus context without turning animal range into exact human risk.",
    href: "/deer-mouse-hantavirus-map/",
  },
  {
    title: "How do I reduce risk while cleaning rodent contamination?",
    body: "Prevention pages summarize CDC-style wet-cleaning guidance and escalation for heavy or workplace exposures.",
    href: "/prevention/cleaning-mouse-droppings/",
  },
  {
    title: "How is this different from news signals or risk models?",
    body: "Methodology pages separate reviewed case summaries, official alerts, reservoir ecology, and unreviewed news signals.",
    href: "/sources-methodology/",
  },
];

const trackerLayers = [
  "Reported case summaries: historical or agency-published records, not patient locations.",
  "Official alerts: selected public health notices, not complete live surveillance.",
  "Reservoir ecology: host and environment context, not proof of infected animals or human cases.",
  "Prevention guidance: source-linked cleanup and rodent-exposure education, not medical diagnosis.",
];

export default function HantavirusTrackerPage() {
  const alerts = getAlerts();
  const caseDataset = getCaseDataset();
  const reservoirDataset = getReservoirDataset();
  const sourceIds = collectSourceIds([
    ...alerts,
    ...caseDataset.records,
    ...reservoirDataset.reservoirs,
  ]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.74fr_0.26fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Reviewed tracker</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              Hantavirus tracker for maps, cases, official alerts and rodent reservoirs
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              This tracker organizes reviewed public health sources into map layers for
              historical case context, official outbreak notices, reservoir ecology, and
              prevention guidance. It is not live infection tracking or exact local risk scoring.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/"
                className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                Open map dashboard
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
              Reviewed {LAST_REVIEWED_LABEL}. This page is educational only. It does not provide
              diagnosis, emergency guidance, patient locations, real-time infection counts, or
              exact risk for a home, county, workplace, campsite, or trip.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MapPanel />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="tracker-intents">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-200">Search intent</p>
            <h2 id="tracker-intents" className="mt-2 text-3xl font-semibold">
              What people usually mean by “hantavirus tracker”
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Most users are trying to answer one of these questions. Each answer should stay
              tied to source type, geography level, review status, and limitations.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {intents.map((intent) => (
              <Link
                key={intent.title}
                href={intent.href}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-emerald-300/45 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-semibold text-white">{intent.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{intent.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="tracker-layers">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Layer model</p>
            <h2 id="tracker-layers" className="mt-2 text-3xl font-semibold">
              The tracker separates data from signals
            </h2>
          </div>
          <div className="grid gap-3">
            {trackerLayers.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-slate-200">
                {item}
              </div>
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
