import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { content, OFFER, SERVICE_AREA } from "@/content";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  robots: { index: false, follow: false },
};

const work = [
  {
    n: "01",
    name: "Seal coating",
    body: "Commercial-grade coats that slow UV, water, and oxidation on asphalt — scheduled around the people who use the lot.",
  },
  {
    n: "02",
    name: "Crack filling",
    body: "Hot-pour work before freeze-thaw opens a small crack into a rebuild. Honest scope, not a patch-and-run.",
  },
  {
    n: "03",
    name: "Line striping",
    body: "AODA-aware stalls, aisles, and ISA markings so the lot is usable — and the committee can show the work was done.",
  },
];

const board = [
  {
    term: "Board Approval Kit",
    body: "Aerials, severity ratings, and an executive summary your committee can actually vote on — not a sales deck.",
  },
  {
    term: "AODA",
    body: "Accessible stall layout and markings treated as a duty of care, not a nice-to-have stripe colour.",
  },
  {
    term: "WSIB",
    body: "Clearance framed as liability protection for the property — so the board is not guessing who is on site.",
  },
];

const reportContents = [
  "Aerial photographs and video of the lot",
  "Written condition report — severity rated minor, moderate, urgent",
  "Executive summary, prepared for the board",
  "Flight by a licensed, insured drone operator",
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
    a: `${SERVICE_AREA} We are not a provincial or national brand.`,
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
      <Work />
      <Report />
      <Founders />
      <Board />
      <Faq />
      <Quote />
    </main>
  );
}

function Hero() {
  return (
    <section className="border-b border-[var(--line-soft)]">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-20 text-center md:pb-32 md:pt-28">
        <p className="chapter">Sudbury, Ontario — On-site parking-lot work</p>
        <h1 className="display mx-auto mt-8 max-w-3xl text-4xl sm:text-5xl md:text-[3.6rem]">
          The condition of your lot, in writing.
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-base leading-[1.8] text-[var(--stone)]">
          An on-site aerial inspection and written condition report for parking
          lots — prepared so a property committee can decide with clear eyes.
          Within about an hour of Sudbury; farther by arrangement.
        </p>

        <div className="mx-auto mt-11 max-w-sm border-y border-[var(--line)] py-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#59544a]">
            {OFFER.name}
          </p>
          <p className="display mt-3 text-4xl">{OFFER.price}</p>
          <p className="mx-auto mt-3 max-w-xs text-[13px] leading-[1.7] text-[var(--stone)]">
            A {OFFER.valueAnchor} value. The full fee is credited toward
            qualifying lot work if you proceed.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <Link href="/drone-report" className="btn-seal">
            Request the $129 report
          </Link>
          <Link href="#quote" className="link-rule text-[13px] text-[var(--stone)]">
            Or request a quote for lot work
          </Link>
        </div>
      </div>
    </section>
  );
}

