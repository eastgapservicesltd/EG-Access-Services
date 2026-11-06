import { Check, Phone } from "lucide-react";
import { Link, useParams } from "react-router";
import { CtaBanner } from "../components/sections/CtaBanner";
import { PageHero } from "../components/sections/PageHero";
import { ServiceTiles } from "../components/sections/ServiceTiles";
import { Accordion } from "../components/ui/Accordion";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Seo } from "../components/ui/Seo";
import { byCategory, categories, findService, servicePath, type Category } from "../data/services";
import { site } from "../data/site";
import NotFound from "./NotFound";

export default function ServiceDetail({ category }: { category: Category }) {
  const { slug } = useParams();
  const service = findService(category, slug);
  if (!service) return <NotFound />;

  const cat = categories[category];
  const siblings = byCategory(category).filter((s) => s.slug !== service.slug);

  return (
    <>
      <Seo title={service.title} description={service.short} path={servicePath(service)} />
      <PageHero
        title={service.title}
        lead={service.short}
        image={service.image}
        crumbs={[{ label: "Home", to: "/" }, { label: cat.title, to: cat.path }, { label: service.title }]}
      >
        <a
          href={site.phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 font-semibold text-navy-900 tabular-nums hover:bg-teal-400"
        >
          <Phone aria-hidden className="size-4" />
          Call {site.phone}
        </a>
        <Button to={`/contact?service=${service.slug}`} variant="outline-light">
          Book an appointment
        </Button>
      </PageHero>

      <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_20rem]">
        <article className="min-w-0">
          <div className="max-w-[68ch] space-y-5 text-lg leading-relaxed text-ink">
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h2 className="mt-14 text-2xl font-bold text-navy-800 sm:text-3xl">Problems we fix</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.problems.map((p) => (
              <li key={p} className="flex gap-3 rounded-xl bg-mist p-4">
                <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-teal-600" strokeWidth={2.5} />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 text-2xl font-bold text-navy-800 sm:text-3xl">How the job goes</h2>
          <ol className="mt-6 grid gap-6 sm:grid-cols-3">
            {service.process.map((step, i) => (
              <li key={step.title} className="border-t-2 border-teal-500 pt-4">
                <span className="text-sm font-bold text-teal-700 tabular-nums">Step {i + 1}</span>
                <h3 className="mt-1 text-lg font-bold text-navy-800">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-slate">{step.text}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 mb-4 text-2xl font-bold text-navy-800 sm:text-3xl">Questions about {service.title.toLowerCase()}</h2>
          <Accordion items={service.faqs} />
        </article>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-2xl bg-navy-800 p-6 text-white">
            <p className="text-lg font-bold">Need this today?</p>
            <p className="mt-2 text-navy-200">
              Call us for a quote. We usually arrive within {site.responseTime}.
            </p>
            <a
              href={site.phoneHref}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-teal-500 py-3 font-semibold text-navy-900 tabular-nums hover:bg-teal-400"
            >
              <Phone aria-hidden className="size-4" />
              {site.phone}
            </a>
          </div>
          <nav aria-label={`Other ${cat.title.toLowerCase()}`} className="rounded-2xl border border-navy-800/10 p-6">
            <p className="font-bold text-navy-800">Other {cat.title.toLowerCase()}</p>
            <ul className="mt-3">
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link to={servicePath(s)} className="flex items-center gap-3 py-2 text-slate hover:text-teal-700">
                    <s.icon aria-hidden className="size-4 text-teal-600" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </Container>

      <section className="bg-mist py-20">
        <Container>
          <h2 className="text-3xl font-bold text-navy-800">Related services</h2>
          <div className="mt-10">
            <ServiceTiles items={siblings.slice(0, 3)} />
          </div>
        </Container>
      </section>
      <div className="pt-20">
        <CtaBanner />
      </div>
    </>
  );
}
