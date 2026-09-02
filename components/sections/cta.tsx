'use client'

import { ArrowRight, CalendarBlank } from '@phosphor-icons/react'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { Reveal } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

export function CTA() {
  const { t } = useLanguage()
  const cta = t.ctaFinal

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      <Container>
        <Reveal>
          <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b0a] px-6 py-16 text-center sm:px-12 sm:py-24">
            {/* Popayán — el Morro de Tulcán sobre los tejados */}
            <Image
              src="/photos/popayan-morro-tulcan.jpg"
              alt="Popayán, Cauca — el Morro de Tulcán sobre el centro histórico"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center opacity-[0.5] saturate-[0.8] contrast-[1.05]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(130% 130% at 50% 42%, oklch(0.09 0.005 65 / 0.5), oklch(0.09 0.005 65 / 0.9))',
              }}
            />

            {/* Corrientes de aire — flujo asimétrico */}
            <svg
              aria-hidden
              className="animate-breeze-slow pointer-events-none absolute inset-0 h-full w-full opacity-40"
              viewBox="0 0 1200 400"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M-20 240 C 240 140, 420 320, 660 220 S 1060 60, 1240 180"
                stroke="var(--brand)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-flow-line"
              />
              <path
                d="M-20 280 C 260 220, 460 360, 720 260 S 1080 120, 1240 220"
                stroke="var(--circuit-line)"
                strokeWidth="1"
              />
              <path
                d="M-20 190 C 300 120, 520 260, 780 180 S 1120 60, 1240 130"
                stroke="var(--circuit-line)"
                strokeWidth="1"
              />
            </svg>

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                <span className="h-px w-8 bg-brand" aria-hidden />
                Transformación Digital
              </span>

              <h2 className="mt-6 text-balance font-heading text-3xl font-bold leading-[1.05] tracking-[-0.02em] sm:text-4xl md:text-5xl">
                {cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground sm:text-lg">
                {cta.subtitle}
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contacto"
                  className="wind-hover group inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground hover:bg-primary/90 sm:w-auto"
                >
                  <span>{cta.primary}</span>
                  <ArrowRight
                    weight="bold"
                    className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#contacto"
                  className="wind-hover inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-transparent px-8 text-sm font-semibold text-foreground hover:border-white/30 hover:bg-white/5 sm:w-auto"
                >
                  <CalendarBlank className="size-4" aria-hidden />
                  {cta.secondary}
                </a>
              </div>
            </div>
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}
