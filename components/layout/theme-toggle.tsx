'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/providers/language-provider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = theme !== 'light'

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={t.theme.toggle}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="size-9 rounded-full text-muted-foreground hover:text-foreground"
    >
      {mounted && isDark ? (
        <Sun weight="bold" className="size-[18px]" />
      ) : (
        <Moon weight="bold" className="size-[18px]" />
      )}
      <span className="sr-only">{t.theme.toggle}</span>
    </Button>
  )
}
