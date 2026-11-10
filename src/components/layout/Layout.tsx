import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { businessSchema } from "../../lib/schema";
import { JsonLd } from "../ui/JsonLd";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileCallBar } from "./MobileCallBar";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  return (
    <>
      <ScrollToTop />
      <JsonLd data={businessSchema} />
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-teal-500 px-4 py-2 font-semibold text-navy-900 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
