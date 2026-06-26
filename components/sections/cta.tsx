'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarClock } from 'lucide-react'
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
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
            {/* Glow accents */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]"
            />
            <motion.div
              aria-hidden
              animate={{ opacity: [0.03, 0.06, 0.03] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,var(--color-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-foreground)_1px,transparent_1px)] [background-size:40px_40px]"
            />
            {/* Brand gradient border at top */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                {cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                {cta.subtitle}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  render={<a href="#contacto" />}
                  size="lg"
                  className="group h-11 w-full gap-2 rounded-full px-7 text-sm sm:w-auto"
                >
                  {cta.primary}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button
                  render={<a href="#contacto" />}
                  size="lg"
                  variant="outline"
                  className="h-11 w-full gap-2 rounded-full px-7 text-sm sm:w-auto"
                >
                  <CalendarClock className="size-4" />
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
