'use client'

import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

export function Cases() {
  const { t } = useLanguage()

  return (
    <section id="casos" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.3), transparent)' }} aria-hidden />
      <Container>
        <SectionHeading eyebrow={t.cases.eyebrow} title={t.cases.title} subtitle={t.cases.subtitle} />

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.cases.items.map((item) => (
            <StaggerItem key={item.tag} as="article" className="h-full">
              <a
                href={`https://github.com/${item.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300"
                style={{
                  background: 'oklch(0.12 0.022 240 / 0.85)',
                  border: '1px solid oklch(1 0 0 / 0.07)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'oklch(0.65 0.22 230 / 0.35)'
                  el.style.boxShadow = '0 0 28px oklch(0.65 0.22 230 / 0.1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'oklch(1 0 0 / 0.07)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div
                  className="flex items-center gap-2 px-6 py-3"
                  style={{ borderBottom: '1px solid oklch(0.65 0.22 230 / 0.1)', background: 'oklch(0.10 0.02 240 / 0.6)' }}
                >
                  <span
                    className="rounded-md px-2.5 py-1 font-mono text-[10px] font-semibold tracking-widest uppercase"
                    style={{ background: 'oklch(0.65 0.22 230 / 0.08)', border: '1px solid oklch(0.65 0.22 230 / 0.2)', color: 'oklch(0.65 0.22 230 / 0.85)' }}
                  >
                    {item.tag}
                  </span>
                  <span className="ml-auto flex size-7 items-center justify-center rounded-md border opacity-0 transition-all group-hover:opacity-100"
                    style={{ borderColor: 'oklch(0.65 0.22 230 / 0.3)', color: 'oklch(0.65 0.22 230)' }}
                  >
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'oklch(0.55 0.02 230)' }}>Problema</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{item.problem}</p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'oklch(0.55 0.02 230)' }}>Solución</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{item.solution}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2.5 py-1 font-mono text-[10px]"
                        style={{ background: 'oklch(0.78 0.18 195 / 0.07)', border: '1px solid oklch(0.78 0.18 195 / 0.15)', color: 'oklch(0.78 0.18 195 / 0.75)' }}
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="ml-auto flex items-center gap-1 font-mono text-[10px] font-bold" style={{ color: 'oklch(0.65 0.22 230)' }}>
                      <GithubLogo weight="bold" className="size-3.5" />
                      Código
                    </span>
                  </div>

                  <div
                    className="mt-auto rounded-lg px-4 py-3"
                    style={{ background: 'oklch(0.72 0.18 150 / 0.08)', border: '1px solid oklch(0.72 0.18 150 / 0.15)' }}
                  >
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: 'oklch(0.72 0.18 150 / 0.8)' }}>Resultado</p>
                    <p className="mt-0.5 text-sm font-semibold text-foreground/90">{item.result}</p>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  )
}
