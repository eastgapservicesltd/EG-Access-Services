import { CtaBanner } from "../components/sections/CtaBanner";
import { PageHero } from "../components/sections/PageHero";
import { Accordion } from "../components/ui/Accordion";
import { Container } from "../components/ui/Container";
import { Seo } from "../components/ui/Seo";
import { garageFaqs, generalFaqs, locksmithFaqs } from "../data/faqs";

const groups = [
  { id: "general", title: "General", items: generalFaqs },
  { id: "locksmith", title: "Locksmith", items: locksmithFaqs },
  { id: "garage-doors", title: "Garage doors", items: garageFaqs },
];

export default function Faq() {
  return (
    <>
      <Seo
        title="Frequently asked questions"
        description="Answers about quotes, service areas, lockouts, rekeying and garage door repairs."
        path="/faq"
      />
      <PageHero
        title="Frequently asked questions"
        lead="Quick answers about how we work."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[14rem_1fr]">
        <nav aria-label="FAQ topics" className="lg:sticky lg:top-32 lg:self-start">
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="block rounded-full bg-mist px-4 py-2 font-medium text-navy-800 hover:bg-teal-700 hover:text-white lg:rounded-lg lg:bg-transparent"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-16">
          {groups.map((g) => (
            <section key={g.id} id={g.id}>
              <h2 className="mb-4 text-2xl font-bold text-navy-800 sm:text-3xl">{g.title}</h2>
              <Accordion items={g.items} />
            </section>
          ))}
        </div>
      </Container>
      <CtaBanner title="Still have a question?" text="Give us a call. You'll talk to someone who works on doors and locks every day." />
    </>
  );
}
