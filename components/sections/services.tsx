'use client'

import {
  ArrowRight,
  Check,
  Cloud,
  Code,
  Compass,
  Brain,
  ChartLineUp,
  FlowArrow,
  type Icon,
} from '@phosphor-icons/react'
import Image from 'next/image'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

const icons: Record<string, Icon> = {
  Code2: Code,
  BrainCircuit: Brain,
  Workflow: FlowArrow,
  Cloud,
  LineChart: ChartLineUp,
  Compass,
}

// Ritmo asimétrico — algunas tarjetas ocupan más, como corrientes de distinto ancho
const SPANS = ['lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-2']

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="relative scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      {/* Hilo de aire de fondo */}
      <svg
        aria-hidden
        className="animate-breeze-slow pointer-events-none absolute inset-x-0 top-24 h-40 w-full opacity-40"
        viewBox="0 0 1440 200"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-40 140 C 300 60, 480 180, 760 110 S 1160 30, 1480 100"
          stroke="var(--brand)"
          strokeWidth="1.25"
          strokeLinecap="round"
          className="animate-flow-line"
        />
        <path
          d="M-40 170 C 320 120, 520 200, 800 140 S 1180 70, 1480 130"
          stroke="var(--circuit-line)"
          strokeWidth="1"
        />
      </svg>

      <Container className="relative">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[service.icon] ?? Code
            const col = SPANS[i] ?? 'lg:col-span-2'

            return (
              <StaggerItem key={service.title} as="article" className={cn('sm:col-span-1', col)}>
                <div className="wind-hover group flex h-full flex-col bg-card p-7">
                  <div className="flex items-start justify-between">
                    <Icon
                      weight="light"
                      className="size-7 text-muted-foreground transition-colors duration-500 group-hover:text-brand"
                      aria-hidden
                    />
                    <span className="font-mono text-xs text-muted-foreground/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-lg font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p>

                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80">
                        <Check weight="bold" className="size-3.5 shrink-0 text-brand" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        {/* Franja cinematográfica — infraestructura real */}
        <Reveal className="mt-12">
          <figure className="relative h-44 overflow-hidden rounded-2xl border border-white/10 sm:h-56">
            <Image
              src="/photos/datacenter-racks.jpg"
              alt="Infraestructura en datacenter operada por Waira Solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center saturate-[0.85] contrast-[1.05] brightness-[0.9]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, oklch(0.09 0.005 65 / 0.92) 0%, oklch(0.09 0.005 65 / 0.45) 55%, oklch(0.09 0.005 65 / 0.05) 100%)',
              }}
            />
            <figcaption className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center gap-2 px-8 sm:px-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-brand/90">
                Cloud &amp; DevOps
              </span>
              <p className="font-heading text-xl font-bold leading-snug text-foreground sm:text-2xl">
                Infraestructura confiable, observabilidad total, despliegues automatizados.
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <a
            href="#contacto"
            className="wind-hover group inline-flex h-11 items-center gap-2 rounded-md border border-white/15 bg-transparent px-7 text-sm font-bold text-foreground hover:border-white/30 hover:bg-white/5"
          >
            {t.services.cta}
            <ArrowRight
              weight="bold"
              className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1"
            />
          </a>
        </div>
      </Container>
    </section>
  )
}
