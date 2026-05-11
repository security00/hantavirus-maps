import Link from "next/link";

import { InteractiveMapLoader } from "@/components/InteractiveMapLoader";
import { MapQuickActions } from "@/components/MapQuickActions";
import {
  collectSourceIds,
  formatDateLabel,
  getAlerts,
  getCaseRecords,
  getReservoirs,
  getSourceRegistry,
  getSourcesByIds
} from "@/lib/data";
import { LAST_REVIEWED_LABEL } from "@/lib/routes";

type MapPanelProps = {
  home?: boolean;
  immersive?: boolean;
};

export function MapPanel({ home = false, immersive = false }: MapPanelProps) {
  const casePoints = getCaseRecords().filter((record) => record.mapPoint);
  const alertPoints = getAlerts().filter((alert) => alert.mapPoint);
  const latestAlerts = getAlerts().slice(0, 3);
  const reservoirs = getReservoirs();
  const sourceIds = collectSourceIds([...casePoints, ...alertPoints, ...reservoirs]);
  const sources = getSourcesByIds(sourceIds).slice(0, 4);
  const sourcesById = Object.fromEntries(getSourceRegistry().sources.map((source) => [source.id, source]));
  const Heading = home ? "h1" : "h2";

  if (immersive) {
    return (
      <section className="immersive-map-panel relative min-h-[calc(100vh-66px)] overflow-hidden border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0">
          <InteractiveMapLoader
            casePoints={casePoints}
            alertPoints={alertPoints}
            reservoirs={reservoirs}
            sourcesById={sourcesById}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_45%_30%,rgba(16,185,129,0.12),transparent_34%),linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.68)_34%,rgba(2,6,23,0.18)_64%,rgba(2,6,23,0.78)_100%)]" />

        <div className="relative z-10 grid min-h-[calc(100vh-66px)] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,0.58fr)_minmax(320px,0.42fr)] lg:px-8 xl:grid-cols-[minmax(0,0.62fr)_420px]">
          <div className="flex max-w-4xl flex-col justify-between gap-8 py-4 lg:py-8">
            <div className="max-w-3xl rounded-2xl border border-white/10 bg-slate-950/72 p-5 shadow-2xl shadow-slate-950/70 backdrop-blur-md sm:p-7">
              <p className="text-sm font-semibold text-emerald-200">Reviewed public health map</p>
              <Heading className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                Hantavirus map and tracker for cases, alerts and risk areas
              </Heading>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Explore source-linked state case summaries, selected official alerts, and rodent reservoir ecology on an immersive map. This is a reviewed educational snapshot, not live local surveillance or county-precision case tracking.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/hantavirus-tracker/"
                  className="rounded-md bg-emerald-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
                >
                  Open tracker guide
                </Link>
                <Link
                  href="/sources-methodology/"
                  className="rounded-md border border-white/20 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60"
                >
                  Review sources
                </Link>
              </div>
            </div>

            <div className="grid max-w-4xl gap-3 sm:grid-cols-3">
              <MapMetric label="U.S. case geography" value="State-level" detail="CDC public limit" />
              <MapMetric label="Alert policy" value="Official only" detail="No rumor scraping" />
              <MapMetric label="Reservoir layer" value="Ecology" detail="Not infected animals" />
            </div>
          </div>

          <aside className="flex flex-col gap-4 self-start lg:sticky lg:top-24 lg:max-h-[calc(100vh-96px)] lg:overflow-y-auto lg:py-4">
            <section className="rounded-2xl border border-emerald-300/20 bg-slate-950/78 p-4 shadow-2xl shadow-slate-950/60 backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">Source check</p>
                  <p className="mt-1 text-lg font-semibold text-white">{LAST_REVIEWED_LABEL}</p>
                </div>
                <Link
                  href="/sources-methodology/"
                  className="rounded-md border border-emerald-300/35 px-3 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white"
                >
                  Methodology
                </Link>
              </div>
              <div className="mt-4 grid gap-2 text-xs text-slate-300">
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">Markers are source summaries, not confirmed local case counts.</span>
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">Reservoir presence is ecology context, not human infection risk.</span>
                <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">Click map points for source links and limits.</span>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-slate-950/78 p-4 shadow-2xl shadow-slate-950/60 backdrop-blur-md">
              <p className="text-sm font-semibold text-white">Layer legend</p>
              <div className="mt-3 grid gap-2">
                <div className="layer-toggle case-toggle cursor-default"><span><b className="legend-dot legend-case" /> Reported case summaries</span></div>
                <div className="layer-toggle alert-toggle cursor-default"><span><b className="legend-dot legend-alert" /> Official alerts</span></div>
                <div className="layer-toggle reservoir-toggle cursor-default"><span><b className="legend-dot legend-reservoir" /> Reservoir ecology</span></div>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-slate-950/78 p-4 shadow-2xl shadow-slate-950/60 backdrop-blur-md">
              <p className="text-sm font-semibold text-emerald-200">Recent official alerts</p>
              <div className="mt-3 grid gap-3">
                {latestAlerts.map((alert) => (
                  <article key={alert.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-sm font-semibold leading-6 text-white">{alert.title}</h2>
                      <span className="shrink-0 rounded-md bg-amber-300/15 px-2 py-1 text-xs font-semibold text-amber-100">
                        {formatDateLabel(alert.date)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{alert.summary}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{alert.riskLanguage}</p>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    );
  }

  return (
    <section className="map-panel overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl shadow-slate-950/70">
      <div className="grid gap-0 xl:grid-cols-[1fr_360px]">
        <div className="p-2 sm:p-6">
          <div className="flex flex-col gap-3 border-b border-white/10 pb-3 sm:gap-4 sm:pb-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold text-emerald-200 sm:text-sm">Reviewed public health map</p>
              <Heading className="mt-1 max-w-4xl text-2xl font-semibold leading-tight text-white sm:mt-2 sm:text-5xl">
                Hantavirus map and tracker
              </Heading>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300 sm:mt-4 sm:text-base sm:leading-7">
                Source-linked case summaries, selected official alerts, and reservoir regions. Not live local surveillance or county-precision case tracking.
              </p>
            </div>
            <div className="grid shrink-0 gap-1 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] p-3 text-xs sm:gap-2 sm:p-4 sm:text-sm">
              <span className="font-semibold text-emerald-100">Source check</span>
              <span className="text-slate-200">{LAST_REVIEWED_LABEL}</span>
            </div>
          </div>

          <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-slate-950 sm:mt-5">
            <InteractiveMapLoader
              casePoints={casePoints}
              alertPoints={alertPoints}
              reservoirs={reservoirs}
              sourcesById={sourcesById}
            />
          </div>

          <div className="mt-3 grid gap-4 lg:grid-cols-[1fr_300px] lg:items-start">
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Map legend</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Click any colored marker or circle for source notes and limits.
                  </p>
                </div>
                <Link
                  href="/sources-methodology/"
                  className="inline-flex rounded-md border border-emerald-300/35 px-3 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white"
                >
                  Show sources
                </Link>
              </div>
              <div className="layer-controls mt-3 grid gap-2 sm:grid-cols-3" aria-label="Map layer legend">
                <div className="layer-toggle case-toggle cursor-default"><span><b className="legend-dot legend-case" /> Reported cases</span></div>
                <div className="layer-toggle alert-toggle cursor-default"><span><b className="legend-dot legend-alert" /> Official alerts</span></div>
                <div className="layer-toggle reservoir-toggle cursor-default"><span><b className="legend-dot legend-reservoir" /> Reservoir ecology</span></div>
              </div>
            </div>

            <div className="grid gap-2 text-xs text-slate-400">
              <span className="rounded-md border border-white/10 px-2 py-1">Markers are source summaries, not confirmed local case counts</span>
              <span className="rounded-md border border-white/10 px-2 py-1">CDC public U.S. case precision is state-level</span>
              <span className="rounded-md border border-white/10 px-2 py-1">Reservoir presence is not human infection risk</span>
            </div>
          </div>

          <div className="mt-4">
            <MapQuickActions />
          </div>

          <div className="mt-3 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.06] px-3 py-2 text-xs font-semibold leading-5 text-emerald-50 sm:hidden">
            Drag the map, pinch to zoom, or tap a colored marker. Use quick links if you are looking for a state, Canada, alerts, or sources.
          </div>

          <section className="mt-4 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.06] p-4" aria-labelledby="map-next-steps">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">After using the map</p>
                <h2 id="map-next-steps" className="mt-1 text-lg font-semibold text-white">Choose the next answer you need</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-300">
                Visitors are already clicking and dragging the map. These shortcuts turn that interaction into a clearer reading path.
              </p>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <MapNextStep href="/where/united-states/" label="Check the U.S. map by state" detail="See source-linked state and regional context." />
              <MapNextStep href="/outbreaks/" label="Review official alerts" detail="Follow reviewed WHO, ECDC, PAHO/WHO, CDC, and health department notices." />
              <MapNextStep href="/prevention/cleaning-mouse-droppings/" label="Need cleanup guidance?" detail="Read practical prevention steps for droppings, nests, and enclosed spaces." />
            </div>
          </section>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <MapMetric label="U.S. case geography" value="State-level" detail="CDC public limit" />
            <MapMetric label="Alert policy" value="Official only" detail="No rumor scraping" />
            <MapMetric label="Reservoir layer" value="Ecology" detail="Not infected animals" />
          </div>
        </div>

        <aside className="border-t border-white/10 bg-slate-950/[0.72] p-4 sm:p-6 xl:border-l xl:border-t-0">
          <div className="space-y-5">
            <section>
              <p className="text-sm font-semibold text-emerald-200">Recent official alerts</p>
              <div className="mt-3 grid gap-3">
                {latestAlerts.map((alert) => (
                  <article key={alert.id} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-sm font-semibold leading-6 text-white">{alert.title}</h2>
                      <span className="shrink-0 rounded-md bg-amber-300/15 px-2 py-1 text-xs font-semibold text-amber-100">
                        {formatDateLabel(alert.date)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{alert.summary}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{alert.riskLanguage}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-sm font-semibold text-white">Source transparency</h2>
                <Link href="/sources-methodology/" className="text-xs font-semibold text-emerald-200 hover:text-white">
                  Show all
                </Link>
              </div>
              <div className="mt-3 grid gap-2">
                {sources.map((source) => (
                  <a
                    key={source.id}
                    href={source.url}
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-md border border-white/10 px-3 py-2 text-sm text-slate-300 transition hover:border-emerald-300/50 hover:text-white"
                  >
                    {source.publisher}
                  </a>
                ))}
              </div>
              <Link
                href="/faq/"
                className="mt-4 inline-flex rounded-md bg-emerald-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                Read map FAQ
              </Link>
            </section>
          </div>
        </aside>
      </div>
    </section>
  );
}

function MapMetric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs font-semibold text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{detail}</p>
    </div>
  );
}

function MapNextStep({ href, label, detail }: { href: string; label: string; detail: string }) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-white/10 bg-slate-950/70 p-4 transition hover:border-emerald-300/50 hover:bg-slate-900"
    >
      <span className="text-sm font-semibold text-emerald-100">{label}</span>
      <span className="mt-2 block text-sm leading-6 text-slate-400">{detail}</span>
    </Link>
  );
}
