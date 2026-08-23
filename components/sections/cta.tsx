'use client'

import { ArrowRight, CalendarBlank } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

export function CTA() {
  const { t } = useLanguage()
  const cta = t.ctaFinal

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.3), transparent)' }} aria-hidden />

      <Container>
        <Reveal>
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-16 text-center sm:px-12 sm:py-20"
            style={{
              background: 'oklch(0.11 0.022 240 / 0.95)',
              border: '1px solid oklch(0.65 0.22 230 / 0.25)',
              boxShadow: '0 0 50px oklch(0.65 0.22 230 / 0.1), inset 0 1px 0 oklch(1 0 0 / 0.08)',
            }}
          >
            {/* Scan line effect */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px animate-cyber-scan"
              style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.8), transparent)' }}
              aria-hidden
            />

            {/* Circuit background pattern */}
            <div className="bg-circuit pointer-events-none absolute inset-0 opacity-40 mask-fade-b" aria-hidden />

            {/* Glow blobs */}
            <div
              className="pointer-events-none absolute -top-40 -right-40 size-[400px] rounded-full"
              style={{ background: 'radial-gradient(circle, oklch(0.65 0.22 230 / 0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-40 -left-40 size-[350px] rounded-full"
              style={{ background: 'radial-gradient(circle, oklch(0.78 0.18 195 / 0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
              aria-hidden
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/8 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                <span className="size-1.5 rounded-full bg-brand animate-pulse-glow" aria-hidden />
                Transformación Digital
              </span>

              <h2 className="mt-5 text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem]">
                {cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
                {cta.subtitle}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-md px-8 text-sm font-bold text-[oklch(0.05_0.02_240)] transition-all duration-300 hover:shadow-[0_0_28px_oklch(0.65_0.22_230_/_0.5)] active:scale-[0.98] sm:w-auto"
                  style={{ background: 'linear-gradient(135deg, oklch(0.65 0.22 230) 0%, oklch(0.78 0.18 195) 100%)' }}
                >
                  <span className="relative z-10">{cta.primary}</span>
                  <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-brand/30 bg-brand/5 px-8 text-sm font-semibold text-foreground transition-all duration-200 hover:border-brand/50 hover:bg-brand/10 hover:text-brand sm:w-auto"
                >
                  <CalendarBlank className="size-4" />
                  {cta.secondary}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
