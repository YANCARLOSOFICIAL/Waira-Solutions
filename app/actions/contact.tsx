'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { buildContactHtml } from '@/lib/email/contact-template'
import { WAIRA } from '@/lib/config'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
  honeypot: z.string().max(0),
})

export type ContactInput = z.infer<typeof schema>

export async function submitContact(
  data: ContactInput,
): Promise<{ ok: boolean }> {
  const parsed = schema.safeParse(data)
  if (!parsed.success) {
    return { ok: false }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL_TO ?? WAIRA.contact.email
  const from = process.env.CONTACT_EMAIL_FROM ?? `Waira Solutions <${WAIRA.contact.emailCorporate}>`

  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY not set — falling back to log-only')
    console.log('[contact] Submission:', parsed.data)
    await new Promise((resolve) => setTimeout(resolve, 800))
    return { ok: true }
  }

  try {
    const resend = new Resend(apiKey)

    const html = buildContactHtml({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      projectType: parsed.data.projectType,
      budget: parsed.data.budget,
      message: parsed.data.message,
    })

    await resend.emails.send({
      from,
      to,
      subject: `Nuevo contacto: ${parsed.data.name} — ${WAIRA.name}`,
      html,
    })

    return { ok: true }
  } catch (error) {
    console.error('[contact] Failed to send email:', error)
    return { ok: false }
  }
}
