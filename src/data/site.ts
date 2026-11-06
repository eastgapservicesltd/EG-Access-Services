// Business details.
export const site = {
  name: "EG Access Services Inc.",
  shortName: "EG Access",
  tagline: "Excellence With Every Service",
  phone: "(647) 507-9991",
  phoneHref: "tel:+16475079991",
  email: "egaccessservices@gmail.com",
  // Add `street` and `postal` here if you want a full street address shown.
  address: {
    street: "",
    city: "Oakville",
    region: "ON",
    postal: "",
  },
  responseTime: "30 minutes",
  jobsCompleted: "8,500+",
  rating: "4.9",
  reviewCount: 320,
  url: "https://www.egaccessservices.com",
};

// "street, city, region postal", skipping any empty parts.
export function formatAddress({ street, city, region, postal } = site.address) {
  return [street, city, [region, postal].filter(Boolean).join(" ")].filter(Boolean).join(", ");
}

export function img(id: string, width = 1200) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;
}
