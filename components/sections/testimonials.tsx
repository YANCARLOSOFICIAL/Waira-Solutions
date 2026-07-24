'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CaretLeft, CaretRight, Rocket, ShieldCheck, Users, type Icon } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { useLanguage } from '@/components/providers/language-provider'

const icons: Record<string, Icon> = {
  Users,
  ShieldCheck,
  Rocket,
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
    <section className="relative scroll-mt-20 border-t border-border py-24 sm:py-28">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
          />
          <div className="hidden gap-2 md:flex">
            <Button variant="outline" size="icon" aria-label="Anterior" onClick={() => emblaApi?.scrollPrev()} className="size-10 rounded-full">
              <CaretLeft className="size-5" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Siguiente" onClick={() => emblaApi?.scrollNext()} className="size-10 rounded-full">
              <CaretRight className="size-5" />
            </Button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {t.testimonials.items.map((item, i) => {
              const Icon = icons[item.icon] ?? Users
              return (
                <div key={i} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(33.333%-11px)]">
                  <div className="border-border flex h-full flex-col rounded-xl border bg-card p-7">
                    <span className="bg-secondary flex size-10 shrink-0 items-center justify-center rounded-lg">
                      <Icon weight="bold" className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300 cursor-pointer',
                selected === i ? 'w-6 bg-brand' : 'w-1.5 bg-border hover:bg-muted-foreground/40',
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
