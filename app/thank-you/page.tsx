import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We received your request | Steward Seal Coating",
  description:
    "Thanks — a person will reply by email. Payment is not collected on this staging site.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Received</p>
      <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.2rem] leading-[1.12] sm:text-5xl">
        A person will reply
      </h1>
      <p className="mt-6 text-base leading-relaxed text-[var(--paper-dim)] sm:text-lg">
        Thanks — we received your request. Someone from Steward will follow up by
        email. We do not list a public phone number on this staging site.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-[var(--paper-dim)]">
        Payment is not collected here yet. Stripe checkout is still with Frank.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-12 items-center justify-center border border-[var(--line-strong)] px-6 text-sm"
      >
        Back to home
      </Link>
    </main>
  );
}
