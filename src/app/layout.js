import { Inter } from 'next/font/google'
import './globals.css'
import Head from "next/head"
import Script from 'next/script'

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
      <Head>
        <Script id='analytics' strategy='beforeInteractive' async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`}></Script>
        <Script id='gtag'>{`
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.GTAG_ID}');
        `}</Script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
