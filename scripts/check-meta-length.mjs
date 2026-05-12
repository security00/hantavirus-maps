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

for (const file of walk(outDir).filter((item) => item.endsWith('.html'))) {
  const rel = path.relative(outDir, file).replaceAll(path.sep, '/');
  if (rel === '404.html' || rel === '_not-found.html') continue;
  const html = fs.readFileSync(file, 'utf8');
  const title = /<title>(.*?)<\/title>/s.exec(html)?.[1] ?? '';
  const description = /<meta name="description" content="(.*?)"/s.exec(html)?.[1] ?? '';
  if (title.length > 60) errors.push(`${rel} title too long (${title.length}): ${title}`);
  if (description.length > 155) errors.push(`${rel} description too long (${description.length}): ${description}`);
}

if (errors.length) {
  console.error(`check-meta-length failed with ${errors.length} issue(s):`);
  for (const error of errors.slice(0, 100)) console.error(`- ${error}`);
  process.exit(1);
}

console.log('check-meta-length passed: HTML titles <=60 chars and descriptions <=155 chars.');
