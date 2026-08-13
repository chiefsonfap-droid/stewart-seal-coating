import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-24">
      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">404</p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
        Page not found.
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[var(--paper-dim)]">
        That path is not on this staging site.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--accent-ink)]"
      >
        Back to home
      </Link>
    </main>
  );
}
