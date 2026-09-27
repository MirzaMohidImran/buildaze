import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { VoiceAgentPage } from "@/components/voice/VoiceAgentPage";
import { site } from "@/lib/data/site";
import { voiceAgent } from "@/lib/data/voice-agent";
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  breadcrumbList,
} from "@/lib/seo/jsonld";

const path = voiceAgent.path;
const url = `${site.url}${path}`;
const ogImage = `${site.url}${voiceAgent.ogImage}`;

export const metadata: Metadata = {
  title: { absolute: voiceAgent.metaTitle },
  description: voiceAgent.metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: voiceAgent.metaTitle,
    description: voiceAgent.metaDescription,
    url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Buildaze custom AI voice agent for business — live browser demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: voiceAgent.metaTitle,
    description: voiceAgent.metaDescription,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

const pageId = `${url}#webpage`;
const serviceId = `${url}#service`;

/**
 * Page-level graph only. Organization + WebSite live in root layout.
 * Visible FAQs remain on the page; FAQPage JSON-LD is omitted to avoid
 * chasing rich results with markup that is not required for the page to work.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: voiceAgent.metaTitle,
      description: voiceAgent.metaDescription,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": serviceId },
      provider: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImage,
      },
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "Custom AI Voice Agent",
      serviceType: "Custom AI Voice Agent Development",
      description: voiceAgent.metaDescription,
      provider: { "@id": ORGANIZATION_ID },
      url,
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      mainEntityOfPage: { "@id": pageId },
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Voice Agent", path },
    ]),
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={structuredData} />
      <VoiceAgentPage />
    </>
  );
}
