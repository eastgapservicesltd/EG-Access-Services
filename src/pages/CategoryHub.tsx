import { Phone } from "lucide-react";
import { CtaBanner } from "../components/sections/CtaBanner";
import { FaqSection } from "../components/sections/FaqSection";
import { HowItWorks } from "../components/sections/HowItWorks";
import { PageHero } from "../components/sections/PageHero";
import { ServiceTiles } from "../components/sections/ServiceTiles";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { JsonLd } from "../components/ui/JsonLd";
import { Seo } from "../components/ui/Seo";
import { breadcrumbSchema } from "../lib/schema";
import { byCategory, categories, type Category } from "../data/services";
import { img, site } from "../data/site";

const copy: Record<Category, { heading: string; signs: string[]; seo: string }> = {
  locksmith: {
    heading: "Signs it's time to call a locksmith",
    signs: [
      "You're locked out, or a key is stuck or broken in the lock",
      "You've moved in and don't know who else has keys",
      "Keys are lost, stolen or not returned by an ex-employee or tenant",
      "Locks are stiff, loose or don't latch properly",
      "You've had a break-in or attempted break-in",
      "You want keyless entry or one key for every door",
    ],
    seo: "Locksmith in the GTA: emergency lockouts, rekeying, lock changes and smart lock installation.",
  },
  "garage-doors": {
    heading: "Signs your garage door needs attention",
    signs: [
      "A loud bang, then the door is too heavy to lift",
      "The door is crooked, shaking or off its track",
      "The opener hums but the door doesn't move",
      "The door reverses before reaching the floor",
      "Grinding, squealing or scraping noises",
      "Visible rust, frayed cables or dented panels",
    ],
    seo: "Garage door repair and installation in the GTA: broken springs, openers, cables, off-track doors, new insulated doors and yearly tune-ups.",
  },
};

export default function CategoryHub({ category }: { category: Category }) {
  const cat = categories[category];
  const items = byCategory(category);
  const c = copy[category];
  const faqs = items.flatMap((s) => s.faqs.slice(0, 1));

  return (
    <>
      <Seo title={`${cat.title} in the GTA`} description={c.seo} path={cat.path} image={img(cat.image, 1200)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: cat.title }])} />
      <PageHero
        title={cat.title}
        lead={cat.summary}
        image={cat.image}
        crumbs={[{ label: "Home", to: "/" }, { label: cat.title }]}
      >
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 font-semibold text-navy-900 tabular-nums hover:bg-teal-400"
        >
          <Phone aria-hidden className="size-4" />
          Call {site.phone}
        </a>
        <Button to="/contact" variant="outline-light">
          Book an appointment
        </Button>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            title={`Our ${cat.title.toLowerCase()}`}
            lead="Choose a service to see what's included, how we work and common questions."
          />
          <div className="mt-12">
            <ServiceTiles items={items} />
          </div>
        </Container>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            title={c.heading}
            lead="If any of these sound familiar, it's worth a call. Small problems are cheaper to fix early."
          />
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {c.signs.map((s) => (
              <li key={s} className="border-b border-navy-800/10 py-4 leading-relaxed text-ink">
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <HowItWorks />
      <FaqSection items={faqs} title={`${cat.label} questions`} showLink />
      <CtaBanner />
    </>
  );
}
