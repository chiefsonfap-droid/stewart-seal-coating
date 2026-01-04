"use client"

import Script from "next/script"

interface ContactFormProps {
  program?: string
  page?: string
}

/**
 * Contact Form - GoHighLevel Embed
 * Clean wrapper for GHL embedded form - no duplicate styling or headings
 */
export function ContactForm({ program, page }: ContactFormProps) {
  return (
    <div>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/cWkRdLH8OOIwvBufX5yt"
        style={{ width: '100%', height: '100%', minHeight: '818px', border: 'none', borderRadius: '3px' }}
        id="inline-cWkRdLH8OOIwvBufX5yt"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Seal Coating Website Drone Inspection Form"
        data-height="818"
        data-layout-iframe-id="inline-cWkRdLH8OOIwvBufX5yt"
        data-form-id="cWkRdLH8OOIwvBufX5yt"
        title="Seal Coating Website Drone Inspection Form"
      />
      
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}

