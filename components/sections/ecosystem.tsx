'use client'

import {
  Brain,
  ChartLineUp,
  Cloud,
  Code,
  Compass,
  CreditCard,
  FlowArrow,
  Gear,
  Lightning,
  Robot,
  type Icon,
} from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

type Node = { icon: Icon; label: string; labelEn: string; wide?: boolean }

const ecosystemNodes: Node[] = [
  { icon: Code, label: 'Software', labelEn: 'Software' },
  { icon: Brain, label: 'Inteligencia Artificial', labelEn: 'AI' },
  { icon: FlowArrow, label: 'Automatización', labelEn: 'Automation' },
  { icon: Cloud, label: 'Cloud & DevOps', labelEn: 'Cloud & DevOps' },
  { icon: ChartLineUp, label: 'Datos & Analítica', labelEn: 'Data & Analytics' },
  { icon: Robot, label: 'Agentes de IA', labelEn: 'AI Agents' },
  { icon: Gear, label: 'APIs e Integración', labelEn: 'APIs & Integration' },
  { icon: CreditCard, label: 'Infraestructura Financiera', labelEn: 'Fin. Infrastructure' },
  { icon: Compass, label: 'Consultoría', labelEn: 'Consulting', wide: true },
  { icon: Lightning, label: 'Productos Propios', labelEn: 'Own Products', wide: true },
]

export function Ecosystem() {
  const { locale } = useLanguage()
  const isEn = locale === 'en'

  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      {/* Corriente de aire que atraviesa el sistema */}
      <svg
        aria-hidden
        className="animate-breeze-slow pointer-events-none absolute inset-x-0 top-1/3 h-48 w-full opacity-30"
        viewBox="0 0 1440 240"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-40 160 C 320 60, 520 220, 800 120 S 1180 20, 1480 110"
          stroke="var(--brand)"
          strokeWidth="1.25"
          strokeLinecap="round"
          className="animate-flow-line"
        />
      </svg>

      <Container className="relative">
        <SectionHeading
          eyebrow={isEn ? 'Ecosystem' : 'Ecosistema'}
          title={isEn ? 'Connected capabilities' : 'Capacidades conectadas'}
          subtitle={
            isEn
              ? 'Every capability feeds into the next. Software, AI, automation and products: one coherent system.'
              : 'Cada capacidad alimenta la siguiente. Software, IA, automatización y productos: un sistema coherente.'
          }
        />

        <StaggerGroup className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {ecosystemNodes.map((node, i) => (
            <StaggerItem
              key={i}
              className={node.wide ? 'col-span-2' : undefined}
            >
              <div className="wind-hover group flex h-full flex-col items-center justify-center gap-3 bg-card p-6 text-center">
                <node.icon
                  weight="light"
                  className="size-7 text-muted-foreground transition-colors duration-500 group-hover:text-brand"
                  aria-hidden
                />
                <span className="font-mono text-[10px] font-medium uppercase leading-tight tracking-[0.14em] text-foreground/80 sm:text-[11px]">
                  {isEn ? node.labelEn : node.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  )
}
