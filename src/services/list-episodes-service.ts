import { PodcastTransferModel } from '../models/podcast-transfer-model';
import  '../repositories/podcasts-repository'
import { repositoryPodcast } from '../repositories/podcasts-repository'
import { StatusCode } from '../utils/status-code';
export const serviceListEpisodes =async ():Promise<PodcastTransferModel>=>{
   let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data =await repositoryPodcast()
  responseFormat.statusCode = data.length ? StatusCode.OK : StatusCode.NO_CONTENT
  responseFormat.body = data
  return responseFormat
}