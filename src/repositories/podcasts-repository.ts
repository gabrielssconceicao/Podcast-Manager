import fs from 'fs'
import path from 'path'
import { Podcast } from '../models/podcast-model'


 const pathData  = path.join(__dirname, 'podcasts.json')

export const repositoryPodcast = async (podcastName?:string): Promise<Podcast[]> =>{ 
  const rawData = await fs.promises.readFile(pathData,'utf-8')
  let jsonFile:Podcast[] = JSON.parse(rawData)

  if(podcastName) {
    jsonFile = jsonFile.filter((podcast) => podcast.podcastName === podcastName) 
  }
  return jsonFile
 }