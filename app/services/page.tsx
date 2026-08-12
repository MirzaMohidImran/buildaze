import type { Metadata } from "next";
import { ServicesHub } from "@/components/services/ServicesHub";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Services | AI, SaaS, Web & Ecommerce Development",
  description:
    "Buildaze services: AI development, SaaS platforms, custom web applications and ecommerce experiences — fixed-scope sprints, weekly demos, 100% code ownership.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Buildaze",
    description:
      "Four disciplines. One production standard. AI, SaaS, Web and Ecommerce development.",
    url: `${site.url}/services`,
    siteName: site.name,
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesHub />;
}
