import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceArticlePage } from "@/components/resources/ResourceArticlePage";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getResourceBySlug,
  resourceSlugs,
} from "@/lib/data/resources";
import { site } from "@/lib/data/site";
import { ORGANIZATION_ID, breadcrumbList } from "@/lib/seo/jsonld";
import { DEFAULT_OG_IMAGE, ogImages, twitterImages } from "@/lib/seo/social";

export function generateStaticParams() {
  return resourceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) return {};

  const path = `/resources/${article.slug}`;
  const url = `${site.url}${path}`;
  const title = article.metaTitle.includes("Buildaze")
    ? { absolute: article.metaTitle }
    : article.metaTitle;

  return {
    title,
    description: article.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      siteName: site.name,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: ogImages(DEFAULT_OG_IMAGE, article.metaTitle),
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: twitterImages(DEFAULT_OG_IMAGE),
    },
    robots: { index: true, follow: true },
  };
}

export default async function ResourceArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getResourceBySlug(slug);
  if (!article) notFound();

  const url = `${site.url}/resources/${article.slug}`;
  const pageId = `${url}#webpage`;
  const articleId = `${url}#article`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: article.metaTitle,
        description: article.metaDescription,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": articleId },
        provider: { "@id": ORGANIZATION_ID },
        inLanguage: "en",
      },
      {
        "@type": "Article",
        "@id": articleId,
        headline: article.h1,
        description: article.metaDescription,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        author: {
          "@type": "Organization",
          name: article.authorName,
          url: site.url,
        },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@id": pageId },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      breadcrumbList([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/resources" },
        { name: article.h1, path: `/resources/${article.slug}` },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      <ResourceArticlePage article={article} />
    </>
  );
}
