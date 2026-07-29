'use client'

import { ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Counter } from '@/components/animations/counter'
import { FlowingNetwork } from '@/components/animations/flowing-network'
import { useLanguage } from '@/components/providers/language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.08] mask-fade-b" aria-hidden />

      <div className="pointer-events-none absolute -top-40 -right-40 size-[600px] rounded-full bg-brand/5 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 size-[500px] rounded-full bg-brand-2/5 blur-[100px]" aria-hidden />

      <FlowingNetwork />

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs font-medium tracking-[0.15em] text-brand uppercase">
                {t.hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06 }}
              className="mt-5 font-heading text-4xl leading-[1.08] font-medium tracking-tight text-balance sm:text-5xl lg:text-[3.8rem] lg:leading-[1.04]"
            >
              {t.hero.titleLine1}{' '}
              <span className="text-brand">{t.hero.titleHighlight}</span>
              <br />
              {t.hero.titleLine2}
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
              <Button render={<a href="#contacto" />} className="group h-12 px-8 text-sm shadow-card hover:shadow-card-hover">
                {t.hero.ctaPrimary}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" render={<a href="#servicios" />} className="h-12 px-8 text-sm">
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
              className="mt-10 grid w-full grid-cols-2 gap-x-6 gap-y-5 rounded-xl border border-border bg-card/80 px-6 py-6 shadow-card sm:grid-cols-4 sm:px-8"
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 shadow-elevated backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-px bg-border/50">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center bg-card/80"
                  >
                    <div
                      className="size-2 rounded-full"
                      style={{
                        backgroundColor: `oklch(0.52 0.14 240 / ${0.2 + Math.random() * 0.4})`,
                        animation: `node-pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  </div>
                ))}
              </div>

              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute size-1 rounded-full bg-brand/40"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${10 + i * 35}%`,
                    animation: `wind-drift-${i + 1} ${5 + i * 2}s ease-in-out infinite`,
                  }}
                />
              ))}

              <div className="relative px-6 py-6 sm:px-8 sm:py-8">
                <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                  <span className="size-2 rounded-full bg-success" />
                  <span>{t.hero.availability}</span>
                </div>
                <p className="mt-4 font-heading text-xl leading-snug font-medium tracking-tight sm:text-2xl">
                  {t.hero.visualTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.hero.visualSub}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.hero.visualTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 sm:mt-20">
          <p className="text-center text-xs font-medium tracking-widest text-muted-foreground/60 uppercase">
            {t.hero.trustedBy}
          </p>
          <div className="mt-6 overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee items-center gap-12 [--marquee-duration:32s]">
              {[...TECHS, ...TECHS].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="font-heading text-sm font-medium whitespace-nowrap text-muted-foreground/30 transition-colors hover:text-muted-foreground/60"
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
