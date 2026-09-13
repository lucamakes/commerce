"use client";

import { COMPANY } from "lib/company";
import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    id: "koffie",
    label: "Koffie",
    title: "Koffie-abonnement",
    description:
      "Elke levering een verse batch van 250g, wekelijks gebrand in kleine oplage.",
  },
  {
    id: "thee",
    label: "Thee",
    title: "Thee-abonnement",
    description:
      "Losse thee, seizoensgebonden geselecteerd. Klaar om te zetten, maand na maand.",
  },
  {
    id: "mix",
    label: "Mix",
    title: "Koffie & thee",
    description:
      "Wissel af of ontvang beide. Altijd vers, altijd iets om naar uit te kijken.",
  },
] as const;

const frequencies = [
  { id: "biweekly", label: "Elke 2 weken" },
  { id: "monthly", label: "Maandelijks" },
] as const;

export function FinalCta() {
  const [planId, setPlanId] = useState<(typeof plans)[number]["id"]>("koffie");
  const [frequencyId, setFrequencyId] =
    useState<(typeof frequencies)[number]["id"]>("monthly");
  const [sent, setSent] = useState(false);

  const plan = plans.find((item) => item.id === planId) ?? plans[0];
  const frequency =
    frequencies.find((item) => item.id === frequencyId) ?? frequencies[1];

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    const subject = encodeURIComponent(`Abonnement: ${plan.title}`);
    const body = encodeURIComponent(
      `Ik wil graag een abonnement aanvragen.\n\nType: ${plan.title}\nFrequentie: ${frequency.label}\nE-mail: ${email}`,
    );

    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="bg-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-neutral-400">
          Abonnement
        </p>
        <h2 className="mt-3 text-center text-4xl font-light text-white md:text-6xl">
          Vind jouw volgende favoriete kop.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center font-sans text-neutral-300">
          Zet koffie of thee op herhaling. Vers bereid, bezorgd tot aan de deur.
          Stoppen kan wanneer je wilt.
        </p>

        <div
          role="tablist"
          aria-label="Kies je abonnement"
          className="mx-auto mt-10 flex max-w-md bg-white/10 p-1"
        >
          {plans.map((item, index) => {
            const selected = item.id === planId;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`subscription-tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`subscription-panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setPlanId(item.id)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
                    return;
                  }
                  event.preventDefault();
                  const nextIndex =
                    event.key === "ArrowRight"
                      ? (index + 1) % plans.length
                      : (index - 1 + plans.length) % plans.length;
                  const nextPlan = plans[nextIndex];
                  if (!nextPlan) return;
                  setPlanId(nextPlan.id);
                  document
                    .getElementById(`subscription-tab-${nextPlan.id}`)
                    ?.focus();
                }}
                className={
                  selected
                    ? "flex-1 bg-white px-4 py-2.5 text-sm font-medium text-black"
                    : "flex-1 px-4 py-2.5 text-sm font-medium text-white/70 transition hover:text-white"
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`subscription-panel-${plan.id}`}
          aria-labelledby={`subscription-tab-${plan.id}`}
          className="mt-8 text-center"
        >
          <h3 className="text-2xl font-light text-white">{plan.title}</h3>
          <p className="mx-auto mt-3 max-w-md font-sans text-neutral-300">
            {plan.description}
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {frequencies.map((item) => {
            const selected = item.id === frequencyId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFrequencyId(item.id)}
                className={
                  selected
                    ? "border border-white bg-white px-4 py-2 text-sm font-medium text-black"
                    : "border border-white/40 px-4 py-2 text-sm font-medium text-white transition hover:border-white"
                }
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {sent ? (
          <p className="mt-8 text-center font-sans text-neutral-300">
            Je e-mailprogramma opent om de aanvraag te versturen. Lukt dat
            niet? Mail {COMPANY.email}.
          </p>
        ) : (
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="jouw@email.nl"
              className="w-full border border-white/30 bg-transparent px-5 py-3 font-sans text-sm text-white outline-none placeholder:text-neutral-500 focus:border-white"
            />
            <button
              type="submit"
              className="bg-white px-6 py-3 text-sm font-medium whitespace-nowrap text-black transition hover:bg-accent hover:text-white"
            >
              Start abonnement
            </button>
          </form>
        )}

        <p className="mt-4 text-center font-sans text-xs text-neutral-500">
          We nemen contact op om je abonnement te bevestigen. Lees hoe we met
          e-mail omgaan in de{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-white"
          >
            privacyverklaring
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
