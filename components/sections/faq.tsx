'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/animations/reveal'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/providers/language-provider'

export function FAQ() {
  const { t } = useLanguage()
  const faq = t.faq
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <Reveal delay={0.1}>
          <div className="mt-12 divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/30 overflow-hidden">
            {faq.items.map((item, i) => {
              const isOpen = open === i
              return (
                <div key={i}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className={cn(
                      'flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium transition-colors duration-200',
                      isOpen ? 'text-foreground' : 'text-foreground/80 hover:text-foreground',
                    )}
                  >
                    <span className="flex-1">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className={cn(
                        'flex shrink-0 size-6 items-center justify-center rounded-full transition-colors',
                        isOpen ? 'bg-brand/15 text-brand' : 'bg-secondary text-muted-foreground',
                      )}
                    >
                      <ChevronDown className="size-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
