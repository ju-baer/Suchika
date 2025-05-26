"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Users, LinkIcon, ArrowLeft, Sparkles, Copy } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

interface SuccessPageProps {
  searchParams: {
    title?: string
    date?: string
    link?: string
    participants?: string
    platform?: string
  }
}

export default function SuccessPage({ searchParams }: SuccessPageProps) {
  const { t } = useLanguage()
  const { title, date, link, participants, platform } = searchParams
  const platformIcon = platform === "zoom" ? "🎥" : "📹"
  const platformName =
    platform === "zoom" ? t("form.platform.zoom").replace("🎥 ", "") : t("form.platform.meet").replace("📹 ", "")

  return (
    <div className="min-h-screen bg-professional-gradient relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 border-b border-slate-700/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-heading font-bold text-white">{t("landing.title")}</span>
              <p className="text-xs text-slate-400 font-medium">Meeting Scheduler</p>
            </div>
          </Link>
          <LanguageToggle />
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center pb-8">
            <div className="mx-auto w-20 h-20 bg-success-gradient rounded-3xl flex items-center justify-center mb-6 shadow-xl animate-pulse">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl font-heading font-bold text-white mb-2">{t("success.title")}</CardTitle>
            <p className="text-xl text-slate-300 font-medium">{t("success.subtitle")}</p>
          </CardHeader>
          <CardContent className="space-y-8 p-8">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-heading font-semibold text-white text-xl mb-6 flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-emerald-400" />
                {t("success.details.title")}
              </h3>

              <div className="space-y-6">
                {title && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white text-lg">{title}</p>
                      {date && <p className="text-slate-300 font-medium">{date}</p>}
                    </div>
                  </div>
                )}

                {participants && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-success-gradient rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-300 font-medium">
                      {t("success.participants")} <span className="font-semibold text-white">{participants}</span>{" "}
                      {Number.parseInt(participants) > 1 ? t("success.participants.plural") : t("success.participant")}
                    </p>
                  </div>
                )}

                {link && (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <LinkIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-300 mb-3 font-medium">
                        <span className="font-heading font-semibold text-white">
                          {platformIcon} {platformName} {t("success.meetingLink")}
                        </span>
                      </p>
                      <div className="bg-slate-700/50 border border-slate-600/50 rounded-xl p-4 flex items-center justify-between">
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm break-all flex-1 mr-4 font-medium"
                        >
                          {link}
                        </a>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:bg-slate-600 hover:text-white flex-shrink-0 rounded-lg"
                          onClick={() => navigator.clipboard.writeText(link)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-heading font-semibold text-blue-300 text-lg mb-4">{t("success.next.title")}</h4>
              <ul className="text-blue-200 space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">{t("success.next.1")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">
                    {t("success.next.2")} {platformName} link
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">{t("success.next.3")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="font-medium">{t("success.next.4")}</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="outline"
                className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white py-6 rounded-xl font-medium"
              >
                <Link href="/schedule">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  {t("success.scheduleAnother")}
                </Link>
              </Button>
              {link && (
                <Button
                  asChild
                  className="flex-1 bg-accent-gradient hover:shadow-xl hover:shadow-blue-500/25 py-6 rounded-xl font-semibold transition-all duration-300"
                >
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {platformIcon} {t("success.joinMeeting")} {platformName}
                    <LinkIcon className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-slate-400">
          <p className="text-lg font-medium">
            ✨ {t("common.poweredBy")}{" "}
            <span className="font-heading font-semibold text-blue-400">{t("landing.title")}</span> •{" "}
            {t("common.scheduled")} ✨
          </p>
        </div>
      </div>
    </div>
  )
}
