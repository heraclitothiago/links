import { SiGooglecalendar } from "react-icons/si";
import AdsLinks from "@/components/AdsLinks";
import Image from 'next/image'
import SocialLinks from "@/components/SocialLinks";
import getLinks from "@/api/GetLinks";
import ShortUniqueId from 'short-unique-id';

export default async function Home() {
  const data = await getLinks()
  var [anuncios, socials] = data
  var { anuncios } = anuncios
  var { socials } = socials

  const uid = new ShortUniqueId();

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

          <AdsLinks url={process.env.URL_AGENDAMENTO}
            description={"Agente um honário conosco"}
            icon={SiGooglecalendar} />

          {
            anuncios.map(({ description, url }) => (
              <AdsLinks key={uid.rnd()} url={url} description={description} />
            ))
          }

          <div className="flex flex-row justify-evenly justify-center w-9/12 mb-2 py-1.5
          bg-transparent text-white font-semibold text-xl">
            {
              socials
                .filter(({ isActive }) => isActive === "true")
                .map(({ link, icon }) => (
                  <SocialLinks link={link} icon={icon} key={uid.rnd()} />
                ))
            }

          </div>
        </div>
      </main>
    </>
  )
}