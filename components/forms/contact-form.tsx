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

export function ContactForm() {
  const { t } = useLanguage()
  const form = t.contact.form
  const [submitted, setSubmitted] = useState(false)

  const schema = z.object({
    name: z.string().min(2, form.errors.name),
    email: z.string().email(form.errors.email),
    company: z.string().optional(),
    message: z.string().min(10, form.errors.message),
  })

  type FormValues = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', company: '', message: '' },
  })

  async function onSubmit(values: FormValues) {
    const res = await submitContact(values)
    if (res.ok) {
      setSubmitted(true)
      reset()
    }
  }

  if (submitted) {
    return (
      <div className="border-border flex h-full min-h-72 flex-col items-center justify-center gap-4 rounded-xl border bg-card p-8 text-center">
        <span className="bg-pastel-green-bg text-pastel-green-fg flex size-14 items-center justify-center rounded-full">
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="border-border rounded-xl border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">{form.name}</Label>
          <Input id="name" autoComplete="name" aria-invalid={!!errors.name} {...register('name')} />
          {errors.name && (
            <p className="text-sm text-destructive" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">{form.email}</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-destructive" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">{form.company}</Label>
            <Input id="company" autoComplete="organization" {...register('company')} />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">{form.message}</Label>
          <Textarea id="message" rows={5} aria-invalid={!!errors.message} {...register('message')} />
          {errors.message && (
            <p className="text-sm text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button type="submit" size="lg" disabled={isSubmitting} className="gap-2">
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
