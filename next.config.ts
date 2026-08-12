import type { NextConfig } from "next";
import { services } from "./lib/data/services";

const serviceRedirects = services.flatMap((service) => {
  const destination = service.path ?? `/services/${service.slug}`;
  return (service.redirectsFrom ?? []).map((source) => ({
    source,
    destination,
    permanent: true as const,
  }));
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      ...serviceRedirects,
      // Extra safety aliases for the Shopify canonical URL
      {
        source: "/shopify-growth-development-agency",
        destination: "/shopify-growth-agency",
        permanent: true,
      },
      {
        source: "/services/shopify",
        destination: "/shopify-growth-agency",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
