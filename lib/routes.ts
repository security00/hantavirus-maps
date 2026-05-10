export const SITE_URL = "https://hantavirusmaps.org";
export const SITE_HOST = "hantavirusmaps.org";
export const LAST_REVIEWED_ISO = "2026-05-10";
export const LAST_REVIEWED_LABEL = "May 10, 2026";

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
    path: "/about/",
    title: "About Hantavirus Maps",
    description:
      "About this educational, source-linked public health map and data explanation project.",
    priority: 0.62,
    changeFrequency: "yearly"
  }
];

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
