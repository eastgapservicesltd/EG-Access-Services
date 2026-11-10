import type { Faq } from "./services";

export const generalFaqs: Faq[] = [
  {
    q: "How do I get a quote?",
    a: "Call, text or email us with a brief description of the problem and your address (street, apt/unit number and city), and we'll get back to you with a quote.",
  },
  {
    q: "What areas do you serve?",
    a: "We work across the Greater Toronto Area. If you're not sure we cover your neighbourhood, just call and ask.",
  },
  {
    q: "Who will come to my door?",
    a: "An experienced EG Access technician who works on locks and garage doors daily.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Debit, Visa, Mastercard, Amex and e-Transfer.",
  },
];

export const locksmithFaqs: Faq[] = [
  {
    q: "Will opening the lock damage my door?",
    a: "In most cases, no. We pick or bypass the lock first, and explain the options before doing anything else.",
  },
  {
    q: "Should I rekey or replace my locks?",
    a: "If your locks work well, rekeying is cheaper and stops old keys from working. Replace them if they're worn or you want an upgrade.",
  },
];

export const garageFaqs: Faq[] = [
  {
    q: "Is it safe to use a noisy or crooked garage door?",
    a: "If the door moves unevenly, sags or is off its track, stop using it and call us. A failing spring or cable can drop the door.",
  },
  {
    q: "Should I repair or replace my garage door?",
    a: "Most problems can be repaired. If the door is badly damaged or very old, we'll walk you through replacement options.",
  },
];
