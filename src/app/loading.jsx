import Loading from '@/components/Loading'
import SocialLinks from '@/components/SocialLinks'
import React from 'react'

export default function loading() {
    const voidLinks = {
        socials: [
            { icon: "", url: "" },
            { icon: "", url: "" },
            { icon: "", url: "" },
            { icon: "", url: "" },
            { icon: "", url: "" },
            { icon: "", url: "" },
        ]
    }
    return (
        <main className="flex flex-col justify-center h-screen bg-gradient-to-br from-indigo-500 via-gray-500 to-green-500">
            <div className="flex items-center justify-center mb-2 rounded-full size-32 mb-2 border-4 
            bg-slate-200 animate-pulse border-green-400 cursor-pointer mx-auto">
            </div>
            <h2 className="semi-bold text-white mb-3 text-center">Heráclito Thiago | Advogado</h2>
            <div className="pb-2 flex flex-col items-center justify-center">

                <Loading></Loading>
                <Loading></Loading>

                <div className="flex flex-row justify-evenly justify-center w-9/12 mb-2 py-1.5
          bg-transparent text-white font-semibold text-xl">

                    <SocialLinks elements={voidLinks}></SocialLinks>

                </div>
            </div>
        </main>
    )
}
