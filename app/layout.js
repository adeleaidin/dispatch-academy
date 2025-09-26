import './globals.css'

export const metadata = {
  title: 'Kyrgyz Dispatch Academy — Free Course',
  description: 'Free dispatcher training — 9 concise presentations. Learn the market, tools, docs, and how to land a job.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  )
}
