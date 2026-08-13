import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { content } from "@/content";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  robots: { index: false, follow: false },
};

const packages = [
  {
    name: "Seal coating",
    body: "Commercial-grade coats that slow UV, water, and oxidation on asphalt — scheduled around worship and committee calendars.",
  },
  {
    name: "Crack filling",
    body: "Hot-pour work before freeze-thaw opens a small crack into a rebuild. Honest scope, not a patch-and-run.",
  },
  {
    name: "Line striping",
    body: "AODA-aware stalls, aisles, and ISA markings so the lot is usable — and the board can show it did the work.",
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
    a: "The report is $129 + HST. It is a prepaid, standalone deliverable — not a free inspection.",
  },
  {
    q: "Is the drone flight free?",
    a: "No. The on-site flight is how we produce the paid report. If you want lot work without buying the report first, use Request a Steward Quote.",
  },
  {
    q: "What is included?",
    a: "Aerial photos and video, a written condition report with severity ratings (minor / moderate / urgent), and a board-ready executive summary.",
  },
  {
    q: "If we hire you afterward?",
    a: "The full $129 report fee is credited toward qualifying Steward seal coating, crack filling, and/or line striping on that property within 90 days of report delivery. Not cash. No obligation to proceed.",
  },
  {
    q: "We are in Sudbury or Azilda. Can you come?",
    a: "Yes — we are Sudbury-based and prioritize sites within about an hour. Book the report on /book.",
  },
  {
    q: "We are farther — Toronto or the south?",
    a: "We sequence farther work honestly. No same-week province-wide promises and no fake scarcity. Ask via the quote form.",
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
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          background:
            "radial-gradient(70% 50% at 85% -10%, color-mix(in srgb, var(--accent) 26%, transparent), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-14 md:pb-28 md:pt-20">
        <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
          Sudbury · faith communities · property committees
        </p>
        <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[2.2rem] leading-[1.12] tracking-tight text-[var(--paper)] sm:text-5xl md:text-[3.2rem]">
          Stewardship, not shortcuts.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--paper-dim)] sm:text-lg">
          We are Sudbury-based. Seal coating, crack filling, and line striping for lots
          that have to last — with a board-ready Drone Condition Report when the
          committee needs a clear picture first.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/drone-report"
            className="inline-flex h-12 items-center justify-center bg-[var(--accent)] px-6 text-sm font-semibold tracking-wide text-[var(--accent-ink)]"
          >
            Get the $129 Report
          </Link>
          <Link
            href="#quote"
            className="inline-flex h-12 items-center justify-center border border-[var(--line-strong)] px-6 text-sm text-[var(--paper)]"
          >
            Request a Steward Quote
          </Link>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-3">
          {[
            "Local-first around Sudbury",
            "Board Approval Kit",
            "AODA-aware striping",
          ].map((item) => (
            <li
              key={item}
              className="border-l border-[var(--accent)] bg-[var(--bg-2)] px-4 py-3 text-sm text-[var(--mist)]"
            >
              {item}
            </li>
          ))}
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
          Faith communities and the committees who have to decide.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--paper-dim)]">
          Churches, synagogues, mosques, temples, gurdwaras, and other property
          committees who need documentation the board can trust — especially before
          budget season or major lot work. We prioritize sites within about an hour of
          Sudbury and batch routes so scheduling stays honest.
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
          Steward Protection Package
        </p>
        <h2 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl leading-tight sm:text-4xl">
          The lot work, done as stewardship.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--paper-dim)]">
          Seal coating, crack filling, and line striping. If you
          need a quote for the work, ask. If the board needs a written picture first,
          buy the report.
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
          operator (ex-film location manager) who flies the on-site report. No
          subcontractors on the story, and we do not invent client quotes.
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
            Drone Condition Report
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl leading-tight">
            Board-ready aerial inspection + written report — $129 + HST
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--paper-dim)]">
            Comparable to ~$350 in typical assessment value — that figure is a price
            anchor, not a giveaway. Full $129 credited toward qualifying Steward work on
            that property within 90 days if you proceed.
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
            This path is a quote for lot work, not an inspection giveaway. We will follow up by email.
          </p>
        </div>
        <div className="md:col-span-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
