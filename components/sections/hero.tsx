'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Counter } from '@/components/animations/counter'
import { useLanguage } from '@/components/providers/language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 mask-fade-b" aria-hidden />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-border pl-1 pr-4 py-1 text-xs font-medium text-muted-foreground"
            >
              <span className="overflow-hidden rounded-full flex-shrink-0">
                <Image
                  src="/waira-logo-fb.jpg"
                  alt=""
                  width={26}
                  height={26}
                  className="block"
                  aria-hidden
                />
              </span>
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mt-6 font-heading text-4xl leading-[1.1] font-medium tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
            >
              {t.hero.titleLead}{' '}
              <em className="text-brand not-italic">{t.hero.titleHighlight}</em>{' '}
              {t.hero.titleTail}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button render={<a href="#contacto" />} className="group h-11 px-7 text-sm">
                {t.hero.ctaPrimary}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" render={<a href="#servicios" />} className="h-11 px-7 text-sm">
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {t.hero.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <CheckCircle weight="fill" className="size-3.5 text-brand/70" aria-hidden />
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-10 grid w-full grid-cols-2 gap-x-6 gap-y-5 rounded-xl border border-border bg-card px-6 py-6 sm:grid-cols-4 sm:px-8"
            >
              {t.hero.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-heading text-2xl font-medium text-foreground sm:text-3xl">
                    <Counter value={m.value} suffix={m.suffix} />
                  </dd>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground/80">{m.label}</p>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="bg-pastel-blue-bg relative aspect-[4/5] overflow-hidden rounded-xl border border-border">
              <Image
                src="/waira-logo-fb.jpg"
                alt="Waira Solutions"
                fill
                sizes="(max-width: 1024px) 400px, 480px"
                className="object-contain p-16"
                priority
              />
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-2.5 rounded-lg border border-border bg-card px-4 py-3 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.08)]">
              <span className="bg-success size-2 shrink-0 rounded-full" aria-hidden />
              <span className="text-sm font-medium">{t.hero.availability}</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 sm:mt-20">
          <p className="text-center text-xs font-medium tracking-widest text-muted-foreground/70 uppercase">
            {t.hero.trustedBy}
          </p>
          <div className="mt-6 overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee items-center gap-12 [--marquee-duration:32s]">
              {[...TECHS, ...TECHS].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="font-heading text-sm font-medium whitespace-nowrap text-muted-foreground/50 transition-colors hover:text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

const TECHS = [
  'React', 'Next.js', 'TypeScript', 'OpenAI', 'AWS',
  'Vercel', 'Python', 'Docker', 'Node.js', 'LangChain',
]
