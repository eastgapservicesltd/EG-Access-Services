import { site } from "../../data/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const steps = [
  { title: "Call or send a request", text: "Describe the problem and ask for a quote. We give you an arrival time on the spot." },
  { title: "A technician is dispatched", text: `For emergencies we aim to be there within ${site.responseTime}. You'll get a text when we're on the way.` },
  { title: "Get your quote", text: "The technician inspects the problem and explains what needs to be done." },
  { title: "Fixed and tested", text: "We finish the job and test everything with you before we leave." },
];

export function HowItWorks() {
  return (
    <section className="bg-navy-800 py-20 text-white sm:py-24">
      <Container>
        <SectionHeading
          tone="dark"
          title="From your call to a working door"
          lead="The same four steps for every job, whether it's a lockout or a new garage door."
        />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-teal-500 pt-6">
              <span className="font-wide text-sm font-bold text-teal-300 tabular-nums">Step {i + 1}</span>
              <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-navy-200">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
