import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { content, OFFER } from "@/content";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  robots: { index: false, follow: false },
};

const packages = [
  {
    name: "Seal coating",
    body: "Commercial-grade coats that slow UV, water, and oxidation on asphalt — scheduled around the people who use the lot.",
  },
  {
    name: "Crack filling",
    body: "Hot-pour work before freeze-thaw opens a small crack into a rebuild. Honest scope, not a patch-and-run.",
  },
  {
    name: "Line striping",
    body: "AODA-aware stalls, aisles, and ISA markings so the lot is usable — and the committee can show the work was done.",
  },
];

const kit = [
  {
    name: "Board Approval Kit",
    body: "Aerials, severity ratings, and an executive summary your committee can actually vote on — not a sales deck.",
  },
  {
    name: "AODA",
    body: "Accessible stall layout and markings treated as a duty of care, not a nice-to-have stripe colour.",
  },
  {
    name: "WSIB as your protection",
    body: "Clearance framed as liability protection for the property — so the board is not guessing who is on site.",
  },
];

const faqs = [
  {
    q: "What does the Drone Condition Report cost?",
    a: `The public price is ${OFFER.price}. It is a prepaid, standalone deliverable — not a free inspection. We do not publish an HST number on this site.`,
  },
  {
    q: "Is the drone flight free?",
    a: "No. The on-site flight is how we produce the paid report. If you want lot work without buying the report first, use Request a Steward Quote.",
  },
  {
    q: "What is the $350 figure?",
    a: `The aerial lot report is a ${OFFER.valueAnchor} value — that is a value anchor for the work in the report, not a crossed-out sale price.`,
  },
  {
    q: "If we hire you afterward?",
    a: `The full $129 report fee is credited toward qualifying Steward seal coating, crack filling, and/or line striping on that property within ${OFFER.creditWindow} of report delivery. Not cash. No obligation to proceed.`,
  },
  {
    q: "Where do you work?",
    a: "We travel on-site from Sudbury and across Northern Ontario. We are not a provincial or national brand. If your lot is farther, ask via the quote form — we will say honestly whether a trip makes sense.",
  },
  {
    q: "How do we reach you?",
    a: "A person replies. Use the form on this site. We do not list a public phone number or street address on this staging draft.",
  },
];

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Who />
      <Services />
      <Founders />
      <Trust />
      <ReportTeaser />
      <Faq />
      <Quote />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 50% at 85% -10%, color-mix(in srgb, var(--accent) 26%, transparent), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-14 md:pb-28 md:pt-20">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Sudbury · Northern Ontario · on-site travel
        </p>
        <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[2.2rem] leading-[1.12] tracking-tight text-[var(--paper)] sm:text-5xl md:text-[3.2rem]">
          Paid drone lot report — {OFFER.price}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--paper-dim)] sm:text-lg">
          An on-site aerial inspection and written condition report for parking lots
          in Sudbury and Northern Ontario. The report is a {OFFER.valueAnchor} value.
          If you proceed with qualifying seal coating, the $129 is credited toward
          the work.
        </p>
        <p className="mt-4 font-[family-name:var(--font-display)] text-2xl text-[var(--paper)]">
          {OFFER.price}
          <span className="ml-3 text-base font-[family-name:var(--font-sans)] text-[var(--muted)]">
            · {OFFER.valueAnchor} value · credit if you proceed
          </span>
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/drone-report"
            className="inline-flex h-12 items-center justify-center bg-[var(--accent)] px-6 text-sm font-semibold tracking-wide text-[var(--accent-ink)]"
          >
            Get the {OFFER.price} report
          </Link>
          <Link
            href="#quote"
            className="inline-flex h-12 items-center justify-center border border-[var(--line-strong)] px-6 text-sm text-[var(--paper)]"
          >
            Request a Steward Quote
          </Link>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {["On-site from Sudbury", "Northern Ontario travel", "A person replies — use the form"].map(
            (item) => (
              <li
                key={item}
                className="border-l border-[var(--accent)] bg-[var(--bg-2)] px-4 py-3 text-sm text-[var(--mist)]"
              >
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

function Who() {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--bg-2)]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Who we serve</p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
          Property committees who need a clear picture of the lot.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--paper-dim)]">
          Churches, synagogues, mosques, temples, and other property owners in Sudbury
          and Northern Ontario who need documentation a board can trust — especially
          before budget season or major lot work. Travel is on-site. We are not a
          national brand.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Physical lot work
        </p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
          Seal coating, done as stewardship.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--paper-dim)]">
          Seal coating, crack filling, and line striping. If you need a quote for the
          work, ask. If the board needs a written picture first, buy the report.
        </p>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <li key={item.name} className="border border-[var(--line)] bg-[var(--bg-2)] p-6">
              <h3 className="font-[family-name:var(--font-display)] text-xl">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section id="about" className="border-t border-[var(--line)] bg-[var(--bg-2)]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Paul &amp; Andrew</p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
          Uncle and nephew. Two people on the lot.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--paper-dim)]">
          Paul brings 20+ years in the trades. Andrew is a licensed, insured drone
          operator who flies the on-site report. No subcontractors on the story, and
          we do not invent client quotes.
        </p>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Trust for the board</p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
          Paper the committee can stand behind.
        </h2>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {kit.map((item) => (
            <li key={item.name} className="border border-[var(--line)] bg-[var(--bg-2)] p-6">
              <h3 className="font-[family-name:var(--font-display)] text-xl">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--paper-dim)]">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ReportTeaser() {
  return (
    <section className="border-t border-[var(--line)] bg-[var(--bg-2)]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <article className="border border-[var(--accent)] bg-[var(--bg)] p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
            {OFFER.name}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight">
            Board-ready aerial inspection + written report — {OFFER.price}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--paper-dim)]">
            A {OFFER.valueAnchor} value — that figure is a value anchor, not a fake sale.
            Full $129 credited toward qualifying Steward work on that property within{" "}
            {OFFER.creditWindow} if you proceed.
          </p>
          <Link
            href="/drone-report"
            className="mt-8 inline-flex h-12 items-center justify-center bg-[var(--accent)] px-6 text-sm font-semibold tracking-wide text-[var(--accent-ink)]"
          >
            See what’s included
          </Link>
        </article>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">FAQ</p>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl sm:text-4xl">
          Straight answers.
        </h2>
        <div className="mt-10 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {faqs.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="cursor-pointer list-none font-[family-name:var(--font-display)] text-lg text-[var(--paper)] [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-6">
                  {item.q}
                  <span className="mt-1 text-[var(--accent)] group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--paper-dim)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section id="quote" className="scroll-mt-24 border-t border-[var(--line)] bg-[var(--bg-2)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">Quote path</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
            Need the work, not the report?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--paper-dim)]">
            Request a Steward Quote for seal coating, crack filling, or line striping.
            This path is a quote for lot work, not an inspection giveaway. A person
            replies by email.
          </p>
        </div>
        <div className="md:col-span-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
