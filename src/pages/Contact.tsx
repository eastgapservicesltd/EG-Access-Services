import { Mail, MapPin, Phone } from "lucide-react";
import { BookingCard } from "../components/sections/BookingCard";
import { PageHero } from "../components/sections/PageHero";
import { Container } from "../components/ui/Container";
import { Seo } from "../components/ui/Seo";
import { site } from "../data/site";

export default function Contact() {
  const { address } = site;
  const mapQuery = encodeURIComponent(`${address.street}, ${address.city}, ${address.region}`);

  const details = [
    { icon: Phone, label: "Call", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Office", value: `${address.street}, ${address.city}, ${address.region}` },
  ];

  return (
    <>
      <Seo
        title="Contact & booking"
        description={`Call or text ${site.phone}, or email ${site.email}, to book locksmith or garage door work.`}
        path="/contact"
      />
      <PageHero
        title="Book an appointment"
        lead="Email, call or text us with a brief description of the problem and your address (street, apt/unit number and city). For lockouts and doors that won't close, calling is fastest."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section aria-label="Contact details" className="relative z-10 -mt-8">
        <Container>
          <ul className="grid gap-px overflow-hidden rounded-2xl bg-navy-800/10 shadow-xl shadow-navy-900/15 sm:grid-cols-2 xl:grid-cols-3">
            {details.map((d) => (
              <li key={d.label} className="flex gap-4 bg-white p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal-500 text-navy-900">
                  <d.icon aria-hidden className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-slate">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="font-semibold break-words text-navy-800 hover:text-teal-700">
                      {d.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-navy-800">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2">
          <BookingCard />
          <iframe
            title="Map showing the EG Access office"
            src={`https://www.google.com/maps?q=${mapQuery}&z=13&output=embed`}
            className="min-h-[28rem] w-full rounded-3xl border-0 bg-mist"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Container>
      </section>
    </>
  );
}
