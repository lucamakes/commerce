import { LegalPage } from "components/legal/legal-page";
import { COMPANY } from "lib/company";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacyverklaring van Panisto. Welke gegevens we verzamelen, waarom, en welke rechten je hebt.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy"
      intro="We verzamelen zo min mogelijk. Hier lees je welke gegevens Panisto gebruikt, waarvoor, en hoe je je rechten uitoefent."
    >
      <h2>Wie is verantwoordelijk?</h2>
      <p>
        {COMPANY.name}, gevestigd in {COMPANY.city}, is
        verwerkingsverantwoordelijke. Vragen over privacy mail je naar{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>
      <p>
        KvK-nummer en btw-identificatienummer publiceren we hier zodra de
        onderneming is ingeschreven.
      </p>

      <h2>Welke gegevens gebruiken we?</h2>
      <ul>
        <li>
          <strong>Bestellingen:</strong> naam, e-mail, bezorgadres en
          bestelgegevens, zodat we kunnen leveren en je een bevestiging kunnen
          sturen. Grondslag: uitvoering van de overeenkomst.
        </li>
        <li>
          <strong>Contact:</strong> de gegevens die je zelf in een bericht zet.
          Formulieren op deze site openen je e-mailprogramma; we slaan het
          bericht pas op als het in onze inbox aankomt. Grondslag:
          gerechtvaardigd belang (klantenservice) of toestemming.
        </li>
        <li>
          <strong>Nieuwsbrief:</strong> alleen als je jezelf aanmeldt. Je kunt
          je altijd afmelden via {COMPANY.email}. Grondslag: toestemming.
        </li>
        <li>
          <strong>Winkelwagen:</strong> een noodzakelijke cookie zodat je
          producten in je mandje blijven staan. Geen tracking, geen
          advertentiecookies.
        </li>
      </ul>
      <p>
        We verkopen je gegevens niet. We sturen geen nieuwsbrieven zonder dat je
        je daarvoor hebt aangemeld, en we beloven geen korting die we niet
        kunnen waarmaken.
      </p>

      <h2>Met wie delen we gegevens?</h2>
      <p>
        Alleen als dat nodig is om de webshop te laten werken. Denk aan de
        hosting van de website, de bezorger, en — als de shop aan Shopify is
        gekoppeld — Shopify voor catalogus, winkelwagen en checkout. Betalingen
        lopen dan via de betaaldienst in Shopify Checkout. Die partijen mogen je
        gegevens alleen gebruiken voor die dienst.
      </p>

      <h2>Hoe lang bewaren we gegevens?</h2>
      <p>
        Bestelgegevens bewaren we zolang de wet dat vraagt (onder meer voor de
        administratie, doorgaans zeven jaar). Contactberichten bewaren we zolang
        nodig is om je vraag af te handelen. Cookies voor de winkelwagen
        verlopen automatisch.
      </p>

      <h2>Cookies</h2>
      <p>
        We plaatsen een functionele cookie voor de winkelwagen. Zonder die
        cookie kun je niet bestellen. We gebruiken op dit moment geen analytics-
        of marketingcookies. Als dat later verandert, werken we deze verklaring
        bij en vragen we toestemming waar dat verplicht is.
      </p>
      <p>
        Op de contactpagina tonen we een kaart via Google Maps. Daarbij kan
        Google eigen cookies en gegevens verwerken, volgens{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          het privacybeleid van Google
        </a>
        . De rest van de site laadt Google niet.
      </p>

      <h2>Jouw rechten</h2>
      <p>
        Je hebt recht op inzage, correctie, verwijdering, beperking van de
        verwerking, dataportabiliteit en bezwaar. Trek je toestemming in via{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. Dat doet geen
        afbreuk aan verwerkingen van vóór die intrekking.
      </p>
      <p>
        Ben je het niet eens met hoe we met je gegevens omgaan? Je kunt een
        klacht indienen bij de{" "}
        <a
          href="https://www.autoriteitpersoonsgegevens.nl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Autoriteit Persoonsgegevens
        </a>
        .
      </p>

      <h2>Wijzigingen</h2>
      <p>
        Deze verklaring kan wijzigen als de shop of de wet verandert. De datum
        bovenaan (en onderaan) deze pagina is leidend. Zie ook onze{" "}
        <Link href="/voorwaarden">algemene voorwaarden</Link> en{" "}
        <Link href="/contact">contactgegevens</Link>.
      </p>
    </LegalPage>
  );
}
