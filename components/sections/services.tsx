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
  Cpu,
  Pulse,
  Terminal,
  type Icon,
} from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
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

// Alternating neon accent colors for visual diversity
const ACCENT_COLORS = [
  { icon: 'oklch(0.65 0.22 230)', iconBg: 'oklch(0.18 0.06 230 / 0.5)', glow: 'oklch(0.65 0.22 230 / 0.15)' },
  { icon: 'oklch(0.78 0.18 195)', iconBg: 'oklch(0.16 0.06 195 / 0.5)', glow: 'oklch(0.78 0.18 195 / 0.12)' },
  { icon: 'oklch(0.72 0.18 150)', iconBg: 'oklch(0.16 0.06 150 / 0.45)', glow: 'oklch(0.72 0.18 150 / 0.12)' },
  { icon: 'oklch(0.78 0.18 75)', iconBg: 'oklch(0.18 0.06 75 / 0.45)', glow: 'oklch(0.78 0.18 75 / 0.12)' },
  { icon: 'oklch(0.65 0.18 280)', iconBg: 'oklch(0.16 0.06 280 / 0.45)', glow: 'oklch(0.65 0.18 280 / 0.12)' },
  { icon: 'oklch(0.65 0.22 230)', iconBg: 'oklch(0.18 0.06 230 / 0.5)', glow: 'oklch(0.65 0.22 230 / 0.15)' },
]

