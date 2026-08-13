import Link from "next/link";
import { content, OFFER } from "@/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--bg)]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden
            className="grid h-9 w-9 shrink-0 place-items-center border border-[var(--accent)] font-[family-name:var(--font-display)] text-xs font-semibold tracking-[0.12em] text-[var(--accent)]"
          >
            {content.mark}
          </span>
          <span className="min-w-0">
            <span className="block truncate font-[family-name:var(--font-display)] text-sm tracking-wide text-[var(--paper)]">
              {content.wordmark}
            </span>
            <span className="block truncate text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
              {content.wordmarkNote}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-[var(--mist)] md:flex">
          <Link href="/drone-report" className="hover:text-[var(--paper)]">
            Drone report
          </Link>
          <Link href="/book" className="hover:text-[var(--paper)]">
            Request
          </Link>
          <Link href="/#quote" className="hover:text-[var(--paper)]">
            Quote
          </Link>
          <Link
            href="/drone-report"
            className="bg-[var(--accent)] px-4 py-2 text-xs font-semibold tracking-wide text-[var(--accent-ink)]"
          >
            {content.navCta}
          </Link>
        </nav>
        <Link
          href="/drone-report"
          className="bg-[var(--accent)] px-3 py-2 text-xs font-semibold tracking-wide text-[var(--accent-ink)] md:hidden"
        >
          {OFFER.priceShort}
        </Link>
      </div>
    </header>
  );
}
