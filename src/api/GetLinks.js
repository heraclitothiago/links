/**
 * alterado de cache: 'force-cache'
 * https://nextjs.org/docs/app/guides/caching#data-cache
 */

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
    const res = await fetch(process.env.API_ADDRESS, {next: { revalidate: 3600 } })

    if (!res.ok) {
        return {
            description: "Erro ao recuperar dados da api",
        }
    }

    return res.json()
}