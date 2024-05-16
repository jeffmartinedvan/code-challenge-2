import type { Metadata } from "next"
import "./globals.css"

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
      <body className='font-Heebo'>{children}</body>
    </html>
  )
}
