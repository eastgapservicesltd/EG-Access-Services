import { MessageSquareText, Phone } from "lucide-react";
import { Link } from "react-router";
import { site } from "../../data/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-navy-900 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 rounded-full bg-teal-500 py-3 font-semibold text-navy-900"
      >
        <Phone aria-hidden className="size-4" />
        Call now
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 rounded-full border border-white/25 py-3 font-semibold text-white"
      >
        <MessageSquareText aria-hidden className="size-4" />
        Book now
      </Link>
    </div>
  );
}