const SPANS = [
  { col: 'lg:col-span-4', featured: true, visualType: 'code' },
  { col: 'lg:col-span-2', featured: false, visualType: 'none' },
  { col: 'lg:col-span-2', featured: false, visualType: 'none' },
  { col: 'lg:col-span-4', featured: true, visualType: 'metrics' },
  { col: 'lg:col-span-4', featured: true, visualType: 'terminal' },
  { col: 'lg:col-span-2', featured: false, visualType: 'none' },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.3), transparent)' }} aria-hidden />

      <Container>
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />

        {/* Bento Grid Container */}
        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {t.services.items.map((service, i) => {
            const Icon = icons[service.icon] ?? Code
            const { col, featured, visualType } = SPANS[i] ?? { col: 'lg:col-span-2', featured: false, visualType: 'none' }
            const accent = ACCENT_COLORS[i % ACCENT_COLORS.length]

            return (
              <StaggerItem key={service.title} as="article" className={cn('sm:col-span-1', col)}>
                <div
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-7 transition-all duration-300 cursor-default"
                  style={{
                    background: featured
                      ? 'oklch(0.12 0.026 240 / 0.95)'
                      : 'oklch(0.10 0.022 240 / 0.85)',
                    border: '1px solid oklch(1 0 0 / 0.08)',
                    boxShadow: 'inset 0 1px 0 oklch(1 0 0 / 0.06)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = accent.icon.replace(')', ' / 0.35)')
                    el.style.boxShadow = `0 0 28px ${accent.glow}, 0 4px 20px oklch(0 0 0 / 0.4)`
                    el.style.background = featured
                      ? 'oklch(0.13 0.028 240 / 0.98)'
                      : 'oklch(0.12 0.024 240 / 0.92)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'oklch(1 0 0 / 0.08)'
                    el.style.boxShadow = 'inset 0 1px 0 oklch(1 0 0 / 0.06)'
                    el.style.background = featured
                      ? 'oklch(0.12 0.026 240 / 0.95)'
                      : 'oklch(0.10 0.022 240 / 0.85)'
                  }}
                >
                  {/* Glowing Top Line Accent */}
                  <div
                    className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${accent.icon}, transparent)` }}
                    aria-hidden
                  />

                  <div>
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4">
                      <span
                        className="flex shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
                        style={{
                          width: featured ? '3rem' : '2.5rem',
                          height: featured ? '3rem' : '2.5rem',
                          background: accent.iconBg,
                        }}
                      >
                        <Icon
                          weight="bold"
                          style={{
                            width: featured ? '1.5rem' : '1.25rem',
                            height: featured ? '1.5rem' : '1.25rem',
                            color: accent.icon,
                          }}
                        />
                      </span>
                      <div className="min-w-0">
                        <h3 className={cn('font-heading font-bold tracking-tight text-foreground', featured ? 'text-xl' : 'text-lg')}>
                          {service.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <ul className="mt-5 space-y-2.5">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/80 font-medium">
                          <Check
                            weight="bold"
                            className="size-3.5 shrink-0"
                            style={{ color: accent.icon }}
                            aria-hidden
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative Bento Inline Visual Preview (for featured cards) */}
                  {visualType === 'code' && (
                    <div className="mt-6 rounded-lg border border-white/5 bg-[oklch(0.08_0.02_240)] p-3 font-mono text-[11px] text-muted-foreground/80">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-muted-foreground/50">
                        <span className="flex items-center gap-1.5"><Code className="size-3 text-brand" /> build.ts</span>
                        <span className="text-[oklch(0.72_0.18_150)]">PASS 100%</span>
                      </div>
                      <p className="mt-2">
                        <span className="text-[oklch(0.65_0.22_230)]">const</span> <span className="text-foreground">app</span> = <span className="text-[oklch(0.78_0.18_195)]">new</span> <span className="text-[oklch(0.78_0.18_75)]">Product</span>({'{'} <span className="text-[oklch(0.72_0.18_150)]">scale: &apos;enterprise&apos;</span> {'}'})
                      </p>
                    </div>
                  )}

                  {visualType === 'metrics' && (
                    <div className="mt-6 grid grid-cols-3 gap-2 rounded-lg border border-white/5 bg-[oklch(0.08_0.02_240)] p-3 text-center font-mono">
                      <div>
                        <span className="block text-xs font-bold text-[oklch(0.72_0.18_150)]">99.99%</span>
                        <span className="text-[9px] text-muted-foreground/60 uppercase">SLA</span>
                      </div>
                      <div className="border-x border-white/5">
                        <span className="block text-xs font-bold text-[oklch(0.78_0.18_195)]">&lt; 50ms</span>
                        <span className="text-[9px] text-muted-foreground/60 uppercase">LATENCY</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-[oklch(0.65_0.22_230)]">AUTO</span>
                        <span className="text-[9px] text-muted-foreground/60 uppercase">SCALE</span>
                      </div>
                    </div>
                  )}

                  {visualType === 'terminal' && (
                    <div className="mt-6 flex items-center justify-between rounded-lg border border-white/5 bg-[oklch(0.08_0.02_240)] px-3 py-2.5 font-mono text-[11px]">
                      <div className="flex items-center gap-2">
                        <Terminal className="size-3.5 text-[oklch(0.78_0.18_195)]" />
                        <span className="text-muted-foreground">$ <span className="text-foreground">waira deploy --prod</span></span>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] text-[oklch(0.72_0.18_150)]">
                        <Pulse className="size-3 animate-pulse" /> LIVE
                      </span>
                    </div>
                  )}
                </div>
              </StaggerItem>
            )
          })}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <a
            href="#contacto"
            className="group inline-flex h-11 items-center gap-2 rounded-md border px-7 text-sm font-bold transition-all duration-200"
            style={{
              borderColor: 'oklch(0.65 0.22 230 / 0.35)',
              color: 'oklch(0.65 0.22 230)',
              background: 'oklch(0.65 0.22 230 / 0.08)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'oklch(0.65 0.22 230 / 0.6)'
              el.style.background = 'oklch(0.65 0.22 230 / 0.15)'
              el.style.boxShadow = '0 0 24px oklch(0.65 0.22 230 / 0.25)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'oklch(0.65 0.22 230 / 0.35)'
              el.style.background = 'oklch(0.65 0.22 230 / 0.08)'
              el.style.boxShadow = 'none'
            }}
          >
            {t.services.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Container>
    </section>
  )
}
