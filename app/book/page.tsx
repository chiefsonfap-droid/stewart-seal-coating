import type { Metadata } from "next";
import Link from "next/link";
import { GhlFormEmbed } from "@/components/GhlFormEmbed";
import { GHL, OFFER } from "@/content";

export const metadata: Metadata = {
  title: "Request your on-site drone flight | Steward Seal Coating",
  description: `Request the ${OFFER.price} Drone Condition Report. On-site flight from Sudbury and Northern Ontario. Staging — checkout pending Stripe.`,
  robots: { index: false, follow: false },
};

const steps = [
  "Tell us the site (address, city, approximate lot size)",
  `A person replies to confirm the ${OFFER.price} report`,
  "On-site drone flight — about 60–90 minutes",
];

export default function Page() {
  return (
    <main id="main">
      <section className="mx-auto max-w-6xl px-5 pb-12 pt-14 md:pt-20">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
          On-site drone flight
        </p>
        <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[2.2rem] leading-[1.12] tracking-tight sm:text-5xl">
          Request your on-site drone flight
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--paper-dim)] sm:text-lg">
          The public price is <strong className="text-[var(--paper)]">{OFFER.price}</strong>.
          Flight runs about <strong className="text-[var(--paper)]">60–90 minutes</strong> on
          site in Sudbury and Northern Ontario.
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
          Payment is not collected on this page. Stripe checkout is still with Frank.
          Use the form — a person replies. Report fee credited if you later hire Steward
          for the work (see{" "}
          <Link href="/drone-report" className="underline underline-offset-4 hover:text-[var(--accent)]">
            the report page
          </Link>
          ).
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
        <div className="mx-auto max-w-3xl px-5 py-16">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
            Steward GoHighLevel form
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl">
            Request the {OFFER.price} report
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
            This is the existing Steward paid-report form. No new GHL account. No
            Conversation AI. Calendar and Stripe checkout are not live on this staging
            site.
          </p>
          <div className="mt-8">
            <GhlFormEmbed formId={GHL.paidReportFormId} title="Paid Drone Condition Report" />
          </div>
        </div>
      </section>
    </main>
  );
}
