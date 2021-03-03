import axios from 'axios'
const BASEURL = process.env.NEXT_PUBLIC_THEMOVIEDB_API_URL
const KEY = process.env.THEMOVIEDB_API_KEY



export default async(request, response) => {
  const { movie } = request.query

  if(request.method == 'GET'){
    const movies = await axios.get(`${BASEURL}/search/multi?api_key=${KEY}&language=pt-BR&query=${movie}`)
    return response.status(200).json({ ok: true, result: movies.data })
  }

  return response.status(400).json({ ok: true, message: "What's up!" })

}
