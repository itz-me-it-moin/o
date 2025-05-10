import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider } from "@/components/auth/auth-provider"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "প্রগতি - আপনার কণ্ঠস্বরে চালিত অধ্যয়ন সহকারী",
  description: "প্রগতি হল একটি এআই-ভিত্তিক ফিজিক্যাল স্টাডি অ্যাসিস্ট্যান্ট যা আপনার অধ্যয়নকে আরও সহজ, দক্ষ এবং আনন্দদায়ক করে তোলে।",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <body>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
