import { FaWhatsapp, FaInstagram, FaTiktok, FaTelegram, FaFacebook } from "react-icons/fa";
import Links from '@/components/links'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      
      <main className="flex flex-col justify-center h-screen bg-gradient-to-br from-indigo-500 via-gray-500 to-green-500">
        <div className="flex items-center justify-center mb-2">
          <Image
          width={350} height={350}
          src="https://avatars.githubusercontent.com/u/34630331" alt="advogado"
            className="rounded-full size-32 mb-2 border-4 border-green-400 cursor-pointer"></Image>
        </div>
        <h2 className="semi-bold text-white mb-3 text-center">Heráclito Thiago | Advogado</h2>
        <div className="pb-2 flex flex-col items-center justify-center">
          <Links
            url={'https://www.instagram.com/thiagocastro.adv/'}
            site={'Instagram'}
            icon={FaInstagram}
          ></Links>

          <Links
            url={'https://www.facebook.com/hera.thiago'}
            site={'Facebook'}
            icon={FaFacebook}
          ></Links>

          <Links
            url={'https://tiktok.com/@euthiagocastro'}
            site={'TikTok'}
            icon={FaTiktok}
          ></Links>

          <Links
            url={'https://wa.me/5599981002759'}
            site={'WhatsApp'}
            icon={FaWhatsapp}
          ></Links>

          <Links
            url={'https://t.me/heraclitothiago'}
            site={'Telegram'}
            icon={FaTelegram}
          ></Links>

        </div>
      </main>
    </>
  )
}
