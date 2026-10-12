import type { Metadata } from "next";
import { ServicesHub } from "@/components/services/ServicesHub";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceCategories } from "@/lib/data/services";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";
import { getServicePath } from "@/lib/seo/paths";
import { DEFAULT_OG_IMAGE, ogImages, twitterImages } from "@/lib/seo/social";

const path = "/services";
const url = `${site.url}${path}`;

export const metadata: Metadata = {
  title: { absolute: "Digital Agency Services | Buildaze" },
  description:
    "Buildaze services: design, development, artificial intelligence, digital marketing and Shopify — clear scope and practical next steps.",
  alternates: { canonical: path },
  openGraph: {
    title: "Digital Agency Services | Buildaze",
    description:
      "Five categories. Clear scope. Design, Development, Artificial Intelligence, Digital Marketing and Shopify.",
    url,
    siteName: site.name,
    type: "website",
    images: ogImages(DEFAULT_OG_IMAGE, "Buildaze digital agency services"),
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Agency Services | Buildaze",
    description:
      "Five categories. Clear scope. Design, Development, Artificial Intelligence, Digital Marketing and Shopify.",
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
      name: "Digital Agency Services | Buildaze",
      description:
        "Buildaze services: design, development, artificial intelligence, digital marketing and Shopify.",
      isPartOf: { "@id": `${site.url}/#website` },
      provider: { "@id": ORGANIZATION_ID },
      inLanguage: "en",
      mainEntity: { "@id": `${url}#itemlist` },
    },
    {
      "@type": "ItemList",
      "@id": `${url}#itemlist`,
      name: "Buildaze service categories",
      numberOfItems: serviceCategories.length,
      itemListElement: serviceCategories.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.name,
        url: `${site.url}${getServicePath(service)}`,
      })),
    },
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Services", path },
    ]),
  ],
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <ServicesHub />
    </>
  );
}
