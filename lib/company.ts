export const COMPANY = {
  name: "Panisto",
  email: "hallo@panisto.nl",
  city: "Amsterdam",
  country: "Nederland",
  hours: "Ma–za 08:00–18:00",
  location: {
    street: "Polonceaukade",
    area: "Westergas",
    postalCode: "1014 DA",
    city: "Amsterdam",
    country: "Nederland",
    lat: 52.3862,
    lng: 4.872,
    mapsQuery: "Westergasfabriek, Amsterdam",
  },
  policiesUpdatedAt: "13 september 2026",
  shipping: {
    netherlands: {
      cost: "€4,95",
      freeFrom: "€35",
      days: "1–3 werkdagen",
    },
    belgium: {
      cost: "€6,95",
      days: "2–5 werkdagen",
    },
  },
  returns: {
    coolingOffDays: 14,
  },
} as const;

export function formatAddress() {
  const { street, area, postalCode, city } = COMPANY.location;
  return `${street}, ${area}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(COMPANY.location.mapsQuery);
  return `https://maps.google.com/maps?q=${query}&hl=nl&z=16&output=embed`;
}
