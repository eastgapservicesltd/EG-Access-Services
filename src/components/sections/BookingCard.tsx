import { ArrowRight, Check, Mail, MessageSquareText, Phone } from "lucide-react";
import { Link, useLocation } from "react-router";
import { site } from "../../data/site";

const smsHref = site.phoneHref.replace("tel:", "sms:");

const contactWays = [
  { icon: Phone, label: "Call", value: site.phone, href: site.phoneHref },
  { icon: MessageSquareText, label: "Text", value: site.phone, href: smsHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
];

const include = [
  "A brief description of the problem",
  "Your address: street, apt/unit number and city",
];

// How to book: call, text or email, plus what to tell us. Used on the home page and the contact page.
export function BookingCard({ className = "" }: { className?: string }) {
  const onContactPage = useLocation().pathname === "/contact";
  return (
    <div className={`rounded-3xl bg-navy-800 p-6 text-white sm:p-8 ${className}`}>
      <h2 className="text-2xl font-bold">Book an appointment</h2>
      <p className="mt-2 leading-relaxed text-navy-200">
        {onContactPage ? "Prefer to reach us directly? Email, call or text." : "Book online, or email, call or text us."}
      </p>

      {!onContactPage && (
        <Link
          to="/contact#book"
          className="mt-6 flex items-center justify-between gap-4 rounded-full bg-teal-500 px-6 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-teal-400"
        >
          Fill in the booking form
          <ArrowRight aria-hidden className="size-5" />
        </Link>
      )}

      <ul className="mt-6 grid gap-3">
        {contactWays.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              className="flex items-center gap-4 rounded-2xl border border-white/15 bg-navy-900/60 p-4 transition-colors hover:border-teal-400 hover:bg-navy-900"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal-500/15 text-teal-300">
                <c.icon aria-hidden className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-navy-200">{c.label}</span>
                <span className="block font-semibold break-words tabular-nums">{c.value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-6 rounded-2xl bg-white/5 p-5">
        <p className="font-semibold">Please include:</p>
        <ul className="mt-3 grid gap-2">
          {include.map((i) => (
            <li key={i} className="flex gap-3 text-navy-200">
              <Check aria-hidden className="mt-1 size-4 shrink-0 text-teal-300" strokeWidth={3} />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
