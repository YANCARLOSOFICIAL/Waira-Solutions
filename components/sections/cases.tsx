'use client'

import Image from 'next/image'
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

        <StaggerGroup className="mt-14 grid gap-4 lg:grid-cols-3">
          {t.cases.items.map((item) => (
            <StaggerItem key={item.title} as="article" className="h-full">
              <a
                href={`https://github.com/${item.repo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-border flex h-full flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-foreground/25"
              >
                <div className="border-border relative aspect-[16/9] overflow-hidden border-b">
                  <Image
                    src={`https://opengraph.githubassets.com/1/${item.repo}`}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="border-border bg-background absolute top-3 left-3 rounded-full border px-2.5 py-1 text-xs font-medium">
                    {item.tag}
                  </span>
                  <span className="border-border bg-background absolute top-3 right-3 flex size-8 items-center justify-center rounded-full border opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {item.tech.map((tech) => (
                      <li key={tech} className="bg-secondary rounded-full px-2.5 py-1 text-xs text-muted-foreground">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <span className="text-muted-foreground mt-auto flex items-center gap-1.5 pt-5 text-xs font-medium">
                    <GithubLogo weight="bold" className="size-3.5" />
                    {item.repo}
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  )
}
