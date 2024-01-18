import React from 'react'
import Script from "next/script"
/**
 * Não usar para instalar. Somente fins didáticos
 * @returns Comomponent
 */
export default function Gtag() {
    return (
        <>
            <Script id='analytics' strategy='beforeInteractive' async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG_ID}`}></Script>
            <Script id='gtag'>{`
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.GTAG_ID}');
        `}</Script></>
    )
}
