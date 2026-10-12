import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacyPolicyContent } from "@/lib/data/legal-pages";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";

const path = privacyPolicyContent.path;
const url = `${site.url}${path}`;

export const metadata: Metadata = {
  title: { absolute: privacyPolicyContent.metaTitle },
  description: privacyPolicyContent.metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: privacyPolicyContent.metaTitle,
    description: privacyPolicyContent.metaDescription,
    url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: privacyPolicyContent.metaTitle,
    description: privacyPolicyContent.metaDescription,
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
      name: privacyPolicyContent.metaTitle,
      description: privacyPolicyContent.metaDescription,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path },
    ]),
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <LegalPage content={privacyPolicyContent} />
    </>
  );
}
