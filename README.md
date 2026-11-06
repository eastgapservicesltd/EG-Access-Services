<p align="center">
  <img src="logo.png" alt="EG Access Services logo" width="160" />
</p>

<h1 align="center">EG Access Services</h1>

<p align="center">
  Marketing website for <strong>EG Access Services Inc.</strong>, a locksmith and garage door company serving the Greater Toronto Area.<br />
  <a href="https://www.egaccessservices.com">www.egaccessservices.com</a>
</p>

---

## Overview

A fast, static single-page site built with React, TypeScript, Vite and Tailwind CSS. It presents the company's locksmith and garage door services, lets visitors request a quote, and puts a one-tap call button on mobile.

**Features**

- Home, About, Service Areas, FAQ and Contact pages
- Category hubs for **Locksmith** and **Garage doors**, each with per-service detail pages generated from data
- Quote request form with client-side validation (name, phone, service and full service address)
- Sticky call bar on mobile, plus click-to-call links throughout
- Per-page `<title>`, meta description, canonical URL and Open Graph tags (via React 19 head hoisting)
- Google Maps embed driven by the business address
- Responsive layout and accessible components (labelled form fields, focus management, accordion FAQs)

## Tech stack

| Area      | Choice                                  |
| --------- | --------------------------------------- |
| Framework | React 19 + TypeScript                   |
| Build     | Vite                                    |
| Styling   | Tailwind CSS v4 (theme in `src/index.css`) |
| Routing   | React Router                            |
| Icons     | lucide-react                            |
| Font      | Archivo (Google Fonts)                  |

## Getting started

Requires Node.js 20 or newer.

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:5173
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
├── App.tsx               # Route definitions
├── main.tsx              # Entry point
├── index.css             # Tailwind import + brand theme tokens
├── data/                 # All editable site content lives here
│   ├── site.ts           # Business name, phone, email, address, stats, domain
│   ├── services.ts       # Categories and every service page's copy
│   ├── areas.ts          # Cities and neighbourhoods served
│   ├── faqs.ts           # General FAQ entries
│   └── testimonials.ts   # Customer reviews
├── pages/                # One component per route
├── components/
│   ├── layout/           # Header, Footer, Layout, MobileCallBar, Logo
│   ├── sections/         # Page sections (hero, quote form, FAQs, testimonials…)
│   └── ui/               # Small reusable pieces (Button, Container, Accordion, Seo…)
└── assets/               # Logo
public/                   # Static files copied as-is (favicon)
```

## Routes

| Path                       | Page                                  |
| -------------------------- | ------------------------------------- |
| `/`                        | Home                                  |
| `/locksmith`               | Locksmith services hub                |
| `/locksmith/:slug`         | Locksmith service detail              |
| `/garage-doors`            | Garage door services hub              |
| `/garage-doors/:slug`      | Garage door service detail            |
| `/about`                   | About the company                     |
| `/service-areas`           | Areas served                          |
| `/faq`                     | Frequently asked questions            |
| `/contact`                 | Contact details, quote form and map   |
| `*`                        | 404                                   |

## Editing content

Most changes don't require touching components — edit the files in `src/data/`:

- **Business details** (phone, email, address, stats, domain): `src/data/site.ts`. The header, footer, call buttons, map and SEO tags all read from here.
- **Add or change a service**: add an entry to the `services` array in `src/data/services.ts` with a `category`, unique `slug`, copy, icon and Unsplash image ID. Its page at `/<category>/<slug>` and its links in the menus and hubs are created automatically.
- **Service areas**: `src/data/areas.ts`.
- **FAQs and reviews**: `src/data/faqs.ts` and `src/data/testimonials.ts`.
- **Brand colours and font**: the `@theme` block in `src/index.css`.

Images are currently loaded from Unsplash via the `img()` helper in `src/data/site.ts`. To use your own photos, put them in `src/assets/` (or `public/`) and update the references.

## Quote form

The form in `src/components/sections/QuoteForm.tsx` validates input and shows a confirmation, but **does not send submissions anywhere yet**. Connect it to a service such as Formspree or EmailJS, or to your own API, at the `TODO` in `onSubmit`.

## Deployment

`npm run build` outputs a static site to `dist/`, which can be hosted on Netlify, Vercel, Cloudflare Pages, GitHub Pages or any static host.

Because the site uses client-side routing, the host must serve `index.html` for every path so that links like `/locksmith/emergency-lockout` work when opened directly or refreshed:

- **Netlify** — add `public/_redirects` containing `/*  /index.html  200`
- **Vercel** — add a `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }`
- **Cloudflare Pages** — single-page app fallback is applied automatically when there is no `404.html`

## Before launch

- Add a street address and postal code in `src/data/site.ts` if you want the full address shown
- Replace the sample reviews in `src/data/testimonials.ts` with real ones
- Confirm the service areas, brands and service copy are accurate
- Wire up the quote form
- Swap stock photos for real ones and add an `og:image`
- Add `sitemap.xml` and `robots.txt` to `public/`

## License

Proprietary. © EG Access Services Inc. All rights reserved.
