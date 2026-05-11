#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const DEFAULT_REPORT_DIR = path.join(repoRoot, 'reports');
const DEFAULT_OUTPUT_DIR = path.join(repoRoot, 'data', 'sources');
const BACKLOG_PATH = path.join(repoRoot, 'data', 'sources', 'source-backlog.json');

const trustedBatches = [
  {
    id: 'global-official-alerts',
    query: 'hantavirus official outbreak alert WHO PAHO ECDC 2026',
    domains: ['who.int', 'paho.org', 'ecdc.europa.eu'],
    tier: 2,
    defaultStatus: 'review_candidate'
  },
  {
    id: 'cdc-surveillance',
    query: 'hantavirus surveillance reported cases CDC NNDSS 2026',
    domains: ['cdc.gov', 'data.cdc.gov'],
    tier: 1,
    defaultStatus: 'review_candidate'
  },
  {
    id: 'canada-official',
    query: 'hantavirus Canada official public health surveillance 2026',
    domains: ['canada.ca', 'publichealthontario.ca', 'bccdc.ca', 'alberta.ca'],
    tier: 2,
    defaultStatus: 'review_candidate'
  },
  {
    id: 'us-state-health',
    query: 'hantavirus state health department official alert 2026',
    domains: ['nmhealth.org', 'doh.wa.gov', 'cdph.ca.gov', 'azdhs.gov', 'cdphe.colorado.gov', 'health.state.mn.us', 'oregon.gov', 'epi.utah.gov'],
    tier: 2,
    defaultStatus: 'review_candidate'
  },
  {
    id: 'south-america-official',
    query: 'hantavirus Andes virus official health ministry Argentina Chile 2026',
    domains: ['argentina.gob.ar', 'minsal.cl', 'www.gob.cl', 'paho.org'],
    tier: 2,
    defaultStatus: 'review_candidate'
  },
  {
    id: 'europe-official',
    query: 'hantavirus Europe official surveillance ECDC national public health 2026',
    domains: ['ecdc.europa.eu', 'thl.fi', 'folkhalsomyndigheten.se', 'rki.de', 'gov.uk'],
    tier: 2,
    defaultStatus: 'review_candidate'
  }
];

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    reportDate: new Date().toISOString().slice(0, 10),
    maxResults: 5,
    searchDepth: 'basic',
    extractTop: 8,
    dryRun: false,
    reportDir: DEFAULT_REPORT_DIR,
    outputDir: DEFAULT_OUTPUT_DIR
  };

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === '--report-date') options.reportDate = args[++i];
    else if (arg === '--max-results') options.maxResults = Number(args[++i]);
    else if (arg === '--search-depth') options.searchDepth = args[++i];
    else if (arg === '--extract-top') options.extractTop = Number(args[++i]);
    else if (arg === '--report-dir') options.reportDir = path.resolve(args[++i]);
    else if (arg === '--output-dir') options.outputDir = path.resolve(args[++i]);
    else if (arg === '--dry-run') options.dryRun = true;
    else throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function normalizeUrl(url) {
  try {
    const parsed = new URL(url);
    parsed.hash = '';
    if (parsed.searchParams.has('utm_source')) parsed.searchParams.delete('utm_source');
    if (parsed.searchParams.has('utm_medium')) parsed.searchParams.delete('utm_medium');
    if (parsed.searchParams.has('utm_campaign')) parsed.searchParams.delete('utm_campaign');
    return parsed.toString();
  } catch {
    return url;
  }
}

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/^www\./, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72) || 'source';
}

