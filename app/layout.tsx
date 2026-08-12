import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/seo/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { CursorFollower } from "@/components/motion/CursorFollower";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { organizationNode, websiteNode } from "@/lib/seo/jsonld";
import { site } from "@/lib/data/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

/** Sitewide graph: one Organization + one WebSite. Page-level Service/FAQ live on their own routes. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [organizationNode(), websiteNode()],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-accent focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <CursorFollower />
        <Analytics />
        {children}
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
