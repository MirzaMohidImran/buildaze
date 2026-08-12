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
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            // Marketing site CSP: allow self + Next inline bootstrap; tighten further if you add analytics IDs.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "connect-src 'self' https:",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' mailto:",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
