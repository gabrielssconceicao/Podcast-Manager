import * as http from 'http'
import {getFilterEpisodes, getListEpisodes} from './controllers/podcast-controller'
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';
const server = http.createServer(async (request: http.IncomingMessage,response: http.ServerResponse) => {
  const [baseUrl,query] = request.url?.split('?') ?? ['', ''];
  if(request.method === HttpMethod.GET && baseUrl === Routes.LIST_EPISODES) {
    await getListEpisodes(request,response)
  }
  if(request.method === HttpMethod.GET && baseUrl === Routes.FILTER_EPISODES) {
    await getFilterEpisodes(request,response)
  }
})
const PORT = process.env.PORT || 3333
server.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})
