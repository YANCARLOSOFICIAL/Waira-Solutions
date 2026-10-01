import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showWordmark = false,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className="size-10" />
      {showWordmark ? (
        <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
          Waira<span className="text-brand">.</span>
        </span>
      ) : null}
      <span className="sr-only">Waira Solutions</span>
    </span>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'relative inline-flex shrink-0 overflow-hidden rounded-[10px] ring-1 ring-white/10',
        className,
      )}
    >
      <Image
        src="/waira-3d-logo.png"
        alt="Waira Solutions"
        width={40}
        height={40}
        className="object-cover"
        sizes="40px"
      />
    </span>
  )
}
