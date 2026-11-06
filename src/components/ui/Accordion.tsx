import { Plus } from "lucide-react";
import type { Faq } from "../../data/services";

// Native <details> keeps this keyboard- and screen-reader-friendly without extra state.
export function Accordion({ items, tone = "light" }: { items: Faq[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`divide-y border-y ${dark ? "divide-white/10 border-white/10" : "divide-navy-800/10 border-navy-800/10"}`}>
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary
            className={`flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left text-lg font-semibold [&::-webkit-details-marker]:hidden ${
              dark ? "text-white" : "text-navy-800"
            }`}
          >
            {item.q}
            <Plus
              aria-hidden
              className="mt-1 size-5 shrink-0 text-teal-500 transition-transform duration-200 group-open:rotate-45"
            />
          </summary>
          <p className={`max-w-[68ch] pb-6 leading-relaxed ${dark ? "text-navy-200" : "text-slate"}`}>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
