import type { Metadata } from "next";
import { ServicesHub } from "@/components/services/ServicesHub";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Services | Design, Development, AI, Marketing & Shopify",
  description:
    "Buildaze services: design, development, artificial intelligence, digital marketing and Shopify — clear scope and practical next steps.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Buildaze",
    description:
      "Five categories. Clear scope. Design, Development, Artificial Intelligence, Digital Marketing and Shopify.",
    url: `${site.url}/services`,
    siteName: site.name,
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesHub />;
}
