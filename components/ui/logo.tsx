import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark className="size-9" />
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
    <span className={cn('relative inline-flex shrink-0 overflow-hidden rounded-xl', className)}>
      <Image
        src="/waira-logo-fb.jpg"
        alt="Waira Solutions"
        width={36}
        height={36}
        className="object-contain"
        sizes="36px"
      />
    </span>
  )
}
