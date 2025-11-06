import React from 'react'

export default function AdsLinks({ description, url, icon: Icon , border= 'border-white'}) {
    return (
        <a className={`flex flex-row items-center gap-3
        text-center
        xs:min-h-14 sm:min-h-12 md:min-h-8
         justify-center px-8
         w-9/12 rounded-3xl ${border} border-2 mb-2 
        bg-transparent text-white
        hover:bg-white hover:text-black hover:transition hover:duration-500 ease-in-out`}
            href={url || "#"} target='_blank'
            rel='noopener noreferrer'>
            {Icon ? <Icon /> : ""}
            {description || "site"}
        </a>
    )
}
