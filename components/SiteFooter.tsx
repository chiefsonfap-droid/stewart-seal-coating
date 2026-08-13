import Link from "next/link";
import { LEGAL_NAME } from "@/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-2)] pb-24 md:pb-0">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="font-[family-name:var(--font-display)] text-xl text-[var(--paper)]">
          Stewardship, not shortcuts.
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--paper-dim)]">
          On-site seal coating and lot reports from Sudbury and Northern Ontario. We
          are not a national brand. A person replies — use the form. We do not list a
          public phone number or street address on this staging site.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-[var(--paper)]">{LEGAL_NAME}</p>
        <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
          Staging draft. noindex, nofollow until production. No HST number is published
          on this site.
        </p>
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
      </div>
    </footer>
  );
}
