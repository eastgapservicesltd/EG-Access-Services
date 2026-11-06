import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { byCategory, categories, servicePath, type Category } from "../../data/services";
import { img } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

// A category's services as ruled rows beside a photo. Used on the home page.
export function ServiceList({ category, flip = false }: { category: Category; flip?: boolean }) {
  const cat = categories[category];
  return (
    <section className={`py-20 sm:py-24 ${flip ? "bg-mist" : "bg-white"}`}>
      <Container className="grid items-start gap-12 lg:grid-cols-12">
        <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
          <SectionHeading title={cat.title} lead={cat.summary} />
          <div className="mt-8 aspect-[4/3] overflow-hidden rounded-2xl bg-navy-800">
            <img
              src={img(cat.image, 900)}
              alt={cat.imageAlt}
              loading="lazy"
              className="size-full object-cover opacity-90"
            />
          </div>
          <Button to={cat.path} variant="outline-dark" className="mt-8">
            See all {cat.title.toLowerCase()}
          </Button>
        </div>
        <ul className={`border-t border-navy-800/10 lg:col-span-6 ${flip ? "lg:order-1" : "lg:col-start-7"}`}>
          {byCategory(category).map((s) => (
            <li key={s.slug} className="border-b border-navy-800/10">
              <Link to={servicePath(s)} className="group flex gap-5 py-6">
                <s.icon aria-hidden className="mt-1 size-6 shrink-0 text-teal-600" />
                <span className="flex-1">
                  <span className="font-wide block text-xl font-bold text-navy-800 group-hover:text-teal-700">
                    {s.title}
                  </span>
                  <span className="mt-1.5 block leading-relaxed text-slate">{s.short}</span>
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="mt-1 size-5 shrink-0 text-navy-300 transition-colors group-hover:text-teal-600"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
