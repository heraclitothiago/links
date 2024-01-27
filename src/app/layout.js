import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { getConfigs } from '@/api/GetLinks';

const inter = Inter({ subsets: ['latin'] })

const configuration = await getConfigs()
const [{ title, linkImage, description }] = configuration

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: title,
  description: description,
  openGraph: {
    images: linkImage,
    authors: "Heráclito Thiago"
  },
  twitter: {
    images: linkImage,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
