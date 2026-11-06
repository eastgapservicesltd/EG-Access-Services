import type { ReactNode } from "react";
import { img } from "../../data/site";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Container } from "../ui/Container";
import { RingMark } from "../ui/RingMark";

type Props = {
  title: string;
  lead: ReactNode;
  crumbs: { label: string; to?: string }[];
  image?: string;
  children?: ReactNode;
};

export function PageHero({ title, lead, crumbs, image, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      {image ? (
        <>
          <img src={img(image, 1600)} alt="" className="absolute inset-0 size-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-800 via-navy-800/90 to-navy-800/40" />
        </>
      ) : (
        <RingMark className="pointer-events-none absolute -right-32 -bottom-40 size-[28rem] opacity-25" />
      )}
      <Container className="relative py-14 sm:py-20">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-extrabold sm:text-5xl">{title}</h1>
        <div className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">{lead}</div>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
}
