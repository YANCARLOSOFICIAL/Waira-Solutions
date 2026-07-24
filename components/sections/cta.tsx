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
      <Container>
        <Reveal>
          <div className="border-border rounded-xl border bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance font-heading text-3xl font-medium tracking-tight sm:text-4xl md:text-[2.75rem]">
                {cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {cta.subtitle}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button render={<a href="#contacto" />} size="lg" className="group h-11 w-full gap-2 px-7 text-sm sm:w-auto">
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
