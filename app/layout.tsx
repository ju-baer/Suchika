import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Suchika - Meeting Scheduler for Bangladesh",
  description:
    "The most elegant meeting scheduler designed for Bangladeshi professionals. No login required, instant setup, professional invitations.",
  keywords: "meeting scheduler, Bangladesh, video call, zoom, google meet, suchika, professional meetings",
  authors: [{ name: "Suchika Team" }],
  creator: "Suchika",
  publisher: "Suchika",
  openGraph: {
    title: "Suchika - Meeting Scheduler for Bangladesh",
    description: "The most elegant meeting scheduler designed for Bangladeshi professionals",
    type: "website",
    locale: "en_BD",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
