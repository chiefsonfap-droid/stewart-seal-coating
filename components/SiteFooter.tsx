import Link from "next/link";
import { content } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-2)] pb-20 md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="font-[family-name:var(--font-display)] text-xl text-[var(--paper)]">
          Stewardship, not shortcuts.
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--paper-dim)]">
          Sudbury-based parking-lot work for faith communities and property committees.
          We do not publish a street address or phone on this staging draft.
        </p>
        <p className="mt-6 text-xs leading-relaxed text-[var(--muted)]">{content.copyrightLine}</p>
        <nav className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs">
          <Link
            href="/privacy"
            className="text-[var(--paper)] underline underline-offset-4 hover:text-[var(--accent)]"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-[var(--paper)] underline underline-offset-4 hover:text-[var(--accent)]"
          >
            Terms
          </Link>
          <Link
            href="/drone-report"
            className="text-[var(--paper)] underline underline-offset-4 hover:text-[var(--accent)]"
          >
            Drone Condition Report
          </Link>
        </nav>
        <p className="mt-8 text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
          2608341 Ontario Inc. · Staging · not a live offer · noindex
        </p>
      </div>
    </footer>
  );
}
