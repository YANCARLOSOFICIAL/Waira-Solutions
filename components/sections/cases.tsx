'use client'

import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

export function Cases() {
  const { t } = useLanguage()

  return (
    <section id="casos" className="relative scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />
      <Container>
        <SectionHeading eyebrow={t.cases.eyebrow} title={t.cases.title} subtitle={t.cases.subtitle} />

        <StaggerGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {t.cases.items.map((item) => (
            <StaggerItem key={item.tag} as="article" className="h-full">
              <a
                href={`https://github.com/${item.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wind-hover group flex h-full flex-col bg-card"
              >
                <div className="flex items-center gap-2 border-b border-white/10 px-6 py-3.5">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-brand/90">
                    {item.tag}
                  </span>
                  <span className="ml-auto flex size-7 items-center justify-center rounded-md border border-white/10 text-muted-foreground opacity-0 transition-all duration-500 group-hover:border-brand/30 group-hover:text-brand group-hover:opacity-100">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                      Problema
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{item.problem}</p>
                  </div>

                  <div>
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
                      Solución
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{item.solution}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="ml-auto flex items-center gap-1 font-mono text-[10px] font-bold text-brand">
                      <GithubLogo weight="bold" className="size-3.5" />
                      Código
                    </span>
                  </div>

                  <div className="mt-auto border-t border-white/10 pt-4">
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-brand/80">
                      Resultado
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground/90">{item.result}</p>
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
