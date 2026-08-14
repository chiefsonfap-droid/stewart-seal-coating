import type { Metadata } from "next";
import Link from "next/link";
import { LEGAL_NAME } from "@/content";

export const metadata: Metadata = {
  title: "Privacy — Steward Seal Coating",
  description: `How ${LEGAL_NAME} handles inquiry-form details on this staging site. Sudbury, Ontario.`,
  robots: { index: false, follow: false },
};

const sections = [
  {
    h: "Who we are",
    body: `${LEGAL_NAME}. Sudbury, Ontario. We do not publish a street address, a public phone, or an HST number on this draft.`,
  },
  {
    h: "What we collect",
    body: "If you use a form, we collect what you type: organization, contact name, email, phone, city, lot details, and message. We use that so a person can reply about this request.",
  },
  {
    h: "How we store it",
    body: "Forms submit to the existing Steward GoHighLevel location. This Next.js app does not store submissions and does not auto-send email. Payments for the $129 CAD + HST report, when connected, will go through Stripe — Frank connects that processor. We do not put card numbers on this app.",
  },
  {
    h: "What we don’t do",
    body: "We don’t sell this information. We don’t add you to cold outreach from this form alone. You can unsubscribe from marketing emails anytime.",
  },
];

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-6 py-24 md:py-32">
      <p className="chapter">Privacy</p>
      <h1 className="display mt-8 text-4xl">How we handle what you send.</h1>
      <p className="mt-6 text-base leading-[1.8] text-[var(--stone)]">
        Plain language for this staging site. PIPEDA-aware Canadian stub. Not a
        lawyer&rsquo;s letter.
      </p>

      {sections.map((section) => (
        <section key={section.h} className="mt-14 border-t border-[var(--line)] pt-8">
          <h2 className="display text-2xl">{section.h}</h2>
          <p className="mt-4 text-sm leading-[1.8] text-[var(--stone)]">{section.body}</p>
        </section>
      ))}

      <section className="mt-14 border-t border-[var(--line)] pt-8">
        <h2 className="display text-2xl">Questions</h2>
        <p className="mt-4 text-sm leading-[1.8] text-[var(--stone)]">
          Use the{" "}
          <Link href="/#quote" className="link-rule">
            quote form
          </Link>
          . A person replies by email. We don&rsquo;t publish a phone on this draft.
        </p>
      </section>
    </main>
  );
}
