import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  lead?: ReactNode;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({ title, lead, tone = "light", as: Tag = "h2", className = "" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-2xl ${className}`}>
      <Tag
        className={`text-3xl leading-[1.1] font-bold sm:text-4xl ${dark ? "text-white" : "text-navy-800"}`}
      >
        {title}
      </Tag>
      {lead && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-navy-200" : "text-slate"}`}>{lead}</p>
      )}
    </div>
  );
}
