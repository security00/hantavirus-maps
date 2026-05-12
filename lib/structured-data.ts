import type { CaseRecord, SourceRecord } from "@/lib/data";
import type { EventPageRecord } from "@/lib/event-pages";
import { LAST_REVIEWED_ISO, SITE_URL, absoluteUrl } from "@/lib/routes";

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function sourceArticleJsonLd(source: SourceRecord, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${source.publisher}: ${source.title}`,
    description: `${source.use} Limitations: ${source.limitations}`,
    url: absoluteUrl(path),
    datePublished: source.publicationDate,
    dateModified: source.reviewedDate,
    author: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    about: { "@type": "CreativeWork", name: source.title, url: source.url, publisher: source.publisher },
    isAccessibleForFree: true,
  };
}

export function sourceDatasetJsonLd(source: SourceRecord, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `Reviewed source note: ${source.title}`,
    description: source.use,
    url: absoluteUrl(path),
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    dateModified: source.reviewedDate,
    isAccessibleForFree: true,
    distribution: { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: `${SITE_URL}/data/sources.json` },
    citation: source.url,
  };
}

export function eventArticleJsonLd(event: EventPageRecord) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: event.title,
    description: event.summary,
    url: absoluteUrl(event.canonicalPath),
    datePublished: event.date,
    dateModified: LAST_REVIEWED_ISO,
    author: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    isAccessibleForFree: true,
    about: [{ "@type": "MedicalCondition", name: "Hantavirus disease" }, { "@type": "Place", name: event.geography }],
  };
}

export function eventClaimReviewJsonLd(event: EventPageRecord) {
  return {
    "@context": "https://schema.org",
    "@type": "ClaimReview",
    url: absoluteUrl(event.canonicalPath),
    datePublished: event.date,
    claimReviewed: `${event.title}: ${event.status}`,
    author: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 1,
      bestRating: 1,
      worstRating: 0,
      alternateName: "Reviewed official-source summary; not live surveillance",
    },
    itemReviewed: {
      "@type": "Claim",
      text: event.summary,
      appearance: { "@type": "CreativeWork", name: event.subtitle },
    },
  };
}

export function eventDatasetJsonLd(event: EventPageRecord) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `Reviewed event record: ${event.title}`,
    description: event.summary,
    url: absoluteUrl(event.canonicalPath),
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    dateModified: LAST_REVIEWED_ISO,
    spatialCoverage: { "@type": "Place", name: event.geography },
    variableMeasured: event.metrics.map((metric) => metric.label),
    distribution: [
      { "@type": "DataDownload", encodingFormat: "text/markdown", contentUrl: absoluteUrl(event.rawPath) },
      { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: `${SITE_URL}/data/map-snapshots.json` },
    ],
  };
}

export function whereDatasetJsonLd(record: CaseRecord, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: `${record.jurisdiction} hantavirus reviewed map context`,
    description: record.summary,
    url: absoluteUrl(path),
    license: "https://creativecommons.org/licenses/by/4.0/",
    creator: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    dateModified: LAST_REVIEWED_ISO,
    spatialCoverage: { "@type": "Place", name: record.jurisdiction },
    temporalCoverage: record.period,
    variableMeasured: ["Reported cases", "Geography precision", "Source limitations"],
    measurementTechnique: "Manual review of official public health source summaries.",
    distribution: { "@type": "DataDownload", encodingFormat: "application/json", contentUrl: `${SITE_URL}/data/map-snapshots.json` },
  };
}

export function whereArticleJsonLd(record: CaseRecord, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${record.jurisdiction} hantavirus map and source context`,
    description: record.summary,
    url: absoluteUrl(path),
    dateModified: LAST_REVIEWED_ISO,
    author: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Hantavirus Maps", url: SITE_URL },
    about: [{ "@type": "MedicalCondition", name: "Hantavirus disease" }, { "@type": "Place", name: record.jurisdiction }],
    isAccessibleForFree: true,
  };
}
