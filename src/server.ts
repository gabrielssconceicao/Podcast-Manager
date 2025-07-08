import * as http from 'http'
import {getFilterEpisodes, getListEpisodes} from './controllers/podcast-controller'
const server = http.createServer(async (req: http.IncomingMessage,res: http.ServerResponse) => {
  const [baseUrl,query] = req.url?.split('?') ?? ['', ''];
  console.log(baseUrl,query)
  if(req.method === 'GET' && baseUrl === '/api/list') {
    await getListEpisodes(req,res)
  }
  if(req.method === 'GET' && baseUrl === '/api/episodes') {
    await getFilterEpisodes(req,res)
  }
})
const PORT = process.env.PORT
server.listen(process.env.PORT || 3333, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`)
})
