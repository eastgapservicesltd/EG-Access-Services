import type { Faq } from "../../data/services";
import { Accordion } from "../ui/Accordion";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function FaqSection({ items, title = "Common questions", showLink = false }: { items: Faq[]; title?: string; showLink?: boolean }) {
  return (
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div>
          <SectionHeading title={title} lead="Can't find your answer? Call us and you'll speak to someone who knows doors." />
          {showLink && (
            <Button to="/faq" variant="outline-dark" className="mt-8">
              Read all FAQs
            </Button>
          )}
        </div>
        <Accordion items={items} />
      </Container>
    </section>
  );
}
