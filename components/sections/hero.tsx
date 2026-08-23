'use client'

import { ArrowRight, CheckCircle, Code, Cpu, Gear, Terminal, Sparkle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Counter } from '@/components/animations/counter'
import { FlowingNetwork } from '@/components/animations/flowing-network'
import { useLanguage } from '@/components/providers/language-provider'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-36 min-h-[100dvh] flex items-center">
      {/* Subtle laser scan line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px animate-cyber-scan z-10"
        style={{ background: 'linear-gradient(90deg, transparent, oklch(0.65 0.22 230 / 0.7), oklch(0.78 0.18 195 / 0.7), transparent)' }}
        aria-hidden
      />

      {/* Hero circuit grid background */}
      <div className="bg-circuit pointer-events-none absolute inset-0 opacity-[0.5] mask-fade-b" aria-hidden />

      {/* Ambient glowing lighting — Electric Blue & Amber Golden */}
      <div
        className="pointer-events-none absolute -top-60 -right-60 size-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, oklch(0.65 0.22 230 / 0.12) 0%, transparent 65%)', filter: 'blur(60px)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-40 size-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, oklch(0.78 0.18 75 / 0.08) 0%, transparent 65%)', filter: 'blur(80px)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 size-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, oklch(0.78 0.18 195 / 0.06) 0%, transparent 70%)', filter: 'blur(70px)' }}
        aria-hidden
      />

      <FlowingNetwork />

      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          {/* ── Left: Copy & Main Value Prop ── */}
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 font-mono text-xs font-semibold tracking-[0.18em] text-brand uppercase backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand animate-pulse-glow" aria-hidden />
                {t.hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.6rem] lg:leading-[1.04]"
            >
              {t.hero.titleLine1}{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, oklch(0.65 0.22 230) 0%, oklch(0.78 0.18 195) 60%, oklch(0.78 0.18 75) 100%)' }}
              >
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
                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-md px-8 text-sm font-bold text-[oklch(0.05_0.02_240)] transition-all duration-300 hover:shadow-[0_0_32px_oklch(0.65_0.22_230_/_0.55)] active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg, oklch(0.65 0.22 230) 0%, oklch(0.75 0.2 210) 50%, oklch(0.78 0.18 195) 100%)' }}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, oklch(0.72 0.22 230) 0%, oklch(0.82 0.2 195) 100%)' }}
                />
                <span className="relative z-10">{t.hero.ctaPrimary}</span>
                <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#servicios"
                className="inline-flex h-12 items-center justify-center rounded-md border border-brand/30 bg-brand/5 px-8 text-sm font-semibold text-foreground transition-all duration-200 hover:border-brand/50 hover:bg-brand/10 hover:text-brand"
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
                  <CheckCircle weight="fill" className="size-3.5 text-brand/70" aria-hidden />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Metrics — Bento Cyber Grid */}
            <motion.dl
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 grid w-full grid-cols-2 gap-px sm:grid-cols-4"
              style={{
                background: 'oklch(0.65 0.22 230 / 0.12)',
                borderRadius: '0.625rem',
                overflow: 'hidden',
              }}
            >
              {t.hero.metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="flex flex-col justify-center px-5 py-5 transition-colors hover:bg-[oklch(0.13_0.024_240)]"
                  style={{ background: 'oklch(0.11 0.022 240 / 0.95)' }}
                >
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-heading text-2xl font-bold sm:text-3xl"
                    style={{
                      color: i === 0 ? 'oklch(0.65 0.22 230)' : i === 1 ? 'oklch(0.78 0.18 195)' : i === 2 ? 'oklch(0.72 0.18 150)' : 'oklch(0.78 0.18 75)'
                    }}
                  >
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
            {/* Ambient Backlight Glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'radial-gradient(ellipse, oklch(0.65 0.22 230 / 0.2) 0%, oklch(0.78 0.18 195 / 0.1) 40%, transparent 75%)',
                filter: 'blur(28px)',
                transform: 'scale(1.08)',
              }}
              aria-hidden
            />

            {/* Floating Tech Badges (Neural node, Terminal, Gear) */}
            <div className="absolute -top-4 -right-4 z-20 hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-[oklch(0.12_0.025_240_/_0.85)] p-2.5 shadow-elevated backdrop-blur-xl animate-float">
              <span className="flex size-7 items-center justify-center rounded-md bg-brand/15 text-brand">
                <Cpu weight="bold" className="size-4" />
              </span>
              <div className="flex flex-col pr-2">
                <span className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-widest">AI Engine</span>
                <span className="font-mono text-xs font-bold text-foreground">v4.8 Active</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 z-20 hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-[oklch(0.12_0.025_240_/_0.85)] p-2.5 shadow-elevated backdrop-blur-xl animate-float" style={{ animationDelay: '3s' }}>
              <span className="flex size-7 items-center justify-center rounded-md bg-[oklch(0.78_0.18_75_/_0.15)] text-[oklch(0.78_0.18_75)]">
                <Terminal weight="bold" className="size-4" />
              </span>
              <div className="flex flex-col pr-2">
                <span className="font-mono text-[9px] text-muted-foreground/60 uppercase tracking-widest">Pipeline</span>
                <span className="font-mono text-xs font-bold text-[oklch(0.72_0.18_150)]">● 0 errors</span>
              </div>
            </div>

            {/* Glassmorphism Container */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                background: 'oklch(0.10 0.022 240 / 0.85)',
                border: '1px solid oklch(1 0 0 / 0.12)',
                boxShadow: 'inset 0 1px 0 oklch(1 0 0 / 0.1), inset 0 0 20px oklch(0.65 0.22 230 / 0.05), 0 20px 60px oklch(0 0 0 / 0.6)',
                backdropFilter: 'blur(20px) saturate(180%)',
              }}
            >
              {/* IDE Top Window Bar */}
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ borderBottom: '1px solid oklch(1 0 0 / 0.08)', background: 'oklch(0.08 0.02 240 / 0.6)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="size-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 border border-white/5 font-mono text-[10px] text-muted-foreground/80">
                  <Code className="size-3 text-brand" />
                  <span>waira-core.config.ts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkle weight="fill" className="size-3 text-[oklch(0.78_0.18_75)] animate-pulse-glow" />
                  <span className="font-mono text-[10px] font-bold text-[oklch(0.78_0.18_75)]">READY</span>
                </div>
              </div>

              {/* Developer Code Block with Syntax Highlighting */}
              <div className="p-5 font-mono text-xs leading-relaxed" style={{ background: 'oklch(0.08 0.02 240 / 0.95)' }}>
                <div className="flex items-center gap-2 text-muted-foreground/40 mb-3 border-b border-white/5 pb-2 text-[10px]">
                  <span>// WAIRA INTELLIGENCE SYSTEM CONFIG</span>
                </div>

                <div className="space-y-1.5 overflow-x-auto">
                  <p>
                    <span className="text-[oklch(0.78_0.18_195)]">import</span>{' '}
                    <span className="text-foreground">{`{ WairaEngine, AI }`}</span>{' '}
                    <span className="text-[oklch(0.78_0.18_195)]">from</span>{' '}
                    <span className="text-[oklch(0.72_0.18_150)]">&apos;@waira/core&apos;</span>
                  </p>
                  <p className="text-muted-foreground/50">// Initialize high-performance enterprise agent</p>
                  <p>
                    <span className="text-[oklch(0.65_0.22_230)]">const</span>{' '}
                    <span className="text-[oklch(0.78_0.18_75)]">app</span> ={' '}
                    <span className="text-[oklch(0.78_0.18_195)]">await</span>{' '}
                    <span className="text-[oklch(0.65_0.22_230)]">WairaEngine</span>.
                    <span className="text-[oklch(0.78_0.18_195)]">deploy</span>({'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">mode:</span>{' '}
                    <span className="text-[oklch(0.72_0.18_150)]">&apos;autonomous-ai&apos;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">stack:</span> [{`'`}
                    <span className="text-[oklch(0.78_0.18_75)]">Next.js</span>{`', '`}
                    <span className="text-[oklch(0.78_0.18_75)]">Python</span>{`', '`}
                    <span className="text-[oklch(0.78_0.18_75)]">Cloud</span>{`'`}],
                  </p>
                  <p className="pl-4">
                    <span className="text-muted-foreground">uptimeTarget:</span>{' '}
                    <span className="text-[oklch(0.65_0.22_230)]">99.99</span>,
                  </p>
                  <p>{`});`}</p>
                </div>
              </div>

              {/* Bento Grid Status Summary */}
              <div className="grid grid-cols-3 gap-px bg-white/5 p-px">
                {[
                  { label: 'Uptime', value: '99.9%', color: 'oklch(0.72 0.18 150)' },
                  { label: 'Projects', value: '30+', color: 'oklch(0.65 0.22 230)' },
                  { label: 'APIs Connected', value: '100%', color: 'oklch(0.78 0.18 195)' },
                ].map((stat) => (
                  <div key={stat.label}
                    className="flex flex-col items-center justify-center py-3.5"
                    style={{ background: 'oklch(0.10 0.022 240)' }}
                  >
                    <span className="font-heading text-lg font-bold" style={{ color: stat.color }}>{stat.value}</span>
                    <span className="mt-0.5 font-mono text-[9px] tracking-widest text-muted-foreground/60 uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Realtime Live Execution Log Footer */}
              <div className="flex items-center justify-between px-5 py-3 border-t border-white/5 bg-[oklch(0.08_0.02_240)] font-mono text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[oklch(0.72_0.18_150)] animate-pulse-glow" />
                  <span className="text-muted-foreground">STATUS: <strong className="text-foreground font-semibold">ONLINE</strong></span>
                </div>
                <span className="text-brand flex items-center gap-1">
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
                <span
                  key={`${tech}-${i}`}
                  className="font-mono text-sm font-medium whitespace-nowrap text-muted-foreground/25 transition-colors hover:text-brand/60"
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
