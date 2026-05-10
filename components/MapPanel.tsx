import Link from "next/link";

import { InteractiveMapLoader } from "@/components/InteractiveMapLoader";
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
};

export function MapPanel({ home = false }: MapPanelProps) {
  const casePoints = getCaseRecords().filter((record) => record.mapPoint);
  const alertPoints = getAlerts().filter((alert) => alert.mapPoint);
  const latestAlerts = getAlerts().slice(0, 3);
  const reservoirs = getReservoirs();
  const sourceIds = collectSourceIds([...casePoints, ...alertPoints, ...reservoirs]);
  const sources = getSourcesByIds(sourceIds).slice(0, 4);
  const sourcesById = Object.fromEntries(getSourceRegistry().sources.map((source) => [source.id, source]));
  const Heading = home ? "h1" : "h2";

  return (
    <section className="map-panel overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl shadow-slate-950/70">
      <div className="grid gap-0 xl:grid-cols-[1fr_360px]">
        <div className="p-4 sm:p-6">
          <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-200">Reviewed public health map</p>
              <Heading className="mt-2 max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                Hantavirus map: Cases, Risk Areas and Public Health Alerts
              </Heading>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
                Interactive MVP showing source-linked state case summaries, selected official
                alerts, and reservoir regions on a free OpenStreetMap layer. It is not live local surveillance
                and does not publish county-precision cases.
              </p>
            </div>
            <div className="grid shrink-0 gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] p-4 text-sm">
              <span className="font-semibold text-emerald-100">Source check</span>
              <span className="text-slate-200">{LAST_REVIEWED_LABEL}</span>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_300px] lg:items-start">
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Map legend</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Toggle layers below. Click any colored marker or circle for source notes and limits.
                  </p>
                </div>
                <Link
                  href="/sources-methodology/"
                  className="inline-flex rounded-md border border-emerald-300/35 px-3 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200 hover:text-white"
                >
                  Show sources
                </Link>
              </div>
              <div className="layer-controls mt-3 grid gap-2 sm:grid-cols-3">
                <label className="layer-toggle case-toggle">
                  <input id="layer-cases" type="checkbox" defaultChecked />
                  <span><b className="legend-dot legend-case" /> Reported cases</span>
                </label>
                <label className="layer-toggle alert-toggle">
                  <input id="layer-alerts" type="checkbox" defaultChecked />
                  <span><b className="legend-dot legend-alert" /> Official alerts</span>
                </label>
                <label className="layer-toggle reservoir-toggle">
                  <input id="layer-reservoirs" type="checkbox" defaultChecked />
                  <span><b className="legend-dot legend-reservoir" /> Reservoir ecology</span>
                </label>
              </div>
            </div>

            <div className="grid gap-2 text-xs text-slate-400">
              <span className="rounded-md border border-white/10 px-2 py-1">Pin numbers or circles are source summaries, not confirmed local case counts</span>
              <span className="rounded-md border border-white/10 px-2 py-1">CDC public U.S. case precision is state-level</span>
              <span className="rounded-md border border-white/10 px-2 py-1">Reservoir presence is not human infection risk</span>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-lg border border-white/10 bg-slate-950">
            <InteractiveMapLoader
              casePoints={casePoints}
              alertPoints={alertPoints}
              reservoirs={reservoirs}
              sourcesById={sourcesById}
            />
          </div>

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
