import Link from "next/link";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--bg)]/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2">
        <Link
          href="/drone-report"
          className="inline-flex h-11 items-center justify-center bg-[var(--accent)] px-3 text-center text-xs font-semibold tracking-wide text-[var(--accent-ink)]"
        >
          Get the $129 Report
        </Link>
        <Link
          href="/#quote"
          className="inline-flex h-11 items-center justify-center border border-[var(--line-strong)] px-3 text-center text-xs font-semibold tracking-wide text-[var(--paper)]"
        >
          Request a Steward Quote
        </Link>
      </div>
    </div>
  );
}
