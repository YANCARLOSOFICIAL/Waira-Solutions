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
  { icon: Code, label: 'Software', labelEn: 'Software', color: 'oklch(0.65 0.22 230)', bg: 'oklch(0.65 0.22 230 / 0.1)', x: 0, y: 0 },
  { icon: Brain, label: 'Inteligencia Artificial', labelEn: 'AI', color: 'oklch(0.78 0.18 195)', bg: 'oklch(0.78 0.18 195 / 0.1)', x: 1, y: 0 },
  { icon: FlowArrow, label: 'Automatización', labelEn: 'Automation', color: 'oklch(0.72 0.18 150)', bg: 'oklch(0.72 0.18 150 / 0.1)', x: 2, y: 0 },
  { icon: Cloud, label: 'Cloud & DevOps', labelEn: 'Cloud & DevOps', color: 'oklch(0.78 0.18 75)', bg: 'oklch(0.78 0.18 75 / 0.1)', x: 3, y: 0 },
  { icon: ChartLineUp, label: 'Datos & Analítica', labelEn: 'Data & Analytics', color: 'oklch(0.65 0.18 280)', bg: 'oklch(0.65 0.18 280 / 0.1)', x: 0, y: 1 },
  { icon: Robot, label: 'Agentes de IA', labelEn: 'AI Agents', color: 'oklch(0.78 0.18 195)', bg: 'oklch(0.78 0.18 195 / 0.1)', x: 1, y: 1 },
  { icon: Gear, label: 'APIs e Integración', labelEn: 'APIs & Integration', color: 'oklch(0.65 0.22 230)', bg: 'oklch(0.65 0.22 230 / 0.1)', x: 2, y: 1 },
  { icon: CreditCard, label: 'Infraestructura Financiera', labelEn: 'Fin. Infrastructure', color: 'oklch(0.72 0.18 150)', bg: 'oklch(0.72 0.18 150 / 0.1)', x: 3, y: 1 },
  { icon: Compass, label: 'Consultoría', labelEn: 'Consulting', color: 'oklch(0.78 0.18 75)', bg: 'oklch(0.78 0.18 75 / 0.1)', x: 1, y: 2 },
  { icon: Lightning, label: 'Productos Propios', labelEn: 'Own Products', color: 'oklch(0.65 0.22 230)', bg: 'oklch(0.65 0.22 230 / 0.1)', x: 2, y: 2 },
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
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.78 0.18 195 / 0.3), transparent)' }} aria-hidden />

      <Container>
        <SectionHeading
          eyebrow={isEn ? 'Ecosystem' : 'Ecosistema'}
          title={isEn ? 'Connected capabilities' : 'Capacidades conectadas'}
          subtitle={
            isEn
              ? 'Every capability feeds into the next. Software, AI, automation and products: one coherent system.'
              : 'Cada capacidad alimenta la siguiente. Software, IA, automatización y productos: un sistema coherente.'
          }
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <svg className="absolute inset-0 size-full overflow-visible hidden sm:block" aria-hidden>
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
                  stroke="oklch(0.65 0.22 230 / 0.2)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              )
            })}
          </svg>

          <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {ecosystemNodes.map((node, i) => (
              <div
                key={i}
                className={cn(
                  'group flex flex-col items-center justify-center gap-2 rounded-xl p-3 sm:p-5 transition-all duration-300 cursor-default',
                )}
                style={{
                  background: 'oklch(0.12 0.022 240 / 0.9)',
                  border: '1px solid oklch(1 0 0 / 0.08)',
                  gridColumn: i === 8 ? '1 / 3' : i === 9 ? '3 / 5' : undefined,
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = node.color.replace(')', ' / 0.4)')
                  el.style.boxShadow = `0 0 20px ${node.color.replace(')', ' / 0.15)')}`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'oklch(1 0 0 / 0.08)'
                  el.style.boxShadow = 'none'
                }}
              >
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg sm:size-11 transition-transform group-hover:scale-110"
                  style={{ background: node.bg }}
                >
                  <node.icon weight="bold" className="size-4 sm:size-5" style={{ color: node.color }} />
                </span>
                <span className="text-center font-mono text-[10px] font-medium leading-tight text-foreground/90 sm:text-xs">
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
