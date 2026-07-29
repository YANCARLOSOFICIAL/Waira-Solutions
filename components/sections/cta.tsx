'use client'

import { ArrowRight, CalendarBlank } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

export function CTA() {
  const { t } = useLanguage()
  const cta = t.ctaFinal

  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/[0.03] via-brand/[0.01] to-brand/[0.03]" aria-hidden />
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl border border-border bg-card px-6 py-16 text-center shadow-elevated sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -top-40 -right-40 size-[400px] rounded-full bg-brand/5 blur-[100px]" aria-hidden />
            <div className="pointer-events-none absolute -bottom-40 -left-40 size-[300px] rounded-full bg-brand-2/5 blur-[80px]" aria-hidden />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl md:text-[2.75rem]">
                {cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {cta.subtitle}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button render={<a href="#contacto" />} size="lg" className="group h-11 w-full gap-2 px-7 text-sm sm:w-auto shadow-card hover:shadow-card-hover">
                  {cta.primary}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button render={<a href="#contacto" />} size="lg" variant="outline" className="h-11 w-full gap-2 px-7 text-sm sm:w-auto">
                  <CalendarBlank className="size-4" />
                  {cta.secondary}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
