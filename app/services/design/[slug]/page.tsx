import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { designLeaves } from "@/lib/data/design-leaves";
import { getServiceById, getServiceBySlug } from "@/lib/data/services";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";
import { getServicePath, getServiceUrl } from "@/lib/seo/paths";
import { DEFAULT_OG_IMAGE, ogImages, twitterImages } from "@/lib/seo/social";

const NESTED_PREFIX = "/services/design/";

export function generateStaticParams() {
  return designLeaves.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service?.path?.startsWith(NESTED_PREFIX)) return {};

  const path = getServicePath(service);
  const url = getServiceUrl(service, site.url);
  const title = service.page.metaTitle.includes("Buildaze")
    ? { absolute: service.page.metaTitle }
    : service.page.metaTitle;

  return {
    title,
    description: service.page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: service.page.metaTitle,
      description: service.page.metaDescription,
      url,
      siteName: site.name,
      type: "website",
      images: ogImages(service.page.ogImage ?? DEFAULT_OG_IMAGE, service.page.metaTitle),
    },
    twitter: {
      card: "summary_large_image",
      title: service.page.metaTitle,
      description: service.page.metaDescription,
      images: twitterImages(service.page.ogImage ?? DEFAULT_OG_IMAGE),
    },
    robots: { index: true, follow: true },
  };
}

export default async function DesignLeafPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service?.path?.startsWith(NESTED_PREFIX)) {
    notFound();
  }

  const hub = getServiceById("design");
  const path = getServicePath(service);
  const url = getServiceUrl(service, site.url);
  const pageId = `${url}#webpage`;
  const serviceId = `${url}#service`;
  const hubPath = hub ? getServicePath(hub) : "/services/design";

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
        name: service.name,
        description: service.page.metaDescription,
        provider: { "@id": ORGANIZATION_ID },
        url,
        serviceType: service.name,
        areaServed: { "@type": "Place", name: "Worldwide" },
        mainEntityOfPage: { "@id": pageId },
      },
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Design", path: hubPath },
        { name: service.name, path },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <ServicePage service={service} />
    </>
  );
}
