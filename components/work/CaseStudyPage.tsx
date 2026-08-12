import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { CaseHero } from "@/components/work/CaseHero";
import { CaseMeta } from "@/components/work/CaseMeta";
import { CaseNarrative } from "@/components/work/CaseNarrative";
import { CaseNext } from "@/components/work/CaseNext";
import type { CaseStudy } from "@/lib/data/work";
import { getNextCaseStudy } from "@/lib/data/work";

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const next = getNextCaseStudy(study.id);
  const defaultType =
    study.page.relatedServiceIds[0] === "ecommerce"
      ? "Ecommerce"
      : study.page.relatedServiceIds[0] === "shopify"
        ? "Shopify Growth Agency"
        : study.page.relatedServiceIds[0] === "ai"
          ? "AI Development"
          : study.page.relatedServiceIds[0] === "saas"
            ? "SaaS Development"
            : study.page.relatedServiceIds[0] === "web"
              ? "Web Development"
              : "";

  return (
    <>
      <Navbar />
      <main id="main">
        <CaseHero study={study} />
        <CaseNarrative study={study} />
        <CaseMeta study={study} />
        <CaseNext next={next} />
        <ContactCTA defaultProjectType={defaultType} sectionIndex="06" />
      </main>
      <Footer />
    </>
  );
}
