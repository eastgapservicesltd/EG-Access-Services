import { ArrowRight, KeyRound, Star, Warehouse } from "lucide-react";
import { Link } from "react-router";
import { img, site } from "../../data/site";
import { Container } from "../ui/Container";
import { RingMark } from "../ui/RingMark";

const paths = [
  {
    to: "/locksmith",
    icon: KeyRound,
    title: "Lock or key problem",
    text: "Lockouts, rekeys, new locks, smart locks",
  },
  {
    to: "/garage-doors",
    icon: Warehouse,
    title: "Garage door problem",
    text: "Springs, openers, cables, new doors",
  },
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <img
        src={img("1756341782434-3020b9d17372", 1800)}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-800/85 to-navy-800/30" />
      <RingMark
        animate
        className="pointer-events-none absolute -right-40 -bottom-48 size-[34rem] opacity-90 sm:-right-24 lg:top-1/2 lg:right-[-6rem] lg:bottom-auto lg:size-[44rem] lg:-translate-y-1/2"
      />
      <Container className="relative pt-16 pb-28 sm:pt-24 sm:pb-36 lg:pt-28">
        <div className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-medium text-teal-300">
            <span className="flex size-2">
              <span className="inline-flex size-2 rounded-full bg-teal-400" />
            </span>
            Technicians on call now across the GTA
          </p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Locks and garage doors, fixed when you need them.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
            {site.name} sends experienced technicians to homes and businesses across the GTA. Most calls are
            reached within {site.responseTime}. Call or send a request to get a quote.
          </p>

          <p className="mt-10 text-sm font-semibold text-white">What do you need help with?</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {paths.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-navy-900/60 p-4 backdrop-blur-sm transition-colors hover:border-teal-400 hover:bg-navy-900"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-teal-500/15 text-teal-300">
                  <p.icon aria-hidden className="size-6" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{p.title}</span>
                  <span className="block text-sm text-navy-200">{p.text}</span>
                </span>
                <ArrowRight
                  aria-hidden
                  className="size-5 shrink-0 text-teal-300 transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-200">
            <a href={site.phoneHref} className="font-semibold text-white tabular-nums underline-offset-4 hover:underline">
              Or call {site.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <span className="flex text-teal-400" aria-hidden>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              {site.rating} from {site.reviewCount} reviews
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
