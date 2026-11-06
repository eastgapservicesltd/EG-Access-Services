import { Container } from "../ui/Container";

const brands = ["Schlage", "Kwikset", "Medeco", "Mul-T-Lock", "Weiser", "LiftMaster", "Chamberlain", "Genie", "Clopay", "Amarr"];

export function BrandStrip() {
  return (
    <section aria-labelledby="brands-heading" className="border-y border-navy-800/10 bg-white py-10">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
        <h2 id="brands-heading" className="shrink-0 font-sans text-sm font-semibold text-slate">
          Brands we install and repair
        </h2>
        <ul className="flex flex-wrap gap-x-10 gap-y-4">
          {brands.map((b) => (
            <li key={b} className="font-wide text-lg font-bold text-navy-300">
              {b}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
