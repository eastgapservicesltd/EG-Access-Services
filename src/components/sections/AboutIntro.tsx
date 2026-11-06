import { Check } from "lucide-react";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { BookingCard } from "./BookingCard";

const points = [
  "Lockouts and lock changes",
  "Rekeys and smart locks",
  "Broken spring replacement",
  "Opener repair and installs",
  "New garage doors",
];

// About blurb with the booking card beside it, so visitors can see how to reach us without leaving the home page.
export function AboutIntro() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-[1fr_30rem]">
        <div className="lg:pt-4">
          <SectionHeading
            title="One call for every lock and garage door"
            lead={`${site.name} is a GTA team of locksmiths and garage door technicians. For years we've helped homeowners, landlords and businesses get back inside, stay secure and keep their doors running.`}
          />
          <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-xl bg-mist px-4 py-3 font-medium text-navy-800">
                <Check aria-hidden className="size-4 shrink-0 text-teal-600" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>
          <Button to="/about" variant="outline-dark" className="mt-8">
            More about us
          </Button>
        </div>
        <BookingCard />
      </Container>
    </section>
  );
}
