'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Counter } from '@/components/animations/counter'
import { useLanguage } from '@/components/providers/language-provider'

const HeroScene = dynamic(() => import('@/components/three/hero-scene'), {
  ssr: false,
  loading: () => null,
})

const TRUST_BADGES = ['SOC 2', 'GDPR', 'ISO 27001']

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40">
      {/* Background layers */}
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 mask-fade-b" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[700px] -translate-x-1/2 rounded-full bg-brand/15 blur-[160px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-60 -right-20 size-[400px] rounded-full bg-brand-2/10 blur-[120px]"
        aria-hidden
      />
      {/* Subtle top accent line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-2xl border border-brand/20 bg-brand/5 pl-1.5 pr-4 py-1.5 text-xs font-medium text-brand"
            >
              <span className="overflow-hidden rounded-xl ring-1 ring-brand/40 shadow-[0_0_10px_rgba(0,212,255,0.35)] flex-shrink-0">
                <Image
                  src="/waira-logo-fb.jpg"
                  alt=""
                  width={32}
                  height={32}
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
              className="mt-6 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {t.hero.titleLead}{' '}
              <span className="text-gradient-brand">{t.hero.titleHighlight}</span>{' '}
              {t.hero.titleTail}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                render={<a href="#contacto" />}
                className="group h-11 rounded-full px-7 text-sm glow-brand"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                variant="outline"
                render={<a href="#servicios" />}
                className="h-11 rounded-full px-7 text-sm"
              >
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <CheckCircle className="size-3.5 text-brand/70" aria-hidden />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Metrics */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-10 grid w-full grid-cols-2 gap-x-6 gap-y-5 border-t border-border/60 pt-8 sm:grid-cols-4"
            >
              {t.hero.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                    <Counter value={m.value} suffix={m.suffix} />
                  </dd>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* 3D visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
          >
            {/* Glow ring */}
            <div className="absolute inset-8 rounded-full border border-brand/10" aria-hidden />
            <div className="absolute inset-16 rounded-full border border-brand/5" aria-hidden />
            <div className="absolute inset-0 rounded-full bg-brand/8 blur-3xl" aria-hidden />
            <HeroScene />
          </motion.div>
        </div>

        {/* Trusted-by marquee */}
        <div className="mt-16 sm:mt-20">
          <p className="text-center text-xs font-medium tracking-widest text-muted-foreground/60 uppercase">
            {t.hero.trustedBy}
          </p>
          <div className="mt-6 overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee items-center gap-12 [--marquee-duration:32s]">
              {[...TECHS, ...TECHS].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="font-heading text-base font-medium whitespace-nowrap text-muted-foreground/50 transition-colors hover:text-muted-foreground"
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
