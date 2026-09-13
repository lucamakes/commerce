"use client";

import { COMPANY } from "lib/company";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const subject = encodeURIComponent(
      name ? `Bericht van ${name}` : "Bericht via panisto.nl",
    );
    const body = encodeURIComponent(
      `${message}\n\n— ${name || "Bezoeker"}\n${email}`,
    );

    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="font-sans leading-relaxed text-neutral-600">
        Je e-mailprogramma opent om het bericht te versturen. Komt er niets
        tevoorschijn? Mail ons dan zelf naar{" "}
        <a
          href={`mailto:${COMPANY.email}`}
          className="text-accent underline underline-offset-4 hover:text-accent-hover"
        >
          {COMPANY.email}
        </a>
        .
      </p>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <label className="block font-sans text-sm">
        <span className="text-neutral-500">Naam</span>
        <input
          required
          name="name"
          autoComplete="name"
          className="mt-1 w-full border border-neutral-300 bg-white px-5 py-3 font-sans text-sm outline-none focus:border-accent"
        />
      </label>
      <label className="block font-sans text-sm">
        <span className="text-neutral-500">E-mail</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="mt-1 w-full border border-neutral-300 bg-white px-5 py-3 font-sans text-sm outline-none focus:border-accent"
        />
      </label>
      <label className="block font-sans text-sm">
        <span className="text-neutral-500">Bericht</span>
        <textarea
          required
          name="message"
          rows={6}
          className="mt-1 w-full border border-neutral-300 bg-white px-5 py-3 font-sans text-sm outline-none focus:border-accent"
        />
      </label>
      <p className="font-sans text-xs text-neutral-400">
        Dit formulier opent je e-mailprogramma. We slaan het bericht pas op
        wanneer het in onze inbox aankomt. Zie onze{" "}
        <a
          href="/privacy"
          className="text-accent underline underline-offset-4 hover:text-accent-hover"
        >
          privacyverklaring
        </a>
        .
      </p>
      <button
        type="submit"
        className="bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-accent"
      >
        Verstuur bericht
      </button>
    </form>
  );
}
