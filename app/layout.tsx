import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hantavirus Tracker - Global Hantavirus Maps",
  description:
    "Track hantavirus risk signals, regional outbreak context, and prevention guidance for rodent exposure awareness.",
  metadataBase: new URL("https://hantavirusmaps.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hantavirus Tracker",
    description:
      "Global hantavirus maps, outbreak signals, and prevention guidance.",
    url: "https://hantavirusmaps.org",
    siteName: "Hantavirus Tracker",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
