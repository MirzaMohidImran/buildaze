import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { termsOfUseContent } from "@/lib/data/legal-pages";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";

const path = termsOfUseContent.path;
const url = `${site.url}${path}`;

export const metadata: Metadata = {
  title: { absolute: termsOfUseContent.metaTitle },
  description: termsOfUseContent.metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: termsOfUseContent.metaTitle,
    description: termsOfUseContent.metaDescription,
    url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: termsOfUseContent.metaTitle,
    description: termsOfUseContent.metaDescription,
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: termsOfUseContent.metaTitle,
      description: termsOfUseContent.metaDescription,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Website Terms", path },
    ]),
  ],
};

export default function TermsOfUsePage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <LegalPage content={termsOfUseContent} />
    </>
  );
}
