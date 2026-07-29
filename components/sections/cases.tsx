'use client'

import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { StaggerGroup, StaggerItem } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

export function Cases() {
  const { t } = useLanguage()

  return (
    <section id="casos" className="relative scroll-mt-20 border-t border-border py-24 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.cases.eyebrow} title={t.cases.title} subtitle={t.cases.subtitle} />

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.cases.items.map((item) => (
            <StaggerItem key={item.tag} as="article" className="h-full">
              <a
                href={`https://github.com/${item.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-card hover:shadow-card-hover transition-all hover:border-foreground/20"
              >
                <div className="flex items-center gap-2 border-b border-border bg-surface-1 px-6 py-3">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {item.tag}
                  </span>
                  <span className="ml-auto flex size-7 items-center justify-center rounded-full border border-border opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">Problema</p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/80">{item.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">Solución</p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/80">{item.solution}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                    <span className="ml-auto flex items-center gap-1 text-xs font-medium text-brand">
                      <GithubLogo weight="bold" className="size-3.5" />
                      Código
                    </span>
                  </div>

                  <div className="mt-auto rounded-lg bg-brand/5 px-4 py-3">
                    <p className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">Resultado</p>
                    <p className="mt-0.5 text-sm font-medium text-foreground/90">{item.result}</p>
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
