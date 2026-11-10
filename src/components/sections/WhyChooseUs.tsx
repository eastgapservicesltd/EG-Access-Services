import { Check } from "lucide-react";
import { img } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const reasons = [
  "Locksmith and garage door work under one roof, so one call covers it",
  "Experienced technicians who work on locks and doors daily",
  "Clear quotes with no surprise fees",
  "Non-destructive entry first, and drilling only with your OK",
  "We clean up and test everything before we leave",
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <img
            src={img("1656345261572-a66761e5713d", 1000)}
            alt="A key being turned in a car door lock"
            loading="lazy"
            className="aspect-4/5 w-full rounded-2xl object-cover sm:aspect-5/4 lg:aspect-4/5"
          />
        </div>
        <div>
          <SectionHeading
            title="Why GTA homes and businesses call us"
            lead="We built EG Access around what customers value most: clear prices, technicians who arrive when they say they will, and work done right the first time."
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
