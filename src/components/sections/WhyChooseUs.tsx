import { Check } from "lucide-react";
import { img, site } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const reasons = [
  "Locksmith and garage door work under one roof, so one call covers it",
  "Experienced technicians who work on locks and doors every day",
  "Clear quotes with no surprise fees",
  "Non-destructive entry first, and drilling only with your OK",
  "Uniformed technicians with company ID",
  "We clean up and test everything before we leave",
];

const stats = [
  { value: site.jobsCompleted, label: "jobs completed" },
  { value: site.rating, label: `average from ${site.reviewCount} reviews` },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <img
            src={img("1656345261572-a66761e5713d", 1000)}
            alt="A key being turned in a car door lock"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
          />
          <dl className="absolute inset-x-4 -bottom-8 grid grid-cols-2 rounded-2xl bg-navy-800 p-5 text-white shadow-xl shadow-navy-900/20 sm:inset-x-8">
            {stats.map((s) => (
              <div key={s.label} className="px-2 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-wide text-2xl font-extrabold tabular-nums sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-navy-200 sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="pt-8 lg:pt-0">
          <SectionHeading
            title="Why GTA homes and businesses call us"
            lead="We built EG Access around the things people told us they hated about tradespeople: vague prices, no-shows and second visits."
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal-500 text-white">
                  <Check aria-hidden className="size-3.5" strokeWidth={3} />
                </span>
                <span className="leading-relaxed text-ink">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
