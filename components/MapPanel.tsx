import Link from "next/link";

import {
  collectSourceIds,
  formatDateLabel,
  getAlerts,
  getCaseRecords,
  getReservoirs,
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
                Static MVP showing source-linked state case summaries, selected official
                alerts, and reservoir regions. It is not live local surveillance
                and does not publish county-precision cases.
              </p>
            </div>
            <div className="grid shrink-0 gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] p-4 text-sm">
              <span className="font-semibold text-emerald-100">Source check</span>
              <span className="text-slate-200">{LAST_REVIEWED_LABEL}</span>
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="layer-controls grid gap-2 sm:grid-cols-3">
              <label className="layer-toggle case-toggle">
                <input id="layer-cases" type="checkbox" defaultChecked />
                <span>Reported cases</span>
              </label>
              <label className="layer-toggle alert-toggle">
                <input id="layer-alerts" type="checkbox" defaultChecked />
                <span>Public health alerts</span>
              </label>
              <label className="layer-toggle reservoir-toggle">
                <input id="layer-reservoirs" type="checkbox" defaultChecked />
                <span>Rodent reservoirs</span>
              </label>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="rounded-md border border-white/10 px-2 py-1">CDC state-level limits</span>
              <span className="rounded-md border border-white/10 px-2 py-1">Reviewed records only</span>
              <span className="rounded-md border border-white/10 px-2 py-1">Reservoir is not a case</span>
            </div>
          </div>

          <div className="map-viewport mt-5 overflow-hidden rounded-lg border border-white/10 bg-slate-950">
            <svg
              role="img"
              aria-label="Static hantavirus map showing state-level case markers, official alert markers, and reservoir regions"
              viewBox="0 0 1000 620"
              className="h-auto w-full"
            >
              <defs>
                <pattern id="map-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(148, 163, 184, 0.14)" strokeWidth="1" />
                </pattern>
                <filter id="map-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="1000" height="620" fill="#020617" />
              <rect width="1000" height="620" fill="url(#map-grid)" />
              <path
                d="M96 160 C145 86 248 66 338 90 C408 109 440 152 475 205 C508 255 551 282 548 340 C545 412 474 438 404 421 C335 405 290 384 225 397 C159 410 102 370 84 312 C66 254 62 210 96 160Z"
                fill="#122033"
                stroke="rgba(226, 232, 240, 0.2)"
                strokeWidth="2"
              />
              <path
                d="M360 402 C405 390 454 415 475 464 C493 506 477 553 432 584 C391 612 357 592 348 548 C341 512 311 481 326 442 C333 424 342 410 360 402Z"
                fill="#122033"
                stroke="rgba(226, 232, 240, 0.2)"
                strokeWidth="2"
              />
              <path
                d="M665 132 C706 96 789 102 826 143 C864 184 837 245 786 259 C730 275 676 249 653 207 C636 176 642 151 665 132Z"
                fill="#122033"
                stroke="rgba(226, 232, 240, 0.2)"
                strokeWidth="2"
              />

              <g className="reservoir-layer">
                <path
                  d="M150 202 C198 165 283 164 330 206 C377 248 358 330 286 352 C223 372 160 342 132 288 C113 251 119 226 150 202Z"
                  fill="rgba(52, 211, 153, 0.2)"
                  stroke="rgba(52, 211, 153, 0.78)"
                  strokeWidth="3"
                />
                <path
                  d="M676 145 C724 119 795 130 816 174 C836 219 791 251 737 245 C688 240 653 209 656 177 C657 164 664 154 676 145Z"
                  fill="rgba(45, 212, 191, 0.17)"
                  stroke="rgba(45, 212, 191, 0.72)"
                  strokeWidth="3"
                />
                <path
                  d="M374 424 C421 417 461 453 460 505 C459 546 420 581 383 569 C349 558 344 518 356 482 C363 458 358 432 374 424Z"
                  fill="rgba(251, 191, 36, 0.14)"
                  stroke="rgba(251, 191, 36, 0.7)"
                  strokeWidth="3"
                />
                <text x="150" y="190" className="map-label">
                  Deer mouse / SNV context
                </text>
                <text x="676" y="132" className="map-label">
                  Bank vole / PUUV context
                </text>
                <text x="380" y="415" className="map-label">
                  Andes virus context
                </text>
              </g>

              <g className="case-layer" filter="url(#map-glow)">
                {casePoints.map((record) => (
                  <g key={record.id}>
                    <circle cx={record.mapPoint?.x} cy={record.mapPoint?.y} r="10" className="case-pin-ring" />
                    <circle cx={record.mapPoint?.x} cy={record.mapPoint?.y} r="5" className="case-pin" />
                  </g>
                ))}
              </g>

              <g className="alert-layer" filter="url(#map-glow)">
                {alertPoints.map((alert) => (
                  <g key={alert.id}>
                    <path
                      d={`M ${alert.mapPoint?.x ?? 0} ${(alert.mapPoint?.y ?? 0) - 13} l 12 23 h -24 Z`}
                      className="alert-pin"
                    />
                    <circle cx={alert.mapPoint?.x} cy={(alert.mapPoint?.y ?? 0) - 3} r="3" fill="#020617" />
                  </g>
                ))}
              </g>

              <g>
                <text x="80" y="520" className="map-caption">
                  Layer visibility is a static CSS control. Geography is generalized for source explanation.
                </text>
                <text x="80" y="548" className="map-caption">
                  Public CDC U.S. case geography is state-level; this site does not provide county case precision.
                </text>
              </g>
            </svg>
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
              <h2 className="text-sm font-semibold text-white">Source transparency</h2>
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
                href="/sources-methodology/"
                className="mt-4 inline-flex rounded-md bg-emerald-300 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                View methodology
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
