import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from "@/components/seo/Analytics";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { CursorFollower } from "@/components/motion/CursorFollower";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { organizationNode, websiteNode } from "@/lib/seo/jsonld";
import { DEFAULT_OG_IMAGE, ogImages, twitterImages } from "@/lib/seo/social";
import { site } from "@/lib/data/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  icons: {
    icon: [{ url: "/Logo/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/Logo/favicon.svg",
    apple: "/Logo/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ogImages(DEFAULT_OG_IMAGE),
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: twitterImages(DEFAULT_OG_IMAGE),
  },
  robots: { index: true, follow: true },
};

/** Sitewide graph: one Organization + one WebSite. Homepage WebPage is on `/`; no FAQPage schema. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [organizationNode(), websiteNode()],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: browser extensions / embedded previews often inject
    // attributes onto <html>/<body> before React hydrates (e.g. __processed_*).
    <html
      lang="en"
      data-theme="buildaze"
      className={`${spaceGrotesk.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`${spaceGrotesk.className} antialiased bg-[var(--brand-ink,#0a0a0a)] text-white`} suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <CursorFollower />
        <GoogleAnalytics />
        <Analytics />
        {children}
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
