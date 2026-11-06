import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { allPlaces } from "../../data/areas";
import { byCategory, categories, servicePath, type Category } from "../../data/services";
import { formatAddress, site } from "../../data/site";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-28 text-navy-200 sm:pb-10">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs leading-relaxed">
              Experienced locksmith and garage door technicians serving the Greater Toronto Area.
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <a href={site.phoneHref} className="flex items-center gap-3 font-semibold text-white tabular-nums hover:text-teal-300">
                  <Phone aria-hidden className="size-4 text-teal-400" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
                  <Mail aria-hidden className="size-4 text-teal-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-teal-400" />
                <span>
                  {formatAddress()}
                </span>
              </li>
            </ul>
          </div>

          {(Object.keys(categories) as Category[]).map((c) => (
            <div key={c}>
              <h2 className="font-sans text-base font-semibold text-white">
                <Link to={categories[c].path} className="hover:text-teal-300">
                  {categories[c].title}
                </Link>
              </h2>
              <ul className="mt-4 space-y-2.5">
                {byCategory(c).map((s) => (
                  <li key={s.slug}>
                    <Link to={servicePath(s)} className="hover:text-white">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="font-sans text-base font-semibold text-white">Company</h2>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/about" className="hover:text-white">About us</Link></li>
              <li><Link to="/service-areas" className="hover:text-white">Service areas</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact & booking</Link></li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-sm leading-relaxed text-navy-300">
          Serving {allPlaces.slice(0, 10).join(", ")} and surrounding areas.
        </p>
        <div className="mt-4 flex flex-col gap-2 text-sm text-navy-300 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
