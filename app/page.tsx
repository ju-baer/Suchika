"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Users, Mail, Zap, Shield, Globe, ArrowRight, Sparkles, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function LandingPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-professional-gradient relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 border-b border-slate-700/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-heading font-bold text-white">{t("landing.title")}</span>
              <p className="text-xs text-slate-400 font-medium">Meeting Scheduler</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button
              asChild
              className="bg-accent-gradient hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium"
            >
              <Link href="/schedule">{t("nav.scheduleButton")}</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-full text-slate-300 text-sm mb-8 backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
            {t("landing.tagline")}
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white leading-tight tracking-tight">
            {t("landing.title")}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            {t("landing.subtitle")}
          </p>
          <p className="text-2xl md:text-3xl font-heading font-semibold text-blue-400 mb-12">
            {t("landing.forBangladesh")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button
              asChild
              size="lg"
              className="bg-accent-gradient hover:shadow-xl hover:shadow-blue-500/25 text-white px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/schedule">
                <Calendar className="w-5 h-5 mr-3" />
                {t("landing.scheduleButton")}
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </Button>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm">
              <div className="text-4xl font-heading font-bold text-white mb-2">{t("landing.stats.setupTime")}</div>
              <div className="text-slate-400 font-medium">{t("landing.stats.setupLabel")}</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm">
              <div className="text-4xl font-heading font-bold text-white mb-2">{t("landing.stats.noLogin")}</div>
              <div className="text-slate-400 font-medium">{t("landing.stats.noLoginLabel")}</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm">
              <div className="text-4xl font-heading font-bold text-white mb-2">{t("landing.stats.meetings")}</div>
              <div className="text-slate-400 font-medium">{t("landing.stats.meetingsLabel")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">{t("features.title")}</h2>
          <p className="text-xl text-slate-400 font-medium">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">{t("features.fast.title")}</h3>
              <p className="text-slate-400 leading-relaxed">{t("features.fast.desc")}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-success-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">{t("features.timezone.title")}</h3>
              <p className="text-slate-400 leading-relaxed">{t("features.timezone.desc")}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">{t("features.secure.title")}</h3>
              <p className="text-slate-400 leading-relaxed">{t("features.secure.desc")}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">{t("features.participants.title")}</h3>
              <p className="text-slate-400 leading-relaxed">{t("features.participants.desc")}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">{t("features.email.title")}</h3>
              <p className="text-slate-400 leading-relaxed">{t("features.email.desc")}</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300 group hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-white mb-4">{t("features.platforms.title")}</h3>
              <p className="text-slate-400 leading-relaxed">{t("features.platforms.desc")}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Professional CTA Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-24 text-center">
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">{t("cta.subtitle")}</p>
          <Button
            asChild
            size="lg"
            className="bg-accent-gradient hover:shadow-xl hover:shadow-blue-500/25 text-white px-12 py-6 text-xl rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/schedule">
              <Sparkles className="w-6 h-6 mr-3" />
              {t("cta.button")}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="relative z-10 border-t border-slate-700/30 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-heading font-bold text-white">{t("landing.title")}</span>
                <p className="text-xs text-slate-400 font-medium">Meeting Scheduler</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 font-medium">{t("footer.tagline")}</p>
            <p className="text-sm text-slate-500">{t("footer.copyright")}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
