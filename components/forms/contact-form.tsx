'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, CircleNotch, PaperPlaneTilt } from '@phosphor-icons/react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { submitContact } from '@/app/actions/contact'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

const projectTypes = [
  { value: '', label: 'Selecciona una opción', labelEn: 'Select an option' },
  { value: 'software', label: 'Desarrollo de software', labelEn: 'Software development' },
  { value: 'ai', label: 'Inteligencia Artificial', labelEn: 'Artificial Intelligence' },
  { value: 'automation', label: 'Automatización', labelEn: 'Automation' },
  { value: 'consulting', label: 'Consultoría tecnológica', labelEn: 'Tech consulting' },
  { value: 'product', label: 'Producto propio', labelEn: 'Own product' },
  { value: 'other', label: 'Otro', labelEn: 'Other' },
]

const budgetRanges = [
  { value: '', label: 'No definido', labelEn: 'Not defined' },
  { value: 'lt5k', label: 'Menos de $5.000 USD', labelEn: 'Under $5,000 USD' },
  { value: '5k-15k', label: '$5.000 - $15.000 USD', labelEn: '$5,000 - $15,000 USD' },
  { value: '15k-50k', label: '$15.000 - $50.000 USD', labelEn: '$15,000 - $50,000 USD' },
  { value: 'gt50k', label: 'Más de $50.000 USD', labelEn: 'Over $50,000 USD' },
]

const selectClass =
  'flex h-10 w-full rounded-md border border-[oklch(1_0_0_/_0.1)] bg-[oklch(0.10_0.02_240)] px-3 py-2 text-sm text-foreground transition-all duration-200 focus-visible:border-[oklch(0.65_0.22_230_/_0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.22_230_/_0.2)] disabled:opacity-50'

