import type { Metadata } from "next"
import "./globals.css"
import { Heebo } from "next/font/google"

const heeboFont = Heebo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Codelify",
  description: "Your creative digital solution",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={heeboFont.className}>{children}</body>
    </html>
  )
}
