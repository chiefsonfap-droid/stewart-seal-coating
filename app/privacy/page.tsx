import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Steward Seal Coating",
  description:
    "How 2608341 Ontario Inc. handles inquiry-form details on this staging site. Sudbury, Ontario.",
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
        Plain language for this staging site. Not a live offer. Not a lawyer’s letter.
        PIPEDA-aware Canadian stub.
      </p>

      <section className="mt-12 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">Who we are</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          2608341 Ontario Inc., operating as Steward Seal Coating. Sudbury, Ontario. We
          do not publish a street address, a public phone, or an HST number on this draft.
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">What we collect</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          If you use the quote form, we collect what you type: organization, contact name,
          email, phone, city/postal, lot size, and message. The paid Drone Condition Report
          booking will also collect site details needed to fly. We use that to reply about
          this request.
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">How we store it</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          Intended store is GoHighLevel in the Steward location. On this staging draft,
          the quote form may only log on the server until that embed is live. Payments for
          the $129 report, when connected, go through Stripe via GoHighLevel. Frank
          connects that processor; we do not put card numbers on this Next.js app.
        </p>
      </section>

      <section className="mt-8 border-t border-[var(--line)] pt-8">
        <h2 className="font-[family-name:var(--font-display)] text-xl">What we don’t do</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">
          We don’t sell this information. We don’t add you to cold outreach from this form
          alone. You can unsubscribe from marketing emails anytime.
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
          . We will follow up by email. We don’t publish a phone on this draft.
        </p>
      </section>
    </main>
  );
}
