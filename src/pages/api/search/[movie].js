const BASEURL = process.env.NEXT_PUBLIC_THEMOVIEDB_API_URL
const KEY = process.env.THEMOVIEDB_API_KEY


export default async(request, response) => {
  const { movie } = request.query

  if(request.method == 'GET'){
    const movies = await fetch(`${BASEURL}/search/movie?api_key=${KEY}&language=pt-BR&query=${movie}`).then(result => result.json())
    return response.status(200).json({ ok: true, result: movies.data })

  }else{
    return response.status(400).json({ ok: true, message: "What's up!" })
  }


}
