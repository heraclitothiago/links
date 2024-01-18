import React from 'react'

export default function AdsLinks({ description, url, icon: Icon }) {
    return (
        <a className='flex flex-row items-center gap-3
         justify-center w-9/12 rounded-3xl border-white border-2 mb-2 
        bg-transparent text-white font-semibold
        hover:bg-white hover:text-black hover:transition hover:duration-500 ease-in-out'
            href={url || "#"} target='_blank'
            rel='noopener noreferrer'>
            {Icon ? <Icon /> : ""}
            {description || "site"}
        </a>
    )
}
