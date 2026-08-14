import type { Metadata } from "next";
import Link from "next/link";
import { GhlFormEmbed } from "@/components/GhlFormEmbed";
import { GHL, OFFER, SERVICE_AREA } from "@/content";

export const metadata: Metadata = {
  title: `Drone Condition Report — ${OFFER.price} | Steward Seal Coating`,
  description: `Board-ready aerial inspection and written condition report for your parking lot. ${OFFER.price}. A ${OFFER.valueAnchor} value. Credit if you proceed. Sudbury, Ontario.`,
  robots: { index: false, follow: false },
};

const included = [
  "Aerial photographs and video of the lot",
  "Written condition report with severity ratings — minor, moderate, urgent",
  "Executive summary, prepared for the board",
  "On-site drone flight by our licensed, insured operator",
];

const excluded = [
  "Seal coating, crack filling, or line striping work",
  "Warranty activation or a full Steward Protection Package",
  "Any obligation to hire Steward afterward",
];

export default function Page() {
  return (
    <main id="main">
      <section className="border-b border-[var(--line-soft)]">
        <div className="mx-auto max-w-4xl px-6 pb-24 pt-20 text-center md:pb-32 md:pt-28">
          <p className="chapter">Paid report — not a free inspection</p>
          <h1 className="display mx-auto mt-8 max-w-2xl text-4xl sm:text-5xl">
            The Drone Condition Report
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base leading-[1.8] text-[var(--stone)]">
            A board-ready aerial inspection and written condition report — so
            your committee can decide with clear eyes.
          </p>
          <div className="mx-auto mt-11 max-w-sm border-y border-[var(--line)] py-6">
            <p className="display text-4xl">{OFFER.price}</p>
            <p className="mx-auto mt-3 max-w-xs text-[13px] leading-[1.7] text-[var(--stone)]">
              A {OFFER.valueAnchor} value — an anchor, not a sale price. The
              full report fee is credited toward qualifying Steward lot work if
              you book us afterward.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <Link href="#request" className="btn-seal">
              Request the report
            </Link>
            <Link href="/#quote" className="link-rule text-[13px] text-[var(--stone)]">
              Or request a Steward Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line-soft)]">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <h2 className="display text-3xl">What&rsquo;s included</h2>
            <ul className="mt-8 border-t border-[var(--line)]">
              {included.map((item) => (
                <li
                  key={item}
                  className="border-b border-[var(--line-soft)] py-4 text-sm leading-[1.7] text-[var(--ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-3xl">What&rsquo;s not</h2>
            <ul className="mt-8 border-t border-[var(--line)]">
              {excluded.map((item) => (
                <li
                  key={item}
                  className="border-b border-[var(--line-soft)] py-4 text-sm leading-[1.7] text-[var(--stone)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line-soft)]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <p className="chapter md:col-span-4">Credit if you proceed</p>
            <div className="md:col-span-8">
              <p className="max-w-2xl text-base leading-[1.8] text-[var(--stone)]">
                The Drone Condition Report is{" "}
                <strong className="font-medium text-[var(--ink)]">{OFFER.price}</strong>,
                prepaid. If your organization later books qualifying Steward Seal
                Coating services — seal coating, crack filling, and/or line
                striping — for the inspected property, we credit the full $129
                report fee toward that job. Credit applies once per property
                inspection, is not redeemable for cash, and expires{" "}
                <strong className="font-medium text-[var(--ink)]">{OFFER.creditWindow}</strong>{" "}
                after report delivery unless we agree otherwise in writing. The
                report itself is a standalone deliverable — no obligation to
                proceed.
              </p>
              <div className="mt-14 grid gap-10 border-t border-[var(--line)] pt-10 sm:grid-cols-2">
                <div>
                  <h3 className="display text-2xl">Who it&rsquo;s for</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-[var(--stone)]">
                    Property committees who need documentation the board can
                    trust — especially before budget season or major lot work.
                  </p>
                </div>
                <div>
                  <h3 className="display text-2xl">Where we fly</h3>
                  <p className="mt-4 text-sm leading-[1.8] text-[var(--stone)]">
                    {SERVICE_AREA} We batch routes so scheduling stays honest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="request" className="scroll-mt-24">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <p className="chapter">Lead capture — not checkout</p>
          <h2 className="display mt-8 text-3xl">Request the paid report</h2>
          <p className="mt-6 text-sm leading-[1.8] text-[var(--stone)]">
            This form captures your details for the {OFFER.price} Drone
            Condition Report. It is not payment. Stripe checkout is not on this
            staging site. A person replies.
          </p>
          <div className="mt-10">
            <GhlFormEmbed formId={GHL.paidReportFormId} title="Paid Drone Condition Report" />
          </div>
        </div>
      </section>
    </main>
  );
}
