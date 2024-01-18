export default async function getLinks() {
    const res = await fetch(process.env.API_ADDRESS, { cache: 'no-store', next: { revalidate: 60 * 5 } })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        return {
            description: "Erro ao recuperar os anúncios, contate-me no link do whatsapp abaixo",
            url: "#"
        }
    }

    return res.json()
}