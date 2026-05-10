import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hantavirus map: Cases, Risk Areas and Public Health Alerts",
    template: "%s | Hantavirus Maps",
  },
  description:
    "A reviewed, source-linked hantavirus map and public health data explanation site for cases, alerts, reservoir regions, symptoms, and prevention.",
  metadataBase: new URL("https://hantavirusmaps.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hantavirus map: Cases, Risk Areas and Public Health Alerts",
    description:
      "Reviewed hantavirus map context with official sources, conservative limits, and prevention education.",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
