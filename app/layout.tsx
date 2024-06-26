import type { Metadata } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"
import Attribution from "@/app/components/attribution"
import { ThemeProvider } from "./theme-provider"
import QueryProvider from "./query-provider"

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] })

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
        className={`${spaceMono.className} flex min-h-screen flex-col items-center justify-center bg-lightest-blue text-cool-blue dark:bg-dark-blue dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
            <Attribution />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
