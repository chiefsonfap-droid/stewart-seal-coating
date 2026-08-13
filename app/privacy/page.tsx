import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_NAME } from "@/content";

export const metadata: Metadata = {
  title: "Privacy — Steward Seal Coating",
  description: `How ${LEGAL_NAME} handles inquiry-form details on this staging site. Sudbury, Ontario.`,
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-16 md:py-24">
      <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Privacy</p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
        How we handle what you send.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-[var(--paper-dim)]">
        Plain language for this staging site. PIPEDA-aware Canadian stub. Not a
        lawyer’s letter.
      </p>

      <section className="mt-12 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">Who we are</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          {LEGAL_NAME}. Sudbury and Northern Ontario. We do not publish a street
          address, a public phone, or an HST number on this draft.
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">What we collect</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          If you use a form, we collect what you type: organization, contact name,
          email, phone, city, lot details, and message. We use that so a person can
          reply about this request.
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">How we store it</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          Forms submit to the existing Steward GoHighLevel location. This Next.js
          app does not store submissions and does not auto-send email. Payments for
          the $129 CAD + HST report, when connected, will go through Stripe — Frank
          connects that processor. We do not put card numbers on this app.
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">What we don’t do</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          We don’t sell this information. We don’t add you to cold outreach from this
          form alone. You can unsubscribe from marketing emails anytime.
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">Questions</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          Use the{" "}
          <Link
            href="/#quote"
            className="text-[var(--paper)] underline underline-offset-4 hover:text-[var(--accent)]"
          >
            quote form
          </Link>
          . A person replies by email. We don’t publish a phone on this draft.
        </p>
      </section>
    </main>
  );
}
