import type { Metadata } from "next";
import { AboutPage } from "@/components/about/AboutPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutPage } from "@/lib/data/about-page";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";

const path = aboutPage.path;
const url = `${site.url}${path}`;

export const metadata: Metadata = {
  title: { absolute: aboutPage.metaTitle },
  description: aboutPage.metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: aboutPage.metaTitle,
    description: aboutPage.metaDescription,
    url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: aboutPage.metaTitle,
    description: aboutPage.metaDescription,
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${url}#webpage`,
      url,
      name: aboutPage.metaTitle,
      description: aboutPage.metaDescription,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": ORGANIZATION_ID },
      mainEntity: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "About", path },
    ]),
  ],
};

export default function AboutRoutePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <AboutPage />
    </>
  );
}