function classifySource(url, title, batch) {
  const domain = domainOf(url);
  const parsed = new URL(url);
  const lower = `${url} ${title}`.toLowerCase();
  const weakSignals = [];
  const rejectionReasons = [];
  const isSearchOrIndex = lower.includes('/search') || lower.includes('cbrowse') || parsed.searchParams.has('s') || parsed.searchParams.has('page') || lower.includes('news/?') || lower.includes('/news/?');
  const isMinsalGeneralStatement = domain === 'minsal.cl' && lower.includes('declaracion-ministerio-de-salud');
  const isDataset = lower.includes('data.cdc.gov') || lower.includes('nndss') || lower.includes('surveillance');
  const isPdf = lower.includes('.pdf');
  const isAlert = lower.includes('don') || lower.includes('outbreak') || lower.includes('alert') || lower.includes('news');
  const isGuidance = lower.includes('prevention') || lower.includes('case-definition') || lower.includes('factsheet') || lower.includes('surveillance');

  let tier = batch.tier;
  let sourceType = 'Official public health source candidate';
  let candidateUse = 'Candidate for human review and possible source registry/backlog expansion.';
  let reviewNeed = 'Verify official publisher, publication date, disease context, geography, and safe public wording before use.';
  let reviewPriority = 'medium';

  if (isSearchOrIndex) {
    weakSignals.push('Search/index/listing page; prefer the underlying official article, dataset, or report URL.');
    rejectionReasons.push('Rejected by review rule: search/index/listing pages are noisy and not structured evidence.');
    reviewPriority = 'low';
  }

  if (isMinsalGeneralStatement) {
    weakSignals.push('General Ministry statement without specific 2026 case data; keep as background only, not Tavily candidate evidence.');
    rejectionReasons.push('Rejected by review rule: Minsal page lacks specific 2026 case/event data for this candidate queue.');
    reviewPriority = 'low';
  }

  if (isDataset) {
    tier = 1;
    sourceType = 'Official surveillance dataset or surveillance page';
    candidateUse = 'Internal review candidate for surveillance context or future reviewed snapshots.';
    reviewNeed = 'Requires display rule before public use. Do not treat provisional rows as live/final/local case counts.';
    reviewPriority = isSearchOrIndex ? 'low' : 'high';
  } else if (isAlert) {
    tier = 2;
    sourceType = 'Official outbreak alert or public health update';
    candidateUse = 'Candidate for reviewed official alert/event timeline after deduplication.';
    reviewNeed = 'Deduplicate against existing event records and avoid travel advice, patient locations, or live-risk claims.';
    reviewPriority = isSearchOrIndex ? 'low' : 'high';
  } else if (isGuidance) {
    tier = 3;
    sourceType = 'Official disease, prevention, case definition, or methodology page';
    candidateUse = 'Candidate for methodology/source citation or educational page support.';
    reviewNeed = 'Use as source context only unless a human reviewer promotes a specific snapshot.';
  } else if (isPdf) {
    tier = 4;
    sourceType = 'Official PDF/report candidate';
    candidateUse = 'Candidate for manual PDF review and source-linked context.';
    reviewNeed = 'Requires PDF extraction, table/date review, language review where needed, and safe summary rules.';
  }

  return { domain, tier, sourceType, candidateUse, reviewNeed, reviewPriority, weakSignals, rejectionReasons, rejected: rejectionReasons.length > 0 };
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await fs.readFile(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

async function tavilySearch({ apiKey, query, domains, maxResults, searchDepth }) {
  const response = await fetch('https://api.tavily.com/search', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      query,
      search_depth: searchDepth,
      topic: 'general',
      max_results: maxResults,
      include_domains: domains,
      include_answer: false
    })
  });

  if (!response.ok) {
    throw new Error(`Tavily search failed ${response.status}: ${await response.text()}`);
  }

  return response.json();
}

async function tavilyExtract({ apiKey, urls }) {
  if (!urls.length) return [];

  const response = await fetch('https://api.tavily.com/extract', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      api_key: apiKey,
      urls,
      extract_depth: 'basic',
      query: 'hantavirus cases surveillance official alert source limitations date geography safe public wording',
      chunks_per_source: 2
    })
  });

  if (!response.ok) {
    throw new Error(`Tavily extract failed ${response.status}: ${await response.text()}`);
  }

  const payload = await response.json();
  return payload.results ?? payload.data ?? [];
}

