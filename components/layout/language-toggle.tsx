'use client'

import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/providers/language-provider'

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage()

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      className="h-9 gap-1.5 rounded-full px-3 text-xs font-semibold text-muted-foreground hover:text-foreground"
    >
      <Languages className="size-4" aria-hidden />
      <span className="tabular-nums">{locale.toUpperCase()}</span>
    </Button>
  )
}
