import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book your on-site drone flight | Steward Seal Coating",
  description:
    "Pick a time, pay $129 + HST, get confirmation. On-site drone flight about 60–90 minutes. Staging — checkout pending Frank Stripe.",
  robots: { index: false, follow: false },
};

const steps = [
  "Choose a slot",
  "Enter site details (address, city/postal, approx lot size)",
  "Pay $129 + HST — confirmation email follows",
];

export default function Page() {
  return (
    <main id="main">
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-14 md:pt-20">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
          On-site drone flight
        </p>
        <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[2.2rem] leading-[1.12] tracking-tight sm:text-5xl">
          Book your on-site drone flight
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--paper-dim)] sm:text-lg">
          Pick a time, pay <strong className="text-[var(--paper)]">$129 + HST</strong>, get
          confirmation. Flight runs about <strong className="text-[var(--paper)]">60–90 minutes</strong> on
          site.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          Stripe checkout · Report fee credited if you later hire Steward for the work
          (see terms on{" "}
          <Link href="/drone-report" className="underline underline-offset-4 hover:text-[var(--accent)]">
            /drone-report
          </Link>
          )
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step} className="border border-[var(--line)] bg-[var(--bg-2)] p-5">
              <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-[var(--accent)]">
                0{i + 1}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--mist)]">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--bg-2)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2">
          <div className="border border-dashed border-[var(--line-strong)] bg-[var(--bg)] p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              GHL calendar embed slot — Steward uf3jzmw1YurT1UHhcCI1
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl">
              Calendar — On-site drone flight
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
              This calendar books the on-site drone flight — a clustered Sudbury day, not
              a call. Duration 90 minutes, 15 min buffers before/after, typically 3–5
              flights a day. GHL Specialist snippet not ready. Labeled placeholder — not
              a live calendar.
            </p>
          </div>
          <div className="border border-dashed border-[var(--line-strong)] bg-[var(--bg)] p-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              GHL checkout embed slot — Steward uf3jzmw1YurT1UHhcCI1
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl">
              Checkout pending Frank Stripe
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
              Stripe-via-GHL checkout attaches here in test mode after Frank connects
              Stripe. Not a live payment widget. Do not enter card details on this page.
            </p>
            <p className="mt-4 text-sm text-[var(--mist)]">$129 + HST · prepaid report</p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
              You’ll receive a board-ready Drone Condition Report after the flight. No
              obligation to proceed with lot work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
