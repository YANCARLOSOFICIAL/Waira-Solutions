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
} from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

const ecosystemNodes = [
  { icon: Code, label: 'Software', labelEn: 'Software', color: 'bg-pastel-blue-bg text-pastel-blue-fg', x: 0, y: 0 },
  { icon: Brain, label: 'Inteligencia Artificial', labelEn: 'AI', color: 'bg-pastel-green-bg text-pastel-green-fg', x: 1, y: 0 },
  { icon: FlowArrow, label: 'Automatización', labelEn: 'Automation', color: 'bg-pastel-coral-bg text-pastel-coral-fg', x: 2, y: 0 },
  { icon: Cloud, label: 'Cloud & DevOps', labelEn: 'Cloud & DevOps', color: 'bg-pastel-yellow-bg text-pastel-yellow-fg', x: 3, y: 0 },
  { icon: ChartLineUp, label: 'Datos & Analítica', labelEn: 'Data & Analytics', color: 'bg-pastel-blue-bg text-pastel-blue-fg', x: 0, y: 1 },
  { icon: Robot, label: 'Agentes de IA', labelEn: 'AI Agents', color: 'bg-pastel-green-bg text-pastel-green-fg', x: 1, y: 1 },
  { icon: Gear, label: 'APIs e Integración', labelEn: 'APIs & Integration', color: 'bg-pastel-coral-bg text-pastel-coral-fg', x: 2, y: 1 },
  { icon: CreditCard, label: 'Infraestructura Financiera', labelEn: 'Fin. Infrastructure', color: 'bg-pastel-yellow-bg text-pastel-yellow-fg', x: 3, y: 1 },
  { icon: Compass, label: 'Consultoría', labelEn: 'Consulting', color: 'bg-pastel-blue-bg text-pastel-blue-fg', x: 1, y: 2 },
  { icon: Lightning, label: 'Productos Propios', labelEn: 'Own Products', color: 'bg-pastel-green-bg text-pastel-green-fg', x: 2, y: 2 },
]

const connections = [
  [0, 1], [1, 2], [2, 3],
  [4, 5], [5, 6], [6, 7],
  [8, 9],
  [0, 4], [1, 5], [2, 6], [3, 7],
  [4, 8], [5, 8], [5, 9],
  [0, 5], [1, 6],
]

export function Ecosystem() {
  const { locale } = useLanguage()
  const isEn = locale === 'en'

  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand/[0.02] via-transparent to-brand/[0.02]" aria-hidden />
      <Container>
        <SectionHeading
          eyebrow={isEn ? 'Ecosystem' : 'Ecosistema'}
          title={isEn ? 'Connected capabilities' : 'Capacidades conectadas'}
          subtitle={
            isEn
              ? 'Every capability feeds into the next. Software, AI, automation and products — one coherent system.'
              : 'Cada capacidad alimenta la siguiente. Software, IA, automatización y productos — un sistema coherente.'
          }
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <svg className="absolute inset-0 size-full" aria-hidden>
            {connections.map(([i, j], idx) => {
              const ni = ecosystemNodes[i]
              const nj = ecosystemNodes[j]
              const x1 = `${(ni.x + 0.5) * 25}%`
              const y1 = `${(ni.y + 0.5) * 33.33}%`
              const x2 = `${(nj.x + 0.5) * 25}%`
              const y2 = `${(nj.y + 0.5) * 33.33}%`
              return (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  className="stroke-border/60"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                />
              )
            })}
          </svg>

          <div className="relative grid grid-cols-4 grid-rows-3 gap-3 sm:gap-4">
            {ecosystemNodes.map((node, i) => (
              <div
                key={i}
                className={cn(
                  'col-span-1 flex flex-col items-center justify-center gap-2 rounded-xl border border-border/60 bg-card p-3 sm:p-5 shadow-card transition-all hover:shadow-card-hover',
                )}
                style={
                  i === 8
                    ? { gridColumn: '1 / 3' }
                    : i === 9
                      ? { gridColumn: '3 / 5' }
                      : {}
                }
              >
                <span className={cn('flex size-9 shrink-0 items-center justify-center rounded-lg sm:size-11', node.color)}>
                  <node.icon weight="bold" className="size-4 sm:size-5" />
                </span>
                <span className="text-center text-[10px] font-medium leading-tight text-foreground sm:text-xs">
                  {isEn ? node.labelEn : node.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
