import type { Metadata } from "next";
import { WorkHub } from "@/components/work/WorkHub";
import { site } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Work | SaaS, AI, Web & Ecommerce Case Studies",
  description:
    "Buildaze case studies — real products shipped to production with measured results across SaaS, fintech, healthcare and ecommerce.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Buildaze",
    description: "Real products. Measured results.",
    url: `${site.url}/work`,
    siteName: site.name,
    type: "website",
  },
};

export default function WorkPage() {
  return <WorkHub />;
}
