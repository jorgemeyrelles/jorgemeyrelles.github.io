"use client"

import { useLocale } from "@/contexts/locale-context"
import { Button } from "@/components/ui/button"

export function LocaleToggle() {
  const { locale, setLocale } = useLocale()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLocale(locale === "pt" ? "en" : "pt")}
      className="h-9 px-3 font-medium"
    >
      {locale === "pt" ? "🇺🇸 EN" : "🇧🇷 PT"}
    </Button>
  )
}
