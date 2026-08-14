import type { Metadata } from "next";
import Link from "next/link";
import { GhlFormEmbed } from "@/components/GhlFormEmbed";
import { GHL, OFFER } from "@/content";

export const metadata: Metadata = {
  title: "Request your on-site drone flight | Steward Seal Coating",
  description: `Request the ${OFFER.price} Drone Condition Report. On-site flight from Sudbury, Ontario. Staging — checkout pending Stripe.`,
  robots: { index: false, follow: false },
};

const steps = [
  {
    n: "01",
    body: "Tell us the site — address, city, approximate lot size.",
  },
  {
    n: "02",
    body: `A person replies to confirm the ${OFFER.price} report.`,
  },
  {
    n: "03",
    body: "On-site drone flight — about 60 to 90 minutes.",
  },
];

export default function Page() {
  return (
    <main id="main">
      <section className="border-b border-[var(--line-soft)]">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pt-28">
          <p className="chapter">On-site drone flight</p>
          <h1 className="display mt-8 max-w-2xl text-4xl sm:text-5xl">
            Request your on-site flight.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-[1.8] text-[var(--stone)]">
            The public price is{" "}
            <strong className="font-medium text-[var(--ink)]">{OFFER.price}</strong>. The
            flight runs about 60 to 90 minutes on site, within about an hour of
            Sudbury by default.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-[1.8] text-[var(--faint)]">
            Payment is not collected on this page. Stripe checkout is still with
            Frank. Use the form — a person replies. The report fee is credited if
            you later hire Steward for the work; see{" "}
            <Link href="/drone-report" className="link-rule">
              the report page
            </Link>
            .
          </p>
          <ol className="mt-16 border-t border-[var(--line)]">
            {steps.map((step) => (
              <li
                key={step.n}
                className="grid gap-2 border-b border-[var(--line)] py-6 md:grid-cols-12 md:items-baseline"
              >
                <span className="text-xs tracking-[0.2em] text-[var(--faint)] md:col-span-1">
                  {step.n}
                </span>
                <p className="text-sm leading-[1.8] text-[var(--ink)] md:col-span-11">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <p className="chapter">Steward GoHighLevel form</p>
          <h2 className="display mt-8 text-3xl">Request the {OFFER.price} report</h2>
          <p className="mt-6 text-sm leading-[1.8] text-[var(--stone)]">
            This is the existing Steward paid-report form. No new GHL account. No
            Conversation AI. Calendar and Stripe checkout are not live on this
            staging site.
          </p>
          <div className="mt-10">
            <GhlFormEmbed formId={GHL.paidReportFormId} title="Paid Drone Condition Report" />
          </div>
        </div>
      </section>
    </main>
  );
}
