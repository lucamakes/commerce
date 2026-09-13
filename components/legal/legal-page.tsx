import { COMPANY } from "lib/company";
import { ReactNode } from "react";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <article>
      <h1 className="text-5xl font-light md:text-6xl">{title}</h1>
      {intro ? (
        <p className="mt-6 font-sans text-lg leading-relaxed text-neutral-600">
          {intro}
        </p>
      ) : null}
      <div className="mt-10 font-sans text-base leading-relaxed text-neutral-600 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent-hover [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-light [&_h2]:text-black [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
      <p className="mt-12 font-sans text-sm text-neutral-500">
        Laatst bijgewerkt op {COMPANY.policiesUpdatedAt}.
      </p>
    </article>
  );
}
