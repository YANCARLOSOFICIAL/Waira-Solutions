'use client'

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
        <span className="font-heading text-lg font-semibold tracking-tight">
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
        'relative inline-flex shrink-0 overflow-hidden rounded-xl',
        'ring-1 ring-brand/40',
        'shadow-[0_0_14px_rgba(0,212,255,0.35)]',
        className,
      )}
    >
      <Image
        src="/waira-logo-fb.jpg"
        alt=""
        fill
        className="object-contain"
        sizes="48px"
        aria-hidden
      />
    </span>
  )
}
