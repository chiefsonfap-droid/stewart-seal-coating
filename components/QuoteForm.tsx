import { GhlFormEmbed } from "@/components/GhlFormEmbed";
import { GHL } from "@/content";

export function QuoteForm() {
  return (
    <div>
      <h3 className="display text-2xl">Request a Steward Quote</h3>
      <p className="mt-4 max-w-md text-sm leading-[1.8] text-[var(--stone)]">
        This is a quote for lot work, not an inspection giveaway. Tell us about your
        lot and a person will follow up with honest next steps for seal coating,
        crack filling, or line striping.
      </p>
      <div className="mt-8">
        <GhlFormEmbed formId={GHL.quoteFormId} title="Steward Quote / Contact" />
      </div>
    </div>
  );
}
