"use client";

import dynamic from "next/dynamic";

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

export function InteractiveMapLoader(props: InteractiveMapLoaderProps) {
  return <InteractiveMap {...props} />;
}
