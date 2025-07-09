# Node.js Podcast Manager without frameworks

## Description

The Podcast Manager is an application inspired by the Netflix style, designed to centralize different podcast episodes organized by category. This project aims to facilitate access to and organization of video-format podcast episodes, providing users with an intuitive and enjoyable browsing experience.

## Features

- **List podcast episodes by category**: Episodes are organized into categories such as health, bodybuilding, mindset, and humor, allowing users to easily explore the available content.

- **Filter episodes by podcast name**: Users can perform specific searches by podcast name, making it easier to access desired episodes.

## Implementation

### List podcast episodes by category

- **Endpoint**:`GET /list`
- Description: Returns a list of podcast episodes organized by categories.: Returns a list of podcast episodes organized by categories.
- **Example response**:

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

### Filter episodes by podcast name

- **Endpoint** :`GET /episode?podcastName={nome}`
- **Description** : Returns a list of podcast episodes based on the provided podcast name.
- **Example request** : `GET /episode?podcastName=flow`

## Technologies 

- **[TypeScript](https://www.typescriptlang.org/):** Programming language used for the development of the project.
- **[Tsup](https://github.com/egoist/tsup):** Build and bundling tool for TypeScript projects.
- **[Tsx](https://github.com/egoist/tsx):** TypeScript compiler that supports project building.
- **[Node.js](https://nodejs.org/):** JavaScript runtime environment that allows executing JavaScript code on the server side.
- **[@types/node](https://www.npmjs.com/package/@types/node):** Type definitions package for Node.js to assist with TypeScript development.
- 
## How to Use

1. Clone this repository.
   
2. Install the dependencies using 
   ````bash
   npm install
   ```
   
3. Build the project using npm run build.
   ````bash
   npm run dist
   ```
4. Start the server by running
    ````bash
   npm run start
   ```
   
5. Access the provided endpoints to list podcast episodes or filter them by podcast name.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

## Licença

This project is licensed under the [MIT License](LICENSE).