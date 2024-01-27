export default async function getLinks() {
    const res = await fetch(process.env.API_ADDRESS, { next: { revalidate: 0 } })

    if (!res.ok) {
        return {
            description: "Erro ao recuperar dados da api",
        }
    }

    return res.json()
}