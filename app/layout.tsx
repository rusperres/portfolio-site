import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jairus.dev",
  description: "Freelance web developer portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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