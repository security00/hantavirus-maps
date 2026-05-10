import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

import { FAQ_ITEMS } from "@/lib/faq";

import { MapPanel } from "@/components/MapPanel";
import { SourceList } from "@/components/SourceList";
import {
  collectSourceIds,
  formatDateLabel,
  getAlerts,
  getCaseDataset,
  getReservoirDataset,
} from "@/lib/data";
import { LAST_REVIEWED_LABEL } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Hantavirus Map and Tracker: Cases, Alerts, Risk Areas",
  description:
    "A source-linked hantavirus map and reviewed tracker for historical case summaries, official alerts, rodent reservoir regions, prevention, symptoms, and methodology limits.",
  alternates: {
    canonical: "/",
  },
};

const layerExplanations = [
  {
    title: "Reported cases",
    body: "Historical surveillance summaries from CDC or state health departments. These records are state-level or agency-summary context, not live patient locations.",
  },
  {
    title: "Public health alerts",
    body: "Selected official notices such as WHO Disease Outbreak News, PAHO/WHO alerts, ECDC rapid assessments, and state Health Alert Network advisories.",
  },
  {
    title: "Rodent reservoir regions",
    body: "Ecological host-virus context. A reservoir range does not mean infected animals are present, and it does not prove human cases.",
  },
];


const seoUseCases = [
  {
    title: "Use the hantavirus map to see where cases have been reported",
    body: "Start with the hantavirus map when you want geographic context: U.S. state-level historical records, selected regional pages, and official source links rather than unsourced local claims.",
  },
  {
    title: "Use the hantavirus tracker to follow official alerts",
    body: "The hantavirus tracker groups reviewed public health notices from sources such as WHO, PAHO/WHO, ECDC, CDC, and state health departments. It is not a live infection counter.",
  },
  {
    title: "Check state and regional history before reading risk claims",
    body: "State and region pages help readers separate historical case summaries from current alerts, reservoir ecology, and prevention guidance.",
  },
  {
    title: "Read reservoir ecology without treating it as a case map",
    body: "Rodent reservoir layers explain host and environment context. They do not prove infected animals, human cases, or exact risk at a cabin, home, campsite, or workplace.",
  },
  {
    title: "Find cleanup guidance for mouse droppings and nests",
    body: "Prevention pages connect the hantavirus map experience with practical CDC-style cleanup guidance for droppings, urine, nests, enclosed spaces, and heavy contamination.",
  },
  {
    title: "Compare data, risk models, and news signals carefully",
    body: "A responsible hantavirus tracker should label what is a reviewed case summary, what is an official alert, what is ecological context, and what is only an unreviewed signal.",
  },
];

const homeFaqs = FAQ_ITEMS.slice(0, 4);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function Home() {
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
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <MapPanel home />
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 max-w-7xl">
          <p className="max-w-4xl text-base leading-7 text-slate-300">
            Hantavirus Maps is built around two core search needs: a <strong className="text-white">hantavirus map</strong>
            for geography and source context, and a <strong className="text-white">hantavirus tracker</strong> for reviewed
            official alerts, historical case summaries, reservoir ecology, and prevention guidance.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          <TrustStat label="Latest source check" value={LAST_REVIEWED_LABEL} />
          <TrustStat label="Data policy" value="Reviewed only" />
          <TrustStat label="CDC U.S. precision" value="State-level" />
          <TrustStat label="Medical use" value="Educational only" />
        </div>
      </section>


      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="seo-use-cases">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-200">Search guide</p>
            <h2 id="seo-use-cases" className="mt-2 text-3xl font-semibold">
              How to use this hantavirus map and hantavirus tracker
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              The homepage is organized around the main questions people bring to a hantavirus map:
              where the virus has appeared, whether a state or region has historical cases, whether
              there are official outbreak alerts, which rodent reservoirs matter, and how to reduce
              exposure during cleanup.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {seoUseCases.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="recent-alerts">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-200">Official notices</p>
            <h2 id="recent-alerts" className="mt-2 text-3xl font-semibold">
              Recent Official Alerts
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Alerts are selected from official agencies and summarized with their
              limitations. They are not a complete public surveillance dataset.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {alerts.slice(0, 6).map((alert) => (
              <article key={alert.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold text-amber-100">
                  {formatDateLabel(alert.date)} · {alert.agency}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{alert.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{alert.summary}</p>
                <p className="mt-3 text-sm leading-6 text-slate-500">{alert.riskLanguage}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="layer-explanation">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-200">Layer interpretation</p>
            <h2 id="layer-explanation" className="mt-2 text-3xl font-semibold">
              Data Layer Explanation
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              The map separates evidence types because each answers a different
              question and carries different limits.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {layerExplanations.map((layer) => (
              <article key={layer.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-xl font-semibold">{layer.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{layer.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="faq">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 max-w-3xl">
            <p className="text-sm font-semibold text-emerald-200">FAQ</p>
            <h2 id="faq" className="mt-2 text-3xl font-semibold">
              Hantavirus Map Questions
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {homeFaqs.map((faq) => (
              <article key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
              </article>
            ))}
          </div>
          <Link
            href="/faq/"
            className="mt-6 inline-flex rounded-md border border-emerald-300/35 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white"
          >
            Read full FAQ
          </Link>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="medical-disclaimer">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-6 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-semibold text-amber-100">Required disclaimer</p>
            <h2 id="medical-disclaimer" className="mt-2 text-2xl font-semibold">
              Medical Disclaimer
            </h2>
          </div>
          <p className="leading-8 text-amber-50/90">
            This site is an educational data project. It is not diagnosis,
            emergency care, professional medical advice, treatment guidance, a
            case reporting system, or a substitute for public health authorities.
            If you are sick after rodent exposure or have difficulty breathing,
            contact healthcare or emergency services.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SourceList sourceIds={sourceIds} compact />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/hantavirus-tracker/"
              className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
            >
              Open hantavirus tracker guide
            </Link>
            <Link
              href="/outbreaks/"
              className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
            >
              Review official outbreak notes
            </Link>
            <Link
              href="/united-states/"
              className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
            >
              View U.S. state context
            </Link>
            <Link
              href="/prevention/"
              className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
            >
              Read prevention guidance
            </Link>
          </div>
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
