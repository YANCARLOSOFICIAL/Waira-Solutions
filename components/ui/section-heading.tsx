import { cn } from '@/lib/utils'

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
        'flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: 'oklch(0.65 0.22 230)' }}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-[2.75rem]',
          align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-2xl',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'text-base leading-relaxed text-pretty text-muted-foreground',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-xl',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
