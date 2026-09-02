'use client'

import Image from 'next/image'
import { useLanguage } from '@/components/providers/language-provider'
import { Container } from '@/components/ui/container'
import { EditorialImage } from '@/components/ui/editorial-image'
import { Reveal, StaggerGroup, StaggerItem } from '@/components/animations/reveal'

export function About() {
  const { t } = useLanguage()

  const pillars = [
    { label: t.about.mission.title, text: t.about.mission.text },
    { label: t.about.vision.title, text: t.about.vision.text },
  ]

  return (
    <section id="nosotros" className="relative scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" aria-hidden />

      <Container>
        {/* ── Encabezado asimétrico ── */}
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="flex flex-col">
            <Reveal>
              <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
                <span className="size-1 rounded-full bg-brand" aria-hidden />
                {t.about.eyebrow} · Popayán y Mocoa, Colombia
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="mt-6 max-w-[16ch] font-heading text-4xl font-bold leading-[1.03] tracking-[-0.02em] text-balance sm:text-5xl lg:text-[3.6rem]">
                {t.about.title}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                {t.about.description}
              </p>
            </Reveal>

            {/* Enfoque / Dirección — lista editorial con filetes */}
            <StaggerGroup className="mt-10 flex flex-col divide-y divide-white/10 border-y border-white/10">
              {pillars.map((p) => (
                <StaggerItem key={p.label}>
                  <div className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand/90">
                      {p.label}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Fotografía editorial — las dos ciudades donde está Waira */}
          <Reveal delay={0.1} className="flex flex-col gap-4 lg:pt-10">
            <EditorialImage
              src="/photos/popayan-atardecer.jpg"
              alt="Atardecer sobre Popayán, Cauca"
              caption="Popayán, Cauca"
              className="aspect-[4/3] w-full"
              sizes="(max-width: 1024px) 90vw, 34vw"
            />
            <EditorialImage
              src="/photos/mocoa-green-hills.jpg"
              alt="Piedemonte andino-amazónico en Mocoa, Putumayo"
              caption="Mocoa, Putumayo — puerta de la Amazonía"
              className="aspect-[4/3] w-full"
              sizes="(max-width: 1024px) 90vw, 34vw"
            />
          </Reveal>
        </div>

        {/* ── Valores — tira horizontal, hover de brisa ── */}
        <StaggerGroup className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((value, i) => (
            <StaggerItem key={value.title}>
              <div className="wind-hover flex h-full flex-col bg-card p-6">
                <span className="font-mono text-xs text-muted-foreground/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* ── Banda "viento" — tipografía gigante, sin gráfico 3D genérico ── */}
        <Reveal className="mt-24">
          <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b0a] px-6 py-20 text-center sm:py-28">
            {/* Amanecer con niebla sobre Popayán — el "viento" hecho imagen */}
            <Image
              src="/photos/popayan-amanecer.jpg"
              alt="Amanecer con niebla sobre Popayán"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-center opacity-[0.5] saturate-[0.85] contrast-[1.05]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(130% 130% at 50% 50%, oklch(0.09 0.005 65 / 0.45), oklch(0.09 0.005 65 / 0.86))',
              }}
            />
            <svg
              aria-hidden
              className="animate-breeze-slow pointer-events-none absolute inset-x-0 top-1/2 h-32 w-full -translate-y-1/2 opacity-40"
              viewBox="0 0 1200 200"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M-20 120 C 220 40, 420 180, 660 100 S 1060 20, 1240 90"
                stroke="var(--brand)"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="animate-flow-line"
              />
              <path
                d="M-20 150 C 260 110, 440 190, 700 130 S 1080 70, 1240 120"
                stroke="var(--circuit-line)"
                strokeWidth="1"
              />
            </svg>
            <p className="relative font-heading text-3xl font-bold leading-tight tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
              Waira significa <span className="text-brand">viento</span>.
              <br className="hidden sm:block" /> Movimiento, flujo, evolución constante.
            </p>
          </figure>
        </Reveal>
      </Container>
    </section>
  )
}
