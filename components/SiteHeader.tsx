import Link from "next/link";
import { content } from "@/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line-soft)] bg-[var(--parchment)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-6 px-6 py-5">
        <Link href="/" className="min-w-0">
          <span className="block truncate text-[13px] font-medium uppercase tracking-[0.3em] text-[var(--ink)]">
            {content.wordmark}
          </span>
          <span className="mt-1 block truncate text-[11px] uppercase tracking-[0.18em] text-[var(--stone)]">
            {content.wordmarkNote}
          </span>
        </Link>
        <nav className="flex shrink-0 items-baseline gap-6 text-[13px] tracking-[0.02em] text-[var(--stone)] sm:gap-8">
          <Link href="/drone-report" className="hidden hover:text-[var(--ink)] sm:block">
            The report
          </Link>
          <Link href="/#work" className="hidden hover:text-[var(--ink)] md:block">
            The work
          </Link>
          <Link href="/#quote" className="hidden hover:text-[var(--ink)] sm:block">
            Quote
          </Link>
          <Link href="/drone-report" className="link-rule text-[var(--ink)]">
            Report — $129
          </Link>
        </nav>
      </div>
    </header>
  );
}
