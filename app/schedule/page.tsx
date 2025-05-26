"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Users, Mail, ArrowLeft, Sparkles, Video, LinkIcon, CheckCircle } from "lucide-react"
import Link from "next/link"
import { createMeeting } from "../actions/create-meeting"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export default function SchedulePage() {
  const { t } = useLanguage()
  const today = new Date().toISOString().split("T")[0]

  return (
    <div className="min-h-screen bg-professional-gradient relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-float delay-1000"></div>
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
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button
              asChild
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white font-medium"
            >
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("nav.backToHome")}
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-600/30 rounded-full text-slate-300 text-sm mb-6 backdrop-blur-sm">
            <CheckCircle className="w-4 h-4 mr-2 text-emerald-400" />
            {t("schedule.tagline")}
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white tracking-tight">
            {t("schedule.title")}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            {t("schedule.subtitle")}
          </p>
        </div>

        <Card className="bg-slate-800/40 border-slate-700/30 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="flex items-center justify-center gap-3 text-2xl text-white font-heading">
              <div className="w-12 h-12 bg-accent-gradient rounded-2xl flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              {t("schedule.form.title")}
            </CardTitle>
            <CardDescription className="text-slate-300 text-lg font-medium">
              {t("schedule.form.subtitle")}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form action={createMeeting} className="space-y-10">
              {/* Organizer Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-success-gradient rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white">{t("form.organizer.title")}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="organizerName" className="text-slate-300 font-medium text-sm">
                      {t("form.organizer.name")}
                    </Label>
                    <Input
                      id="organizerName"
                      name="organizerName"
                      placeholder={t("form.organizer.namePlaceholder")}
                      required
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="organizerEmail" className="text-slate-300 font-medium text-sm">
                      {t("form.organizer.email")}
                    </Label>
                    <Input
                      id="organizerEmail"
                      name="organizerEmail"
                      type="email"
                      placeholder={t("form.organizer.emailPlaceholder")}
                      required
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12"
                    />
                  </div>
                </div>
              </div>

              {/* Meeting Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent-gradient rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white">{t("form.meeting.title")}</h3>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="title" className="text-slate-300 font-medium text-sm">
                    {t("form.meeting.titleLabel")}
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder={t("form.meeting.titlePlaceholder")}
                    required
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="description" className="text-slate-300 font-medium text-sm">
                    {t("form.meeting.description")}
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder={t("form.meeting.descriptionPlaceholder")}
                    rows={3}
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="date" className="text-slate-300 font-medium text-sm">
                      {t("form.meeting.date")}
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      min={today}
                      required
                      className="bg-slate-700/50 border-slate-600/50 text-white focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="time" className="text-slate-300 font-medium text-sm">
                      {t("form.meeting.time")}
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      required
                      className="bg-slate-700/50 border-slate-600/50 text-white focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="duration" className="text-slate-300 font-medium text-sm">
                      {t("form.meeting.duration")}
                    </Label>
                    <Select name="duration" defaultValue="60">
                      <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 rounded-xl">
                        <SelectItem value="15">{t("form.meeting.duration.15")}</SelectItem>
                        <SelectItem value="30">{t("form.meeting.duration.30")}</SelectItem>
                        <SelectItem value="45">{t("form.meeting.duration.45")}</SelectItem>
                        <SelectItem value="60">{t("form.meeting.duration.60")}</SelectItem>
                        <SelectItem value="90">{t("form.meeting.duration.90")}</SelectItem>
                        <SelectItem value="120">{t("form.meeting.duration.120")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Meeting Platform */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white">{t("form.platform.title")}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="platform" className="text-slate-300 font-medium text-sm">
                      {t("form.platform.label")}
                    </Label>
                    <Select name="platform" defaultValue="zoom">
                      <SelectTrigger className="bg-slate-700/50 border-slate-600/50 text-white focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700 rounded-xl">
                        <SelectItem value="zoom">{t("form.platform.zoom")}</SelectItem>
                        <SelectItem value="meet">{t("form.platform.meet")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="meetingLink" className="text-slate-300 font-medium text-sm">
                      {t("form.platform.link")}
                    </Label>
                    <Input
                      id="meetingLink"
                      name="meetingLink"
                      type="url"
                      placeholder={t("form.platform.linkPlaceholder")}
                      required
                      className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <LinkIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-blue-300 mb-2">{t("form.platform.help")}</p>
                      <ul className="text-sm text-blue-200 space-y-1">
                        <li>• {t("form.platform.zoomHelp")}</li>
                        <li>• {t("form.platform.meetHelp")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Participants */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white">{t("form.participants.title")}</h3>
                </div>
                <div className="space-y-3">
                  <Label htmlFor="emails" className="text-slate-300 font-medium text-sm">
                    {t("form.participants.emails")}
                  </Label>
                  <Textarea
                    id="emails"
                    name="emails"
                    placeholder={t("form.participants.emailsPlaceholder")}
                    rows={5}
                    required
                    className="bg-slate-700/50 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none rounded-xl"
                  />
                  <p className="text-sm text-slate-400 font-medium">{t("form.participants.help")}</p>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-heading font-medium text-emerald-300 mb-2">{t("form.timezone.title")}</p>
                    <p className="text-emerald-200 font-medium">{t("form.timezone.desc")}</p>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent-gradient hover:shadow-xl hover:shadow-blue-500/25 text-white py-6 text-lg rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-3" />
                {t("form.submit")}
                <Mail className="w-5 h-5 ml-3" />
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-12 text-slate-400">
          <p className="text-lg font-medium">
            ✨ {t("common.poweredBy")}{" "}
            <span className="font-heading font-semibold text-blue-400">{t("landing.title")}</span> •{" "}
            {t("common.simple")} ✨
          </p>
        </div>
      </div>
    </div>
  )
}
