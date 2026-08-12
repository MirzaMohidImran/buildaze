import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/work/CaseStudyPage";
import { site } from "@/lib/data/site";
import {
  caseStudySlugs,
  getCaseStudyBySlug,
} from "@/lib/data/work";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  const url = `${site.url}/work/${study.slug}`;
  return {
    title: study.page.metaTitle,
    description: study.page.metaDescription,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: study.page.metaTitle,
      description: study.page.metaDescription,
      url,
      siteName: site.name,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.page.metaTitle,
      description: study.page.metaDescription,
    },
  };
}

export default async function CaseStudyRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.name,
    description: study.page.metaDescription,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    about: {
      "@type": "SoftwareApplication",
      name: study.name,
      applicationCategory: study.industry,
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${site.url}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.name,
        item: `${site.url}/work/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <CaseStudyPage study={study} />
    </>
  );
}
