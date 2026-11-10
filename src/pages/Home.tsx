import { AboutIntro } from "../components/sections/AboutIntro";
import { AreasList } from "../components/sections/AreasList";
import { BrandStrip } from "../components/sections/BrandStrip";
import { CtaBanner } from "../components/sections/CtaBanner";
import { FaqSection } from "../components/sections/FaqSection";
import { HomeHero } from "../components/sections/HomeHero";
import { HowItWorks } from "../components/sections/HowItWorks";
import { ServiceList } from "../components/sections/ServiceList";
import { Testimonials } from "../components/sections/Testimonials";
import { TrustStrip } from "../components/sections/TrustStrip";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Seo } from "../components/ui/Seo";
import { generalFaqs } from "../data/faqs";

export default function Home() {
  return (
    <>
      <Seo
        title="Locksmith & Garage Door Repair in Oakville & the GTA | EG Access"
        fullTitle
        description="Locksmith and garage door repair in Oakville and across the GTA. Lockouts, rekeys, smart locks, broken springs, openers and new doors. Call, text or book online."
      />
      <HomeHero />
      <TrustStrip />
      <AboutIntro />
      <ServiceList category="locksmith" flip />
      <ServiceList category="garage-doors" />
      <BrandStrip />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <AreasList />
      <FaqSection items={generalFaqs} showLink />
      <CtaBanner />
    </>
  );
}
