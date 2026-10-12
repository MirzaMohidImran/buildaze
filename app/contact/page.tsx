import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { resolveContactPageService } from "@/lib/contact/schema";
import { contactPage } from "@/lib/data/contact-page";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";

const path = contactPage.path;
const url = `${site.url}${path}`;

export const metadata: Metadata = {
  title: { absolute: contactPage.metaTitle },
  description: contactPage.metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: contactPage.metaTitle,
    description: contactPage.metaDescription,
    url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: contactPage.metaTitle,
    description: contactPage.metaDescription,
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${url}#webpage`,
      url,
      name: contactPage.metaTitle,
      description: contactPage.metaDescription,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": ORGANIZATION_ID },
      mainEntity: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Contact", path },
    ]),
  ],
};

export default async function ContactRoutePage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const initialService = resolveContactPageService(params.service ?? "");

  return (
    <>
      <JsonLd data={structuredData} />
      <ContactPage initialService={initialService} />
    </>
  );
}
