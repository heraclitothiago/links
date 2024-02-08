export async function getConfigs() {
    const res = await fetch(process.env.API_ADDRESS, { cache: 'force-cache' })

    if (!res.ok) {
        return {
            description: "Erro ao recuperar dados da api",
        }
    }

    const [, , { configuracao }] = await res.json()
    return configuracao
}

export default async function getLinks() {
    const res = await fetch(process.env.API_ADDRESS, { cache: 'force-cache' })

    if (!res.ok) {
        return {
            description: "Erro ao recuperar dados da api",
        }
    }

    return res.json()
}