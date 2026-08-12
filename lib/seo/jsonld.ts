import { site } from "@/lib/data/site";

/** Stable Organization @id — do not duplicate Organization entities across pages. */
export const ORGANIZATION_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

/** Escape JSON for safe embedding in <script type="application/ld+json">. */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function organizationNode() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/icon.svg`,
    },
    sameAs: site.socials.map((s) => s.href),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
  };
}

export function breadcrumbList(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${site.url}${item.path}`,
    })),
  };
}
