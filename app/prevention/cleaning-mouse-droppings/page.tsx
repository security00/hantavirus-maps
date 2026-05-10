import type { Metadata } from "next";

import { ContentPage } from "@/components/ContentPage";
import { getContentPage } from "@/lib/page-content";

const page = getContentPage("cleaning-mouse-droppings");

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: {
    canonical: page.path,
  },
};

export default function CleaningMouseDroppingsPage() {
  return <ContentPage page={page} />;
}
