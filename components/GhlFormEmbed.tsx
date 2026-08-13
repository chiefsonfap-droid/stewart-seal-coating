"use client";

import Script from "next/script";

type Props = {
  formId: string;
  title: string;
};

export function GhlFormEmbed({ formId, title }: Props) {
  return (
    <div className="w-full overflow-visible">
      <iframe
        src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
        style={{ width: "100%", height: "100%", border: "none", borderRadius: 4 }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-height="450"
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title={title}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
        Staging form — submits to Steward GoHighLevel only. Not dual-wired.
      </p>
    </div>
  );
}
