import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";

/**
 * Crawler policy:
 * - Allow Googlebot / Bingbot / OAI-SearchBot for public pages (ChatGPT Search).
 * - GPTBot (training) is not explicitly blocked or allowed here beyond the global `*` rule.
 *   Changing GPTBot training access is a business decision — document before altering.
 * - Do not put noindex rules in robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
