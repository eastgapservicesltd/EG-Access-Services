import { Star } from "lucide-react";
import { site } from "../../data/site";
import { testimonials } from "../../data/testimonials";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-mist py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading title="What customers say" />
          <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4">
            <span className="font-wide text-4xl font-extrabold text-navy-800 tabular-nums">{site.rating}</span>
            <div>
              <p className="font-semibold text-navy-800">Excellent</p>
              <div className="flex text-teal-500" role="img" aria-label={`${site.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} aria-hidden className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate">Based on {site.reviewCount} Google reviews</p>
            </div>
          </div>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.name} className="flex flex-col rounded-2xl bg-white p-7">
              <div className="flex text-teal-500" role="img" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} aria-hidden className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">“{t.text}”</blockquote>
              <p className="mt-6 text-sm text-slate">
                <span className="font-semibold text-navy-800">{t.name}</span>, {t.place}. {t.service}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
