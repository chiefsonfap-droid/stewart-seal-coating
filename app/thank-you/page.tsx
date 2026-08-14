import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "We received your request | Steward Seal Coating",
  description:
    "Thanks — a person will reply by email. Payment is not collected on this staging site.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
      <p className="chapter">Received</p>
      <h1 className="display mt-8 text-4xl sm:text-5xl">A person will reply.</h1>
      <p className="mx-auto mt-8 max-w-xl text-base leading-[1.8] text-[var(--stone)]">
        Thanks — we received your request. Someone from Steward will follow up by
        email. We do not list a public phone number on this staging site.
      </p>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-[1.8] text-[var(--faint)]">
        Payment is not collected here yet. Stripe checkout is still with Frank.
      </p>
      <div className="mt-12">
        <Link href="/" className="link-rule text-sm">
          Back to home
        </Link>
      </div>
    </main>
  );
}
