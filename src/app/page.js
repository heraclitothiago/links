import AdsLinks from "@/components/AdsLinks";
import Image from 'next/image'
import SocialLinks from "@/components/SocialLinks";
import getLinks from "@/api/GetLinks";
import ShortUniqueId from 'short-unique-id';

export default async function Home() {
  const [{ anuncios }, { socials }, { configuracao }] = await getLinks()
  const [{ title, linkImage, _ }] = configuracao

  const uid = new ShortUniqueId();

  return (
    <>
      <main className="flex flex-col justify-center h-screen">
        <div className="flex items-center justify-center mb-2">
          <Image
            width={350} height={350}
            src={linkImage} alt="advogado" priority={true}
            className="rounded-full size-32 mb-2 border-4 border-green-400 cursor-pointer"></Image>
        </div>
        <h2 className="semi-bold text-white mb-3 text-center">{title}</h2>
        <div className="pb-2 flex flex-col items-center justify-center">

          <>
          <AdsLinks key={uid.rnd()} url={"https://share.google/w8qQJceRkQ3xgZgUk"} description={"AVISO DO GOLPE DO FALSO ADVOGADO"} border="border-red-700"/>
          {
            anuncios.map(({ description, url }) => (
              <AdsLinks key={uid.rnd()} url={url} description={description} />
            ))
          }
          </>

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