function buildDryRunResults(backlog) {
  const sources = backlog.sources ?? [];
  return trustedBatches.map((batch) => ({
    batch,
    results: sources
      .filter((source) => source.status === 'tavily_candidate' || source.status === 'active_candidate')
      .filter((source) => batch.domains.some((domain) => domainOf(source.url).endsWith(domain.replace(/^www\./, ''))))
      .slice(0, 3)
      .map((source) => ({
        title: source.title,
        url: source.url,
        content: source.candidateUse ?? source.reviewNeed ?? '',
        score: null
      }))
  }));
}

function excerpt(value, max = 420) {
  const text = String(value ?? '').replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

function summarizeCandidates(candidates) {
  const summary = {
    total: candidates.length,
    newCount: candidates.filter((candidate) => !candidate.knownBacklog).length,
    knownCount: candidates.filter((candidate) => candidate.knownBacklog).length,
    highPriorityCount: candidates.filter((candidate) => candidate.reviewPriority === 'high').length,
    lowPriorityCount: candidates.filter((candidate) => candidate.reviewPriority === 'low').length,
    weakCount: candidates.filter((candidate) => candidate.weakSignals?.length).length,
    rejectedCount: candidates.filter((candidate) => candidate.rejected).length,
    domains: [...new Set(candidates.map((candidate) => candidate.domain))].sort()
  };
  return summary;
}

function buildMarkdown({ reportDate, generatedAt, dryRun, searchRuns, candidates, knownUrlCount, extractCount }) {
  const lines = [];
  const summary = summarizeCandidates(candidates);
  lines.push(`# Tavily Source Candidate Discovery - ${reportDate}`);
  lines.push('');
  lines.push(`Generated: ${generatedAt}`);
  lines.push('');
  lines.push('**Review status:** Candidate discovery only. This report does not change public map data, case counts, alerts, source registry, or reservoir layers.');
  lines.push('');
  lines.push('## Policy boundary');
  lines.push('');
  lines.push('- Tavily is used for discovery/extraction only, not authority.');
  lines.push('- Authority must come from the underlying publisher and human review.');
  lines.push('- No candidate in this report may be auto-published into public JSON without review.');
  lines.push('- Do not infer patient locations, exact local risk, live surveillance, or final case counts from candidates.');
  lines.push('');
  lines.push('## Run summary');
  lines.push('');
  lines.push(`- Mode: ${dryRun ? 'dry-run from existing backlog' : 'live Tavily search/extract'}`);
  lines.push(`- Known backlog URLs before run: ${knownUrlCount}`);
  lines.push(`- Search batches: ${searchRuns.length}`);
  lines.push(`- Unique candidates found: ${candidates.length}`);
  lines.push(`- URLs sent to extraction: ${extractCount}`);
  lines.push(`- New candidates: ${summary.newCount}`);
  lines.push(`- Known backlog candidates: ${summary.knownCount}`);
  lines.push(`- High-priority review candidates: ${summary.highPriorityCount}`);
  lines.push(`- Low-priority / weak candidates: ${summary.lowPriorityCount}`);
  lines.push(`- Candidates with weak signals: ${summary.weakCount}`);
  lines.push(`- Rejected/noise candidates removed from queue: ${summary.rejectedCount}`);
  lines.push(`- Domains: ${summary.domains.map((domain) => `\`${domain}\``).join(', ') || 'n/a'}`);
  lines.push('');
  lines.push('## Human review digest');
  lines.push('');
  const highPriority = candidates.filter((candidate) => candidate.reviewPriority === 'high').slice(0, 8);
  if (highPriority.length) {
    lines.push('High-priority official candidates to inspect first:');
    lines.push('');
    for (const candidate of highPriority) {
      lines.push(`- **${candidate.title}** — ${candidate.domain} — ${candidate.url}`);
    }
  } else {
    lines.push('No high-priority candidates were detected in this run.');
  }
  lines.push('');
  const weakCandidates = candidates.filter((candidate) => candidate.weakSignals?.length).slice(0, 8);
  if (weakCandidates.length) {
    lines.push('Weak candidates / likely index pages:');
    lines.push('');
    for (const candidate of weakCandidates) {
      lines.push(`- **${candidate.title}** — ${candidate.domain} — ${candidate.weakSignals.join(' ')}`);
    }
    lines.push('');
  }
  lines.push('## Search batches');
  lines.push('');
  for (const run of searchRuns) {
    lines.push(`### ${run.batch.id}`);
    lines.push('');
    lines.push(`- Query: \`${run.batch.query}\``);
    lines.push(`- Domains: ${run.batch.domains.map((domain) => `\`${domain}\``).join(', ')}`);
    lines.push(`- Raw result count: ${run.results.length}`);
    if (run.error) lines.push(`- Error: ${run.error}`);
    lines.push('');
  }
  lines.push('## Candidate queue');
  lines.push('');
  if (!candidates.length) {
    lines.push('No new unique candidates found.');
    return lines.join('\n');
  }

  candidates.forEach((candidate, index) => {
    lines.push(`### Candidate ${index + 1} — ${candidate.title}`);
    lines.push('');
    lines.push(`- URL: ${candidate.url}`);
    lines.push(`- Domain: ${candidate.domain}`);
    lines.push(`- Discovery batch: ${candidate.discoveryBatch}`);
    lines.push(`- Candidate ID: \`${candidate.id}\``);
    lines.push(`- Candidate tier: ${candidate.tier}`);
    lines.push(`- Candidate status: \`${candidate.status}\``);
    lines.push(`- Source type: ${candidate.sourceType}`);
    lines.push(`- Review priority: ${candidate.reviewPriority}`);
    lines.push(`- Already in backlog: ${candidate.knownBacklog ? 'yes' : 'no'}`);
    if (candidate.weakSignals?.length) lines.push(`- Weak signals: ${candidate.weakSignals.join(' ')}`);
    lines.push(`- Safe candidate use: ${candidate.candidateUse}`);
    lines.push(`- Review need: ${candidate.reviewNeed}`);
    lines.push(`- Public use allowed now: ${candidate.publicUseAllowed ? 'yes' : 'no'}`);
    lines.push(`- Tavily score: ${candidate.score ?? 'n/a'}`);
    if (candidate.snippet) lines.push(`- Snippet: ${candidate.snippet}`);
    if (candidate.extractExcerpt) lines.push(`- Extract excerpt: ${candidate.extractExcerpt}`);
    lines.push('');
  });

  lines.push('## Next manual-review steps');
  lines.push('');
  lines.push('1. Open each new candidate URL and verify publisher/date/content directly.');
  lines.push('2. Assign one review outcome: `approved_public_snapshot`, `approved_source_only`, `review_candidate`, or `rejected`.');
  lines.push('3. Only after review, update public JSON or page copy in a separate commit.');
  lines.push('4. Run `npm run lint`, `npm run build`, and `npm run validate:seo` before deploy.');
  lines.push('');

  return lines.join('\n');
}

