import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { byCategory, categories, servicePath, type Category } from "../../data/services";
import { site } from "../../data/site";
import { Container } from "../ui/Container";
import { Logo } from "./Logo";

const plainLinks = [
  { to: "/service-areas", label: "Service areas" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const navLink = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors ${
    isActive ? "text-teal-300" : "text-white/85 hover:text-white"
  }`;

function Dropdown({ category }: { category: Category }) {
  const cat = categories[category];
  return (
    <div className="group relative">
      <NavLink to={cat.path} className={(s) => `${navLink(s)} inline-flex items-center gap-1`}>
        {cat.label}
        <ChevronDown aria-hidden className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </NavLink>
      <div className="invisible absolute top-full left-0 pt-3 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="w-80 rounded-xl border border-white/10 bg-navy-900 p-2 shadow-2xl shadow-black/40">
          {byCategory(category).map((s) => (
            <li key={s.slug}>
              <Link
                to={servicePath(s)}
                className="flex items-start gap-3 rounded-lg p-3 text-white/85 hover:bg-white/5 hover:text-white"
              >
                <s.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-teal-400" />
                <span className="font-medium">{s.title}</span>
              </Link>
            </li>
          ))}
          <li className="mt-1 border-t border-white/10 pt-1">
            <Link to={cat.path} className="block rounded-lg p-3 text-sm font-semibold text-teal-300 hover:bg-white/5">
              All {cat.title.toLowerCase()}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-navy-800/95 backdrop-blur supports-[backdrop-filter]:bg-navy-800/85">
      <div className="hidden border-b border-white/10 text-sm text-navy-200 md:block">
        <Container className="flex h-9 items-center justify-between">
          <p className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-teal-400" aria-hidden />
            Serving the Greater Toronto Area
          </p>
          <a href={`mailto:${site.email}`} className="hover:text-white">
            {site.email}
          </a>
        </Container>
      </div>

      <Container className="flex h-18 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <Dropdown category="locksmith" />
          <Dropdown category="garage-doors" />
          {plainLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLink}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 font-semibold text-navy-900 tabular-nums hover:bg-teal-400 sm:inline-flex"
          >
            <Phone aria-hidden className="size-4" />
            {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 bg-navy-800 pb-28 lg:hidden"
        >
          <Container className="py-6">
            {(Object.keys(categories) as Category[]).map((c) => (
              <div key={c} className="mb-6">
                <Link to={categories[c].path} className="font-wide text-xl font-bold text-white">
                  {categories[c].label}
                </Link>
                <ul className="mt-2 grid gap-1 sm:grid-cols-2">
                  {byCategory(c).map((s) => (
                    <li key={s.slug}>
                      <Link to={servicePath(s)} className="flex items-center gap-3 py-2 text-white/80 hover:text-white">
                        <s.icon aria-hidden className="size-4 text-teal-400" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ul className="grid gap-1 border-t border-white/10 pt-4">
              {plainLinks.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className="block py-2 text-lg font-medium text-white">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
