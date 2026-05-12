import { EVENT_PAGE_IDS, eventPath, rawEventPath } from "@/lib/event-pages";
import { SOURCE_PAGE_IDS, WHERE_PAGE_SLUGS, sourcePath, wherePath } from "@/lib/programmatic-pages";

export const SITE_URL = "https://hantavirusmaps.org";
export const SITE_HOST = "hantavirusmaps.org";
export const LAST_REVIEWED_ISO = "2026-05-12";
export const LAST_REVIEWED_LABEL = "May 12, 2026";
export const SUPPORT_EMAIL = "support@hantavirusmaps.org";

export type RouteFrequency = "weekly" | "monthly" | "yearly";

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
  priority: number;
  changeFrequency: RouteFrequency;
};

export const SITE_ROUTES: SiteRoute[] = [
  {
    path: "/",
    title: "Hantavirus map: Cases, Risk Areas and Public Health Alerts",
    description:
      "A reviewed, source-linked hantavirus map MVP for state-level case context, official alerts, and reservoir regions.",
    priority: 1,
    changeFrequency: "weekly"
  },
  {
    path: "/hantavirus-tracker/",
    title: "Hantavirus Tracker: Reviewed Map, Cases, Alerts and Reservoirs",
    description:
      "A source-linked hantavirus tracker for reviewed map layers: historical case summaries, official outbreak alerts, rodent reservoir ecology, and prevention guidance.",
    priority: 0.94,
    changeFrequency: "weekly"
  },
  {
    path: "/hantavirus/",
    title: "What Is Hantavirus? Educational Disease Overview",
    description:
      "A conservative, source-linked hantavirus disease overview covering HPS, HFRS, transmission, geography, symptoms, prevention, cleanup, diagnosis limits, treatment boundaries, and map context.",
    priority: 0.88,
    changeFrequency: "monthly"
  },
  {
    path: "/united-states/",
    title: "Hantavirus Map by State in the United States",
    description:
      "United States hantavirus map context using CDC state-level surveillance summaries and official state health sources.",
    priority: 0.9,
    changeFrequency: "monthly"
  },
  {
    path: "/united-states/new-mexico/",
    title: "New Mexico Hantavirus Map and Case Context",
    description:
      "New Mexico hantavirus map context with NMDOH source links, historical case summary, and prevention notes.",
    priority: 0.82,
    changeFrequency: "monthly"
  },
  {
    path: "/united-states/california/",
    title: "California Hantavirus Map and Source Context",
    description:
      "California hantavirus map context linking to CDPH prevention, surveillance, and occupational health resources.",
    priority: 0.82,
    changeFrequency: "monthly"
  },
  {
    path: "/united-states/arizona/",
    title: "Arizona Hantavirus Map and Public Health Alerts",
    description:
      "Arizona hantavirus map context with ADHS Health Alert Network and investigation protocol sources.",
    priority: 0.82,
    changeFrequency: "monthly"
  },
  {
    path: "/united-states/colorado/",
    title: "Colorado Hantavirus Map and Public Health Sources",
    description:
      "Colorado hantavirus map context with CDPHE prevention, reporting, and state data links.",
    priority: 0.82,
    changeFrequency: "monthly"
  },
  {
    path: "/europe/",
    title: "Europe Hantavirus Map and ECDC Context",
    description:
      "European hantavirus map context focused on ECDC surveillance, bank vole ecology, and HFRS limitations.",
    priority: 0.72,
    changeFrequency: "monthly"
  },
  {
    path: "/south-america/",
    title: "South America Hantavirus Map and Andes Virus Context",
    description:
      "South America hantavirus map context with PAHO/WHO alerts, Southern Cone surveillance, and Andes virus notes.",
    priority: 0.72,
    changeFrequency: "monthly"
  },
  {
    path: "/hantavirus-risk-map/",
    title: "Hantavirus Risk Map: What the Layers Mean",
    description:
      "How to read hantavirus risk map layers without confusing ecological risk, reported cases, and official alerts.",
    priority: 0.78,
    changeFrequency: "monthly"
  },
  {
    path: "/hantavirus-outbreak-map/",
    title: "Hantavirus Outbreak Map: Official Alerts and Limits",
    description:
      "A conservative explanation of hantavirus outbreak map sources, official alerts, and why this is not live surveillance.",
    priority: 0.78,
    changeFrequency: "weekly"
  },
  {
    path: "/outbreaks/",
    title: "Hantavirus Outbreak Explainers: Official Source Notes",
    description:
      "Conservative official-source hantavirus outbreak explainers and reviewed source notes, with links to the outbreak map and tracker.",
    priority: 0.77,
    changeFrequency: "weekly"
  },
  {
    path: "/outbreaks/mv-hondius-2026/",
    title: "MV Hondius 2026 Hantavirus Cluster: Official Source Explainer",
    description:
      "Reviewed official-source notes for the 2026 cruise-associated hantavirus cluster, with clear limits on live tracking, local risk, and medical advice.",
    priority: 0.74,
    changeFrequency: "weekly"
  },
  {
    path: "/deer-mouse-hantavirus-map/",
    title: "Deer Mouse Hantavirus Map",
    description:
      "Deer mouse hantavirus map context for Sin Nombre virus, reservoir ecology, and U.S. risk interpretation.",
    priority: 0.76,
    changeFrequency: "monthly"
  },
  {
    path: "/where-is-hantavirus-found/",
    title: "Where Is Hantavirus Found?",
    description:
      "Plain-English geography of hantavirus in the Americas, Europe, Asia, and selected reservoir regions.",
    priority: 0.74,
    changeFrequency: "monthly"
  },
  {
    path: "/symptoms/",
    title: "Hantavirus Symptoms: Educational Overview",
    description:
      "Educational overview of hantavirus symptoms with clear medical disclaimer and source links.",
    priority: 0.72,
    changeFrequency: "monthly"
  },
  {
    path: "/prevention/",
    title: "Hantavirus Prevention",
    description:
      "General hantavirus prevention education based on CDC and state public health guidance.",
    priority: 0.78,
    changeFrequency: "monthly"
  },
  {
    path: "/prevention/cleaning-mouse-droppings/",
    title: "Cleaning Mouse Droppings Safely",
    description:
      "Educational cleanup steps for mouse droppings and rodent contamination based on CDC guidance.",
    priority: 0.76,
    changeFrequency: "monthly"
  },
  {
    path: "/sources-methodology/",
    title: "Sources and Methodology",
    description:
      "How Hantavirus Maps reviews sources, separates data layers, and avoids unsupported precision.",
    priority: 0.7,
    changeFrequency: "monthly"
  },

  {
    path: "/llms.txt",
    title: "LLM Manifest",
    description: "LLM crawler manifest for Hantavirus Maps reviewed public data and citation guidance.",
    priority: 0.3,
    changeFrequency: "monthly"
  },
  {
    path: "/ai.txt",
    title: "AI Crawler Guidance",
    description: "AI crawler guidance for citing Hantavirus Maps safely and accurately.",
    priority: 0.3,
    changeFrequency: "monthly"
  },
  {
    path: "/data/map-snapshots.json",
    title: "Reviewed Map Snapshots JSON",
    description: "Machine-readable reviewed public map snapshots for Hantavirus Maps.",
    priority: 0.35,
    changeFrequency: "weekly"
  },
  {
    path: "/data/sources.json",
    title: "Reviewed Sources JSON",
    description: "Machine-readable reviewed source registry for Hantavirus Maps.",
    priority: 0.35,
    changeFrequency: "weekly"
  },
  {
    path: "/openapi.json",
    title: "OpenAPI Description",
    description: "OpenAPI description for Hantavirus Maps public data endpoints.",
    priority: 0.32,
    changeFrequency: "monthly"
  },
  {
    path: "/feed.xml",
    title: "Reviewed Updates RSS Feed",
    description:
      "Reviewed-only RSS feed for Hantavirus Maps site updates, official-source notes, and methodology updates; not a live case feed.",
    priority: 0.35,
    changeFrequency: "weekly"
  },
  {
    path: "/feed.json",
    title: "Reviewed Updates JSON Feed",
    description:
      "Reviewed-only JSON feed for Hantavirus Maps site updates, official-source notes, and methodology updates; not a live case feed.",
    priority: 0.35,
    changeFrequency: "weekly"
  },
  {
    path: "/faq/",
    title: "Hantavirus Map FAQ",
    description:
      "Frequently asked questions about how to read the Hantavirus Maps source-linked layers, alerts, limitations, and medical disclaimers.",
    priority: 0.68,
    changeFrequency: "monthly"
  },
  {
    path: "/about/",
    title: "About Us - Hantavirus Maps",
    description:
      "About Hantavirus Maps, an educational source-linked public health map and data explanation project.",
    priority: 0.62,
    changeFrequency: "yearly"
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy",
    description:
      "Privacy policy for Hantavirus Maps, including analytics, cookies, external links, and contact information.",
    priority: 0.45,
    changeFrequency: "yearly"
  },
  {
    path: "/terms-of-use/",
    title: "Terms of Use",
    description:
      "Terms of use for Hantavirus Maps, including educational-use limits, medical disclaimer, and source limitations.",
    priority: 0.45,
    changeFrequency: "yearly"
  }
];

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

