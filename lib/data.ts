import alertsDataset from "@/data/alerts/official-alerts.json";
import casesDataset from "@/data/cases/us-state-historical.json";
import reservoirsDataset from "@/data/reservoirs/rodent-reservoirs.json";
import sourceRegistryDataset from "@/data/sources/source-registry.json";

export type MapPoint = {
  x: number;
  y: number;
};

export type SourceRecord = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  publicationDate: string;
  reviewedDate: string;
  sourceType: string;
  use: string;
  limitations: string;
};

type SourceRegistry = {
  lastReviewed: string;
  reviewPolicy: string;
  sources: SourceRecord[];
};

export type CaseRecord = {
  id: string;
  jurisdiction: string;
  slug?: string;
  region: string;
  layer: "Reported cases";
  period: string;
  reportedCases: number | null;
  reportedDeaths: number | null;
  reportLabel: string;
  summary: string;
  geographyPrecision: string;
  status: string;
  sourceIds: string[];
  mapPoint?: MapPoint;
  limitations: string[];
};

type CaseDataset = {
  lastReviewed: string;
  datasetStatus: string;
  policy: string;
  records: CaseRecord[];
};

export type OfficialAlert = {
  id: string;
  title: string;
  agency: string;
  date: string;
  geography: string;
  layer: "Public health alerts";
  status: string;
  severityLabel: string;
  summary: string;
  riskLanguage: string;
  sourceIds: string[];
  mapPoint?: MapPoint;
};

type AlertsDataset = {
  lastReviewed: string;
  datasetStatus: string;
  policy: string;
  alerts: OfficialAlert[];
};

export type ReservoirRecord = {
  id: string;
  commonName: string;
  scientificName: string;
  associatedVirus: string;
  primarySyndrome: string;
  evidenceRegion: string;
  mapRegion: string;
  summary: string;
  sourceIds: string[];
  limitations: string[];
};

type ReservoirDataset = {
  lastReviewed: string;
  datasetStatus: string;
  policy: string;
  reservoirs: ReservoirRecord[];
};

const sourceRegistry = sourceRegistryDataset as SourceRegistry;
const cases = casesDataset as CaseDataset;
const alerts = alertsDataset as AlertsDataset;
const reservoirs = reservoirsDataset as ReservoirDataset;

export function getCaseDataset() {
  return cases;
}

export function getCaseRecords() {
  return cases.records;
}

export function getStateCaseRecord(slug: string) {
  return cases.records.find((record) => record.slug === slug);
}

export function getAlertsDataset() {
  return alerts;
}

export function getAlerts() {
  return [...alerts.alerts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getReservoirDataset() {
  return reservoirs;
}

export function getReservoirs() {
  return reservoirs.reservoirs;
}

export function getSourceRegistry() {
  return sourceRegistry;
}

export function getSourceById(id: string) {
  return sourceRegistry.sources.find((source) => source.id === id);
}

export function getSourcesByIds(ids: string[]) {
  const uniqueIds = Array.from(new Set(ids));

  return uniqueIds
    .map((id) => getSourceById(id))
    .filter((source): source is SourceRecord => Boolean(source));
}

export function collectSourceIds(items: Array<{ sourceIds: string[] }>) {
  return Array.from(new Set(items.flatMap((item) => item.sourceIds)));
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export function formatDateLabel(value: string) {
  const fullDate = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (fullDate) {
    const [, year, month, day] = fullDate;
    return `${MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`;
  }

  const monthDate = /^(\d{4})-(\d{2})$/.exec(value);

  if (monthDate) {
    const [, year, month] = monthDate;
    return `${MONTHS[Number(month) - 1]} ${year}`;
  }

  return value;
}
