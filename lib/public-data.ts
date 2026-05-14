import { SITE_BUILD_TIMESTAMP } from "@/lib/build-metadata.generated";
import { collectSourceIds, getAlerts, getCaseRecords, getReservoirs, getSourceRegistry, getSourcesByIds } from "@/lib/data";
import { LAST_REVIEWED_ISO, SITE_URL, absoluteUrl } from "@/lib/routes";

export const DATASET_LICENSE = "CC-BY-4.0";
export const DATASET_STATUS = "reviewed-snapshot";

export function buildMapSnapshotsDataset() {
  const caseRecords = getCaseRecords();
  const alerts = getAlerts();
  const reservoirs = getReservoirs();
  const sourceIds = collectSourceIds([...caseRecords, ...alerts, ...reservoirs]);

  return {
    $schema: absoluteUrl("/schema/map-snapshots.schema.json"),
    version: 1,
    dataset: "Hantavirus Maps reviewed public map snapshots",
    license: DATASET_LICENSE,
    attribution: "Hantavirus Maps",
    citation: `${SITE_URL}/data/map-snapshots.json (${DATASET_LICENSE})`,
    generatedAt: SITE_BUILD_TIMESTAMP,
    lastReviewed: LAST_REVIEWED_ISO,
    updateCadence: "Reviewed source snapshots are rebuilt on each deployment and updated when official sources change.",
    status: DATASET_STATUS,
    policy:
      "Reviewed official-source summaries for educational map context. Not live surveillance, not medical advice, not patient locations, and not county-precision risk prediction.",
    stats: {
      caseSummaries: caseRecords.length,
      officialAlerts: alerts.length,
      reservoirEcologyRecords: reservoirs.length,
      linkedSources: sourceIds.length,
    },
    layers: {
      caseSummaries: caseRecords,
      officialAlerts: alerts,
      reservoirEcology: reservoirs,
    },
    sources: getSourcesByIds(sourceIds),
  };
}

export function buildSourcesDataset() {
  const registry = getSourceRegistry();

  return {
    $schema: absoluteUrl("/schema/sources.schema.json"),
    version: 1,
    dataset: "Hantavirus Maps reviewed source registry",
    license: DATASET_LICENSE,
    attribution: "Hantavirus Maps",
    citation: `${SITE_URL}/data/sources.json (${DATASET_LICENSE})`,
    generatedAt: SITE_BUILD_TIMESTAMP,
    lastReviewed: LAST_REVIEWED_ISO,
    updateCadence: "Reviewed source registry is rebuilt on each deployment and updated when official sources change.",
    status: DATASET_STATUS,
    reviewPolicy: registry.reviewPolicy,
    sources: registry.sources,
  };
}
