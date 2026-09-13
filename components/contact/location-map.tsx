import { COMPANY, getMapsEmbedUrl } from "lib/company";
import clsx from "clsx";

export function MapEmbed({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  const { area, city } = COMPANY.location;

  return (
    <iframe
      title={title ?? `Kaart van ${COMPANY.name} in ${area}, ${city}`}
      src={getMapsEmbedUrl()}
      className={clsx("block w-full border-0", className)}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
