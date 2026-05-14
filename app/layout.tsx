import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ChunkReloadGuard } from "@/components/ChunkReloadGuard";
import { ThirdPartyScripts } from "@/components/ThirdPartyScripts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hantavirus Map 2026: Cases, Canada & US Tracker",
    template: "%s | Hantavirus Maps",
  },
  description:
    "A reviewed, source-linked hantavirus map and tracker for cases, Canada and US updates, official alerts, reservoir regions, symptoms, prevention, and source limitations.",
  metadataBase: new URL("https://hantavirusmaps.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hantavirus Map 2026: Cases, Canada & US Tracker",
    description:
      "Reviewed hantavirus map context with Canada and US updates, official sources, conservative limits, and prevention education.",
    url: "https://hantavirusmaps.org",
    siteName: "Hantavirus Maps",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-slate-950 text-white antialiased">
        <ThirdPartyScripts />
        <ChunkReloadGuard />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
