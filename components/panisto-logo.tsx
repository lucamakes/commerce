import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const logoSizes = {
  default: { width: 140, height: 40, className: "h-8" },
  footer: { width: 400, height: 120, className: "h-24 md:h-28" },
  nav: { width: 240, height: 70, className: "h-12 md:h-16" },
} as const;

export default function PanistoLogo({
  className,
  size = "default",
}: {
  className?: string;
  size?: keyof typeof logoSizes;
}) {
  const logoSize = logoSizes[size];

  return (
    <Link href="/" prefetch={true} className={clsx("inline-flex shrink-0", className)}>
      <Image
        src="/panisto-logo.png"
        alt="Panisto"
        width={logoSize.width}
        height={logoSize.height}
        className={clsx("w-auto dark:invert", logoSize.className)}
        priority
      />
    </Link>
  );
}
