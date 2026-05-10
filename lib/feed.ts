import { absoluteUrl, LAST_REVIEWED_ISO } from "@/lib/routes";

export type ReviewedFeedItem = {
  id: string;
  title: string;
  url: string;
  datePublished: string;
  summary: string;
  tags: string[];
};

export const FEED_TITLE = "Hantavirus Maps Reviewed Updates";
export const FEED_DESCRIPTION =
  "Reviewed site updates, official-source alert notes, and source methodology updates from Hantavirus Maps. This is not a live case feed or unreviewed news feed.";

export const reviewedFeedItems: ReviewedFeedItem[] = [
  {
    id: "site-hantavirus-overview-2026-05-10",
    title: "Hantavirus disease overview added",
    url: absoluteUrl("/hantavirus/"),
    datePublished: "2026-05-10T22:54:00Z",
    summary:
      "Educational overview covering what hantavirus is, HPS vs HFRS, transmission, symptoms, prevention, cleanup, and diagnosis/treatment boundaries. Not medical advice or live surveillance.",
    tags: ["site-update", "hantavirus", "educational-overview"],
  },
  {
    id: "site-outbreak-explainers-2026-05-10",
    title: "Official-source outbreak explainer pages added",
    url: absoluteUrl("/outbreaks/"),
    datePublished: "2026-05-10T21:35:00Z",
    summary:
      "Added reviewed outbreak notes and MV Hondius 2026 event explainer pages using official-source framing. These pages are not live timelines, current case trackers, or exact local risk maps.",
    tags: ["site-update", "outbreak-notes", "official-sources"],
  },
  {
    id: "who-don600-2026-cruise-reviewed",
    title: "WHO cruise-associated hantavirus cluster note reviewed",
    url: absoluteUrl("/outbreaks/mv-hondius-2026/"),
    datePublished: "2026-05-08T00:00:00Z",
    summary:
      "Reviewed source note for WHO Disease Outbreak News on the 2026 cruise-associated hantavirus cluster involving Andes virus. Event-specific context only; not a live local case service.",
    tags: ["reviewed-alert", "WHO", "MV-Hondius", "Andes-virus"],
  },
  {
    id: "paho-alert-2025-americas-reviewed",
    title: "PAHO/WHO Americas hantavirus alert reviewed",
    url: absoluteUrl("/south-america/"),
    datePublished: "2025-12-19T00:00:00Z",
    summary:
      "Reviewed regional PAHO/WHO hantavirus pulmonary syndrome alert for the Americas, especially Southern Cone countries. Regional context only; not neighborhood-level or travel-specific risk prediction.",
    tags: ["reviewed-alert", "PAHO", "Americas", "South-America"],
  },
];

export function feedUpdatedIso() {
  return `${LAST_REVIEWED_ISO}T00:00:00Z`;
}
