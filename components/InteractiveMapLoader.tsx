"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import type { CaseRecord, OfficialAlert, ReservoirRecord, SourceRecord } from "@/lib/data";

const InteractiveMap = dynamic(
  () => import("@/components/InteractiveMap").then((module) => module.InteractiveMap),
  {
    ssr: false,
    loading: () => (
      <div className="interactive-map-loading">
        Loading interactive map layers...
      </div>
    )
  }
);

type InteractiveMapLoaderProps = {
  casePoints: CaseRecord[];
  alertPoints: OfficialAlert[];
  reservoirs: ReservoirRecord[];
  sourcesById: Record<string, SourceRecord>;
};

function scheduleIdle(callback: () => void) {
  if (typeof window === "undefined") return undefined;

  const idleCallback = window.requestIdleCallback ?? ((handler: IdleRequestCallback) => window.setTimeout(() => handler({ didTimeout: false, timeRemaining: () => 0 }), 2200));
  const cancelIdleCallback = window.cancelIdleCallback ?? window.clearTimeout;
  const id = idleCallback(callback, { timeout: 3200 });

  return () => cancelIdleCallback(id);
}

export function InteractiveMapLoader(props: InteractiveMapLoaderProps) {
  const [shouldLoadMap, setShouldLoadMap] = useState(false);

  useEffect(() => scheduleIdle(() => setShouldLoadMap(true)), []);

  if (shouldLoadMap) {
    return <InteractiveMap {...props} />;
  }

  return (
    <button
      type="button"
      className="interactive-map-placeholder"
      onClick={() => setShouldLoadMap(true)}
      aria-label="Load interactive hantavirus map"
    >
      <span className="interactive-map-placeholder-card">
        <span className="interactive-map-placeholder-eyebrow">Interactive map</span>
        <span className="interactive-map-placeholder-title">Load source-linked map</span>
        <span className="interactive-map-placeholder-copy">
          The map loads after the page becomes idle to keep the first view fast. Click to open it now.
        </span>
      </span>
    </button>
  );
}
