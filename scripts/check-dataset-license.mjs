import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'out');
const errors = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

function extractJsonLd(html) {
  return Array.from(html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs), (match) => match[1])
    .map((raw) => raw.replaceAll('&quot;', '"').replaceAll('&amp;', '&'));
}

function flatten(items) {
  const out = [];
  for (const item of items) {
    if (Array.isArray(item)) out.push(...flatten(item));
    else if (item && typeof item === 'object' && item['@graph']) out.push(...flatten(item['@graph']));
    else out.push(item);
  }
  return out;
}

for (const file of walk(outDir).filter((item) => item.endsWith('.html'))) {
  const rel = path.relative(outDir, file).replaceAll(path.sep, '/');
  if (rel === '404.html' || rel === '_not-found.html') continue;
  const html = fs.readFileSync(file, 'utf8');
  for (const raw of extractJsonLd(html)) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      continue;
    }
    for (const node of flatten([parsed])) {
      if (node?.['@type'] === 'Dataset' && !node.license) {
        errors.push(`${rel} Dataset ${node.name ?? '(unnamed)'} missing license`);
      }
    }
  }
}

if (errors.length) {
  console.error(`check-dataset-license failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log('check-dataset-license passed: every Dataset JSON-LD node has license.');
