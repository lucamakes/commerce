export default function Loading() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
      <div className="mb-10">
        <div className="h-10 w-64 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-3 h-5 w-32 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index}>
            <div className="aspect-square animate-pulse bg-neutral-200 dark:bg-neutral-800" />
            <div className="mt-4 h-5 w-3/4 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-800" />
            <div className="mt-2 h-4 w-1/2 animate-pulse rounded-sm bg-neutral-200 dark:bg-neutral-800" />
          </li>
        ))}
      </ul>
    </section>
  );
}
