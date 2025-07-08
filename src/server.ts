import * as http from 'http'
import {getFilterEpisodes, getListEpisodes} from './controllers/podcast-controller'
const server = http.createServer(async (req: http.IncomingMessage,res: http.ServerResponse) => {
  if(req.method === 'GET' && req.url === '/api/list') {
    await getListEpisodes(req,res)
  }
  if(req.method === 'GET' && req.url === '/api/episodes') {
    await getFilterEpisodes(req,res)
  }
})
const PORT = process.env.PORT
server.listen(process.env.PORT || 3333, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`)
})
