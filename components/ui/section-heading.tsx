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
        <span
          className={cn(
            'inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="size-1 rounded-full bg-brand" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'font-heading text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-balance sm:text-4xl md:text-[2.9rem]',
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
