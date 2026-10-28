import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/sections/Navbar";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, WEBSITE_ID } from "@/lib/seo/jsonld";
import { DEFAULT_OG_IMAGE, ogImages, twitterImages } from "@/lib/seo/social";

/**
 * Below-fold homepage sections: keep SSR for SEO/content, split JS so the
 * hero LCP path is not competing with every section's client bundle.
 * WebGL remains owned exclusively by Hero (untouched here).
 */
const ServiceExperience = dynamic(
  () =>
    import("@/components/sections/ServiceExperience").then((m) => m.ServiceExperience),
  { ssr: true },
);
const FeaturedWork = dynamic(
  () => import("@/components/sections/FeaturedWork").then((m) => m.FeaturedWork),
  { ssr: true },
);
const ProcessTimeline = dynamic(
  () =>
    import("@/components/sections/ProcessTimeline").then((m) => m.ProcessTimeline),
  { ssr: true },
);
const WhyBuildaze = dynamic(
  () => import("@/components/sections/WhyBuildaze").then((m) => m.WhyBuildaze),
  { ssr: true },
);
const VoiceAgentSection = dynamic(
  () =>
    import("@/components/sections/VoiceAgentSection").then((m) => m.VoiceAgentSection),
  { ssr: true },
);
const TeamAndProof = dynamic(
  () => import("@/components/sections/TeamAndProof").then((m) => m.TeamAndProof),
  { ssr: true },
);
const FaqSection = dynamic(
  () => import("@/components/sections/FaqSection").then((m) => m.FaqSection),
  { ssr: true },
);
const ContactInvite = dynamic(
  () => import("@/components/contact/ContactInvite").then((m) => m.ContactInvite),
  { ssr: true },
);
const Footer = dynamic(
  () => import("@/components/sections/Footer").then((m) => m.Footer),
  { ssr: true },
);

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

/**
 * Homepage brand rhythm (site-wide theme on <html>):
 * ink hero → blue trust → soft services → ink work → soft process/why →
 * ink voice → soft team/FAQ → ink contact/footer.
 */
export default function Home() {
  return (
    <>
      <Navbar tone="dark" />
      <main id="main">
        <Hero tone="dark" />
        <TrustStrip />
        <ServiceExperience tone="light" />
        <FeaturedWork tone="dark" />
        <ProcessTimeline tone="light" />
        <WhyBuildaze tone="light" />
        <VoiceAgentSection tone="dark" />
        <TeamAndProof tone="light" />
        <FaqSection tone="light" />
        <ContactInvite
          tone="dark"
          source="homepage"
          heading="Tell us what you need to build or improve."
          intro="Share a few project details. You do not need a finished specification to start."
        />
      </main>
      <Footer tone="dark" />
      <JsonLd data={structuredData} />
    </>
  );
}
