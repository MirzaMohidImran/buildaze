import { AiNative } from "@/components/sections/AiNative";
import { Comparison } from "@/components/sections/Comparison";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Manifesto } from "@/components/sections/Manifesto";
import { Navbar } from "@/components/sections/Navbar";
import { Outcomes } from "@/components/sections/Outcomes";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Results } from "@/components/sections/Results";
import { SecurityOwnership } from "@/components/sections/SecurityOwnership";
import { ServiceExperience } from "@/components/sections/ServiceExperience";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { TechEcosystem } from "@/components/sections/TechEcosystem";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { WhyBuildaze } from "@/components/sections/WhyBuildaze";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Manifesto />
        <ServiceExperience />
        <Outcomes />
        <FeaturedWork />
        <Results />
        <WhyBuildaze />
        <Comparison />
        <ProcessTimeline />
        <AiNative />
        <SecurityOwnership />
        <TechEcosystem />
        <Industries />
        <TeamShowcase />
        <Testimonials />
        <FaqSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
