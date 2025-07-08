import * as http from 'http'
import {getListEpisodes} from './controllers/podcast-controller'
const server = http.createServer(async (req: http.IncomingMessage,res: http.ServerResponse) => {
  if(req.method === 'GET') {
    await getListEpisodes(req,res)
  }
})
const PORT = process.env.PORT
server.listen(process.env.PORT || 3333, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`)
})
