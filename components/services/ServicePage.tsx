import { ContactInvite } from "@/components/contact/ContactInvite";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { contactServiceParamForId } from "@/lib/contact/paths";
import { ServiceAudience } from "@/components/services/ServiceAudience";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceClientProof } from "@/components/services/ServiceClientProof";
import { ServiceDeliverables } from "@/components/services/ServiceDeliverables";
import { ServiceDeliveryProcess } from "@/components/services/ServiceDeliveryProcess";
import { ServiceEcosystem } from "@/components/services/ServiceEcosystem";
import { ServiceFaq } from "@/components/services/ServiceFaq";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceProblems } from "@/components/services/ServiceProblems";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceRelated } from "@/components/services/ServiceRelated";
import { ServiceRelatedWork } from "@/components/services/ServiceRelatedWork";
import { ServiceSelectedWorkSection } from "@/components/services/ServiceSelectedWork";
import { ServiceTrust } from "@/components/services/ServiceTrust";
import { ServiceWhy } from "@/components/services/ServiceWhy";
import type { Service } from "@/lib/data/services";
import { getServiceById } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";
import Link from "next/link";

function padIndex(n: number) {
  return String(n).padStart(2, "0");
}

export function ServicePage({ service }: { service: Service }) {
  /**
   * Specialist layout (Shopify + Development + Digital Marketing + AI + Design):
   * skip generic overview / deliverables / process / related work in favour of
   * problems → work → capabilities → delivery process → why.
   * Shopify keeps its dedicated contact. Voice Agents stay on `/voice-agent`.
   */
  const isDevelopment = service.id === "development";
  const isMarketingHub = service.id === "digital-marketing";
  const isMarketingLeaf = service.id.startsWith("dm-");
  const isMarketingFamily = isMarketingHub || isMarketingLeaf;
  const isAiHub = service.id === "ai";
  const isAiLeaf =
    service.id.startsWith("ai-") && service.id !== "ai-voice";
  const isAiFamily = isAiHub || isAiLeaf;
  const isDesignHub = service.id === "design";
  const isDesignLeaf = service.id.startsWith("design-");
  const isDesignFamily = isDesignHub || isDesignLeaf;
  const skipGenericCore =
    service.id === "shopify" ||
    isDevelopment ||
    isMarketingFamily ||
    isAiFamily ||
    isDesignFamily;
  const workSectionId =
    service.id === "shopify"
      ? "shopify-work"
      : isDevelopment
        ? "development-work"
        : isMarketingFamily
          ? "marketing-work"
          : isAiFamily
            ? "ai-work"
            : isDesignFamily
              ? "design-work"
              : "selected-work";
  const problemsSectionId =
    service.id === "shopify"
      ? "shopify-starting-points"
      : isDevelopment
        ? "development-starting-points"
        : isMarketingFamily
          ? "marketing-starting-points"
          : isAiFamily
            ? "ai-starting-points"
            : isDesignFamily
              ? "design-starting-points"
              : "starting-points";
  const capabilitiesSectionId =
    service.id === "shopify"
      ? "shopify-services"
      : isDevelopment
        ? "development-services"
        : isMarketingFamily
          ? "marketing-services"
          : isAiFamily
            ? "ai-services"
            : isDesignFamily
              ? "design-services"
              : "service-capabilities";
  const capabilitiesSectionLabel = isDevelopment
    ? "Development services"
    : isMarketingFamily
      ? "Marketing services"
      : isAiFamily
        ? "AI services"
        : isDesignFamily
          ? "Design services"
          : service.id === "shopify"
            ? "Shopify services"
            : "Services";

  let section = 1;
  const take = () => padIndex(section++);

  const problemsIndex = service.page.problems ? take() : "";
  const selectedWorkIndex = service.page.selectedWork ? take() : "";
  const capabilitiesIndex = service.page.capabilities ? take() : "";
  const deliveryProcessIndex = service.page.deliveryProcess ? take() : "";
  const whyIndex = service.page.why ? take() : "";
  const clientProofIndex = service.page.clientProof ? take() : "";
  const trustIndex = service.page.trust ? take() : "";
  const ecosystemIndex = service.page.ecosystem ? take() : "";
  const audienceIndex = service.page.audience ? take() : "";

  const overviewIndex = skipGenericCore ? "" : take();
  const deliverablesIndex = skipGenericCore ? "" : take();
  const processIndex = skipGenericCore ? "" : take();
  const relatedWorkIndex = skipGenericCore ? "" : take();
  const faqIndex = take();
  /** Specialist hubs/leaves keep related paths where configured. */
  const relatedIndex =
    skipGenericCore &&
    !isDevelopment &&
    !isMarketingFamily &&
    !isAiFamily &&
    !isDesignFamily
      ? ""
      : take();
  const contactIndex = take();

  return (
    <>
      <Navbar showShopifyPartnerBadge={service.id === "shopify"} />
      <main id="main">
        <ServiceHero service={service} />
        {service.id === "ecommerce" && (
          <section
            aria-label="Shopify specialist path"
            className="surface-page relative border-b border-line py-10 md:py-12"
          >
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
              <p className="max-w-[720px] text-[15.5px] leading-relaxed text-mist">
                Looking specifically for{" "}
                <Link
                  href={getServicePath(getServiceById("shopify")!)}
                  className="text-accent-soft underline-offset-2 hover:underline"
                  data-analytics="ecommerce-to-shopify"
                >
                  Shopify design and development
                </Link>
                ? Explore Buildaze&apos;s{" "}
                <Link
                  href={getServicePath(getServiceById("shopify")!)}
                  className="text-white underline-offset-2 hover:underline"
                  data-analytics="ecommerce-to-shopify-agency"
                >
                  Shopify service hub
                </Link>{" "}
                for store design, migrations, apps, integrations, headless/B2B,
                and ongoing support.
              </p>
            </div>
          </section>
        )}

        {skipGenericCore ? (
          <>
            {service.page.problems && (
              <ServiceProblems
                problems={service.page.problems}
                sectionIndex={problemsIndex}
                sectionId={problemsSectionId}
              />
            )}
            {service.page.selectedWork && (
              <ServiceSelectedWorkSection
                selectedWork={service.page.selectedWork}
                sectionIndex={selectedWorkIndex}
                sectionId={workSectionId}
              />
            )}
            {service.page.capabilities && (
              <ServiceCapabilities
                capabilities={service.page.capabilities}
                sectionIndex={capabilitiesIndex}
                sectionId={capabilitiesSectionId}
                sectionLabel={capabilitiesSectionLabel}
              />
            )}
            {service.page.deliveryProcess && (
              <ServiceDeliveryProcess
                deliveryProcess={service.page.deliveryProcess}
                sectionIndex={deliveryProcessIndex}
              />
            )}
            {service.page.why && (
              <ServiceWhy why={service.page.why} sectionIndex={whyIndex} />
            )}
            {service.page.clientProof && (
              <ServiceClientProof
                clientProof={service.page.clientProof}
                sectionIndex={clientProofIndex}
              />
            )}
            {service.page.trust && (
              <ServiceTrust trust={service.page.trust} sectionIndex={trustIndex} />
            )}
            {service.page.ecosystem && (
              <ServiceEcosystem
                ecosystem={service.page.ecosystem}
                sectionIndex={ecosystemIndex}
              />
            )}
            {service.page.audience && (
              <ServiceAudience
                audience={service.page.audience}
                sectionIndex={audienceIndex}
              />
            )}
          </>
        ) : (
          <>
            {service.page.trust && (
              <ServiceTrust trust={service.page.trust} sectionIndex={trustIndex} />
            )}
            {service.page.selectedWork && (
              <ServiceSelectedWorkSection
                selectedWork={service.page.selectedWork}
                sectionIndex={selectedWorkIndex}
                sectionId={workSectionId}
              />
            )}
            {service.page.problems && (
              <ServiceProblems
                problems={service.page.problems}
                sectionIndex={problemsIndex}
                sectionId={problemsSectionId}
              />
            )}
            {service.page.capabilities && (
              <ServiceCapabilities
                capabilities={service.page.capabilities}
                sectionIndex={capabilitiesIndex}
                sectionId={capabilitiesSectionId}
                sectionLabel={capabilitiesSectionLabel}
              />
            )}
            {service.page.deliveryProcess && (
              <ServiceDeliveryProcess
                deliveryProcess={service.page.deliveryProcess}
                sectionIndex={deliveryProcessIndex}
              />
            )}
            {service.page.why && (
              <ServiceWhy why={service.page.why} sectionIndex={whyIndex} />
            )}
            {service.page.clientProof && (
              <ServiceClientProof
                clientProof={service.page.clientProof}
                sectionIndex={clientProofIndex}
              />
            )}
            {service.page.ecosystem && (
              <ServiceEcosystem
                ecosystem={service.page.ecosystem}
                sectionIndex={ecosystemIndex}
              />
            )}
            {service.page.audience && (
              <ServiceAudience
                audience={service.page.audience}
                sectionIndex={audienceIndex}
              />
            )}
            <ServiceOverview service={service} sectionIndex={overviewIndex} />
            <ServiceDeliverables
              service={service}
              sectionIndex={deliverablesIndex}
            />
            <ServiceProcess service={service} sectionIndex={processIndex} />
            <ServiceRelatedWork
              service={service}
              sectionIndex={relatedWorkIndex}
            />
          </>
        )}

        <ServiceFaq service={service} sectionIndex={faqIndex} />
        {(!skipGenericCore ||
          isDevelopment ||
          isMarketingFamily ||
          isAiFamily ||
          isDesignFamily) && (
          <ServiceRelated service={service} sectionIndex={relatedIndex} />
        )}
        {service.id === "shopify" ? (
          <ContactInvite
            sectionIndex={contactIndex}
            heading="Tell us about your Shopify store"
            intro="Share what is happening with the store and the outcome you want. You do not need a finished brief to start."
            ctaLabel="Discuss Your Project"
            service="shopify"
            source="shopify-page"
          />
        ) : isDevelopment ? (
          <ContactInvite
            sectionIndex={contactIndex}
            heading="Tell us what you want to build or improve"
            intro="Share who will use the solution, what your current setup cannot do and what needs to change. You do not need a finished technical specification to start."
            ctaLabel="Discuss Your Project"
            service="development"
            source="development-page"
          />
        ) : isMarketingFamily ? (
          <ContactInvite
            sectionIndex={contactIndex}
            heading="Tell us what you want to grow or measure"
            intro="Share your business goal, current channels and what is unclear in the data. You do not need a finished brief to start."
            ctaLabel="Discuss Your Project"
            service="digital-marketing"
            capability={isMarketingLeaf ? service.name : undefined}
            source={
              isMarketingHub ? "digital-marketing-hub" : "digital-marketing-leaf"
            }
          />
        ) : isAiFamily ? (
          <ContactInvite
            sectionIndex={contactIndex}
            heading="Tell us what you want AI to help with"
            intro="Share who will use the solution, the task they need to complete and which systems or documents are involved. Do not send confidential credentials through the form."
            ctaLabel="Discuss Your Project"
            service="ai"
            capability={isAiLeaf ? service.name : undefined}
            source={isAiHub ? "ai-hub" : "ai-leaf"}
          />
        ) : isDesignFamily ? (
          <ContactInvite
            sectionIndex={contactIndex}
            heading="Tell us what you need designed"
            intro="Share the problem, audience, intended channels, required outputs and any existing brand assets. You do not need a finished brief to start."
            ctaLabel="Discuss Your Project"
            service="design"
            capability={isDesignLeaf ? service.name : undefined}
            source={isDesignHub ? "design-hub" : "design-leaf"}
          />
        ) : (
          <ContactInvite
            sectionIndex={contactIndex}
            service={contactServiceParamForId(service.id) || service.name}
            source={`service-${service.id}`}
          />
        )}
      </main>
      <Footer />
    </>
  );
}
