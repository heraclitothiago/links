export async function getConfigs() {
    const res = await fetch(process.env.API_ADDRESS, { next: { revalidate: 60 * 60 * 24 } })

    if (!res.ok) {
        return {
            description: "Erro ao recuperar dados da api",
        }
    }

    const [, , { configuracao }] = await res.json()
    return configuracao
}

export default async function getLinks() {
    const res = await fetch(process.env.API_ADDRESS, { next: { revalidate: 0 } })

    if (!res.ok) {
        return {
            description: "Erro ao recuperar dados da api",
        }
    }

    return res.json()
}