async function main() {
  const options = parseArgs();
  const apiKey = process.env.TAVILY_API_KEY;
  const backlog = await readJson(BACKLOG_PATH, { sources: [] });
  const knownUrls = new Set((backlog.sources ?? []).map((source) => normalizeUrl(source.url)));
  const generatedAt = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');

  if (!options.dryRun && !apiKey) {
    throw new Error('TAVILY_API_KEY is required for live discovery. Use --dry-run to test report generation without network calls.');
  }

  const searchRuns = [];
  if (options.dryRun) {
    searchRuns.push(...buildDryRunResults(backlog));
  } else {
    for (const batch of trustedBatches) {
      try {
        const payload = await tavilySearch({
          apiKey,
          query: batch.query,
          domains: batch.domains,
          maxResults: options.maxResults,
          searchDepth: options.searchDepth
        });
        searchRuns.push({ batch, results: payload.results ?? [] });
      } catch (error) {
        searchRuns.push({ batch, results: [], error: error instanceof Error ? error.message : String(error) });
      }
    }
  }

  const byUrl = new Map();
  for (const run of searchRuns) {
    for (const result of run.results) {
      if (!result.url) continue;
      const url = normalizeUrl(result.url);
      if (!run.batch.domains.some((domain) => domainOf(url).endsWith(domain.replace(/^www\./, '')))) continue;
      if (!byUrl.has(url)) {
        const title = excerpt(result.title ?? url, 160);
        const classification = classifySource(url, title, run.batch);
        byUrl.set(url, {
          id: `${classification.domain.split('.')[0]}-${slugify(title)}`,
          title,
          url,
          domain: classification.domain,
          discoveryBatch: run.batch.id,
          tier: classification.tier,
          status: knownUrls.has(url) ? 'known_backlog_candidate' : run.batch.defaultStatus,
          sourceType: classification.sourceType,
          candidateUse: classification.candidateUse,
          publicUseAllowed: false,
          reviewNeed: classification.reviewNeed,
          reviewPriority: classification.reviewPriority,
          weakSignals: classification.weakSignals,
          rejectionReasons: classification.rejectionReasons,
          rejected: classification.rejected,
          knownBacklog: knownUrls.has(url),
          score: result.score ?? null,
          snippet: excerpt(result.content ?? result.snippet ?? result.raw_content ?? '')
        });
      }
    }
  }

  const rejectedCandidates = [...byUrl.values()].filter((candidate) => candidate.rejected);
  const priorityRank = { high: 0, medium: 1, low: 2 };
  const candidates = [...byUrl.values()]
    .filter((candidate) => !candidate.rejected)
    .sort((a, b) => priorityRank[a.reviewPriority] - priorityRank[b.reviewPriority] || Number(a.knownBacklog) - Number(b.knownBacklog) || a.domain.localeCompare(b.domain));
  const extractUrls = candidates.filter((candidate) => !candidate.knownBacklog).slice(0, options.extractTop).map((candidate) => candidate.url);

  if (!options.dryRun && extractUrls.length) {
    try {
      const extracts = await tavilyExtract({ apiKey, urls: extractUrls });
      const extractByUrl = new Map(extracts.map((item) => [normalizeUrl(item.url), item]));
      for (const candidate of candidates) {
        const extracted = extractByUrl.get(candidate.url);
        if (extracted) {
          candidate.extractExcerpt = excerpt(extracted.raw_content ?? extracted.content ?? extracted.text ?? '');
        }
      }
    } catch (error) {
      for (const candidate of candidates) {
        candidate.extractError = error instanceof Error ? error.message : String(error);
      }
    }
  }

  await fs.mkdir(options.reportDir, { recursive: true });
  await fs.mkdir(options.outputDir, { recursive: true });

  const payload = {
    generatedAt,
    reportDate: options.reportDate,
    reviewStatus: 'candidate_discovery_only',
    autoPublic: false,
    policy: 'Tavily discovery output is not public data. Human review is required before any public JSON or page copy changes.',
    searchBatches: trustedBatches,
    summary: summarizeCandidates([...candidates, ...rejectedCandidates]),
    candidates,
    rejectedCandidates
  };

  const jsonPath = path.join(options.outputDir, `tavily-candidates-${options.reportDate}.json`);
  const reportPath = path.join(options.reportDir, `tavily-source-candidates-${options.reportDate}.md`);
  await fs.writeFile(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);
  await fs.writeFile(reportPath, buildMarkdown({
    reportDate: options.reportDate,
    generatedAt,
    dryRun: options.dryRun,
    searchRuns,
    candidates: [...candidates, ...rejectedCandidates],
    knownUrlCount: knownUrls.size,
    extractCount: extractUrls.length
  }));

  console.log(`Wrote ${candidates.length} candidates to ${path.relative(repoRoot, jsonPath)}`);
  console.log(`Wrote report to ${path.relative(repoRoot, reportPath)}`);
  if (options.dryRun) console.log('Dry run used existing backlog candidates; set TAVILY_API_KEY and omit --dry-run for live discovery.');
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
