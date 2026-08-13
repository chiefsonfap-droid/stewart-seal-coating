import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You’re booked | Steward Seal Coating",
  description:
    "Thanks — we received your payment and flight request. Confirmation is on its way by email.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Confirmation</p>
      <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.2rem] leading-[1.12] sm:text-5xl">
        You’re booked
      </h1>
      <p className="mt-6 text-base leading-relaxed text-[var(--paper-dim)] sm:text-lg">
        Thanks — we received your payment and flight request. Confirmation is on its way
        by email. We’ll see you on site for the drone flight and deliver your board-ready
        report after.
      </p>
      <p className="mt-4 text-sm leading-relaxed text-[var(--paper-dim)]">
        Questions? Reply to the confirmation email. We’ll follow up by email — we do not
        publish a phone number on this staging draft.
      </p>
      <p className="mt-8 text-sm leading-relaxed text-[var(--mist)]">
        Meanwhile, skim what a Steward Protection Package includes →{" "}
        <Link href="/#services" className="underline underline-offset-4 hover:text-[var(--accent)]">
          services
        </Link>
        .
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
