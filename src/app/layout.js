import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Heráclito Thiago | Advogado',
  description: 'Quer saber mais sobre essas ações? Entre em contato comigo pelos links abaixo',
  openGraph: {
    images: [process.env.PUBLIC_USER_PICTURE_SRC],
    authors: "Heráclito Thiago"
  },
  twitter: {
    images: [process.env.PUBLIC_USER_PICTURE_SRC],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  )
}
