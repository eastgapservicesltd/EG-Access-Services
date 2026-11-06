import { MapPin } from "lucide-react";
import { areas } from "../../data/areas";
import { site } from "../../data/site";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

// Area list beside a map of the service region.
export function AreasList({ showLink = true }: { showLink?: boolean }) {
  const q = encodeURIComponent(`${site.address.city}, ${site.address.region}`);
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            title="Where we work"
            lead="Our technicians are based around the Greater Toronto Area, which keeps emergency arrival times short."
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {areas.map((a) => (
              <div key={a.region}>
                <h3 className="flex items-center gap-2 text-lg font-bold text-navy-800">
                  <MapPin aria-hidden className="size-5 text-teal-600" />
                  {a.region}
                </h3>
                <ul className="mt-3 space-y-1.5 pl-7 text-slate">
                  {a.places.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {showLink && (
            <Button to="/service-areas" variant="outline-dark" className="mt-10">
              View service areas
            </Button>
          )}
        </div>
        <iframe
          title={`Map of ${site.address.city} and the surrounding service area`}
          src={`https://www.google.com/maps?q=${q}&z=9&output=embed`}
          className="min-h-[24rem] w-full rounded-2xl border-0 bg-mist"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Container>
    </section>
  );
}
