import { z } from "zod"

/**
 * Contact form validation schema
 */
export const contactSchema = z.object({
  orgName: z.string().min(2, "Organization name is required"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
    "Please enter a valid phone number"
  ),
  city: z.string().min(1, "Please select a city"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  program: z.string().optional(),
  source: z.string().default("website"),
  page: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

