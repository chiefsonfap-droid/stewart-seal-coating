"use client";

import Script from "next/script";

type Props = {
  formId: string;
  title: string;
};

export function GhlFormEmbed({ formId, title }: Props) {
  return (
    <div className="w-full overflow-visible">
      {/* The widget renders on white; frame it as a deliberate paper sheet on the desk. */}
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        className="block border border-[var(--ink)] bg-white"
        style={{ width: "100%", height: "100%", minHeight: 640, borderRadius: 0 }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-height="640"
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title={title}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      <p className="mt-4 text-xs leading-[1.8] text-[var(--faint)]">
        A person replies to this form. This is a Steward GoHighLevel embed — not
        payment, not Conversation AI, and not a new GHL account.
      </p>
    </div>
  );
}
