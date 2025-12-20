import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations"

/**
 * Contact form API route
 * Validates form data and forwards to GHL webhook
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate with Zod schema
    const validatedData = contactSchema.parse(body)

    // Send to GHL webhook
    const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL
    
    if (webhookUrl && webhookUrl !== "https://placeholder-webhook-url.com") {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      })
    } else {
      // Log to console if webhook not configured
      console.log("Contact form submission:", validatedData)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    )
  }
}

