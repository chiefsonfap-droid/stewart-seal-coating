import type { Metadata } from "next";
import Link from "next/link";
import { GhlFormEmbed } from "@/components/GhlFormEmbed";
import { GHL, OFFER } from "@/content";

export const metadata: Metadata = {
  title: `Drone Condition Report — ${OFFER.price} | Steward Seal Coating`,
  description: `Board-ready aerial inspection and written condition report for your parking lot. ${OFFER.price}. A ${OFFER.valueAnchor} value. Credit if you proceed. Sudbury and Northern Ontario.`,
  robots: { index: false, follow: false },
};

const included = [
  "Aerial photos + video of the lot",
  "Written condition report with severity ratings (minor / moderate / urgent)",
  "Board-ready executive summary",
  "On-site drone flight by our licensed, insured operator",
];

const excluded = [
  "Seal coating, crack filling, or line striping work",
  "Warranty activation or a full Steward Protection Package",
  "Obligation to hire Steward afterward",
];

export default function Page() {
  return (
    <main id="main">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pb-24 md:pt-20">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
            Paid report · not a free inspection
          </p>
          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[2.2rem] leading-[1.12] tracking-tight sm:text-5xl">
            Drone Condition Report for your parking lot
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--paper-dim)] sm:text-lg">
            A board-ready aerial inspection and written condition report — so your
            committee can decide with clear eyes.
          </p>
          <p className="mt-6 font-[family-name:var(--font-display)] text-2xl">
            {OFFER.price}
            <span className="ml-3 text-base font-[family-name:var(--font-sans)] text-[var(--muted)]">
              · {OFFER.valueAnchor} value · not a sale price
            </span>
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--paper-dim)]">
            {OFFER.price} today. The full report fee is credited toward qualifying
            Steward parking-lot work if you book us afterward.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#request"
              className="inline-flex h-12 items-center justify-center bg-[var(--accent)] px-6 text-sm font-semibold tracking-wide text-[var(--accent-ink)]"
            >
              Request the report
            </Link>
            <Link
              href="/#quote"
              className="inline-flex h-12 items-center justify-center border border-[var(--line-strong)] px-6 text-sm text-[var(--paper)]"
            >
              Request a Steward Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--bg-2)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">What’s included</h2>
            <ul className="mt-6 grid gap-3">
              {included.map((item) => (
                <li key={item} className="border-l border-[var(--accent)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--mist)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl">What’s not included</h2>
            <ul className="mt-6 grid gap-3">
              {excluded.map((item) => (
                <li key={item} className="border-l border-[var(--line-strong)] bg-[var(--bg)] px-4 py-3 text-sm text-[var(--mist)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
            Credit if you proceed
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--paper-dim)]">
            The Drone Condition Report is <strong className="text-[var(--paper)]">{OFFER.price}</strong>,
            prepaid. If your organization later books qualifying Steward Seal Coating
            services (seal coating, crack filling, and/or line striping) for the inspected
            property, we will <strong className="text-[var(--paper)]">credit the full $129 report fee</strong> toward
            that job. Credit applies once per property inspection, is not redeemable for
            cash, and expires <strong className="text-[var(--paper)]">{OFFER.creditWindow}</strong> after report delivery unless we
            agree otherwise in writing. The report itself is a standalone deliverable — no
            obligation to proceed.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl">Who it’s for</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
                Property committees who need documentation the board can trust —
                especially before budget season or major lot work.
              </p>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl">Where we fly</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
                On-site from Sudbury and across Northern Ontario. We batch routes so
                scheduling stays honest. We are not a national brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="request" className="scroll-mt-24 border-t border-[var(--line)] bg-[var(--bg-2)]">
        <div className="mx-auto max-w-3xl px-5 py-20 md:py-24">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
            Lead capture · not checkout
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl sm:text-3xl">
            Request the paid report
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--paper-dim)]">
            This form captures your details for the {OFFER.price} Drone Condition
            Report. It is not payment. Stripe checkout is not on this staging site.
            A person replies.
          </p>
          <div className="mt-8">
            <GhlFormEmbed formId={GHL.paidReportFormId} title="Paid Drone Condition Report" />
          </div>
        </div>
      </section>
    </main>
  );
}
