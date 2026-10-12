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
            // microphone=(self) required for the /voice-agent browser demo.
            key: "Permissions-Policy",
            value: "camera=(), microphone=(self), geolocation=(), payment=()",
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
            // Marketing site CSP: self + Next inline bootstrap; GA4 gtag; ElevenLabs voice demo over wss.
            // AudioWorklets are self-hosted under /vendor/elevenlabs (no blob: in script-src).
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https:",
              "font-src 'self' data:",
              "media-src 'self' blob:",
              "worker-src 'self' blob:",
              "connect-src 'self' https: wss://api.elevenlabs.io wss://*.elevenlabs.io https://www.google-analytics.com https://analytics.google.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
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
