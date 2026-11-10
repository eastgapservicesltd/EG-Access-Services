import { CircleCheck } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { byCategory, categories, services, type Category } from "../../data/services";
import { site } from "../../data/site";

type Fields = {
  name: string;
  phone: string;
  email: string;
  service: string;
  street: string;
  unit: string;
  city: string;
  message: string;
};
type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = { name: "", phone: "", email: "", service: "", street: "", unit: "", city: "", message: "" };

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Enter your name.";
  if (f.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit phone number so we can call you back.";
  if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Enter a valid email address, or leave it blank.";
  if (!f.street.trim()) e.street = "Enter the street address where you need the service.";
  if (!f.city.trim()) e.city = "Enter your city.";
  if (!f.service) e.service = "Choose the service you need.";
  return e;
}

const input =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-navy-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 focus:outline-none";

export function QuoteForm({ defaultService = "", compact = false }: { defaultService?: string; compact?: boolean }) {
  const id = useId();
  const [fields, setFields] = useState<Fields>({ ...empty, service: defaultService });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const set = (k: keyof Fields) => (e: { target: { value: string } }) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(`${id}-${first}`)?.focus();
      return;
    }
    setSending(true);
    setSendError(false);
    try {
      await sendBooking(fields);
      setSent(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div role="status" className="rounded-2xl bg-white p-8 text-center">
        <CircleCheck aria-hidden className="mx-auto size-12 text-teal-500" />
        <h3 className="mt-4 text-2xl font-bold text-navy-800">Request sent</h3>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-slate">
          Thanks, {fields.name.split(" ")[0]}. We'll call you at {fields.phone} shortly. If it's urgent, call{" "}
          <a href={site.phoneHref} className="font-semibold text-teal-700 underline">
            {site.phone}
          </a>{" "}
          now.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(empty);
            setSent(false);
          }}
          className="mt-6 font-semibold text-teal-700 hover:text-navy-800"
        >
          Send another request
        </button>
      </div>
    );
  }

  const field = (k: keyof Fields, label: string, optional = false) => ({
    id: `${id}-${k}`,
    name: k,
    value: fields[k],
    onChange: set(k),
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id}-${k}-err` : undefined,
    className: `${input} ${errors[k] ? "border-red-500" : "border-navy-800/15"}`,
    label: (
      <label htmlFor={`${id}-${k}`} className="text-sm font-semibold text-navy-800">
        {label}
        {optional && <span className="font-normal text-slate"> (optional)</span>}
      </label>
    ),
    error: errors[k] && (
      <p id={`${id}-${k}-err`} className="mt-1.5 text-sm text-red-600">
        {errors[k]}
      </p>
    ),
  });

  const name = field("name", "Your name");
  const phone = field("phone", "Phone");
  const email = field("email", "Email", true);
  const service = field("service", "Service needed");
  const street = field("street", "Street address");
  const unit = field("unit", "Apt / unit number", true);
  const city = field("city", "City");
  const message = field("message", "What's going on?", true);

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className={`grid gap-5 rounded-2xl bg-white p-6 sm:p-8 ${compact ? "" : "sm:grid-cols-2"}`}
    >
      <div>
        {name.label}
        <input {...omit(name)} required autoComplete="name" />
        {name.error}
      </div>
      <div>
        {phone.label}
        <input {...omit(phone)} required type="tel" inputMode="tel" autoComplete="tel" placeholder="(647) 000-0000" />
        {phone.error}
      </div>
      <div>
        {email.label}
        <input {...omit(email)} type="email" autoComplete="email" />
        {email.error}
      </div>
      <div className="sm:col-span-2">
        {street.label}
        <input {...omit(street)} required autoComplete="address-line1" placeholder="123 Main St" />
        {street.error}
      </div>
      <div>
        {unit.label}
        <input {...omit(unit)} autoComplete="address-line2" />
      </div>
      <div>
        {city.label}
        <input {...omit(city)} required autoComplete="address-level2" />
        {city.error}
      </div>
      <div className="sm:col-span-2">
        {service.label}
        <select {...omit(service)} required>
          <option value="">Choose a service</option>
          {(Object.keys(categories) as Category[]).map((c) => (
            <optgroup key={c} label={categories[c].title}>
              {byCategory(c).map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </optgroup>
          ))}
          <option value="other">Something else</option>
        </select>
        {service.error}
      </div>
      <div className="sm:col-span-2">
        {message.label}
        <textarea {...omit(message)} rows={4} placeholder="For example: the spring snapped and the door won't open" />
      </div>
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        {sendError ? (
          <p role="alert" className="text-sm text-red-600">
            Something went wrong sending your request. Please try again, or call{" "}
            <a href={site.phoneHref} className="font-semibold underline">
              {site.phone}
            </a>
            .
          </p>
        ) : (
          <p className="text-sm text-slate">We'll get back to you with a quote.</p>
        )}
        <button
          type="submit"
          disabled={sending}
          className="shrink-0 rounded-full disabled:cursor-wait disabled:opacity-70  bg-teal-500 px-7 py-3.5 font-semibold text-navy-900 transition-colors hover:bg-teal-400 active:bg-teal-300"
        >
          {sending ? "Sending…" : "Send request"}
        </button>
      </div>
    </form>
  );
}

// Emails the booking straight to the business inbox via FormSubmit (no backend needed).
// The first submission triggers a one-time activation email to site.email that must be confirmed.
async function sendBooking(f: Fields) {
  const serviceName =
    f.service === "other" ? "Something else" : (services.find((s) => s.slug === f.service)?.title ?? f.service);
  const address = [f.unit && `Unit ${f.unit}`, f.street, f.city].filter(Boolean).join(", ");
  const res = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      _subject: `New booking request: ${serviceName} (${f.name})`,
      _template: "table",
      _captcha: "false",
      ...(f.email && { _replyto: f.email }),
      Name: f.name,
      Phone: f.phone,
      Email: f.email || "Not given",
      Service: serviceName,
      Address: address,
      Details: f.message || "None",
    }),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || String(data?.success) !== "true") throw new Error("Booking request failed");
}

function omit<T extends { label: unknown; error: unknown }>(f: T) {
  const { label: _l, error: _e, ...rest } = f;
  return rest;
}
