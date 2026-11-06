import { Phone } from "lucide-react";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { RingMark } from "../ui/RingMark";

export function CtaBanner({
  title = "Locked out or stuck with a broken door?",
  text = `Call now and a technician can usually be with you within ${site.responseTime}.`,
}: { title?: string; text?: string }) {
  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-teal-700 px-6 py-14 text-white sm:px-12">
        <RingMark tone="dark" className="pointer-events-none absolute -top-24 -right-24 size-80 opacity-20" />
        <Container className="relative flex flex-col items-start justify-between gap-8 px-0! lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
            <p className="mt-3 text-lg text-white/90">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy-800 tabular-nums hover:bg-mist"
            >
              <Phone aria-hidden className="size-4" />
              {site.phone}
            </a>
            <Button to="/contact" variant="outline-light">
              Book an appointment
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
