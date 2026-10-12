import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServiceBySlug, serviceSlugs } from "@/lib/data/services";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";
import { getServicePath, getServiceUrl } from "@/lib/seo/paths";
import { DEFAULT_OG_IMAGE, ogImages, twitterImages } from "@/lib/seo/social";

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

  const offerCatalogNames =
    service.id === "development"
      ? [
          "Web Development",
          "App Development",
          "Ecommerce Development",
          "Software Development",
          "Dashboards",
          "Web Applications",
          "Management Systems",
        ]
      : service.id === "digital-marketing"
        ? [
            "Search Engine Optimization",
            "Meta Ads",
            "Google Ads",
            "Social Media Marketing",
            "Web Analytics & Data Tracking",
            "Ecommerce Growth Marketing",
          ]
        : service.id === "ai"
          ? [
              "AI Applications",
              "AI Chatbots",
              "AI Voice Agents",
              "Custom AI Solutions",
              "Business Automation",
            ]
          : service.id === "design"
            ? [
                "Graphic Design",
                "Illustration",
                "App Design",
                "UI/UX Design",
                "Branding",
              ]
            : null;

  const offerCatalogLabel =
    service.id === "development"
      ? "Development service groups"
      : service.id === "digital-marketing"
        ? "Digital Marketing service groups"
        : service.id === "ai"
          ? "AI service groups"
          : service.id === "design"
            ? "Design service groups"
            : "";

  const offerCatalog = offerCatalogNames
    ? {
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: offerCatalogLabel,
          itemListElement: offerCatalogNames.map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
            },
          })),
        },
      }
    : {};

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
        name:
          service.id === "development"
            ? "Web, App & Software Development"
            : service.id === "digital-marketing"
              ? "Digital Marketing Services"
              : service.id === "ai"
                ? "AI Development Services"
                : service.id === "design"
                  ? "Design Services"
                  : service.name,
        description: service.page.metaDescription,
        provider: { "@id": ORGANIZATION_ID },
        url,
        serviceType:
          service.id === "development"
            ? "Web, App and Software Development Agency Services"
            : service.id === "digital-marketing"
              ? "Digital Marketing Agency Services"
              : service.id === "ai"
                ? "Artificial Intelligence Development Services"
                : service.id === "design"
                  ? "Graphic, Brand and UI/UX Design Services"
                  : service.name,
        areaServed:
          service.id === "development" ||
          service.id === "digital-marketing" ||
          service.id === "ai" ||
          service.id === "design"
            ? { "@type": "Place", name: "Worldwide" }
            : undefined,
        ...offerCatalog,
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
