import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'out');
const siteUrl = 'https://hantavirusmaps.org';
const errors = [];

function fail(message) {
  errors.push(message);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

function publicUrlForHtml(filePath) {
  const rel = path.relative(outDir, filePath).replaceAll(path.sep, '/');
  if (rel === 'index.html') return siteUrl;
  if (!rel.endsWith('.html')) return null;
  return `${siteUrl}/${rel.replace(/(?:\/index)?\.html$/, '')}`;
}

function extractUrls(content) {
  return Array.from(content.matchAll(/https:\/\/hantavirusmaps\.org[^\s"'<>)]*/g), (match) => match[0]);
}

function assertCanonicalSelf(filePath) {
  const expected = publicUrlForHtml(filePath);
  if (!expected) return;
  const html = fs.readFileSync(filePath, 'utf8');
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  if (!canonical) {
    fail(`${path.relative(root, filePath)} missing canonical`);
    return;
  }
  if (canonical !== expected) {
    fail(`${path.relative(root, filePath)} canonical ${canonical} != expected ${expected}`);
  }
}

function assertNoTrailingSlashRedirectTargets(filePath) {
  const rel = path.relative(root, filePath);
  const content = fs.readFileSync(filePath, 'utf8');
  for (const url of extractUrls(content)) {
    if (url === `${siteUrl}/`) continue;
    if (/\/$/.test(url)) {
      fail(`${rel} contains trailing-slash URL ${url}`);
    }
  }

  for (const match of content.matchAll(/(?:href|src)="(\/[^"]+?)\/"/g)) {
    const value = match[1];
    if (value !== '') fail(`${rel} contains trailing-slash internal URL ${value}/`);
  }
}

const files = walk(outDir).filter((file) => {
  const rel = path.relative(outDir, file).replaceAll(path.sep, '/');
  if (rel === '404.html' || rel === '_not-found.html') return false;
  if (rel.startsWith('__next.')) return false;
  return /\.(html|xml|txt|json|md)$/.test(file);
});
for (const file of files) {
  assertNoTrailingSlashRedirectTargets(file);
  if (file.endsWith('.html')) assertCanonicalSelf(file);
}

if (errors.length) {
  console.error(`check-audit-urls failed with ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 80)) console.error(`- ${error}`);
  if (errors.length > 80) console.error(`... ${errors.length - 80} more`);
  process.exit(1);
}

console.log(`check-audit-urls passed: ${files.length} built files checked for trailing-slash redirect URLs and canonical self-match.`);
