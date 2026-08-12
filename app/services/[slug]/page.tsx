import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServiceBySlug, serviceSlugs } from "@/lib/data/services";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";
import { getServicePath, getServiceUrl } from "@/lib/seo/paths";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  // Specialist pages with a custom path are not served here.
  if (service.path) return {};

  const path = getServicePath(service);
  const url = getServiceUrl(service, site.url);
  return {
    title: service.page.metaTitle,
    description: service.page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: service.page.metaTitle,
      description: service.page.metaDescription,
      url,
      siteName: site.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.page.metaTitle,
      description: service.page.metaDescription,
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.path) notFound();

  const path = getServicePath(service);
  const url = getServiceUrl(service, site.url);
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
        name: service.name,
        description: service.page.metaDescription,
        provider: { "@id": ORGANIZATION_ID },
        url,
        serviceType: service.name,
        mainEntityOfPage: { "@id": pageId },
      },
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
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
