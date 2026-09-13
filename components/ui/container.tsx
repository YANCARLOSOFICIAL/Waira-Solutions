import { createElement } from 'react'
import { cn } from '@/lib/utils'

export function Container({
  children,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}) {
  // createElement en vez de <Tag> para no depender del namespace JSX global
  // (lo amplían las libs 3D y rompían el tipado de children).
  return createElement(Tag, { className: cn('mx-auto w-full max-w-[1340px] px-4 sm:px-6 lg:px-8', className) }, children)
}
