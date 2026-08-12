import type { Service } from "@/lib/data/services";

/** Canonical public path for a service (supports top-level specialist URLs). */
export function getServicePath(service: Pick<Service, "slug" | "path">): string {
  return service.path ?? `/services/${service.slug}`;
}

/** Absolute URL for a service. */
export function getServiceUrl(
  service: Pick<Service, "slug" | "path">,
  siteUrl: string,
): string {
  return `${siteUrl}${getServicePath(service)}`;
}

/** Slugs that are served under /services/[slug] (excludes custom-path services). */
export function getRoutableServiceSlugs(
  services: Array<Pick<Service, "slug" | "path">>,
): string[] {
  return services.filter((s) => !s.path).map((s) => s.slug);
}
