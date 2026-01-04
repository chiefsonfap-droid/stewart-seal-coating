"use client"

import Script from "next/script"

interface ContactFormProps {
  program?: string
  page?: string
}

/**
 * Contact Form - GoHighLevel Embed
 * Replaces custom form with GHL embedded form across all pages
 */
export function ContactForm({ program, page }: ContactFormProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-3xl font-bold text-neutral-900">
            Get Your Free Drone Inspection
          </h3>
          <p className="text-sm text-neutral-500 font-medium">
            Faith communities, commercial properties, and residential driveways welcome
          </p>
          <p className="text-neutral-600">
            Fill out the form below and we'll be in touch within 24 hours
          </p>
        </div>

        {/* GHL Embed */}
        <div style={{ minHeight: '818px' }}>
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
        </div>
      </div>
      
      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="lazyOnload"
      />
    </div>
  )
}

