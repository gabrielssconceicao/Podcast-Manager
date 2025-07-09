import {IncomingMessage,ServerResponse} from 'http'
import {getFilterEpisodes, getListEpisodes} from './controllers/podcast-controller'
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';
export const app = async (request: IncomingMessage,response: ServerResponse) => {
  const baseUrl = request.url?.split('?')[0] ?? "";
  if(request.method === HttpMethod.GET && baseUrl === Routes.LIST_EPISODES) {
    await getListEpisodes(request,response)
  }
  if(request.method === HttpMethod.GET && baseUrl === Routes.FILTER_EPISODES) {
    await getFilterEpisodes(request,response)
  }}