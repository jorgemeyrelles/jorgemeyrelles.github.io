import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { LocaleProvider } from "@/contexts/locale-context"
import { Navigation } from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Jorge Meyrelles Jr. | Full Stack Developer",
  description:
    "Full Stack Developer with 5+ years of experience in React, Node.js, TypeScript, Java, and Python. Building modern and scalable web applications.",
  generator: "v0.app",
  keywords: ["Full Stack Developer", "React", "Node.js", "TypeScript", "Java", "Python", "Web Development"],
  authors: [{ name: "Jorge Meyrelles Jr." }],
  openGraph: {
    title: "Jorge Meyrelles Jr. | Full Stack Developer",
    description: "Full Stack Developer with 5+ years of experience in React, Node.js, TypeScript, Java, and Python.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider>
          <LocaleProvider>
            <Suspense fallback={null}>
              <Navigation />
              <main className="pt-16">{children}</main>
              <ScrollToTop />
              <Toaster />
            </Suspense>
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
