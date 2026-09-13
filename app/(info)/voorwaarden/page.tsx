import { LegalPage } from "components/legal/legal-page";
import { COMPANY } from "lib/company";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "Algemene voorwaarden van Panisto voor het kopen van koffie en thee in de webshop.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Algemene voorwaarden"
      intro="Deze voorwaarden gelden voor alle bestellingen in de webshop van Panisto. Door een bestelling te plaatsen, ga je hiermee akkoord."
    >
      <h2>1. Wie we zijn</h2>
      <p>
        De webshop wordt gedreven door {COMPANY.name}, {COMPANY.city},{" "}
        {COMPANY.country}. Je bereikt ons via{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. KvK-nummer en
        btw-identificatienummer publiceren we op de{" "}
        <Link href="/contact">contactpagina</Link> zodra de onderneming is
        ingeschreven.
      </p>

      <h2>2. Producten en prijzen</h2>
      <p>
        Alle prijzen zijn in euro en inclusief btw. We doen ons best om
        informatie, foto’s en voorraden kloppend te houden. Zit er een
        kennelijke fout in een prijs of beschrijving, dan mogen we de bestelling
        annuleren en betalen we je terug.
      </p>
      <p>
        Koffie is een versproduct. Smaak, geur en kleur kunnen per batch licht
        verschillen.
      </p>

      <h2>3. Bestellen en betalen</h2>
      <p>
        Een overeenkomst komt tot stand wanneer we je bestelling hebben
        bevestigd. Betaling gebeurt via de betaalmethode in de checkout
        (bijvoorbeeld iDEAL wanneer de shop via Shopify Checkout loopt). We
        versturen pas nadat de betaling is ontvangen.
      </p>

      <h2>4. Levering</h2>
      <p>
        Levering, kosten en termijnen staan in het{" "}
        <Link href="/verzending">verzendbeleid</Link>. Levertijden zijn
        indicatief, geen fatale termijnen. Bij overmacht (oogst, transport,
        storing bij de vervoerder) informeren we je en kun je de bestelling
        kosteloos annuleren.
      </p>

      <h2>5. Herroeping</h2>
      <p>
        Consumenten hebben {COMPANY.returns.coolingOffDays} dagen bedenktijd.
        Hoe je retourneert, wat wel en niet terug kan, en hoe terugbetaling
        werkt, staat op <Link href="/retourneren">Retourneren</Link>.
      </p>

      <h2>6. Aansprakelijkheid</h2>
      <p>
        We leveren zorgvuldig. Onze aansprakelijkheid is beperkt tot het
        factuurbedrag van de betreffende bestelling, behalve bij opzet of grove
        nalatigheid, of waar de wet die beperking niet toestaat. We zijn niet
        aansprakelijk voor onjuist bewaren of zetten van koffie en thee na
        levering.
      </p>

      <h2>7. Klachten</h2>
      <p>
        Klachten mail je naar{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We reageren
        binnen 14 dagen. Kom je er met ons niet uit, dan kun je als consument in
        de EU terecht bij het{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
        >
          onlinegeschillenbeslechtingsplatform van de Europese Commissie
        </a>
        .
      </p>

      <h2>8. Privacy</h2>
      <p>
        Hoe we met persoonsgegevens omgaan, staat in onze{" "}
        <Link href="/privacy">privacyverklaring</Link>.
      </p>

      <h2>9. Recht</h2>
      <p>
        Op deze voorwaarden en op bestellingen is Nederlands recht van
        toepassing. Geschillen leggen we voor aan de bevoegde rechter in
        Nederland, onverminderd dwingend consumentenrecht.
      </p>
    </LegalPage>
  );
}
