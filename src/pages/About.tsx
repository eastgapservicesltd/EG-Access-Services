import { CtaBanner } from "../components/sections/CtaBanner";
import { PageHero } from "../components/sections/PageHero";
import { Testimonials } from "../components/sections/Testimonials";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Seo } from "../components/ui/Seo";
import { site } from "../data/site";

const values = [
  { title: "Honest pricing", text: "Ask us for a quote. If we find something else, we stop and ask." },
  { title: "Show up", text: "We give real arrival times and text you when we're on the way." },
  { title: "Fix it once", text: "Experienced technicians mean fewer return visits." },
  { title: "Leave it better", text: "We test the work with you and clean up before we leave." },
];

const credentials = [
  "Experienced technicians",
  "Uniformed technicians with company ID",
  "Ongoing training on locks, openers and springs",
  "Locksmith and garage door work from one company",
];

export default function About() {
  return (
    <>
      <Seo
        title="About us"
        description={`${site.name} is a GTA locksmith and garage door company built on honest prices, real arrival times and work done right the first time.`}
        path="/about"
      />
      <PageHero
        title="Excellence with every service"
        lead={`${site.name} started with one van and a simple promise: show up when we say, charge what we quote, and fix it properly. Years later, that's still how we work.`}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            title="One team for locks and garage doors"
            lead="Most homes and businesses rely on two kinds of entry: the front door and the garage door. We cover both, so you have one number to call and one company accountable for the result."
          />
          <div className="space-y-5 text-lg leading-relaxed text-slate">
            <p>
              Our locksmiths handle lockouts, rekeys, lock changes and smart lock installs. Our garage door
              technicians replace springs, repair openers and install new doors across the GTA.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy-800 py-20 text-white sm:py-24">
        <Container>
          <SectionHeading tone="dark" title="What we hold ourselves to" />
          <dl className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="border-t border-teal-500 pt-5">
                <dt className="font-wide text-xl font-bold">{v.title}</dt>
                <dd className="mt-3 leading-relaxed text-navy-200">{v.text}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <WhyChooseUs />

      <section className="bg-mist py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading title="What you can count on" />
          <ul className="grid gap-x-8 sm:grid-cols-2">
            {credentials.map((c) => (
              <li key={c} className="border-b border-navy-800/10 py-4 leading-relaxed text-ink">
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Testimonials />
      <div className="pt-20 sm:pt-24">
        <CtaBanner />
      </div>
    </>
  );
}
