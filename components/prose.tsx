import clsx from "clsx";

const Prose = ({ html, className }: { html: string; className?: string }) => {
  return (
    <div
      className={clsx(
        "prose max-w-none font-sans text-base leading-relaxed text-neutral-600 prose-headings:mt-8 prose-headings:font-light prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-accent prose-a:underline prose-a:underline-offset-4 prose-a:hover:text-accent-hover prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-neutral-300 dark:prose-headings:text-white dark:prose-a:text-accent-light dark:prose-strong:text-white",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;
