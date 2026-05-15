import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

import { MapPanel } from "@/components/MapPanel";
import { formatDateLabel, getAlerts } from "@/lib/data";
import { LAST_REVIEWED_ISO, LAST_REVIEWED_LABEL, SITE_URL, SUPPORT_EMAIL } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Hantavirus Map 2026: Cases, Canada & US Tracker",
  description:
    "Track the latest hantavirus map snapshot with reviewed case summaries, Canada and US updates, official alerts, reservoir regions, and source limits.",
  alternates: {
    canonical: "/",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Hantavirus Maps",
  url: SITE_URL,
  email: SUPPORT_EMAIL,
  contactPoint: {
    "@type": "ContactPoint",
    email: SUPPORT_EMAIL,
    contactType: "support",
    availableLanguage: "en",
  },
};

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${SITE_URL}/#web-application`,
  name: "Hantavirus Maps",
  url: SITE_URL,
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  isAccessibleForFree: true,
  creator: {
    "@id": `${SITE_URL}/#organization`,
  },
  description:
    "A reviewed, source-linked hantavirus map and tracker for public health context, Canada and US updates, official alerts, reservoir ecology, prevention, and methodology limits. It is not live surveillance, diagnosis, or exact local risk scoring.",
};

const datasetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "@id": `${SITE_URL}/#reviewed-data-snapshots`,
  name: "Hantavirus Maps reviewed data snapshots",
  url: `${SITE_URL}/sources-methodology`,
  description:
    "Reviewed static snapshots of source-linked hantavirus case summaries, selected official public health alerts, rodent reservoir ecology, and source registry metadata. The dataset is educational and not a live case feed or patient-location dataset.",
  creator: {
    "@id": `${SITE_URL}/#organization`,
  },
  license: "https://creativecommons.org/licenses/by/4.0/",
  dateModified: LAST_REVIEWED_ISO,
  isAccessibleForFree: true,
  keywords: [
    "hantavirus map",
    "hantavirus tracker",
    "hantavirus map canada",
    "hantavirus counter",
    "official public health alerts",
    "rodent reservoir ecology",
    "reviewed source registry",
  ],
  variableMeasured: [
    "Reviewed case summaries",
    "Selected official public health alerts",
    "Rodent reservoir ecology",
    "Source limitations",
  ],
  measurementTechnique:
    "Manual review of official public health sources, agency pages, source registry records, and static JSON snapshots.",
  distribution: [
    {
      "@type": "DataDownload",
      name: "Reviewed updates JSON feed",
      encodingFormat: "application/feed+json",
      contentUrl: `${SITE_URL}/feed.json`,
    },
    {
      "@type": "DataDownload",
      name: "Reviewed updates RSS feed",
      encodingFormat: "application/rss+xml",
      contentUrl: `${SITE_URL}/feed.xml`,
    },
  ],
};


