import type { Metadata } from "next";
import { WorkHub } from "@/components/work/WorkHub";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/lib/data/work";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";
import { DEFAULT_OG_IMAGE, ogImages, twitterImages } from "@/lib/seo/social";

const path = "/work";
const url = `${site.url}${path}`;

export const metadata: Metadata = {
  title: "Work | SaaS, AI, Web & Ecommerce Case Studies",
  description:
    "Buildaze case studies — real products shipped to production with measured results across SaaS, fintech, healthcare and ecommerce.",
  alternates: { canonical: path },
  openGraph: {
    title: "Work — Buildaze",
    description: "Real products. Measured results.",
    url,
    siteName: site.name,
    type: "website",
    images: ogImages(DEFAULT_OG_IMAGE, "Buildaze case studies"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Buildaze",
    description: "Real products. Measured results.",
    images: twitterImages(DEFAULT_OG_IMAGE),
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["CollectionPage", "WebPage"],
      "@id": `${url}#webpage`,
      url,
      name: "Work | SaaS, AI, Web & Ecommerce Case Studies — Buildaze",
      description:
        "Buildaze case studies across SaaS, fintech, healthcare and ecommerce.",
      isPartOf: { "@id": `${site.url}/#website` },
      provider: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
      mainEntity: { "@id": `${url}#itemlist` },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#itemlist`,
      name: "Buildaze case studies",
      numberOfItems: caseStudies.length,
      itemListElement: caseStudies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: study.name,
        url: `${site.url}/work/${study.slug}`,
      })),
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Work", path },
    ]),
  ],
};

export default function WorkPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <WorkHub />
    </>
  );
}
