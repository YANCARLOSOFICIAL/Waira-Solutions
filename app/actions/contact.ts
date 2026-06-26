'use server'

import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
})

export type ContactInput = z.infer<typeof schema>

export async function submitContact(
  data: ContactInput,
): Promise<{ ok: boolean }> {
  const parsed = schema.safeParse(data)
  if (!parsed.success) {
    return { ok: false }
  }

  // [PLACEHOLDER] Wire this to a real email/CRM provider (e.g. Resend, a CRM,
  // or a database). For now we just log the validated submission server-side.
  console.log('[v0] Contact submission:', parsed.data)

  // Simulate network/processing latency for UX feedback.
  await new Promise((resolve) => setTimeout(resolve, 800))

  return { ok: true }
}
