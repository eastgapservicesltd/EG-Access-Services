import { BadgeCheck, ReceiptText, ShieldCheck, Warehouse } from "lucide-react";
import { Container } from "../ui/Container";

const items = [
  {
    icon: ShieldCheck,
    title: "Experienced technicians",
    text: "People who work on locks and doors daily",
  },
  { icon: ReceiptText, title: "Get Quotes", text: "Call or send a request" },
  {
    icon: Warehouse,
    title: "Locks and garage doors",
    text: "One call covers both",
  },
  { icon: BadgeCheck, title: "Serving the GTA", text: "Homes and businesses" },
];

// Sits over the bottom edge of the home hero.
export function TrustStrip() {
  return (
    <section
      aria-label="Why customers trust us"
      className="relative z-10 -mt-16 sm:-mt-20"
    >
      <Container>
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-navy-800/10 shadow-xl shadow-navy-900/15 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <li key={it.title} className="flex items-start gap-4 bg-white p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal-500/12 text-teal-700">
                <it.icon aria-hidden className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-navy-800">{it.title}</p>
                <p className="mt-0.5 text-sm text-slate">{it.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
