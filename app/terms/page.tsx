import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_NAME, OFFER } from "@/content";

export const metadata: Metadata = {
  title: "Terms — Steward Seal Coating",
  description: `Canadian staging terms for ${LEGAL_NAME}. Drone Condition Report is prepaid ${OFFER.price}.`,
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      <p className="chapter">Terms</p>
      <h1 className="display mt-8 text-4xl">Staging terms of service.</h1>
      <p className="mt-6 text-base leading-[1.8] text-[var(--stone)]">
        Ontario law. {LEGAL_NAME}. This page is a Canadian stub for staging.
      </p>

      <section className="mt-14 border-t border-[var(--line)] pt-8">
        <h2 className="display text-2xl">Drone Condition Report</h2>
        <p className="mt-4 text-sm leading-[1.8] text-[var(--stone)]">
          The report is prepaid at{" "}
          <strong className="font-medium text-[var(--ink)]">{OFFER.price}</strong>. It is
          a standalone deliverable. If you later book qualifying Steward
          parking-lot work (seal coating, crack filling, and/or line striping)
          for the inspected property, we credit the full $129 toward that job,
          once per property inspection, not redeemable for cash, expiring{" "}
          {OFFER.creditWindow} after report delivery unless we agree otherwise in
          writing. No obligation to proceed. See{" "}
          <Link href="/drone-report" className="link-rule">
            the report page
          </Link>
          .
        </p>
      </section>

      <section className="mt-14 border-t border-[var(--line)] pt-8">
        <h2 className="display text-2xl">Jobs — 50% deposit</h2>
        <p className="mt-4 text-sm leading-[1.8] text-[var(--stone)]">
          For seal coating, crack filling, and line striping jobs (not the
          report): estimates are typically valid 60 days. Work proceeds on a{" "}
          <strong className="font-medium text-[var(--ink)]">50% deposit</strong>, with the
          remaining 50% due on completion, unless a written quote says otherwise.
          Payment methods are confirmed on the quote. The prepaid $129 report is
          separate from this deposit schedule.
        </p>
      </section>

      <section className="mt-14 border-t border-[var(--line)] pt-8">
        <h2 className="display text-2xl">Scheduling and weather</h2>
        <p className="mt-4 text-sm leading-[1.8] text-[var(--stone)]">
          On-site drone flights run about 60 to 90 minutes. We travel within
          about an hour of Sudbury by default — farther by arrangement — and we
          batch routes. Weather, airspace, and site access can move a slot; we
          will reschedule honestly.
        </p>
      </section>

      <section className="mt-14 border-t border-[var(--line)] pt-8">
        <h2 className="display text-2xl">Governing law</h2>
        <p className="mt-4 text-sm leading-[1.8] text-[var(--stone)]">
          These terms are governed by the laws of the Province of Ontario and the
          federal laws of Canada applicable therein.
        </p>
      </section>
    </main>
  );
}
