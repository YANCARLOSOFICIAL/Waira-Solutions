'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Compass, Heart, Rocket, ShieldCheck, Sparkles, Target } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { Reveal } from '@/components/animations/reveal'
import { useLanguage } from '@/components/providers/language-provider'

const valueIcons = [Rocket, ShieldCheck, Sparkles, Heart]

export function About() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="relative scroll-mt-20 py-24 sm:py-28">
      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left column: heading + mission + vision */}
          <div className="flex flex-col gap-6">
            {/* ── Logo hero ── */}
            <Reveal>
              <div className="flex items-center gap-5">
                {/* Rotating-ring logo */}
                <div className="relative flex-shrink-0">
                  {/* Outer ambient glow */}
                  <motion.div
                    aria-hidden
                    animate={{ opacity: [0.35, 0.6, 0.35] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -inset-3 rounded-[28px] bg-brand/20 blur-xl"
                  />
                  {/* Rotating conic-gradient ring */}
                  <div className="relative overflow-hidden rounded-[22px] p-[2px]">
                    {/* Gradient layer fills the padding gap and rotates */}
                    <motion.div
                      aria-hidden
                      animate={{ rotate: 360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 origin-center"
                      style={{
                        background:
                          'conic-gradient(from 0deg, transparent 0%, oklch(0.82 0.13 196) 30%, oklch(0.78 0.12 165) 55%, transparent 75%)',
                      }}
                    />
                    {/* Inner mask covers center, leaving only the 2px ring */}
                    <div className="relative overflow-hidden rounded-[20px] bg-background">
                      <Image
                        src="/waira-logo-fb.jpg"
                        alt="Waira Solutions"
                        width={128}
                        height={128}
                        priority
                        className="block"
                      />
                    </div>
                  </div>
                </div>

                {/* Company identity */}
                <div className="flex flex-col gap-1.5">
                  <span className="font-heading text-2xl font-bold tracking-tight leading-tight">
                    Waira<span className="text-brand">.</span>Solutions
                  </span>
                  <span className="text-sm text-muted-foreground">Popayán · Cauca · Colombia</span>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/10 border border-brand/20 px-2.5 py-1 text-xs font-medium text-brand">
                    <span className="size-1.5 rounded-full bg-brand animate-pulse" aria-hidden />
                    Transformación Digital
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                <span className="size-1.5 rounded-full bg-brand" aria-hidden />
                {t.about.eyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="max-w-lg font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl">
                {t.about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-lg text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                {t.about.description}
              </p>
            </Reveal>

            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <Reveal direction="right">
                <SpotlightCard className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card/40 p-6 hover:border-brand/40 transition-colors duration-300">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Target className="size-4.5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold">{t.about.mission.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.about.mission.text}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
              <Reveal direction="left">
                <SpotlightCard className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-card/40 p-6 hover:border-brand-2/40 transition-colors duration-300">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand-2/10 text-brand-2">
                    <Compass className="size-4.5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold">{t.about.vision.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.about.vision.text}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>

          {/* Right column: values grid */}
          <Reveal direction="left" delay={0.08}>
            <div className="grid grid-cols-2 gap-4">
              {t.about.values.map((value, i) => {
                const Icon = valueIcons[i % valueIcons.length]
                const delays = [0, 0.08, 0.06, 0.14]
                return (
                  <motion.article
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: delays[i] ?? 0, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    <SpotlightCard className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40">
                      <span className="flex size-10 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-brand/10">
                        <Icon className="size-4.5 text-muted-foreground transition-colors group-hover:text-brand" />
                      </span>
                      <h4 className="mt-4 font-heading text-base font-semibold">{value.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                    </SpotlightCard>
                  </motion.article>
                )
              })}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
