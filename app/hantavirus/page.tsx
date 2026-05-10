import type { Metadata } from "next";
import Link from "next/link";

import { SourceList } from "@/components/SourceList";
import { LAST_REVIEWED_LABEL } from "@/lib/routes";

export const metadata: Metadata = {
  title: "What Is Hantavirus? Educational Disease Overview",
  description:
    "Conservative, source-linked hantavirus overview covering HPS, HFRS, transmission, geography, symptoms, prevention, cleanup, diagnosis limits, treatment boundaries, and map context.",
  alternates: {
    canonical: "/hantavirus/",
  },
};

const sourceIds = [
  "cdc-about",
  "cdc-surveillance",
  "cdc-prevention",
  "cdc-rodent-cleanup",
  "who-factsheet-2026",
  "ecdc-factsheet",
  "cdc-reported-cases",
  "paho-alert-2025",
];

const overviewSections = [
  {
    id: "what-hantavirus-is",
    heading: "What Hantavirus Is",
    body: [
      "Hantaviruses are a group of viruses carried mainly by rodents. People can become infected when they are exposed to infected rodents or contaminated urine, droppings, saliva, or nesting material.",
      "This overview uses CDC, WHO, ECDC, and PAHO/WHO source-linked education. It does not try to turn broad public health information into a personal risk score or local case report.",
    ],
  },
  {
    id: "hps-vs-hfrs",
    heading: "HPS vs HFRS",
    body: [
      "Hantavirus pulmonary syndrome, or HPS, is the severe lung-focused illness most often discussed in the Americas. WHO also uses hantavirus cardiopulmonary syndrome, or HCPS, for severe disease affecting the lungs and heart.",
      "Hemorrhagic fever with renal syndrome, or HFRS, is the kidney- and blood-vessel-focused syndrome most often discussed in Europe and Asia. CDC notes that Seoul virus can cause HFRS and is found worldwide, including in the United States.",
    ],
  },
  {
    id: "transmission",
    heading: "Transmission",
    body: [
      "Official sources emphasize rodent exposure. Risk can increase when contaminated dust is stirred up in enclosed or poorly ventilated spaces, during cleanup, or around rodent-infested buildings, workplaces, vehicles, cabins, campsites, or storage areas.",
      "Rodent bites or scratches are described as less common routes. Person-to-person spread should not be generalized across hantaviruses; WHO and CDC describe Andes virus as the currently known hantavirus with documented limited spread among close contacts.",
    ],
  },
  {
    id: "where-it-circulates",
    heading: "Where It Circulates",
    body: [
      "Hantaviruses circulate in rodent reservoirs in many parts of the world, but the virus species, rodent hosts, disease syndromes, and public health reporting systems differ by region.",
      "In the United States, CDC public case geography is state-level. In Europe, ECDC frames orthohantavirus infection largely through HFRS surveillance and reservoir ecology. In the Americas, PAHO/WHO alerts add regional context, especially for endemic Southern Cone countries.",
    ],
  },
  {
    id: "symptoms-overview",
    heading: "Symptoms Overview",
    body: [
      "Early symptoms described by official sources can be nonspecific, including fever, fatigue, muscle aches, headache, and gastrointestinal symptoms. These symptoms overlap with many other illnesses.",
      "Later illness can differ by syndrome: HPS or HCPS can involve cough, shortness of breath, lung fluid, shock, or heart-lung complications, while HFRS can involve low blood pressure, bleeding problems, or kidney failure. Symptoms alone cannot confirm hantavirus infection.",
    ],
  },
  {
    id: "prevention-cleanup",
    heading: "Prevention and Cleanup",
    body: [
      "Prevention focuses on reducing contact with wild rodents and their urine, droppings, saliva, and nesting material. CDC prevention guidance emphasizes keeping rodents out of homes and workplaces, removing food sources, and reducing rodent shelter.",
      "Cleanup guidance is situation-specific. The dedicated cleanup page summarizes CDC guidance for avoiding dry sweeping or vacuuming, using disinfectant-based wet cleanup, and knowing when heavy contamination may need professional or public health input.",
    ],
  },
  {
    id: "diagnosis-treatment-boundary",
    heading: "Diagnosis and Treatment Boundary",
    body: [
      "This page is educational only. It is not a diagnosis, not treatment advice, not emergency guidance, not a professional public health determination, and not live surveillance.",
      "CDC surveillance case definitions are for public health classification, not for clinicians deciding an individual patient's care. Diagnosis and treatment decisions belong with qualified healthcare professionals and appropriate public health authorities.",
    ],
  },
  {
    id: "map-tracker-relationship",
    heading: "How This Page Relates to the Map and Tracker",
    body: [
      "The map and tracker organize reviewed layers: historical case summaries, selected official alerts, and rodent reservoir ecology. This overview explains the disease terms behind those layers so readers do not confuse case history, reservoir range, and current risk.",
      "Use the tracker for source-linked alert context, the methodology page for data rules, and the prevention pages for cleanup and exposure-reduction education. None of those pages provides live surveillance or individual medical guidance.",
    ],
  },
];

const relatedLinks = [
  { href: "/symptoms/", label: "Symptoms overview" },
  { href: "/prevention/", label: "Prevention" },
  { href: "/prevention/cleaning-mouse-droppings/", label: "Cleaning mouse droppings" },
  { href: "/hantavirus-tracker/", label: "Hantavirus tracker" },
  { href: "/sources-methodology/", label: "Sources and methodology" },
];

export default function HantavirusOverviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_0.55fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold text-emerald-200">Disease overview</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
              What Is Hantavirus?
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              A conservative, official-source educational overview of hantavirus disease terms,
              transmission, geography, symptoms, prevention, cleanup, diagnosis boundaries, and
              how those concepts relate to the Hantavirus Maps tracker.
            </p>
          </div>

          <aside className="rounded-lg border border-amber-200/25 bg-amber-200/[0.08] p-5">
            <p className="text-sm font-semibold text-amber-100">Educational use only</p>
            <p className="mt-3 text-sm leading-6 text-amber-50/[0.85]">
              This page is not diagnosis, treatment advice, emergency guidance, professional
              public health direction, or live surveillance. Source snapshot reviewed{" "}
              {LAST_REVIEWED_LABEL}.
            </p>
          </aside>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
        <div className="space-y-10">
          <section aria-labelledby="overview-key-points">
            <h2 id="overview-key-points" className="text-2xl font-semibold">
              Key Points
            </h2>
            <div className="mt-5 grid gap-3">
              {[
                "Hantavirus disease framing differs by region, syndrome, rodent reservoir, and reporting system.",
                "Public map layers are reviewed source summaries, not exact household, campsite, workplace, county, or patient-level risk.",
                "This page links to official and agency-published sources instead of providing medical, treatment, emergency, or live surveillance guidance.",
              ].map((point) => (
                <div key={point} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <p className="leading-7 text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {overviewSections.map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id} className="text-2xl font-semibold">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="leading-8 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <SourceList sourceIds={sourceIds} />
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold">Related Pages</h2>
            <div className="mt-4 grid gap-2">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-white/10 px-3 py-3 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
            <h2 className="text-lg font-semibold">Map Context</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <p>Reported cases are historical or agency-summary records.</p>
              <p>Official alerts are selected source-linked notices.</p>
              <p>Reservoir regions are ecology, not infected animals or exact human risk.</p>
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
