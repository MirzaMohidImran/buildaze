import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";
import { caseStudies } from "@/lib/data/work";
import { getServicePath } from "@/lib/seo/paths";

/**
 * Content last-modified dates are fixed per URL where known.
 * Avoid stamping `new Date()` on every deploy for unchanged pages.
 */
const SITE_UPDATED = new Date("2026-08-11");
const SHOPIFY_UPDATED = new Date("2026-08-11");
const WORK_UPDATED = new Date("2026-08-11");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/services`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...services.map((service) => ({
      url: `${site.url}${getServicePath(service)}`,
      lastModified:
        service.id === "shopify" ? SHOPIFY_UPDATED : SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority: service.id === "shopify" ? 0.95 : 0.85,
    })),
    {
      url: `${site.url}/work`,
      lastModified: WORK_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...caseStudies.map((study) => ({
      url: `${site.url}/work/${study.slug}`,
      lastModified: WORK_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
