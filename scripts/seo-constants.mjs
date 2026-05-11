export const SITE_URL = 'https://hantavirusmaps.org';

export const SOURCE_PAGE_IDS = [
  'cdc-reported-cases',
  'cdc-surveillance',
  'who-don600-2026',
  'ecdc-cruise-2026',
  'paho-alert-2025',
  'canada-risk-2026',
  'wa-doh-hantavirus',
  'nmdoh-hantavirus',
  'cdph-hantavirus',
  'argentina-ben-785-2025',
];

export const WHERE_PAGE_SLUGS = [
  'united-states',
  'new-mexico',
  'california',
  'arizona',
  'colorado',
  'washington',
  'canada',
  'argentina',
];

export const EVENT_PAGE_IDS = [
  'who-don600-2026-cruise',
  'canada-mv-hondius-2026',
  'ecdc-mv-hondius-response-2026',
  'paho-alert-2025-americas',
  'nmdoh-2026-santa-fe',
  'adhs-2024-increased-activity',
  'utah-mv-hondius-2026',
  'united-states-cdc-1993-2023',
  'canada-phac-1994-2026',
  'argentina-ben-source-linked-2025',
];

export function sourcePath(id) {
  return `/source/${id}/`;
}

export function wherePath(slug) {
  return `/where/${slug}/`;
}

export function eventPath(id) {
  return `/event/${id}/`;
}

export function rawEventPath(id) {
  return `/raw/event/${id}.md`;
}

export function absoluteUrl(path) {
  return new URL(path, SITE_URL).toString();
}