function rawSourcePath(id: string) {
  return `/raw/source/${id}.md`;
}

function rawWherePath(slug: string) {
  return `/raw/where/${slug}.md`;
}


const SOURCE_ROUTES: SiteRoute[] = SOURCE_PAGE_IDS.map((id) => ({
  path: sourcePath(id),
  title: `Reviewed Source: ${id}`,
  description: `Reviewed source note for ${id} and its Hantavirus Maps publication limits.`,
  priority: 0.58,
  changeFrequency: "monthly",
}));

const WHERE_ROUTES: SiteRoute[] = WHERE_PAGE_SLUGS.map((slug) => ({
  path: wherePath(slug),
  title: `Hantavirus Map: ${slug}`,
  description: `Reviewed source-linked hantavirus map context for ${slug}.`,
  priority: 0.66,
  changeFrequency: "monthly",
}));



const EVENT_ROUTES: SiteRoute[] = EVENT_PAGE_IDS.map((id) => ({
  path: eventPath(id),
  title: `Reviewed Event: ${id}`,
  description: `Reviewed event record for ${id} with source links and safe-use limits.`,
  priority: 0.62,
  changeFrequency: "weekly" as const,
}));

const RAW_EVENT_ROUTES: SiteRoute[] = EVENT_PAGE_IDS.map((id) => ({
  path: rawEventPath(id),
  title: `Raw Event Markdown: ${id}`,
  description: `Markdown shadow event record for ${id}.`,
  priority: 0.28,
  changeFrequency: "weekly",
}));

const RAW_SOURCE_ROUTES: SiteRoute[] = SOURCE_PAGE_IDS.map((id) => ({
  path: rawSourcePath(id),
  title: `Raw Source Markdown: ${id}`,
  description: `Markdown shadow source record for ${id}.`,
  priority: 0.24,
  changeFrequency: "monthly",
}));

const RAW_WHERE_ROUTES: SiteRoute[] = WHERE_PAGE_SLUGS.map((slug) => ({
  path: rawWherePath(slug),
  title: `Raw Location Markdown: ${slug}`,
  description: `Markdown shadow location record for ${slug}.`,
  priority: 0.24,
  changeFrequency: "monthly",
}));

export const GOOGLE_SITEMAP_ROUTES: SiteRoute[] = [...SITE_ROUTES, ...SOURCE_ROUTES, ...WHERE_ROUTES, ...EVENT_ROUTES];

export const MACHINE_READABLE_ROUTES: SiteRoute[] = [...RAW_EVENT_ROUTES, ...RAW_SOURCE_ROUTES, ...RAW_WHERE_ROUTES];

export const ALL_SITE_ROUTES: SiteRoute[] = [...GOOGLE_SITEMAP_ROUTES, ...MACHINE_READABLE_ROUTES];
