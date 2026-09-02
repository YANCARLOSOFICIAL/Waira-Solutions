'use client'

import { ArrowRight, CheckCircle, Code, Cpu, Gear, Terminal, Sparkle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Counter } from '@/components/animations/counter'
import { useLanguage } from '@/components/providers/language-provider'
import { TechLogo } from '@/components/ui/tech-logos'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-36 min-h-[100dvh] flex items-center bg-[#0a0a0a]">
      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          {/* ── Left: Copy & Main Value Prop ── */}
          <div className="flex flex-col items-start">
            {t.hero.eyebrow ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-widest text-foreground uppercase">
                  <span className="size-1.5 rounded-full bg-white" aria-hidden />
                  {t.hero.eyebrow}
                </span>
              </motion.div>
            ) : null}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]"
            >
              {t.hero.titleLine1}{' '}
              <span className="text-muted-foreground">
                {t.hero.titleHighlight}
              </span>
              <br />
              {t.hero.titleLine2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary CTA */}
              <a
                href="#contacto"
                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-md px-8 text-sm font-bold text-black bg-white transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
              >
                <span className="relative z-10">{t.hero.ctaPrimary}</span>
                <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#servicios"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-transparent px-8 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-white/5"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {t.hero.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <CheckCircle weight="fill" className="size-3.5 text-foreground/60" aria-hidden />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Metrics — Bento Cyber Grid */}
            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid w-full grid-cols-2 gap-px sm:grid-cols-4 bg-white/10 rounded-xl overflow-hidden border border-white/10"
            >
              {t.hero.metrics.map((m) => (
                <div
                  key={m.label}
                  className="flex flex-col justify-center px-5 py-5 bg-[#0a0a0a]"
                >
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-heading text-2xl font-bold sm:text-3xl text-foreground">
                    <Counter value={m.value} suffix={m.suffix} />
                  </dd>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground/70 font-mono">{m.label}</p>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── Right: Developer Glassmorphism Workspace Visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Solid Dark Container */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111] border border-white/15 shadow-2xl">
              {/* IDE Top Window Bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#161616]">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="size-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 border border-white/5 font-mono text-[10px] text-muted-foreground/80">
                  <Code className="size-3 text-muted-foreground" />
                  <span>waira-core.config.ts</span>
                </div>
                <div className="flex items-center gap-1.5 opacity-50">
                  <Sparkle weight="fill" className="size-3 text-white" />
                  <span className="font-mono text-[10px] font-bold text-white">READY</span>
                </div>
              </div>

              {/* Developer Code Block with Syntax Highlighting */}
              <div className="p-5 font-mono text-xs leading-relaxed bg-[#111]">
                <div className="flex items-center gap-2 text-muted-foreground/40 mb-3 border-b border-white/5 pb-2 text-[10px]">
                  <span>// WAIRA INTELLIGENCE SYSTEM CONFIG</span>
                </div>

                <div className="space-y-1.5 overflow-x-auto">
                  <p>
                    <span className="text-[oklch(0.78_0.18_195)]">import</span>{' '}
                    <span className="text-foreground">{`{ Waira }`}</span>{' '}
                    <span className="text-[oklch(0.78_0.18_195)]">from</span>{' '}
                    <span className="text-[oklch(0.72_0.18_150)]">&apos;@waira/solutions&apos;</span>
                  </p>
                  <p className="text-muted-foreground/50 mt-2">// Construyendo producto tecnológico</p>
                  <p>
                    <span className="text-[oklch(0.65_0.22_230)]">const</span>{' '}
                    <span className="text-[oklch(0.78_0.18_75)]">proyecto</span> ={' '}
                    <span className="text-[oklch(0.78_0.18_195)]">await</span>{' '}
                    <span className="text-[oklch(0.65_0.22_230)]">Waira</span>.
                    <span className="text-[oklch(0.78_0.18_195)]">build</span>({'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">tipo:</span>{' '}
                    <span className="text-[oklch(0.72_0.18_150)]">&apos;enterprise-software&apos;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">stack:</span> [{`'`}
                    <span className="text-[oklch(0.78_0.18_75)]">Next.js</span>{`', '`}
                    <span className="text-[oklch(0.78_0.18_75)]">AWS</span>{`', '`}
                    <span className="text-[oklch(0.78_0.18_75)]">AI</span>{`'`}],
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">calidad:</span>{' '}
                    <span className="text-[oklch(0.78_0.18_195)]">true</span>,
                  </p>
                  <p>{`});`}</p>
                </div>
              </div>

              {/* Bento Grid Status Summary */}
              <div className="grid grid-cols-3 gap-px bg-white/10 p-px">
                {[
                  { label: 'Uptime', value: '99.9%' },
                  { label: 'Projects', value: '30+' },
                  { label: 'APIs', value: '100%' },
                ].map((stat) => (
                  <div key={stat.label}
                    className="flex flex-col items-center justify-center py-3.5 bg-[#111]"
                  >
                    <span className="font-heading text-lg font-bold text-foreground">{stat.value}</span>
                    <span className="mt-0.5 font-mono text-[9px] tracking-widest text-muted-foreground/60 uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Realtime Live Execution Log Footer */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-white/10 bg-[#161616] font-mono text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-muted-foreground">STATUS: <strong className="text-foreground font-semibold">ONLINE</strong></span>
                </div>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Gear className="size-3 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>SYNCED</span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Logo Wall Strip below hero */}
        <div className="mt-16 sm:mt-20">
          <p className="text-center font-mono text-[10px] font-medium tracking-[0.25em] text-muted-foreground/40 uppercase">
            {t.hero.trustedBy}
          </p>
          <div className="mt-6 overflow-hidden mask-fade-x">
            <div className="flex w-max animate-marquee items-center gap-12 [--marquee-duration:35s]">
              {[...TECHS, ...TECHS].map((tech, i) => (
                <TechLogo 
                  key={`${tech}-${i}`} 
                  name={tech} 
                  size={28} 
                  className="opacity-30 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" 
                />
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
