import type { ReactNode } from "react";
import { Link } from "react-router";

type Variant = "primary" | "outline-light" | "outline-dark" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-teal-500 text-navy-900 hover:bg-teal-400 active:bg-teal-300",
  "outline-light": "border border-white/30 text-white hover:border-white hover:bg-white/5",
  "outline-dark": "border border-navy-800/25 text-navy-800 hover:border-navy-800 hover:bg-navy-800/5",
  ghost: "text-teal-700 hover:text-navy-800 px-0!",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-150 whitespace-nowrap";

type Props = { children: ReactNode; variant?: Variant; className?: string } & (
  | { to: string; href?: never }
  | { href: string; to?: never }
);

export function Button({ children, variant = "primary", className = "", to, href }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
