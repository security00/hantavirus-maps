import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

import { FAQ_ITEMS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Hantavirus Map FAQ",
  description:
    "Frequently asked questions about Hantavirus Maps, source-linked layers, official alerts, reservoir ecology, and medical limitations.",
  alternates: {
    canonical: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Script
        id="faq-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="border-b border-white/10 bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold text-emerald-200">FAQ</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            Hantavirus Map FAQ
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Plain-language answers for reading the map, source markers, official alerts,
            reservoir ecology, and the limits of this educational snapshot.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          {FAQ_ITEMS.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-xl font-semibold text-white">{faq.question}</h2>
              <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-3">
          <Link prefetch={false}
            href="/sources-methodology"
            className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
          >
            Review sources and methodology
          </Link>
          <Link prefetch={false}
            href="/"
            className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/50"
          >
            Back to map
          </Link>
        </div>
      </section>
    </main>
  );
}
