const BASEURL = process.env.NEXT_PUBLIC_THEMOVIEDB_API_URL
const KEY = process.env.THEMOVIEDB_API_KEY

export default async (request, response) => {
    const tranding = await fetch(`${BASEURL}/trending/all/day?api_key=${KEY}&language=pt-BR`).then(result => result.json())
    return response.status(200).json({ ok: true, tranding })
}

