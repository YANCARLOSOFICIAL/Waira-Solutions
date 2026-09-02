'use client'

import { ArrowRight } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Counter } from '@/components/animations/counter'
import { EditorialImage } from '@/components/ui/editorial-image'
import { useLanguage } from '@/components/providers/language-provider'
import { TechLogo } from '@/components/ui/tech-logos'

const TECHS = [
  'React', 'Next.js', 'TypeScript', 'OpenAI', 'AWS',
  'Vercel', 'Python', 'Docker', 'Node.js', 'LangChain',
]

export function Hero() {
  const { t } = useLanguage()
  const reduce = useReducedMotion() ?? false

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay } }
      : {
          initial: { opacity: 0, y: 26, filter: 'blur(6px)' },
          animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: { type: 'spring' as const, stiffness: 120, damping: 20, mass: 0.9, delay },
        }

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-background pt-28 pb-16 sm:pt-32 lg:pt-36"
    >
      {/* Hilo de aire — flujo asimétrico de fondo, en vez de la rejilla de circuito */}
      <svg
        aria-hidden
        className="animate-breeze-slow pointer-events-none absolute inset-x-0 top-1/4 -z-0 h-[60%] w-full opacity-[0.5]"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-40 420 C 260 300, 380 520, 640 400 S 1060 200, 1200 340 S 1460 280, 1520 220"
          stroke="var(--circuit-line)"
          strokeWidth="1.5"
        />
        <path
          d="M-40 500 C 300 460, 460 560, 720 480 S 1140 320, 1480 400"
          stroke="var(--circuit-line)"
          strokeWidth="1"
        />
        <path
          d="M-40 360 C 220 260, 520 420, 780 320 S 1180 160, 1500 240"
          stroke="var(--brand)"
          strokeWidth="1.25"
          strokeLinecap="round"
          className="animate-flow-line"
          opacity="0.35"
        />
      </svg>

      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_0.85fr] lg:gap-10">
          {/* ── Columna izquierda: tipografía asimétrica ── */}
          <div className="flex flex-col items-start">
            {t.hero.eyebrow ? (
              <motion.span
                {...rise(0)}
                className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground"
              >
                <span className="h-px w-8 bg-brand" aria-hidden />
                {t.hero.eyebrow}
              </motion.span>
            ) : null}

            <motion.h1
              {...rise(0.06)}
              className="mt-6 font-heading text-[2.6rem] font-bold leading-[1.02] tracking-[-0.02em] text-balance sm:text-6xl lg:text-[4.4rem] lg:leading-[0.98]"
            >
              {t.hero.titleLine1}{' '}
              <span className="relative inline-block text-muted-foreground">
                {t.hero.titleHighlight}
                {/* Único detalle tipográfico en ámbar — trazo orgánico dibujado a mano */}
                <svg
                  aria-hidden
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 16"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 11 C 46 4, 92 4, 132 8 S 190 13, 197 6"
                    stroke="var(--brand)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br className="hidden sm:block" />{' '}
              {t.hero.titleLine2}
            </motion.h1>

            <motion.p
              {...rise(0.14)}
              className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div {...rise(0.2)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              {/* CTA principal — el único bloque en ámbar */}
              <a
                href="#contacto"
                className="wind-hover group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-8 text-sm font-bold text-primary-foreground hover:bg-primary/90"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight
                  weight="bold"
                  className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-1"
                />
              </a>
              <a
                href="#servicios"
                className="wind-hover inline-flex h-12 items-center justify-center rounded-md border border-white/15 bg-transparent px-8 text-sm font-semibold text-foreground hover:border-white/30 hover:bg-white/5"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              {...rise(0.28)}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {t.hero.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
                >
                  <span className="size-1 rounded-full bg-brand" aria-hidden />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Columna derecha: fotografía editorial B&N ── */}
          <motion.div
            {...rise(0.18)}
            className="relative mx-auto w-full max-w-md lg:mt-6 lg:max-w-none lg:translate-y-4"
          >
            <EditorialImage
              src="/photos/server-room.jpg"
              alt="Infraestructura y salas de servidores que Waira Solutions diseña y opera"
              caption="Infraestructura · monitoreo 24/7"
              priority
              tint={0.25}
              className="aspect-[4/5] w-full"
              sizes="(max-width: 1024px) 90vw, 34vw"
            />
          </motion.div>
        </div>

        {/* Métricas — fila editorial con filetes, no "bento cyber" */}
        <motion.dl
          {...rise(0.34)}
          className="mt-16 grid grid-cols-2 gap-y-8 border-t border-white/10 pt-8 sm:mt-20 sm:grid-cols-4"
        >
          {t.hero.metrics.map((m) => (
            <div key={m.label} className="flex flex-col px-1 sm:border-l sm:border-white/10 sm:pl-6 sm:first:border-l-0 sm:first:pl-0">
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                <Counter value={m.value} suffix={m.suffix} />
              </dd>
              <p className="mt-1.5 max-w-[14ch] text-xs leading-snug text-muted-foreground">
                {m.label}
              </p>
            </div>
          ))}
        </motion.dl>

        {/* Muro de tecnologías */}
        <div className="mt-16 sm:mt-20">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground/50">
            {t.hero.trustedBy}
          </p>
          <div className="mask-fade-x mt-6 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-12 [--marquee-duration:38s]">
              {[...TECHS, ...TECHS].map((tech, i) => (
                <TechLogo
                  key={`${tech}-${i}`}
                  name={tech}
                  size={28}
                  className="opacity-30 grayscale transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
