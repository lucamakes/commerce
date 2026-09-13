import { LegalPage } from "components/legal/legal-page";
import { COMPANY } from "lib/company";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Retourneren",
  description: `Retourneren bij Panisto. ${COMPANY.returns.coolingOffDays} dagen wettelijke bedenktijd voor ongeopende koffie en thee.`,
};

export default function ReturnsPage() {
  const days = COMPANY.returns.coolingOffDays;

  return (
    <LegalPage
      title="Retourneren"
      intro={`Niet wat je zocht? Ongeopende producten mag je binnen ${days} dagen na ontvangst terugsturen. Hieronder staat hoe dat werkt.`}
    >
      <h2>Wettelijke bedenktijd</h2>
      <p>
        Als consument heb je {days} dagen de tijd om de koop te ontbinden,
        gerekend vanaf de dag nadat je het pakket hebt ontvangen. Je hoeft geen
        reden op te geven.
      </p>
      <p>
        Je meldt de retour bij voorkeur per e-mail naar{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>, met je
        ordernummer en welke producten je terugstuurt. Daarna heb je nog {days}{" "}
        dagen om de zending naar ons terug te sturen.
      </p>

      <h2>Wat kun je terugsturen?</h2>
      <ul>
        <li>
          Ongeopende koffie en thee, in de originele verpakking, mag je
          terugsturen.
        </li>
        <li>
          Geopende verpakkingen vallen onder de hygiëne-uitzondering voor
          voedingsmiddelen: die nemen we niet terug, tenzij het product defect
          of verkeerd geleverd is.
        </li>
        <li>
          Cadeaus die ongeopend zijn, kun je op dezelfde manier retourneren.
        </li>
      </ul>

      <h2>Kosten</h2>
      <p>
        De kosten van de terugzending zijn voor jouw rekening, tenzij we iets
        verkeerd of beschadigd hebben gestuurd. In dat geval vergoeden wij de
        retourzending.
      </p>

      <h2>Terugbetaling</h2>
      <p>
        Zodra we de retour hebben ontvangen en gecontroleerd, betalen we het
        aankoopbedrag — inclusief de oorspronkelijke verzendkosten — binnen{" "}
        {days} dagen terug via dezelfde betaalmethode. We kunnen wachten met
        terugbetalen tot de goederen binnen zijn, of tot je een bewijs van
        terugzending hebt gestuurd.
      </p>

      <h2>Verkeerd of beschadigd product</h2>
      <p>
        Is er iets mis met je bestelling? Mail ons zo snel mogelijk, het liefst
        met een foto, naar{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We sturen een
        vervanging of betalen terug, en de retourzending is dan voor onze
        rekening.
      </p>

      <h2>Adres</h2>
      <p>
        Stuur retouren naar Panisto, {COMPANY.city}. Het exacte retouradres
        sturen we je per e-mail na je melding, zodat we weten dat de zending
        onderweg is.
      </p>
      <p>
        Levertijden en verzendkosten staan op{" "}
        <Link href="/verzending">Verzending</Link>. Klacht of vraag?{" "}
        <Link href="/contact">Neem contact op</Link>.
      </p>
    </LegalPage>
  );
}
