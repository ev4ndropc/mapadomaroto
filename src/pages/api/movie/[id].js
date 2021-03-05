const BASEURL = process.env.NEXT_PUBLIC_THEMOVIEDB_API_URL
const KEY = process.env.THEMOVIEDB_API_KEY

export default async(request, response) => {
  const { id } = request.query

  if(request.method == 'GET'){
    const info = await fetch(`${BASEURL}/movie/${id}?api_key=${KEY}&language=pt-BR`).then(result => result.json())
    const videos = await fetch(`${BASEURL}/movie/${id}/videos?api_key=${KEY}&language=pt-BR`).then(result => result.json())
    return response.status(200).json({ ok: true, info, videos })

  }else{
    return response.status(400).json({ ok: true, message: "What's up!" })
  }


}
