import { Inter } from 'next/font/google'
import './globals.css'
import Head from "next/head"
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Heráclito Thiago | Advogado',
  description: 'Entre em contato comigo pelos links abaixo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>Heráclito Thiago | Advogado</title>
      </Head>
      <Script id='analytics' strategy='beforeInteractive' async src="https://www.googletagmanager.com/gtag/js?id=G-1974FDGNGK"></Script>
      <Script id='gtag'>{`
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-1974FDGNGK"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-1974FDGNGK');
          </script>
        `}</Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
