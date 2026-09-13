import { MapEmbed } from "components/contact/location-map";
import { COMPANY } from "lib/company";
import { baseUrl } from "lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Bezoek Panisto in ${COMPANY.location.area}, ${COMPANY.city}. ${COMPANY.email}, ${COMPANY.hours}.`,
};

export default function ContactPage() {
  const { location } = COMPANY;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: COMPANY.name,
    email: COMPANY.email,
    url: `${baseUrl}/contact`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${location.street}, ${location.area}`,
      addressLocality: location.city,
      postalCode: location.postalCode,
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    openingHours: "Mo-Sa 08:00-18:00",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h1 className="text-5xl font-light md:text-6xl">Contact</h1>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-neutral-600">
          Onze branderij zit bij {location.area} in {location.city}. Stuur een
          bericht, of kom langs tijdens openingstijden — even mailen als je op
          bezoek komt is fijn.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div className="font-sans text-neutral-600">
            <h2 className="text-2xl font-light text-black">Bezoek ons</h2>
            <ul className="mt-6 space-y-5">
              <li>
                <span className="block text-xs uppercase tracking-wider text-neutral-400">
                  Adres
                </span>
                <p className="mt-1 text-black">
                  {COMPANY.name}
                  <br />
                  {location.street}
                  <br />
                  {location.area}
                  <br />
                  {location.postalCode} {location.city}
                </p>
                <div className="mt-4 overflow-hidden border border-neutral-200 bg-neutral-200">
                  <MapEmbed className="h-44 md:h-52" />
                </div>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-neutral-400">
                  E-mail
                </span>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-accent underline underline-offset-4 hover:text-accent-hover"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-wider text-neutral-400">
                  Openingstijden
                </span>
                {COMPANY.hours}
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-neutral-500">
              KvK-nummer en btw-identificatienummer volgen bij inschrijving van
              de onderneming.
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              <Link
                href="/verzending"
                className="text-accent underline underline-offset-4 hover:text-accent-hover"
              >
                Verzending
              </Link>
              {" · "}
              <Link
                href="/retourneren"
                className="text-accent underline underline-offset-4 hover:text-accent-hover"
              >
                Retourneren
              </Link>
              {" · "}
              <Link
                href="/privacy"
                className="text-accent underline underline-offset-4 hover:text-accent-hover"
              >
                Privacy
              </Link>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-light">Stuur een bericht</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
