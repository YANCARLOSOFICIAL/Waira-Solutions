import Image from 'next/image'
import { cn } from '@/lib/utils'

type EditorialImageProps = {
  /** Ruta de la foto en /public. Si se omite, se muestra un marcador tipográfico. */
  src?: string
  alt: string
  /** Texto corto para el marcador cuando aún no hay foto real. */
  placeholderLabel?: string
  caption?: string
  className?: string
  priority?: boolean
  sizes?: string
  /** Intensidad de la viñeta oscura (0-1). */
  tint?: number
  /** Tratamiento: 'color' (grade cálido sutil) o 'bw' (blanco y negro alto contraste). */
  tone?: 'color' | 'bw'
}

/**
 * Imagen editorial con viñeta oscura y un hilo de aire (línea SVG asimétrica)
 * que la ancla al lenguaje "viento" de Waira. Degrada con elegancia a un
 * marcador tipográfico mientras no exista la foto real.
 */
export function EditorialImage({
  src,
  alt,
  placeholderLabel = 'Fotografía',
  caption,
  className,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 45vw',
  tint = 0.4,
  tone = 'color',
}: EditorialImageProps) {
  return (
    <figure className={cn('group relative', className)}>
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b0a]">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn(
              'object-cover transition-[transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]',
              tone === 'bw'
                ? 'grayscale contrast-[1.1] brightness-[0.95] group-hover:brightness-[1.02]'
                : 'saturate-[0.95] contrast-[1.03] brightness-[0.98] group-hover:brightness-[1.05]',
            )}
          />
        ) : (
          <Placeholder label={placeholderLabel} />
        )}

        {/* Viñeta oscura — el "filtro editorial" */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(120% 100% at 50% 0%, transparent 30%, oklch(0.08 0.005 65 / ${tint}) 100%)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5"
          style={{
            background: 'linear-gradient(to top, oklch(0.08 0.005 65 / 0.82), transparent)',
          }}
        />

        {/* Hilo de aire — línea SVG asimétrica que cruza la imagen */}
        <svg
          aria-hidden
          className="animate-breeze-slow pointer-events-none absolute -bottom-2 left-0 w-[120%] opacity-40"
          viewBox="0 0 600 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-20 90 C 120 40, 220 120, 340 70 S 560 10, 640 60"
            stroke="var(--brand)"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-flow-line"
          />
        </svg>

        {caption ? (
          <figcaption className="absolute bottom-4 left-4 right-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
            {caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  )
}

function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle_at_30%_20%,oklch(0.17_0.01_65),oklch(0.1_0.005_65))]">
      <svg
        aria-hidden
        className="animate-breeze absolute inset-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 400 400"
        fill="none"
      >
        {[60, 120, 180, 240].map((r) => (
          <circle key={r} cx="120" cy="200" r={r} stroke="var(--brand)" strokeWidth="1" strokeDasharray="2 10" />
        ))}
      </svg>
      <span className="font-heading text-6xl leading-none text-white/12 select-none">W</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/35">{label}</span>
    </div>
  )
}
