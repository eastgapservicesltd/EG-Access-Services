import { Link } from "react-router";
import { servicePath, type Service } from "../../data/services";
import { img } from "../../data/site";

// Photo tiles, used on category hubs and for related services.
export function ServiceTiles({ items }: { items: Service[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <li key={s.slug}>
          <Link
            to={servicePath(s)}
            className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl bg-navy-800 p-6 text-white"
          >
            <img
              src={img(s.image, 700)}
              alt=""
              loading="lazy"
              className="absolute inset-0 size-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent" />
            <span className="relative">
              <s.icon aria-hidden className="size-6 text-teal-300" />
              <span className="font-wide mt-3 block text-xl font-bold">{s.title}</span>
              <span className="mt-1.5 block text-sm leading-relaxed text-navy-200">{s.short}</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
