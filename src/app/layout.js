import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import { getConfigs } from '@/api/GetLinks';

const inter = Inter({ subsets: ['latin'] })

const configuration = await getConfigs()
const [{ title, linkImage, description, author }] = configuration

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: title,
  description: description,
  openGraph: {
    images: linkImage,
    authors: author
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
        <GoogleAnalytics gaId="G-1974FDGNGK" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
