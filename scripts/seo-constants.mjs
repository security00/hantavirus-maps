export const SITE_URL = 'https://hantavirusmaps.org';

export const SOURCE_PAGE_IDS = [
  'cdc-reported-cases',
  'cdc-surveillance',
  'who-don600-2026',
  'ecdc-cruise-2026',
  'paho-alert-2025',
  'canada-risk-2026',
  'florida-health-hps',
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
  'florida',
  'canada',
  'argentina',
];

export const EVENT_PAGE_IDS = [
  'who-don600-2026-cruise',
  'canada-mv-hondius-2026',
  'ecdc-mv-hondius-response-2026',
  'paho-alert-2025-americas',
  'utah-mv-hondius-2026',
  'united-states-cdc-1993-2023',
  'canada-phac-1994-2026',
  'argentina-health-vigilance-2026',
  'minnesota-mv-hondius-monitoring-2026',
  'washington-mv-hondius-monitoring-2026',
  'california-mv-hondius-monitoring-2026',
  'oregon-mv-hondius-clinician-alert-2026',
];

export function sourcePath(id) {
  return `/source/${id}`;
}

export function wherePath(slug) {
  return `/where/${slug}`;
}

export function eventPath(id) {
  return `/event/${id}`;
}

export function rawEventPath(id) {
  return `/raw/event/${id}.md`;
}


export function rawSourcePath(id) {
  return `/raw/source/${id}.md`;
}

export function rawWherePath(slug) {
  return `/raw/where/${slug}.md`;
}

export function absoluteUrl(path) {
  return new URL(path, SITE_URL).toString();
}
