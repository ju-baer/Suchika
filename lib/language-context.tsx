"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "bn"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.scheduleButton": "Schedule Meeting",
    "nav.backToHome": "Back to Home",

    // Landing Page
    "landing.tagline": "No Login Required • Instant Meeting Setup",
    "landing.title": "SUCHIKA",
    "landing.subtitle": "The most elegant meeting scheduler designed for",
    "landing.forBangladesh": "Bangladeshi Professionals",
    "landing.scheduleButton": "Schedule a Meeting",
    "landing.stats.setupTime": "0 Seconds",
    "landing.stats.setupLabel": "Setup Time",
    "landing.stats.noLogin": "100%",
    "landing.stats.noLoginLabel": "No Login Required",
    "landing.stats.meetings": "∞",
    "landing.stats.meetingsLabel": "Meetings",

    // Features
    "features.title": "Why Choose Suchika?",
    "features.subtitle": "Built specifically for the Bangladeshi workflow",
    "features.fast.title": "Lightning Fast",
    "features.fast.desc": "Create and send meeting invitations in under 30 seconds. No registration, no hassle.",
    "features.timezone.title": "Bangladesh Time Zone",
    "features.timezone.desc": "Automatically handles BST timezone. Perfect for local and international meetings.",
    "features.secure.title": "Secure & Private",
    "features.secure.desc": "Your data is encrypted and secure. We don't store personal information unnecessarily.",
    "features.participants.title": "Multiple Participants",
    "features.participants.desc": "Invite unlimited participants with a single click. Perfect for team meetings.",
    "features.email.title": "Professional Emails",
    "features.email.desc": "Beautiful, professional email invitations that make a great first impression.",
    "features.platforms.title": "Flexible Platforms",
    "features.platforms.desc": "Works with Zoom, Google Meet, or any meeting platform. You choose what works best.",

    // CTA Section
    "cta.title": "Ready to Schedule Your First Meeting?",
    "cta.subtitle": "Join thousands of Bangladeshi professionals who trust Suchika for their meeting needs.",
    "cta.button": "Start Scheduling Now",

    // Footer
    "footer.tagline": "The most elegant meeting scheduler for Bangladesh",
    "footer.copyright": "© 2025 Suchika. Made with ❤️ for Bangladesh professionals.",

    // Schedule Page
    "schedule.tagline": "Create Your Meeting in Seconds",
    "schedule.title": "Schedule a Meeting",
    "schedule.subtitle": "Fill in the details below and we'll send beautiful invitations to all participants",
    "schedule.form.title": "Create New Meeting",
    "schedule.form.subtitle": "No login required • Instant setup • Professional invitations",

    // Form Sections
    "form.organizer.title": "Your Information",
    "form.organizer.name": "Your Name *",
    "form.organizer.namePlaceholder": "Enter your full name",
    "form.organizer.email": "Your Email *",
    "form.organizer.emailPlaceholder": "your.email@example.com",

    "form.meeting.title": "Meeting Details",
    "form.meeting.titleLabel": "Meeting Title *",
    "form.meeting.titlePlaceholder": "e.g., Weekly Team Sync, Project Review, Client Meeting",
    "form.meeting.description": "Description (Optional)",
    "form.meeting.descriptionPlaceholder":
      "Brief description of the meeting agenda, topics to discuss, or any preparation needed...",
    "form.meeting.date": "Date *",
    "form.meeting.time": "Time *",
    "form.meeting.duration": "Duration",
    "form.meeting.duration.15": "15 minutes",
    "form.meeting.duration.30": "30 minutes",
    "form.meeting.duration.45": "45 minutes",
    "form.meeting.duration.60": "1 hour",
    "form.meeting.duration.90": "1.5 hours",
    "form.meeting.duration.120": "2 hours",

    "form.platform.title": "Meeting Platform",
    "form.platform.label": "Platform *",
    "form.platform.zoom": "🎥 Zoom",
    "form.platform.meet": "📹 Google Meet",
    "form.platform.link": "Meeting Link *",
    "form.platform.linkPlaceholder": "https://zoom.us/j/... or https://meet.google.com/...",
    "form.platform.help": "How to get your meeting link:",
    "form.platform.zoomHelp": "Zoom: Create a meeting in Zoom and copy the join URL",
    "form.platform.meetHelp": "Google Meet: Start a new meeting in Google Meet and copy the link",

    "form.participants.title": "Participants",
    "form.participants.emails": "Participant Emails *",
    "form.participants.emailsPlaceholder":
      "Enter email addresses separated by commas\n\nExample:\njohn.doe@company.com, sarah.ahmed@business.bd, team@startup.com",
    "form.participants.help":
      "Separate multiple emails with commas. We'll send professional invitations to each participant.",

    "form.timezone.title": "🇧🇩 Bangladesh Standard Time (BST)",
    "form.timezone.desc":
      "All meeting times will be automatically converted and displayed in Bangladesh timezone for all participants.",

    "form.submit": "Create Meeting & Send Invitations",

    // Success Page
    "success.title": "🎉 Meeting Created Successfully!",
    "success.subtitle": "Your invitations have been sent to all participants",
    "success.details.title": "Meeting Details",
    "success.participants": "Invitations sent to",
    "success.participant": "participant",
    "success.participants.plural": "participants",
    "success.meetingLink": "Meeting Link:",
    "success.next.title": "✅ What happens next?",
    "success.next.1": "All participants will receive beautiful email invitations",
    "success.next.2": "They can join the meeting using the provided",
    "success.next.3": "No account creation required for participants",
    "success.next.4": "Meeting time is automatically shown in Bangladesh timezone",
    "success.scheduleAnother": "Schedule Another Meeting",
    "success.joinMeeting": "Join Meeting",

    // Common
    "common.poweredBy": "Powered by",
    "common.simple": "Simple, Secure, Professional",
    "common.scheduled": "Meeting Scheduled Successfully",
  },
  bn: {
    // Navigation
    "nav.scheduleButton": "মিটিং সময়সূচী",
    "nav.backToHome": "হোমে ফিরুন",

    // Landing Page
    "landing.tagline": "লগইন প্রয়োজন নেই • তাৎক্ষণিক মিটিং সেটআপ",
    "landing.title": "সূচিকা",
    "landing.subtitle": "বাংলাদেশী পেশাদারদের জন্য বিশেষভাবে ডিজাইন করা",
    "landing.forBangladesh": "সবচেয়ে মার্জিত মিটিং সময়সূচী",
    "landing.scheduleButton": "একটি মিটিং সময়সূচী করুন",
    "landing.stats.setupTime": "০ সেকেন্ড",
    "landing.stats.setupLabel": "সেটআপ সময়",
    "landing.stats.noLogin": "১০০%",
    "landing.stats.noLoginLabel": "লগইন প্রয়োজন নেই",
    "landing.stats.meetings": "∞",
    "landing.stats.meetingsLabel": "মিটিং",

    // Features
    "features.title": "কেন সূচিকা বেছে নেবেন?",
    "features.subtitle": "বাংলাদেশী কর্মপ্রবাহের জন্য বিশেষভাবে তৈরি",
    "features.fast.title": "বজ্রগতি",
    "features.fast.desc": "৩০ সেকেন্ডের মধ্যে মিটিং আমন্ত্রণ তৈরি এবং পাঠান। কোন নিবন্ধন নেই, কোন ঝামেলা নেই।",
    "features.timezone.title": "বাংলাদেশ সময় অঞ্চল",
    "features.timezone.desc": "স্বয়ংক্রিয়ভাবে BST সময় অঞ্চল পরিচালনা করে। স্থানীয় এবং আন্তর্জাতিক মিটিংয়ের জন্য নিখুঁত।",
    "features.secure.title": "নিরাপদ এবং ব্যক্তিগত",
    "features.secure.desc": "আপনার ডেটা এনক্রিপ্ট করা এবং নিরাপদ। আমরা অপ্রয়োজনীয়ভাবে ব্যক্তিগত তথ্য সংরক্ষণ করি না।",
    "features.participants.title": "একাধিক অংশগ্রহণকারী",
    "features.participants.desc": "একটি ক্লিকে সীমাহীন অংশগ্রহণকারীদের আমন্ত্রণ জানান। দলীয় মিটিংয়ের জন্য নিখুঁত।",
    "features.email.title": "পেশাদার ইমেইল",
    "features.email.desc": "সুন্দর, পেশাদার ইমেইল আমন্ত্রণ যা দুর্দান্ত প্রথম ছাপ তৈরি করে।",
    "features.platforms.title": "নমনীয় প্ল্যাটফর্ম",
    "features.platforms.desc": "জুম, গুগল মিট বা যেকোনো মিটিং প্ল্যাটফর্মের সাথে কাজ করে। আপনি যা সবচেয়ে ভালো কাজ করে তা বেছে নিন।",

    // CTA Section
    "cta.title": "আপনার প্রথম মিটিং সময়সূচী করতে প্রস্তুত?",
    "cta.subtitle": "হাজার হাজার বাংলাদেশী পেশাদার যারা তাদের মিটিং প্রয়োজনের জন্য সূচিকাকে বিশ্বাস করেন তাদের সাথে যোগ দিন।",
    "cta.button": "এখনই সময়সূচী শুরু করুন",

    // Footer
    "footer.tagline": "বাংলাদেশের জন্য সবচেয়ে মার্জিত মিটিং সময়সূচী",
    "footer.copyright": "© ২০২৫ সূচিকা। বাংলাদেশী পেশাদারদের জন্য ❤️ দিয়ে তৈরি।",

    // Schedule Page
    "schedule.tagline": "সেকেন্ডের মধ্যে আপনার মিটিং তৈরি করুন",
    "schedule.title": "একটি মিটিং সময়সূচী করুন",
    "schedule.subtitle": "নিচের বিবরণ পূরণ করুন এবং আমরা সব অংশগ্রহণকারীদের সুন্দর আমন্ত্রণ পাঠাবো",
    "schedule.form.title": "নতুন মিটিং তৈরি করুন",
    "schedule.form.subtitle": "লগইন প্রয়োজন নেই • তাৎক্ষণিক সেটআপ • পেশাদার আমন্ত্রণ",

    // Form Sections
    "form.organizer.title": "আপনার তথ্য",
    "form.organizer.name": "আপনার নাম *",
    "form.organizer.namePlaceholder": "আপনার পূর্ণ নাম লিখুন",
    "form.organizer.email": "আপনার ইমেইল *",
    "form.organizer.emailPlaceholder": "your.email@example.com",

    "form.meeting.title": "মিটিং বিবরণ",
    "form.meeting.titleLabel": "মিটিং শিরোনাম *",
    "form.meeting.titlePlaceholder": "যেমন, সাপ্তাহিক টিম সিঙ্ক, প্রকল্প পর্যালোচনা, ক্লায়েন্ট মিটিং",
    "form.meeting.description": "বিবরণ (ঐচ্ছিক)",
    "form.meeting.descriptionPlaceholder": "মিটিং এজেন্ডার সংক্ষিপ্ত বিবরণ, আলোচনার বিষয়, বা প্রয়োজনীয় প্রস্তুতি...",
    "form.meeting.date": "তারিখ *",
    "form.meeting.time": "সময় *",
    "form.meeting.duration": "সময়কাল",
    "form.meeting.duration.15": "১৫ মিনিট",
    "form.meeting.duration.30": "৩০ মিনিট",
    "form.meeting.duration.45": "৪৫ মিনিট",
    "form.meeting.duration.60": "১ ঘন্টা",
    "form.meeting.duration.90": "১.৫ ঘন্টা",
    "form.meeting.duration.120": "২ ঘন্টা",

    "form.platform.title": "মিটিং প্ল্যাটফর্ম",
    "form.platform.label": "প্ল্যাটফর্ম *",
    "form.platform.zoom": "🎥 জুম",
    "form.platform.meet": "📹 গুগল মিট",
    "form.platform.link": "মিটিং লিঙ্ক *",
    "form.platform.linkPlaceholder": "https://zoom.us/j/... অথবা https://meet.google.com/...",
    "form.platform.help": "আপনার মিটিং লিঙ্ক কীভাবে পাবেন:",
    "form.platform.zoomHelp": "জুম: জুমে একটি মিটিং তৈরি করুন এবং যোগদান URL কপি করুন",
    "form.platform.meetHelp": "গুগল মিট: গুগল মিটে একটি নতুন মিটিং শুরু করুন এবং লিঙ্ক কপি করুন",

    "form.participants.title": "অংশগ্রহণকারী",
    "form.participants.emails": "অংশগ্রহণকারীদের ইমেইল *",
    "form.participants.emailsPlaceholder":
      "কমা দিয়ে আলাদা করে ইমেইল ঠিকানা লিখুন\n\nউদাহরণ:\njohn.doe@company.com, sarah.ahmed@business.bd, team@startup.com",
    "form.participants.help": "একাধিক ইমেইল কমা দিয়ে আলাদা করুন। আমরা প্রতিটি অংশগ্রহণকারীকে পেশাদার আমন্ত্রণ পাঠাবো।",

    "form.timezone.title": "🇧🇩 বাংলাদেশ মান সময় (BST)",
    "form.timezone.desc":
      "সমস্ত মিটিং সময় স্বয়ংক্রিয়ভাবে রূপান্তরিত হবে এবং সব অংশগ্রহণকারীদের জন্য বাংলাদেশ সময় অঞ্চলে প্রদর্শিত হবে।",

    "form.submit": "মিটিং তৈরি করুন এবং আমন্ত্রণ পাঠান",

    // Success Page
    "success.title": "🎉 মিটিং সফলভাবে তৈরি হয়েছে!",
    "success.subtitle": "আপনার আমন্ত্রণ সব অংশগ্রহণকারীদের পাঠানো হয়েছে",
    "success.details.title": "মিটিং বিবরণ",
    "success.participants": "আমন্ত্রণ পাঠানো হয়েছে",
    "success.participant": "অংশগ্রহণকারী",
    "success.participants.plural": "অংশগ্রহণকারীদের",
    "success.meetingLink": "মিটিং লিঙ্ক:",
    "success.next.title": "✅ এরপর কী হবে?",
    "success.next.1": "সব অংশগ্রহণকারী সুন্দর ইমেইল আমন্ত্রণ পাবেন",
    "success.next.2": "তারা প্রদত্ত লিঙ্ক ব্যবহার করে মিটিংয়ে যোগ দিতে পারবেন",
    "success.next.3": "অংশগ্রহণকারীদের জন্য অ্যাকাউন্ট তৈরির প্রয়োজন নেই",
    "success.next.4": "মিটিং সময় স্বয়ংক্রিয়ভাবে বাংলাদেশ সময় অঞ্চলে দেখানো হয়",
    "success.scheduleAnother": "আরেকটি মিটিং সময়সূচী করুন",
    "success.joinMeeting": "মিটিংয়ে যোগ দিন",

    // Common
    "common.poweredBy": "চালিত",
    "common.simple": "সহজ, নিরাপদ, পেশাদার",
    "common.scheduled": "মিটিং সফলভাবে সময়সূচী হয়েছে",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("suchika-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "bn")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("suchika-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
