'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { useLanguage } from '@/components/providers/language-provider'

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export function Testimonials() {
  const { t } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selected, setSelected] = useState(0)
  const [snaps, setSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelected(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section className="relative scroll-mt-20 py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />
          <div className="hidden gap-2 md:flex">
            <Button
              variant="outline"
              size="icon"
              aria-label="Anterior"
              onClick={() => emblaApi?.scrollPrev()}
              className="size-10 rounded-full transition-colors hover:border-brand/50"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Siguiente"
              onClick={() => emblaApi?.scrollNext()}
              className="size-10 rounded-full transition-colors hover:border-brand/50"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {t.testimonials.items.map((item, i) => (
              <div
                key={i}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-10px)] lg:flex-[0_0_calc(33.333%-14px)]"
              >
                <SpotlightCard className="flex h-full flex-col rounded-2xl border border-border bg-card/40 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_8px_24px_-8px_oklch(0.82_0.13_196/0.15)]">
                  <Quote className="size-6 text-brand/40" aria-hidden />
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90 sm:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 font-heading text-xs font-semibold text-primary-foreground">
                      {initials(item.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold">{item.name}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        {item.role} &middot; {item.company}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Testimonio ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                selected === i ? 'w-6 bg-brand' : 'w-1.5 bg-border hover:bg-muted-foreground/40',
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
