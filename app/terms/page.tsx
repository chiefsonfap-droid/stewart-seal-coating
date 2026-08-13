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
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 md:py-24">
      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Terms</p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
        Staging terms of service.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-[var(--paper-dim)]">
        Ontario law. {LEGAL_NAME}. This page is a Canadian stub for staging.
      </p>

      <section className="mt-12 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">Drone Condition Report</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          The report is prepaid at <strong className="text-[var(--paper)]">{OFFER.price}</strong>.
          It is a standalone deliverable. If you later book qualifying Steward parking-lot
          work (seal coating, crack filling, and/or line striping) for the inspected
          property, we credit the full $129 toward that job, once per property inspection,
          not redeemable for cash, expiring {OFFER.creditWindow} after report delivery unless we agree
          otherwise in writing. No obligation to proceed. See{" "}
          <Link href="/drone-report" className="underline underline-offset-4 hover:text-[var(--accent)]">
            the report page
          </Link>
          .
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">Jobs — 50% deposit</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          For seal coating, crack filling, and line striping jobs (not the report):
          estimates are typically valid 60 days. Work proceeds on a{" "}
          <strong className="text-[var(--paper)]">50% deposit</strong>, with the remaining 50%
          due on completion, unless a written quote says otherwise. Payment methods are
          confirmed on the quote. The prepaid $129 report is separate from this deposit
          schedule.
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">Scheduling and weather</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          On-site drone flights run about 60–90 minutes. We travel from Sudbury and
          across Northern Ontario and batch routes. Weather, airspace, and site access
          can move a slot; we will reschedule honestly.
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">Governing law</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          These terms are governed by the laws of the Province of Ontario and the federal
          laws of Canada applicable therein.
        </p>
      </section>
    </main>
  );
}
