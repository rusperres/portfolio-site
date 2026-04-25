import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Jairus | Software Engineer & Systems Architect",
    template: "%s | Jairus.dev"
  },
  description: "Specializing in building scalable web systems, SaaS interfaces, and custom business solutions.",
  openGraph: {
    title: "Jairus | Software Engineer & Systems Architect",
    description: "Building scalable web systems and custom business solutions.",
    url: "https://jairus.dev",
    siteName: "Jairus.dev",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        
        <div className="flex min-h-screen flex-col">
          
          {/* Header */}
          <Navbar />

          {/* Page content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </div>
        <Toaster />

      </body>
    </html>
  )
}