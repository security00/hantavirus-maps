import type { Metadata } from "next";
import Script from "next/script";

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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E7NH3NPGDE" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E7NH3NPGDE');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wp2f5d6gfd");
          `}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