export function ContactForm() {
  const { t, locale } = useLanguage()
  const form = t.contact.form
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(false)

  const schema = z.object({
    name: z.string().min(2, form.errors.name),
    email: z.string().email(form.errors.email),
    company: z.string().optional(),
    projectType: z.string().optional(),
    budget: z.string().optional(),
    message: z.string().min(10, form.errors.message),
    honeypot: z.string().max(0, 'Spam detected'),
  })

  type FormValues = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', company: '', projectType: '', budget: '', message: '', honeypot: '' },
  })

  async function onSubmit(values: FormValues) {
    setServerError(false)
    const res = await submitContact(values)
    if (res.ok) {
      setSubmitted(true)
      reset()
    } else {
      setServerError(true)
    }
  }

  if (submitted) {
    return (
      <div
        className="flex h-full min-h-72 flex-col items-center justify-center gap-4 rounded-xl p-8 text-center"
        style={{ background: 'oklch(0.12 0.022 240 / 0.9)', border: '1px solid oklch(0.72 0.18 150 / 0.3)' }}
      >
        <span className="flex size-14 items-center justify-center rounded-full" style={{ background: 'oklch(0.72 0.18 150 / 0.15)', color: 'oklch(0.72 0.18 150)' }}>
          <CheckCircle weight="bold" className="size-7" />
        </span>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
          {form.success}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="rounded-md border border-brand/30 px-6 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand/10"
        >
          OK
        </button>
      </div>
    )
  }

  const isEn = locale === 'en'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl p-6 sm:p-8"
      style={{
        background: 'oklch(0.12 0.022 240 / 0.9)',
        border: '1px solid oklch(0.65 0.22 230 / 0.18)',
        boxShadow: '0 0 30px oklch(0.65 0.22 230 / 0.05)',
      }}
    >
      <div className="grid gap-5">
        <div aria-hidden className="absolute -left-[9999px]">
          <Label htmlFor="honeypot">Leave this empty</Label>
          <Input id="honeypot" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="name" className="font-mono text-xs text-muted-foreground uppercase tracking-wide">{form.name}</Label>
          <Input
            id="name"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register('name')}
            className="border-[oklch(1_0_0_/_0.1)] bg-[oklch(0.10_0.02_240)] text-foreground placeholder:text-muted-foreground/40 focus-visible:border-[oklch(0.65_0.22_230_/_0.5)] focus-visible:ring-[oklch(0.65_0.22_230_/_0.2)]"
          />
          {errors.name && (
            <p className="text-xs text-[oklch(0.62_0.22_25)]" role="alert">{errors.name.message}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email" className="font-mono text-xs text-muted-foreground uppercase tracking-wide">{form.email}</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              {...register('email')}
              className="border-[oklch(1_0_0_/_0.1)] bg-[oklch(0.10_0.02_240)] text-foreground placeholder:text-muted-foreground/40 focus-visible:border-[oklch(0.65_0.22_230_/_0.5)] focus-visible:ring-[oklch(0.65_0.22_230_/_0.2)]"
            />
            {errors.email && (
              <p className="text-xs text-[oklch(0.62_0.22_25)]" role="alert">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company" className="font-mono text-xs text-muted-foreground uppercase tracking-wide">{form.company}</Label>
            <Input
              id="company"
              autoComplete="organization"
              {...register('company')}
              className="border-[oklch(1_0_0_/_0.1)] bg-[oklch(0.10_0.02_240)] text-foreground placeholder:text-muted-foreground/40 focus-visible:border-[oklch(0.65_0.22_230_/_0.5)] focus-visible:ring-[oklch(0.65_0.22_230_/_0.2)]"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="projectType" className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
              {isEn ? 'Project type' : 'Tipo de proyecto'}
            </Label>
            <select id="projectType" className={selectClass} {...register('projectType')}>
              {projectTypes.map((pt) => (
                <option key={pt.value} value={pt.value} className="bg-[oklch(0.12_0.025_240)] text-foreground">
                  {isEn ? pt.labelEn : pt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="budget" className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
              {isEn ? 'Estimated budget' : 'Presupuesto estimado'}
            </Label>
            <select id="budget" className={selectClass} {...register('budget')}>
              {budgetRanges.map((b) => (
                <option key={b.value} value={b.value} className="bg-[oklch(0.12_0.025_240)] text-foreground">
                  {isEn ? b.labelEn : b.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message" className="font-mono text-xs text-muted-foreground uppercase tracking-wide">{form.message}</Label>
          <Textarea
            id="message"
            rows={5}
            aria-invalid={!!errors.message}
            {...register('message')}
            className="border-[oklch(1_0_0_/_0.1)] bg-[oklch(0.10_0.02_240)] text-foreground placeholder:text-muted-foreground/40 focus-visible:border-[oklch(0.65_0.22_230_/_0.5)] focus-visible:ring-[oklch(0.65_0.22_230_/_0.2)]"
          />
          {errors.message && (
            <p className="text-xs text-[oklch(0.62_0.22_25)]" role="alert">{errors.message.message}</p>
          )}
        </div>

        {serverError ? (
          <p className="rounded-md border border-[oklch(0.62_0.22_25_/_0.4)] bg-[oklch(0.62_0.22_25_/_0.1)] px-3 py-2 text-xs text-[oklch(0.62_0.22_25)]" role="alert">
            {isEn
              ? 'An error occurred. Please try again or write to us on WhatsApp.'
              : 'Ocurrió un error. Intenta de nuevo o escríbenos por WhatsApp.'}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'inline-flex h-12 items-center justify-center gap-2 rounded-md font-bold text-[oklch(0.05_0.02_240)] transition-all duration-300',
            'hover:shadow-[0_0_24px_oklch(0.65_0.22_230_/_0.4)] active:scale-[0.98]',
            isSubmitting ? 'opacity-70' : '',
          )}
          style={{ background: 'linear-gradient(135deg, oklch(0.65 0.22 230) 0%, oklch(0.78 0.18 195) 100%)' }}
        >
          {isSubmitting ? (
            <>
              <CircleNotch className="size-4 animate-spin" />
              {form.submitting}
            </>
          ) : (
            <>
              <PaperPlaneTilt weight="bold" className="size-4" />
              {form.submit}
            </>
          )}
        </button>
      </div>
    </form>
  )
}