export default function Home() {
  const alerts = getAlerts();

  const primaryPaths = [
    {
      href: "/hantavirus-tracker",
      eyebrow: "Tracker",
      title: "Live case tracker guide",
      body: "How to read reviewed case summaries, official alerts, and the hantavirus counter without mistaking it for live surveillance.",
    },
    {
      href: "/hantavirus-risk-map",
      eyebrow: "Risk map",
      title: "Cases vs risk areas",
      body: "Understand the difference between reported cases, official alerts, reservoir ecology, and local risk signals.",
    },
    {
      href: "/outbreaks",
      eyebrow: "Outbreak notes",
      title: "Latest official updates",
      body: "Short event pages for selected WHO, ECDC, PAHO, Canada, and state health notices.",
    },
    {
      href: "/sources-methodology",
      eyebrow: "Methodology",
      title: "Sources and limits",
      body: "How records are selected, reviewed, linked, and labeled with evidence limits.",
    },
  ];

  const locationPaths = [
    { href: "/where/canada", label: "Canada", note: "PHAC map context · monitoring limits" },
    { href: "/where/florida", label: "Florida", note: "DOH source context" },
    { href: "/where/washington", label: "Washington", note: "State source context" },
    { href: "/where/united-states", label: "United States", note: "CDC state-level map" },
    { href: "/where/argentina", label: "Argentina", note: "Andes virus context" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script
        id="organization-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Script
        id="web-application-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />
      <Script
        id="dataset-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }}
      />

      <section className="overflow-hidden border-b border-white/10 bg-slate-950 px-2 py-3 sm:px-4 lg:px-6">
        <div id="interactive-map" className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-slate-950/60">
          <MapPanel home />
        </div>
      </section>


      <section className="border-y border-white/10 bg-slate-900/80 px-4 py-8 sm:px-6 lg:px-8" aria-labelledby="what-this-map-shows">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.46fr_0.54fr] lg:items-start">
          <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] p-5">
            <p className="text-sm font-semibold text-emerald-100">Answer-ready summary</p>
            <h2 id="what-this-map-shows" className="mt-2 text-3xl font-semibold">What this hantavirus map shows</h2>
            <p className="mt-4 leading-8 text-slate-200">
              This Hantavirus Map 2026 page is a reviewed, source-linked snapshot of selected case summaries, official public health alerts, reservoir context, and regional map pages. It is designed for searches such as <strong className="text-white">hantavirus map</strong>, <strong className="text-white">hantavirus maps</strong>, and <strong className="text-white">maps hantavirus</strong>, but it is not a live case counter, patient-location dataset, or local risk prediction.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link prefetch={false} href="/where/canada" className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-300/50 hover:bg-white/[0.07]">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Canada</span>
              <span className="mt-2 block text-lg font-semibold text-white">Hantavirus Canada map</span>
              <span className="mt-2 block text-sm leading-6 text-slate-300">PHAC and Government of Canada source context with monitoring limits.</span>
            </Link>
            <Link prefetch={false} href="/where/united-states" className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-300/50 hover:bg-white/[0.07]">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">United States</span>
              <span className="mt-2 block text-lg font-semibold text-white">US hantavirus map</span>
              <span className="mt-2 block text-sm leading-6 text-slate-300">CDC state-level case context and source precision limits.</span>
            </Link>
            <Link prefetch={false} href="/europe" className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-300/50 hover:bg-white/[0.07]">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Europe</span>
              <span className="mt-2 block text-lg font-semibold text-white">Europe hantavirus map</span>
              <span className="mt-2 block text-sm leading-6 text-slate-300">ECDC surveillance context, HFRS limits, and bank vole ecology.</span>
            </Link>
            <Link prefetch={false} href="/hantavirus-tracker" className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-300/50 hover:bg-white/[0.07]">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">Tracker</span>
              <span className="mt-2 block text-lg font-semibold text-white">Hantavirus tracker</span>
              <span className="mt-2 block text-sm leading-6 text-slate-300">Reviewed alerts, case summaries, and counter context without live-surveillance claims.</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/70 px-4 py-8 sm:px-6 lg:px-8" aria-labelledby="home-next-paths">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-emerald-200">Hantavirus map shortcuts</p>
              <h2 id="home-next-paths" className="mt-2 text-3xl font-semibold">Live tracker, Canada map, counter and risk layers</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Start with the interactive map, then use focused pages for Canada and US updates, source limits, the latest reviewed alerts, and prevention context.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {primaryPaths.map((path) => (
                <Link prefetch={false} key={path.href} href={path.href} className="rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-emerald-300/50 hover:bg-white/[0.07]">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200">{path.eyebrow}</span>
                  <span className="mt-2 block text-lg font-semibold text-white">{path.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-slate-300">{path.body}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-5">
            <TrustStat label="Updated snapshot" value={LAST_REVIEWED_LABEL} />
            <TrustStat label="Source cadence" value="Reviewed as alerts change" />
            <TrustStat label="Hantavirus counter" value="Reviewed records only" />
            <TrustStat label="U.S. precision" value="State-level" />
            <TrustStat label="Medical use" value="Educational only" />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="popular-location-pages">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.28fr_0.72fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Popular map searches</p>
            <h2 id="popular-location-pages" className="mt-2 text-2xl font-semibold">Hantavirus Canada map, US map and regional pages</h2>
            <p className="mt-3 leading-7 text-slate-300">
              Use these pages for regional source context, including the Canada hantavirus map, PHAC monitoring limits, and US state-level map notes, instead of adding long location explanations to the homepage.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {locationPaths.map((path) => (
              <Link prefetch={false} key={path.href} href={path.href} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/50 hover:text-white">
                <span className="block">{path.label === "Canada" ? "Hantavirus Canada map" : `Hantavirus map ${path.label}`}</span>
                <span className="mt-1 block text-xs font-normal leading-5 text-slate-400">{path.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="latest-official-alerts">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-emerald-200">Latest reviewed notices</p>
              <h2 id="latest-official-alerts" className="mt-2 text-2xl font-semibold">Newest official-source updates</h2>
              <p className="mt-3 leading-7 text-slate-300">A short homepage preview. The full alert archive lives on the outbreak pages.</p>
            </div>
            <Link prefetch={false} href="/outbreaks" className="inline-flex rounded-md border border-emerald-300/35 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white">
              View all outbreak notes
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {alerts.slice(0, 3).map((alert) => (
              <article key={alert.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold text-amber-100">{formatDateLabel(alert.date)} · {alert.agency}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{alert.title}</h3>
                <p className="mt-3 line-clamp-3 leading-7 text-slate-300">{alert.summary}</p>
                <Link prefetch={false} href={`/event/${alert.id}`} className="mt-5 inline-flex text-sm font-semibold text-emerald-200 hover:text-white">
                  Read reviewed event →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="machine-readable-index">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p id="machine-readable-index" className="mr-auto text-sm leading-6 text-slate-300">
            Need citation-ready data? Start with the reviewed CDC source note, the WHO cruise event, or the raw event record.
          </p>
          <Link prefetch={false} href="/source/cdc-reported-cases" className="rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-white transition hover:border-emerald-300/50">
            CDC source note
          </Link>
          <Link prefetch={false} href="/event/who-don600-2026-cruise" className="rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-white transition hover:border-emerald-300/50">
            WHO cruise event
          </Link>
          <Link prefetch={false} href="/raw/event/who-don600-2026-cruise.md" className="rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-white transition hover:border-emerald-300/50">
            Raw markdown
          </Link>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8" aria-labelledby="medical-disclaimer">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-5 lg:grid-cols-[0.24fr_0.76fr]">
          <div>
            <p className="text-sm font-semibold text-amber-100">Required disclaimer</p>
            <h2 id="medical-disclaimer" className="mt-2 text-xl font-semibold">Medical Disclaimer</h2>
          </div>
          <p className="leading-8 text-amber-50/90">
            This site is an educational data project, not diagnosis, emergency care, professional medical advice, live surveillance, or a substitute for public health authorities. If you are sick after rodent exposure or have difficulty breathing, contact healthcare or emergency services.
          </p>
        </div>
      </section>
    </main>
  );
}

function TrustStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/80 p-4">
      <p className="text-xs font-semibold text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}
