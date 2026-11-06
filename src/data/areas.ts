// Placeholder service area — adjust to the cities you actually cover.
export const areas = [
  { region: "Toronto", places: ["Downtown Toronto", "North York", "Etobicoke", "Scarborough", "East York", "York"] },
  { region: "Peel & Halton", places: ["Mississauga", "Brampton", "Oakville", "Burlington", "Milton"] },
  { region: "York Region", places: ["Vaughan", "Richmond Hill", "Markham", "Aurora", "Newmarket"] },
  { region: "Durham", places: ["Pickering", "Ajax", "Whitby", "Oshawa"] },
];

export const allPlaces = areas.flatMap((a) => a.places);
