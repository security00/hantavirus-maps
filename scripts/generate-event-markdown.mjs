import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const alerts = JSON.parse(fs.readFileSync(path.join(root, 'data/alerts/official-alerts.json'), 'utf8')).alerts;
const cases = JSON.parse(fs.readFileSync(path.join(root, 'data/cases/us-state-historical.json'), 'utf8')).records;
const sources = JSON.parse(fs.readFileSync(path.join(root, 'data/sources/source-registry.json'), 'utf8')).sources;

import { EVENT_PAGE_IDS, SITE_URL, eventPath } from './seo-constants.mjs';

function sourceById(id) {
  return sources.find((source) => source.id === id);
}

function escapeYaml(value) {
  return JSON.stringify(value);
}

function toEvents() {
  const alertRecords = alerts.map((alert) => ({
    id: alert.id,
    type: 'official-alert',
    title: alert.title,
    subtitle: `${alert.agency} · ${alert.severityLabel}`,
    date: alert.date,
    geography: alert.geography,
    status: alert.status,
    summary: alert.summary,
    riskLanguage: alert.riskLanguage,
    sourceIds: alert.sourceIds,
    canonicalPath: eventPath(alert.id),
    metrics: [
      { label: 'Layer', value: alert.layer },
      { label: 'Agency', value: alert.agency },
      { label: 'Status', value: alert.status },
    ],
  }));

  const caseRecords = cases.map((record) => ({
    id: record.id,
    type: 'case-summary',
    title: `${record.jurisdiction} hantavirus source-linked case summary`,
    subtitle: record.reportLabel,
    date: record.period,
    geography: `${record.jurisdiction} / ${record.region}`,
    status: record.status,
    summary: record.summary,
    riskLanguage: record.limitations.join(' '),
    sourceIds: record.sourceIds,
    canonicalPath: eventPath(record.id),
    metrics: [
      { label: 'Period', value: record.period },
      { label: 'Reported cases', value: record.reportedCases === null ? 'Linked official source' : String(record.reportedCases) },
      { label: 'Precision', value: record.geographyPrecision },
    ],
  }));

  return [...alertRecords, ...caseRecords].filter((event) => EVENT_PAGE_IDS.includes(event.id));
}

function renderMarkdown(event) {
  const sourceLines = event.sourceIds
    .map(sourceById)
    .filter(Boolean)
    .map((source) => `- ${source.publisher}: [${source.title}](${source.url}) — reviewed ${source.reviewedDate}; use: ${source.use}`)
    .join('\n');
  const metricLines = event.metrics.map((metric) => `| ${metric.label} | ${metric.value} |`).join('\n');

  return `---
id: ${escapeYaml(event.id)}
type: ${escapeYaml(event.type)}
title: ${escapeYaml(event.title)}
geography: ${escapeYaml(event.geography)}
date: ${escapeYaml(event.date)}
status: ${escapeYaml(event.status)}
canonical: ${escapeYaml(`${SITE_URL}${event.canonicalPath}`)}
license: "CC-BY-4.0"
---

# ${event.title}

${event.subtitle}

## Summary

${event.summary}

## Safe interpretation

${event.riskLanguage}

This record is a reviewed public health map note. It is not live surveillance, medical advice, patient-location tracking, or county-level risk prediction.

## Key fields

| Field | Value |
|---|---|
| Geography | ${event.geography} |
| Date / period | ${event.date} |
| Status | ${event.status} |
${metricLines}

## Sources

${sourceLines}

## Cite this record

${SITE_URL}${event.canonicalPath} (accessed YYYY-MM-DD)

Dataset: ${SITE_URL}/data/map-snapshots.json
`;
}

const outDir = path.join(root, 'public/raw/event');
fs.mkdirSync(outDir, { recursive: true });
for (const event of toEvents()) {
  fs.writeFileSync(path.join(outDir, `${event.id}.md`), renderMarkdown(event));
}
console.log(`Wrote ${EVENT_PAGE_IDS.length} raw event markdown files to public/raw/event`);
