import type { Metadata } from "next";
import { IncomingHome } from "@/components/home/IncomingHome";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/jsonld";
import { DEFAULT_OG_IMAGE, ogImages, twitterImages } from "@/lib/seo/social";

const HOME_TITLE = "Buildaze | Design, Development & Digital Growth Agency";
const HOME_DESCRIPTION =
  "Buildaze brings design, development, AI, digital marketing and Shopify services together to help businesses launch, improve and grow. Discuss your project.";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: ogImages(DEFAULT_OG_IMAGE, HOME_TITLE),
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: twitterImages(DEFAULT_OG_IMAGE),
  },
  robots: { index: true, follow: true },
};

const pageId = `${site.url}/#webpage`;

/** Homepage WebPage only — Organization + WebSite live in root layout. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageId,
      url: site.url,
      name: HOME_TITLE,
      description: HOME_DESCRIPTION,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": ORGANIZATION_ID },
      primaryEntityOfPage: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
  ],
};

/** Existing hero stays. Everything below it comes from the incoming homepage HTML. */
export default function Home() {
  return (
    <>
      <Navbar tone="dark" />
      <main id="main">
        <Hero tone="dark" />
        <IncomingHome />
      </main>
      <JsonLd data={structuredData} />
    </>
  );
}
