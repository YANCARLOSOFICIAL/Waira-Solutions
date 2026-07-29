'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle, CircleNotch, PaperPlaneTilt } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
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
  'flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50 aria-invalid:border-destructive'

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
      <div className="flex h-full min-h-72 flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card p-8 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-pastel-green-bg text-pastel-green-fg">
          <CheckCircle weight="bold" className="size-7" />
        </span>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
          {form.success}
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          OK
        </Button>
      </div>
    )
  }

  const isEn = locale === 'en'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div aria-hidden className="absolute -left-[9999px]">
          <Label htmlFor="honeypot">Leave this empty</Label>
          <Input id="honeypot" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="name">{form.name}</Label>
          <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register('name')} />
          {errors.name && (
            <p className="text-sm text-destructive" role="alert">{errors.name.message}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">{form.email}</Label>
            <Input id="email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register('email')} />
            {errors.email && (
              <p className="text-sm text-destructive" role="alert">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">{form.company}</Label>
            <Input id="company" autoComplete="organization" {...register('company')} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="projectType">
              {isEn ? 'Project type' : 'Tipo de proyecto'}
            </Label>
            <select id="projectType" className={selectClass} {...register('projectType')}>
              {projectTypes.map((pt) => (
                <option key={pt.value} value={pt.value}>
                  {isEn ? pt.labelEn : pt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="budget">
              {isEn ? 'Estimated budget' : 'Presupuesto estimado'}
            </Label>
            <select id="budget" className={selectClass} {...register('budget')}>
              {budgetRanges.map((b) => (
                <option key={b.value} value={b.value}>
                  {isEn ? b.labelEn : b.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">{form.message}</Label>
          <Textarea id="message" rows={5} aria-invalid={!!errors.message} {...register('message')} />
          {errors.message && (
            <p className="text-sm text-destructive" role="alert">{errors.message.message}</p>
          )}
        </div>

        {serverError ? (
          <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert">
            {isEn
              ? 'An error occurred. Please try again or write to us on WhatsApp.'
              : 'Ocurrió un error. Intenta de nuevo o escríbenos por WhatsApp.'}
          </p>
        ) : null}

        <Button type="submit" size="lg" disabled={isSubmitting} className={cn('gap-2', isSubmitting ? 'opacity-80' : '')}>
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
        </Button>
      </div>
    </form>
  )
}