function Who() {
  return (
    <section className="border-b border-[var(--line-soft)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12 md:py-32">
        <p className="chapter md:col-span-4">Who we serve</p>
        <div className="md:col-span-8">
          <h2 className="display max-w-2xl text-3xl sm:text-4xl">
            Property committees who need a clear picture of the lot.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.8] text-[var(--stone)]">
            Churches, synagogues, mosques, temples, and other property owners in
            the Sudbury area who need documentation a board can trust — especially
            before budget season or major lot work. Travel is on-site. We are not
            a national brand.
          </p>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-b border-[var(--line-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="chapter md:col-span-4">The work</p>
          <div className="md:col-span-8">
            <h2 className="display max-w-2xl text-3xl sm:text-4xl">
              Seal coating, done as stewardship.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-[1.8] text-[var(--stone)]">
              If you need a quote for the work, ask. If the board needs a written
              picture first, buy the report.
            </p>
          </div>
        </div>
        <ol className="mt-16 border-t border-[var(--line)]">
          {work.map((item) => (
            <li
              key={item.name}
              className="grid gap-3 border-b border-[var(--line)] py-8 md:grid-cols-12 md:items-baseline md:gap-10"
            >
              <span className="text-xs leading-[1.2] tracking-[0.2em] text-[var(--faint)] md:col-span-1">
                {item.n}
              </span>
              <h3 className="display text-2xl md:col-span-4">{item.name}</h3>
              <p className="text-sm leading-[1.8] text-[var(--stone)] md:col-span-7">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Report() {
  return (
    <section className="border-b border-[var(--line-soft)]">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="chapter">{OFFER.name}</p>
          <h2 className="display mt-8 max-w-md text-3xl sm:text-4xl">
            The deliverable is paper the committee can stand behind.
          </h2>
          <p className="mt-6 max-w-md text-base leading-[1.8] text-[var(--stone)]">
            A {OFFER.valueAnchor} value — that figure is a value anchor, not a
            fake sale. The full $129 is credited toward qualifying Steward work
            on that property within {OFFER.creditWindow} if you proceed. No
            obligation either way.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5">
            <Link href="/drone-report" className="btn-seal">
              See what&rsquo;s included
            </Link>
          </div>
        </div>

        {/* Typeset specimen of the actual deliverable — no fake drone stills. */}
        <aside
          aria-label="What the report contains"
          className="border border-[var(--ink)] bg-[var(--bone)] p-10 outline outline-1 -outline-offset-8 outline-[var(--line-soft)] md:p-12"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--stone)]">
            Steward Seal Coating
          </p>
          <p className="display mt-6 text-3xl">Drone Condition Report</p>
          <p className="mt-2 text-[13px] italic text-[var(--faint)]">
            Prepared for the property committee
          </p>
          <ul className="mt-10 border-t border-[var(--line)]">
            {reportContents.map((item) => (
              <li
                key={item}
                className="border-b border-[var(--line-soft)] py-4 text-sm leading-[1.7] text-[var(--ink)]"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-baseline justify-between gap-4">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--stone)]">
              Prepaid
            </span>
            <span className="display text-2xl">{OFFER.price}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Founders() {
  return (
    <section id="about" className="border-b border-[var(--line-soft)]">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="chapter">Paul &amp; Andrew</p>
        <h2 className="display mt-8 text-3xl sm:text-4xl">
          Uncle and nephew. Two people on the lot.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-[1.8] text-[var(--stone)]">
          Paul brings 20-plus years in the trades. Andrew is a licensed, insured
          drone operator who flies the on-site report. No subcontractors on the
          story, and we do not invent client quotes.
        </p>
      </div>
    </section>
  );
}

function Board() {
  return (
    <section className="border-b border-[var(--line-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="chapter md:col-span-4">For the board</p>
          <h2 className="display max-w-2xl text-3xl sm:text-4xl md:col-span-8">
            Documentation, not a pitch.
          </h2>
        </div>
        <dl className="mt-16 border-t border-[var(--line)]">
          {board.map((item) => (
            <div
              key={item.term}
              className="grid gap-3 border-b border-[var(--line)] py-8 md:grid-cols-12 md:items-baseline md:gap-10"
            >
              <dt className="display text-2xl md:col-span-5">{item.term}</dt>
              <dd className="text-sm leading-[1.8] text-[var(--stone)] md:col-span-7">
                {item.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="border-b border-[var(--line-soft)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="chapter">Questions</p>
            <h2 className="display mt-8 max-w-[12ch] text-3xl sm:text-4xl">
              Straight answers.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="border-t border-[var(--line)]">
              {faqs.map((item) => (
                <details key={item.q} className="group border-b border-[var(--line)] py-6">
                  <summary className="display cursor-pointer list-none text-[1.2rem] hover:opacity-70 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-baseline justify-between gap-6">
                      {item.q}
                      <span
                        aria-hidden
                        className="shrink-0 text-base text-[var(--faint)] group-open:hidden"
                      >
                        +
                      </span>
                      <span
                        aria-hidden
                        className="hidden shrink-0 text-base text-[var(--faint)] group-open:inline"
                      >
                        −
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-[1.8] text-[var(--stone)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section id="quote" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-5">
          <p className="chapter">Quote path</p>
          <h2 className="display mt-8 max-w-sm text-3xl sm:text-4xl">
            Need the work, not the report?
          </h2>
          <p className="mt-6 max-w-sm text-base leading-[1.8] text-[var(--stone)]">
            Request a Steward Quote for seal coating, crack filling, or line
            striping. This path is a quote for lot work, not an inspection
            giveaway. A person replies by email.
          </p>
        </div>
        <div className="md:col-span-7">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
