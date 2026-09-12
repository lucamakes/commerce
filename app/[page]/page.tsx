import type { Metadata } from "next";

import Prose from "components/prose";
import { getPage } from "lib/shopify";
import { notFound } from "next/navigation";

export async function generateMetadata(props: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) return notFound();

  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || page.bodySummary,
    openGraph: {
      publishedTime: page.createdAt,
      modifiedTime: page.updatedAt,
      type: "article",
    },
  };
}

export default async function Page(props: {
  params: Promise<{ page: string }>;
}) {
  const params = await props.params;
  const page = await getPage(params.page);

  if (!page) return notFound();

  return (
    <>
      <h1 className="text-5xl font-light md:text-6xl">{page.title}</h1>
      <Prose className="mt-8" html={page.body} />
      <p className="mt-8 font-sans text-sm text-neutral-500 dark:text-neutral-400">
        {`Laatst bijgewerkt op ${new Intl.DateTimeFormat("nl-NL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(page.updatedAt))}.`}
      </p>
    </>
  );
}
