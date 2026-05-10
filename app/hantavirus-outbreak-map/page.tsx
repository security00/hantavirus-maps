import type { Metadata } from "next";

import { ContentPage } from "@/components/ContentPage";
import { getContentPage } from "@/lib/page-content";

const page = getContentPage("hantavirus-outbreak-map");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: page.path,
  },
};

export default function HantavirusOutbreakMapPage() {
  return <ContentPage page={page} />;
}
