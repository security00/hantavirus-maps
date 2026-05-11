import fs from 'node:fs';
import path from 'node:path';
import {
  EVENT_PAGE_IDS,
  SOURCE_PAGE_IDS,
  SITE_URL,
  WHERE_PAGE_SLUGS,
  absoluteUrl,
  eventPath,
  rawEventPath,
  sourcePath,
  wherePath,
} from './seo-constants.mjs';

const root = process.cwd();
const outDir = path.join(root, 'out');
const errors = [];

function fail(message) {
  errors.push(message);
}

function readRequired(relativePath) {
  const filePath = path.join(root, relativePath);
  if (!fs.existsSync(filePath)) {
    fail(`Missing file: ${relativePath}`);
    return '';
  }
  return fs.readFileSync(filePath, 'utf8');
}

function readOut(relativePath) {
  const filePath = path.join(outDir, relativePath);
  if (!fs.existsSync(filePath)) {
    fail(`Missing build output: out/${relativePath}`);
    return '';
  }
  return fs.readFileSync(filePath, 'utf8');
}

function expectIncludes(name, content, needle) {
  if (!content.includes(needle)) {
    fail(`${name} missing ${needle}`);
  }
}

function expectJson(relativePath) {
  const content = readOut(relativePath);
  if (!content) return null;
  try {
    return JSON.parse(content);
  } catch (error) {
    fail(`Invalid JSON in out/${relativePath}: ${error.message}`);
    return null;
  }
}

function expectedMachinePaths() {
  return [
    '/data/map-snapshots.json',
    '/data/sources.json',
    '/openapi.json',
    '/llms.txt',
    '/ai.txt',
        ...SOURCE_PAGE_IDS.map(sourcePath),
    ...WHERE_PAGE_SLUGS.map(wherePath),
    ...EVENT_PAGE_IDS.map(eventPath),
    ...EVENT_PAGE_IDS.map(rawEventPath),
  ];
}

function validateStaticRawMarkdown() {
  for (const id of EVENT_PAGE_IDS) {
    const relativePath = `public/raw/event/${id}.md`;
    const content = readRequired(relativePath);
    expectIncludes(relativePath, content, `id: "${id}"`);
    expectIncludes(relativePath, content, `${SITE_URL}${eventPath(id)}`);
    expectIncludes(relativePath, content, '## Safe interpretation');
  }
}

function validateBuildOutput() {
  const sitemap = readOut('sitemap.xml');
  const llms = readOut('llms.txt');
  const ai = readOut('ai.txt');
  const openapi = expectJson('openapi.json');
  expectJson('data/map-snapshots.json');
  expectJson('data/sources.json');

  for (const machinePath of expectedMachinePaths()) {
    const url = absoluteUrl(machinePath);
    expectIncludes('out/sitemap.xml', sitemap, url);
    expectIncludes('out/llms.txt', llms, url);
    if (!machinePath.startsWith('/feed.')) {
      expectIncludes('out/ai.txt', ai, url);
    }
    if (openapi && !openapi.paths[machinePath]) {
      fail(`openapi.json missing path ${machinePath}`);
    }
  }

  const home = readOut('index.html');
  const tracker = readOut('hantavirus-tracker.html');
  const outbreaks = readOut('outbreaks.html');
  for (const keyPath of [sourcePath('cdc-reported-cases'), wherePath('canada'), eventPath('who-don600-2026-cruise'), rawEventPath('who-don600-2026-cruise')]) {
    expectIncludes('out/index.html', home, keyPath);
  }
  expectIncludes('out/hantavirus-tracker.html', tracker, 'Tracker index: sources, places and event records');
  expectIncludes('out/outbreaks.html', outbreaks, 'Citation-ready reviewed event pages');

  for (const id of EVENT_PAGE_IDS) {
    const eventHtml = readOut(`event/${id}.html`);
    expectIncludes(`out/event/${id}.html`, eventHtml, 'event-breadcrumb-json-ld');
    expectIncludes(`out/event/${id}.html`, eventHtml, 'event-dataset-json-ld');
    expectIncludes(`out/event/${id}.html`, eventHtml, rawEventPath(id));

    const raw = readOut(`raw/event/${id}.md`);
    expectIncludes(`out/raw/event/${id}.md`, raw, '## Safe interpretation');
  }

  for (const id of SOURCE_PAGE_IDS) {
    const html = readOut(`source/${id}.html`);
    expectIncludes(`out/source/${id}.html`, html, 'source-breadcrumb-json-ld');
    expectIncludes(`out/source/${id}.html`, html, 'source-dataset-json-ld');
  }

  for (const slug of WHERE_PAGE_SLUGS) {
    const html = readOut(`where/${slug}.html`);
    expectIncludes(`out/where/${slug}.html`, html, 'where-breadcrumb-json-ld');
    expectIncludes(`out/where/${slug}.html`, html, 'where-dataset-json-ld');
  }
}

validateStaticRawMarkdown();
validateBuildOutput();

if (errors.length) {
  console.error(`validate:seo failed with ${errors.length} issue(s):`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`validate:seo passed: ${expectedMachinePaths().length} machine paths and ${EVENT_PAGE_IDS.length} raw markdown records checked.`);
