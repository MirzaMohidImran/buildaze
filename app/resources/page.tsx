import type { Metadata } from "next";
import { ResourcesHub } from "@/components/resources/ResourcesHub";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/data/site";
import { resourceArticles } from "@/lib/data/resources";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";
import { DEFAULT_OG_IMAGE, ogImages, twitterImages } from "@/lib/seo/social";

const title = "Blog | Shopify Growth Guides — Buildaze";
const description =
  "Buildaze blog: practical guides on Shopify conversion, checkout and digital delivery — problem-led articles linked to clear service owners.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/resources" },
  openGraph: {
    title,
    description,
    url: `${site.url}/resources`,
    siteName: site.name,
    type: "website",
    images: ogImages(DEFAULT_OG_IMAGE, title),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: twitterImages(DEFAULT_OG_IMAGE),
  },
  robots: { index: true, follow: true },
};

export default function ResourcesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${site.url}/resources#webpage`,
        url: `${site.url}/resources`,
        name: title,
        description,
        isPartOf: { "@id": `${site.url}/#website` },
        provider: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        itemListElement: resourceArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${site.url}/resources/${article.slug}`,
          name: article.h1,
        })),
      },
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/resources" },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <ResourcesHub />
    </>
  );
}
