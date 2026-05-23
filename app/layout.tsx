import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "AI Prompt Playground Differ — Visual Diff for Prompt Iterations",
  description: "Side-by-side comparisons of AI prompt outputs with highlighted differences. Built for AI and prompt engineers."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="76b56956-b0b6-4a52-97b2-fbef75198a5b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
