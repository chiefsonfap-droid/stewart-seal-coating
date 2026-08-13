"use client";

import { useState, type FormEvent } from "react";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad");
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("err");
    }
  }

  return (
    <div className="border border-[var(--line)] bg-[var(--bg-2)] p-6">
      <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
        GHL quote form embed slot — Steward uf3jzmw1YurT1UHhcCI1
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl">
        Request a Steward Quote
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--paper-dim)]">
        Tell us about your lot. We’ll follow up with honest next steps for seal coating,
        crack filling, or line striping — no pressure.
      </p>
      <form onSubmit={onSubmit} className="mt-6 grid gap-4">
        <label className="grid gap-1 text-sm">
          <span>Organization name</span>
          <input
            name="org"
            required
            className="h-11 border border-[var(--line-strong)] bg-[var(--bg)] px-3 text-[var(--paper)] outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Contact name</span>
          <input
            name="name"
            required
            className="h-11 border border-[var(--line-strong)] bg-[var(--bg)] px-3 text-[var(--paper)] outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            className="h-11 border border-[var(--line-strong)] bg-[var(--bg)] px-3 text-[var(--paper)] outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Your phone</span>
          <input
            name="phone"
            type="tel"
            className="h-11 border border-[var(--line-strong)] bg-[var(--bg)] px-3 text-[var(--paper)] outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>City / postal</span>
          <input
            name="city"
            required
            className="h-11 border border-[var(--line-strong)] bg-[var(--bg)] px-3 text-[var(--paper)] outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Approx lot size</span>
          <input
            name="lotSize"
            className="h-11 border border-[var(--line-strong)] bg-[var(--bg)] px-3 text-[var(--paper)] outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Message</span>
          <textarea
            name="message"
            rows={4}
            className="border border-[var(--line-strong)] bg-[var(--bg)] px-3 py-2 text-[var(--paper)] outline-none focus:border-[var(--accent)]"
          />
        </label>
        <label className="flex items-start gap-3 text-xs leading-relaxed text-[var(--paper-dim)]">
          <input name="consent" type="checkbox" required className="mt-1" />
          <span>
            By submitting, you agree we may contact you about this request by email or
            phone. Message/data rates may apply if SMS is used later. You can unsubscribe
            from marketing emails anytime. We won’t add you to cold outreach from this
            form alone.
          </span>
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center bg-[var(--accent)] px-6 text-sm font-semibold tracking-wide text-[var(--accent-ink)] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "ok" ? (
          <p className="text-sm text-[var(--mist)]">
            Received on this staging draft. We’ll follow up by email. GHL embed not wired
            yet.
          </p>
        ) : null}
        {status === "err" ? (
          <p className="text-sm text-[var(--accent)]">Could not send. Try again.</p>
        ) : null}
      </form>
    </div>
  );
}
