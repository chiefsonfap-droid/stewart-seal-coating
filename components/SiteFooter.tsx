import Link from "next/link";
import { LEGAL_NAME } from "@/content";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--seal)] pb-28 text-[var(--on-seal)] md:pb-0">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--seal-soft)]">
          Steward Seal Coating
        </p>
        <p className="display mt-6 max-w-2xl text-3xl text-[var(--on-seal)] sm:text-4xl">
          Stewardship, not shortcuts.
        </p>
        <div className="mt-12 grid gap-10 border-t border-[var(--seal-line)] pt-10 md:grid-cols-2">
          <p className="max-w-md text-sm leading-[1.8] text-[var(--seal-soft)]">
            On-site seal coating and lot reports from Sudbury, Ontario. We are not a
            national brand. A person replies — use the form. We do not list a public
            phone number or street address on this staging site.
          </p>
          <div className="md:text-right">
            <p className="text-sm text-[var(--on-seal)]">{LEGAL_NAME}</p>
            <p className="mt-3 text-xs leading-[1.8] text-[var(--seal-soft)]">
              Staging draft — noindex, nofollow until production.
              <br />
              No HST number is published on this site.
            </p>
            <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs md:justify-end">
              <Link
                href="/privacy"
                className="text-[var(--on-seal)] underline decoration-[var(--seal-line)] underline-offset-4 hover:decoration-[var(--on-seal)]"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-[var(--on-seal)] underline decoration-[var(--seal-line)] underline-offset-4 hover:decoration-[var(--on-seal)]"
              >
                Terms
              </Link>
              <Link
                href="/drone-report"
                className="text-[var(--on-seal)] underline decoration-[var(--seal-line)] underline-offset-4 hover:decoration-[var(--on-seal)]"
              >
                Drone Condition Report
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
