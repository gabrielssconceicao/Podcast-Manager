import { repositoryPodcast } from '../repositories/podcasts-repository';
import { PodcastTransferModel } from '../models/podcast-transfer-model';
import { StatusCode } from '../utils/status-code';

export const serviceFilterEpisodes =async (podcastName:string|undefined):Promise<PodcastTransferModel>=>{
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  const query = podcastName?.split('?p=')[1] || ""
  const data =await repositoryPodcast(query)
  
  responseFormat.statusCode = data.length ? StatusCode.OK : StatusCode.NO_CONTENT
  responseFormat.body = data
  return responseFormat
}