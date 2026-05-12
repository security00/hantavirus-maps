import Link from "next/link";
import type { ReactNode } from "react";

import { getEventRecords } from "@/lib/event-pages";
import { SOURCE_PAGE_IDS, WHERE_PAGE_SLUGS, sourcePath, wherePath } from "@/lib/programmatic-pages";

const sourceLabels: Record<string, string> = {
  "cdc-reported-cases": "CDC reported cases",
  "cdc-surveillance": "CDC surveillance rules",
  "who-don600-2026": "WHO DON600 cruise cluster",
  "ecdc-cruise-2026": "ECDC cruise assessment",
  "paho-alert-2025": "PAHO Americas alert",
  "canada-risk-2026": "Canada current situation",
  "florida-health-hps": "Florida DOH HPS",
  "wa-doh-hantavirus": "Washington DOH",
  "nmdoh-hantavirus": "New Mexico DOH",
  "cdph-hantavirus": "California CDPH",
  "argentina-ben-785-2025": "Argentina bulletin",
};

const whereLabels: Record<string, string> = {
  "united-states": "United States",
  "new-mexico": "New Mexico",
  "california": "California",
  "arizona": "Arizona",
  "colorado": "Colorado",
  "washington": "Washington",
  "florida": "Florida",
  "canada": "Canada",
  "argentina": "Argentina",
};

type InternalLinkClusterProps = {
  title?: string;
  intro?: string;
  compact?: boolean;
  showRaw?: boolean;
  sourceLimit?: number;
  whereLimit?: number;
  eventLimit?: number;
};

export function InternalLinkCluster({
  title = "Explore reviewed map records",
  intro = "Use these internal links to move between source notes, location summaries, event records, and machine-readable files without losing the review context.",
  compact = false,
  showRaw = true,
  sourceLimit = 6,
  whereLimit = 6,
  eventLimit = 6,
}: InternalLinkClusterProps) {
  const events = getEventRecords().slice(0, eventLimit);
  const sources = SOURCE_PAGE_IDS.slice(0, sourceLimit);
  const places = WHERE_PAGE_SLUGS.slice(0, whereLimit);

  return (
    <section className="border-t border-white/10 pt-10" aria-labelledby="internal-link-cluster">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm font-semibold text-emerald-200">Internal index</p>
        <h2 id="internal-link-cluster" className="mt-2 text-3xl font-semibold text-white">{title}</h2>
        <p className="mt-3 leading-7 text-slate-300">{intro}</p>
      </div>

      <div className={compact ? "grid gap-4 lg:grid-cols-3" : "grid gap-5 lg:grid-cols-3"}>
        <LinkGroup title="Where pages" description="Reviewed geography summaries, not live local risk maps.">
          {places.map((slug) => (
            <LinkItem key={slug} href={wherePath(slug)} label={whereLabels[slug] ?? slug} />
          ))}
        </LinkGroup>

        <LinkGroup title="Source notes" description="Official source pages with use and limitation notes.">
          {sources.map((id) => (
            <LinkItem key={id} href={sourcePath(id)} label={sourceLabels[id] ?? id} />
          ))}
        </LinkGroup>

        <LinkGroup title="Event records" description="Reviewed event/case records with citation-safe summaries.">
          {events.map((event) => (
            <div key={event.id} className="rounded-md border border-white/10 bg-white/[0.035] p-3">
              <Link prefetch={false} href={event.canonicalPath} className="text-sm font-semibold leading-6 text-slate-100 hover:text-emerald-200">
                {event.title}
              </Link>
              {showRaw && (
                <Link prefetch={false} href={event.rawPath} className="mt-2 block text-xs font-semibold text-emerald-200 hover:text-white">
                  Raw markdown →
                </Link>
              )}
            </div>
          ))}
        </LinkGroup>
      </div>
    </section>
  );
}

function LinkGroup({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      <div className="mt-4 grid gap-2">{children}</div>
    </div>
  );
}

function LinkItem({ href, label }: { href: string; label: string }) {
  return (
    <Link prefetch={false} href={href} className="rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200 transition hover:border-emerald-300/50 hover:text-white">
      {label}
    </Link>
  );
}
