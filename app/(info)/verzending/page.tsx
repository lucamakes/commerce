import { LegalPage } from "components/legal/legal-page";
import { COMPANY } from "lib/company";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Verzending",
  description: `Verzendkosten, levertijden en bezorging van Panisto. Nederland ${COMPANY.shipping.netherlands.days}, gratis vanaf ${COMPANY.shipping.netherlands.freeFrom}.`,
};

export default function ShippingPage() {
  const { netherlands, belgium } = COMPANY.shipping;

  return (
    <LegalPage
      title="Verzending"
      intro="We branden in kleine batches en versturen zo snel mogelijk daarna. Hier lees je wat verzending kost, hoe lang het duurt en waar we bezorgen."
    >
      <h2>Bezorggebied</h2>
      <p>
        We versturen naar Nederland en België. Voor andere landen mail je{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> — dan kijken we
        wat mogelijk is.
      </p>

      <h2>Kosten en levertijd</h2>
      <ul>
        <li>
          Nederland: {netherlands.cost} per bestelling, gratis vanaf{" "}
          {netherlands.freeFrom}. Levering in {netherlands.days} na verzending.
        </li>
        <li>
          België: {belgium.cost} per bestelling. Levering in {belgium.days} na
          verzending.
        </li>
      </ul>
      <p>
        Verzendkosten zie je terug bij het afronden van je bestelling. In de
        winkelwagen staat het bedrag nog als “berekend bij checkout”.
      </p>

      <h2>Wanneer gaat je pakket de deur uit?</h2>
      <p>
        Koffie branden we in kleine batches. Bestellingen die op een branddag
        binnenkomen, gaan meestal dezelfde of de volgende werkdag de deur uit.
        In het weekend en op feestdagen versturen we niet. Je ontvangt een
        bevestiging per e-mail zodra de zending onderweg is.
      </p>

      <h2>Vertraging of zoekgeraakt pakket</h2>
      <p>
        Loopt je bestelling uit of is het pakket zoek? Mail ons op{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We zoeken het
        uit met de vervoerder en sturen een vervangende zending als het pakket
        niet aankomt.
      </p>
      <p>
        Voor consumenten gaat het risico van de zending over op het moment van
        bezorging, niet eerder.
      </p>

      <h2>Vragen</h2>
      <p>
        Meer weten over ruilen of terugsturen? Zie{" "}
        <Link href="/retourneren">Retourneren</Link>. Voor overige vragen:{" "}
        <Link href="/contact">Contact</Link>.
      </p>
    </LegalPage>
  );
}
