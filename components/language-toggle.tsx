"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "bn" : "en")}
      className="border-slate-600/50 text-slate-300 hover:bg-slate-700 hover:text-white backdrop-blur-sm rounded-xl font-medium transition-all duration-300"
    >
      <Globe className="w-4 h-4 mr-2" />
      {language === "en" ? "বাংলা" : "English"}
    </Button>
  )
}
