import { allPlaces } from "../data/areas";
import { byCategory, categories, servicePath, type Category, type Service } from "../data/services";
import { img, site } from "../data/site";

const abs = (path: string) => `${site.url}${path}`;
const BUSINESS_ID = `${site.url}/#business`;
const telephone = site.phoneHref.replace("tel:", "");

// Site-wide business entity. Rendered once per page by Layout; page-level markup references it by @id.
// Deliberately no ratings/reviews, hours or street address until they are real and confirmed.
export const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Locksmith", "HomeAndConstructionBusiness"],
      "@id": BUSINESS_ID,
      name: site.name,
      alternateName: site.shortName,
      slogan: site.tagline,
      description:
        "Locksmith and garage door repair serving the Greater Toronto Area: emergency lockouts, rekeying, smart locks, garage door springs, openers, off-track repair and new door installation.",
      url: `${site.url}/`,
      telephone,
      email: site.email,
      logo: abs("/favicon.png"),
      image: abs("/favicon.png"),
      address: {
        "@type": "PostalAddress",
        ...(site.address.street && { streetAddress: site.address.street }),
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        ...(site.address.postal && { postalCode: site.address.postal }),
        addressCountry: "CA",
      },
      areaServed: allPlaces.map((name) => ({ "@type": "Place", name: `${name}, ON` })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Locksmith and garage door services",
        itemListElement: (Object.keys(categories) as Category[]).map((c) => ({
          "@type": "OfferCatalog",
          name: categories[c].title,
          itemListElement: byCategory(c).map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, url: abs(servicePath(s)) },
          })),
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: `${site.url}/`,
      name: site.shortName,
      inLanguage: "en-CA",
      publisher: { "@id": BUSINESS_ID },
    },
  ],
};

const breadcrumbList = (items: { name: string; path?: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    ...(it.path !== undefined && { item: abs(it.path) }),
  })),
});

export const breadcrumbSchema = (items: { name: string; path?: string }[]) => ({
  "@context": "https://schema.org",
  ...breadcrumbList(items),
});

export const serviceSchema = (s: Service) => {
  const cat = categories[s.category];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${abs(servicePath(s))}#service`,
        name: s.title,
        serviceType: s.title,
        description: s.short,
        url: abs(servicePath(s)),
        image: img(s.image),
        category: cat.title,
        provider: { "@id": BUSINESS_ID },
        areaServed: { "@type": "AdministrativeArea", name: "Greater Toronto Area, Ontario" },
      },
      breadcrumbList([{ name: "Home", path: "/" }, { name: cat.title, path: cat.path }, { name: s.title }]),
    ],
  };
};
