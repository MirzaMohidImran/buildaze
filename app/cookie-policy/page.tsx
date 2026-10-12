import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { cookiePolicyContent } from "@/lib/data/legal-pages";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";

const path = cookiePolicyContent.path;
const url = `${site.url}${path}`;

export const metadata: Metadata = {
  title: { absolute: cookiePolicyContent.metaTitle },
  description: cookiePolicyContent.metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: cookiePolicyContent.metaTitle,
    description: cookiePolicyContent.metaDescription,
    url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: cookiePolicyContent.metaTitle,
    description: cookiePolicyContent.metaDescription,
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
      name: cookiePolicyContent.metaTitle,
      description: cookiePolicyContent.metaDescription,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Cookie Policy", path },
    ]),
  ],
};

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <LegalPage content={cookiePolicyContent} showCookieTable />
    </>
  );
}
