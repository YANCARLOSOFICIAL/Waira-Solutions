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

// Alternating accent colors for visual diversity (Solid Dark style)
const ACCENT_COLORS = [
  { icon: '#fff', iconBg: 'rgba(255,255,255,0.05)', glow: 'transparent' },
  { icon: '#fff', iconBg: 'rgba(255,255,255,0.05)', glow: 'transparent' },
  { icon: '#fff', iconBg: 'rgba(255,255,255,0.05)', glow: 'transparent' },
  { icon: '#fff', iconBg: 'rgba(255,255,255,0.05)', glow: 'transparent' },
  { icon: '#fff', iconBg: 'rgba(255,255,255,0.05)', glow: 'transparent' },
  { icon: '#fff', iconBg: 'rgba(255,255,255,0.05)', glow: 'transparent' },
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
    <section id="servicios" className="relative scroll-mt-20 py-24 sm:py-28 bg-[#0a0a0a]">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

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
                <div className={cn(
                  "group relative flex h-full flex-col justify-between overflow-hidden rounded-xl p-7 transition-all duration-200 cursor-default border border-white/10 hover:border-white/20",
                  featured ? "bg-[#161616]" : "bg-[#111]"
                )}>
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
                    <div className="mt-6 rounded-lg border border-white/10 bg-[#0a0a0a] p-3 font-mono text-[11px] text-muted-foreground/80">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[10px] text-muted-foreground/50">
                        <span className="flex items-center gap-1.5"><Code className="size-3 text-white/50" /> build.ts</span>
                        <span className="text-white">PASS 100%</span>
                      </div>
                      <p className="mt-2">
                        <span className="text-white/50">const</span> <span className="text-foreground">app</span> = <span className="text-white/70">new</span> <span className="text-white/90">Product</span>({'{'} <span className="text-white/60">scale: &apos;enterprise&apos;</span> {'}'})
                      </p>
                    </div>
                  )}

                  {visualType === 'metrics' && (
                    <div className="mt-6 grid grid-cols-3 gap-2 rounded-lg border border-white/10 bg-[#0a0a0a] p-3 text-center font-mono">
                      <div>
                        <span className="block text-xs font-bold text-white">99.99%</span>
                        <span className="text-[9px] text-muted-foreground/60 uppercase">SLA</span>
                      </div>
                      <div className="border-x border-white/5">
                        <span className="block text-xs font-bold text-white">&lt; 50ms</span>
                        <span className="text-[9px] text-muted-foreground/60 uppercase">LATENCY</span>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white">AUTO</span>
                        <span className="text-[9px] text-muted-foreground/60 uppercase">SCALE</span>
                      </div>
                    </div>
                  )}

                  {visualType === 'terminal' && (
                    <div className="mt-6 flex items-center justify-between rounded-lg border border-white/10 bg-[#0a0a0a] px-3 py-2.5 font-mono text-[11px]">
                      <div className="flex items-center gap-2">
                        <Terminal className="size-3.5 text-white/60" />
                        <span className="text-muted-foreground">$ <span className="text-foreground">waira deploy --prod</span></span>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] text-white">
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
            className="group inline-flex h-11 items-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 text-sm font-bold text-foreground transition-all duration-200 hover:bg-white/10 hover:border-white/30"
          >
            {t.services.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Container>
    </section>
  )
}
