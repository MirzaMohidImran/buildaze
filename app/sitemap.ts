import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { site } from "@/lib/data/site";
import { caseStudies } from "@/lib/data/work";
import { getServicePath } from "@/lib/seo/paths";

/**
 * Content last-modified dates are fixed per URL where known.
 * Avoid stamping `new Date()` on every deploy for unchanged pages.
 */
/** Homepage & hub content last meaningfully updated. */
const SITE_UPDATED = new Date("2026-10-09");
const SHOPIFY_UPDATED = new Date("2026-10-09");
const DEVELOPMENT_UPDATED = new Date("2026-10-12");
const DIGITAL_MARKETING_UPDATED = new Date("2026-10-12");
const AI_UPDATED = new Date("2026-10-12");
const DESIGN_UPDATED = new Date("2026-10-12");
const WORK_UPDATED = new Date("2026-10-12");
const VOICE_UPDATED = new Date("2026-10-12");
const LEGAL_UPDATED = new Date("2026-10-12");
const ABOUT_UPDATED = new Date("2026-10-12");
const CONTACT_UPDATED = new Date("2026-10-12");
const SHOPIFY_LEAVES_UPDATED = new Date("2026-10-12");
const DEVELOPMENT_LEAVES_UPDATED = new Date("2026-10-12");

function isDigitalMarketingService(id: string) {
  return id === "digital-marketing" || id.startsWith("dm-");
}

function isAiService(id: string) {
  return id === "ai" || id.startsWith("ai-");
}

function isDesignService(id: string) {
  return id === "design" || id.startsWith("design-");
}

function isShopifyLeaf(id: string) {
  return id.startsWith("shopify-") && id !== "shopify";
}

function isDevelopmentLeaf(id: string) {
  return id.startsWith("dev-");
}

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
        service.id === "shopify"
          ? SHOPIFY_UPDATED
          : isShopifyLeaf(service.id)
            ? SHOPIFY_LEAVES_UPDATED
            : isDevelopmentLeaf(service.id)
              ? DEVELOPMENT_LEAVES_UPDATED
              : service.id === "development"
                ? DEVELOPMENT_UPDATED
                : isDigitalMarketingService(service.id)
                  ? DIGITAL_MARKETING_UPDATED
                  : isAiService(service.id)
                    ? service.id === "ai-voice"
                      ? VOICE_UPDATED
                      : AI_UPDATED
                    : isDesignService(service.id)
                      ? DESIGN_UPDATED
                      : SITE_UPDATED,
      changeFrequency: "monthly" as const,
      priority:
        service.id === "shopify"
          ? 0.95
          : service.id === "development" ||
              service.id === "digital-marketing" ||
              service.id === "ai" ||
              service.id === "ai-voice" ||
              service.id === "design"
            ? 0.9
            : 0.85,
    })),
    // `/voice-agent` is registered via the `ai-voice` service entry above.
    {
      url: `${site.url}/about`,
      lastModified: ABOUT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${site.url}/contact`,
      lastModified: CONTACT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
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
    {
      url: `${site.url}/privacy-policy`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/terms-of-use`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/cookie-policy`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
