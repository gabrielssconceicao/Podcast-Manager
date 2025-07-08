import * as http from 'http'

const server = http.createServer((request: http.IncomingMessage,response: http.ServerResponse) => {})
const PORT = process.env.PORT
server.listen(PORT || 3333, ()=>{
  console.log(`Server is running on port ${PORT}`)
})
