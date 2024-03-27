import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Attribution from "@/components/attribution"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Github User Search App",
  description: "A Frontend Mentor challenge solution.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center justify-center`}
      >
        {children}
        <Attribution />
      </body>
    </html>
  )
}
