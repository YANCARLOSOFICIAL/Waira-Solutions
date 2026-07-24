import { cn } from '@/lib/utils'
import { Reveal } from '@/components/animations/reveal'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <Reveal>
          <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            'font-heading text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-[2.75rem]',
            align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-2xl',
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              'text-base leading-relaxed text-pretty text-muted-foreground',
              align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl',
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
