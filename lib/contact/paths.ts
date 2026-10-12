/**
 * Canonical enquiry destination. Prefer this over page-local `#contact` anchors
 * so service and About CTAs land on the dedicated Contact page.
 */
export function buildContactHref(options?: {
  service?: string;
  capability?: string;
  problem?: string;
}): string {
  const params = new URLSearchParams();
  if (options?.service?.trim()) {
    params.set("service", options.service.trim());
  }
  if (options?.capability?.trim()) {
    params.set("capability", options.capability.trim().slice(0, 80));
  }
  if (options?.problem?.trim()) {
    params.set("problem", options.problem.trim().slice(0, 200));
  }
  const query = params.toString();
  return query ? `/contact?${query}` : "/contact";
}

/** Map a service id (or slug-like id) to a `?service=` value for /contact. */
export function contactServiceParamForId(id: string): string {
  if (!id) return "";
  if (id === "shopify" || id.startsWith("shopify")) return "shopify";
  if (id === "web") return "web";
  if (id === "saas") return "saas";
  if (id === "ecommerce") return "ecommerce";
  if (id === "ai" || id.startsWith("ai-")) return "ai";
  if (id === "design" || id.startsWith("design-")) return "design";
  if (id === "digital-marketing" || id.startsWith("dm-")) {
    return "digital-marketing";
  }
  if (id === "development") return "development";
  return id;
}
