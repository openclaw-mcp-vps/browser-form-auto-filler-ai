import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FormFill AI — AI fills repetitive forms from your data',
  description: 'Chrome extension that learns from your form submissions and auto-fills similar forms across websites using AI pattern matching. Perfect for HR, sales, and contractors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="087a29c5-1717-4a31-8609-07cfd315ad83"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
