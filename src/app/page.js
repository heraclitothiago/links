import { FaWhatsapp, FaInstagram, FaTiktok, FaTelegram, FaFacebook, FaYoutube } from "react-icons/fa";
import AdsLinks from "@/components/AdsLinks";
import Image from 'next/image'
import SocialLinks from "@/components/SocialLinks";
import getLinks from "@/api/GetLinks";
import ShortUniqueId from 'short-unique-id';
import { Suspense } from "react";
import Loading from "@/components/Loading";

export default async function Home() {
  const anuncios = await getLinks()
  const uid = new ShortUniqueId();

  const medias = {
    socials: [
      { icon: FaWhatsapp, url: process.env.URL_WHATSAPP },
      { icon: FaTiktok, url: process.env.URL_TIKTOK },
      { icon: FaFacebook, url: process.env.URL_FACEBOOK },
      { icon: FaInstagram, url: process.env.URL_INSTAGRAM },
      { icon: FaTelegram, url: process.env.URL_TELEGRAM },
    ]
  }
  return (
    <>
      <main className="flex flex-col justify-center h-screen bg-gradient-to-br from-indigo-500 via-gray-500 to-green-500">
        <div className="flex items-center justify-center mb-2">
          <Image
            width={350} height={350}
            src={process.env.PUBLIC_USER_PICTURE_SRC} alt="advogado"
            className="rounded-full size-32 mb-2 border-4 border-green-400 cursor-pointer"></Image>
        </div>
        <h2 className="semi-bold text-white mb-3 text-center">Heráclito Thiago | Advogado</h2>
        <div className="pb-2 flex flex-col items-center justify-center">
          {/* <Suspense fallback={<Loading />} /> */}
          {
            anuncios.map(({ description, url }) => (
              <AdsLinks key={uid} url={url} description={description} />
            ))
          }

          <div className="flex flex-row justify-evenly justify-center w-9/12 mb-2 py-1.5
          bg-transparent text-white font-semibold text-xl">
            <SocialLinks elements={medias} />
          </div>
        </div>
      </main>
    </>
  )
}