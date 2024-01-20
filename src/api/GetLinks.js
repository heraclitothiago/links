export default async function getLinks() {
    // const res = await fetch(process.env.API_ADDRESS, { cache: 'no-store', next: { revalidate: 0} })
    const res = await fetch(process.env.API_ADDRESS, { next: { revalidate: 0 } })

    if (!res.ok) {
        return {
            description: "Erro ao recuperar os anúncios, contate-me no link do whatsapp abaixo",
            url: process.env.URL_WHATSAPP
        }
    }

    return res.json()
}