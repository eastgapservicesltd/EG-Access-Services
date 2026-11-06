// Business details. The office address is still a placeholder — replace before launch.
export const site = {
  name: "EG Access Services Inc.",
  shortName: "EG Access",
  tagline: "Excellence With Every Service",
  phone: "(647) 507-9991",
  phoneHref: "tel:+16475079991",
  email: "egaccessservices@gmail.com",
  address: {
    street: "100 Placeholder Ave, Unit 4",
    city: "Toronto",
    region: "ON",
    postal: "M5V 0A0",
  },
  responseTime: "30 minutes",
  jobsCompleted: "8,500+",
  rating: "4.9",
  reviewCount: 320,
  url: "https://www.egaccessservices.com",
};

export function img(id: string, width = 1200) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`;
}
