import fs from 'node:fs';
import path from 'node:path';

import {
  SITE_URL,
  SOURCE_PAGE_IDS,
  WHERE_PAGE_SLUGS,
  sourcePath,
  wherePath,
} from './seo-constants.mjs';

const root = process.cwd();
const cases = JSON.parse(fs.readFileSync(path.join(root, 'data/cases/us-state-historical.json'), 'utf8')).records;
const alerts = JSON.parse(fs.readFileSync(path.join(root, 'data/alerts/official-alerts.json'), 'utf8')).alerts;
const sources = JSON.parse(fs.readFileSync(path.join(root, 'data/sources/source-registry.json'), 'utf8')).sources;

function escapeYaml(value) {
  return JSON.stringify(value);
}

function sourceById(id) {
  return sources.find((source) => source.id === id);
}

function getWhereRecord(slug) {
  const record = slug === 'united-states'
    ? cases.find((item) => item.jurisdiction === 'United States')
    : cases.find((item) => item.slug === slug);

  return record ? { ...record, slug } : null;
}

function linkedMapUse(sourceId) {
  const linkedCases = cases.filter((record) => record.sourceIds.includes(sourceId));
  const linkedAlerts = alerts.filter((alert) => alert.sourceIds.includes(sourceId));

  return { linkedCases, linkedAlerts };
}

function renderSources(sourceIds) {
  const lines = sourceIds
    .map(sourceById)
    .filter(Boolean)
    .map((source) => `- ${source.publisher}: [${source.title}](${source.url}) — reviewed ${source.reviewedDate}; use: ${source.use}`);

  return lines.length ? lines.join('\n') : '- Source-linked record; see source registry.';
}

function renderWhere(record) {
  return `---
type: "where-page"
slug: ${escapeYaml(record.slug)}
title: ${escapeYaml(`${record.jurisdiction} hantavirus map and source context`)}
canonical: ${escapeYaml(`${SITE_URL}${wherePath(record.slug)}`)}
license: "CC-BY-4.0"
---

# ${record.jurisdiction} hantavirus map and source context

## Answer-ready summary

This ${record.jurisdiction} page is a reviewed, source-linked hantavirus map summary. It can be cited for public health context, source limitations, and geography precision, but it is not a live outbreak feed, patient-location dataset, or local risk score.

## Snapshot

${record.reportLabel}

${record.summary}

| Field | Value |
|---|---|
| Jurisdiction | ${record.jurisdiction} |
| Region | ${record.region} |
| Period | ${record.period} |
| Reported cases | ${record.reportedCases === null ? 'Linked official source' : record.reportedCases} |
| Geography precision | ${record.geographyPrecision} |
| Status | ${record.status} |

## Safe interpretation

${record.limitations.join(' ')}

This page does not publish patient locations, county-level current risk, or diagnosis/treatment guidance.

## Sources

${renderSources(record.sourceIds)}

## Cite this page

${SITE_URL}${wherePath(record.slug)} (accessed YYYY-MM-DD)
`;
}

function renderSource(source) {
  const linked = linkedMapUse(source.id);
  const linkedLines = [
    ...linked.linkedCases.map((record) => `- Case summary: ${record.jurisdiction} — ${record.reportLabel}`),
    ...linked.linkedAlerts.map((alert) => `- Official alert: ${alert.title} — ${alert.agency} ${alert.date}`),
  ];

  return `---
type: "source-page"
id: ${escapeYaml(source.id)}
title: ${escapeYaml(source.title)}
publisher: ${escapeYaml(source.publisher)}
canonical: ${escapeYaml(`${SITE_URL}${sourcePath(source.id)}`)}
license: "CC-BY-4.0"
---

# ${source.title}

## Answer-ready summary

Hantavirus Maps uses ${source.publisher} material as reviewed public health context for map records. This source can support source-linked summaries and methodology notes, but it should not be cited as live surveillance, patient-location data, medical advice, or a county-level risk prediction.

## Source summary

| Field | Value |
|---|---|
| Publisher | ${source.publisher} |
| Source type | ${source.sourceType} |
| Publication date | ${source.publicationDate} |
| Reviewed date | ${source.reviewedDate} |
| External URL | ${source.url} |

## How this source is used

${source.use}

## Safe interpretation

${source.limitations}

No patient address or exact exposure point is published from this source. Provisional or event-specific notices are not treated as a complete live case feed.

## Linked map records

${linkedLines.length ? linkedLines.join('\n') : '- No current public map record directly uses this source.'}

## Cite this page

${SITE_URL}${sourcePath(source.id)} (accessed YYYY-MM-DD)
`;
}

const rawSourceDir = path.join(root, 'public/raw/source');
const rawWhereDir = path.join(root, 'public/raw/where');
fs.mkdirSync(rawSourceDir, { recursive: true });
fs.mkdirSync(rawWhereDir, { recursive: true });

for (const id of SOURCE_PAGE_IDS) {
  const source = sources.find((item) => item.id === id);
  if (!source) continue;
  fs.writeFileSync(path.join(rawSourceDir, `${id}.md`), renderSource(source));
}

for (const slug of WHERE_PAGE_SLUGS) {
  const record = getWhereRecord(slug);
  if (!record) continue;
  fs.writeFileSync(path.join(rawWhereDir, `${slug}.md`), renderWhere(record));
}

console.log(`Wrote ${SOURCE_PAGE_IDS.length} raw source markdown files and ${WHERE_PAGE_SLUGS.length} raw where markdown files`);
