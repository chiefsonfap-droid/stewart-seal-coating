import { GhlFormEmbed } from "@/components/GhlFormEmbed";
import { GHL } from "@/content";

export function QuoteForm() {
  return (
    <div className="border border-[var(--line)] bg-[var(--bg-2)] p-6">
      <h2 className="font-[family-name:var(--font-display)] text-2xl">
        Request a Steward Quote
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[var(--paper-dim)]">
        This is a quote for lot work, not an inspection giveaway. Tell us about
        your lot and a person will follow up with honest next steps for seal coating,
        crack filling, or line striping.
      </p>
      <div className="mt-6">
        <GhlFormEmbed formId={GHL.quoteFormId} title="Steward Quote / Contact" />
      </div>
    </div>
  );
}
