import Link from "next/link";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line-soft)] bg-[var(--parchment)]/95 backdrop-blur-sm md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <Link href="/#quote" className="link-rule text-[12px] text-[var(--stone)]">
          Request a quote
        </Link>
        <Link
          href="/drone-report"
          className="inline-flex h-11 items-center justify-center bg-[var(--seal)] px-5 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--on-seal)]"
        >
          The $129 report
        </Link>
      </div>
    </div>
  );
}
