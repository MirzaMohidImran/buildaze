import type { Metadata } from "next";
import { ServicePage } from "@/components/services/ServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServiceById } from "@/lib/data/services";
import { linkedIn, site } from "@/lib/data/site";
import {
  ORGANIZATION_ID,
  breadcrumbList,
} from "@/lib/seo/jsonld";
import { getServicePath, getServiceUrl } from "@/lib/seo/paths";

const service = getServiceById("shopify")!;
const path = getServicePath(service);
const url = getServiceUrl(service, site.url);
const ogImage = service.page.ogImage
  ? `${site.url}${service.page.ogImage}`
  : undefined;

export const metadata: Metadata = {
  title: { absolute: service.page.metaTitle },
  description: service.page.metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: service.page.metaTitle,
    description: service.page.metaDescription,
    url,
    siteName: site.name,
    type: "website",
    images: ogImage
      ? [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: "Buildaze Shopify Development & Growth Agency",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: service.page.metaTitle,
    description: service.page.metaDescription,
    images: ogImage ? [ogImage] : undefined,
  },
  robots: { index: true, follow: true },
};

const pageId = `${url}#webpage`;
const serviceId = `${url}#service`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: service.page.metaTitle,
      description: service.page.metaDescription,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": serviceId },
      provider: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
    },
    {
      "@type": "Service",
      "@id": serviceId,
      name: "Shopify Development & Growth",
      serviceType: "Shopify Development Agency",
      description: service.page.metaDescription,
      provider: { "@id": ORGANIZATION_ID },
      url,
      sameAs: [linkedIn.ecommerceGrowth],
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      mainEntityOfPage: { "@id": pageId },
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Shopify Growth Agency", path },
    ]),
  ],
};

export default function ShopifyGrowthAgencyPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServicePage service={service} />
    </>
  );
}
