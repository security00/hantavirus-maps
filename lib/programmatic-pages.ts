export const SOURCE_PAGE_IDS = [
  "cdc-reported-cases",
  "cdc-surveillance",
  "who-don600-2026",
  "ecdc-cruise-2026",
  "paho-alert-2025",
  "canada-risk-2026",
  "florida-health-hps",
  "wa-doh-hantavirus",
  "nmdoh-hantavirus",
  "cdph-hantavirus",
  "argentina-ben-785-2025",
] as const;

export const WHERE_PAGE_SLUGS = [
  "united-states",
  "new-mexico",
  "california",
  "arizona",
  "colorado",
  "washington",
  "florida",
  "canada",
  "argentina",
] as const;

export type SourcePageId = (typeof SOURCE_PAGE_IDS)[number];
export type WherePageSlug = (typeof WHERE_PAGE_SLUGS)[number];

export function sourcePath(id: string) {
  return `/source/${id}/`;
}

export function wherePath(slug: string) {
  return `/where/${slug}/`;
}
