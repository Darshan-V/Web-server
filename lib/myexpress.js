import http from 'http'
import routes from './routes.js'
import request from './request.js'
import response from './response.js'

function myExpress() {
  let server = http.createServer((req, res) => {
    request(req)

    response(res)

    let match = routes.match(req)

    if (match) {
      req.params = match.params
      match.handler(req, res)
    } else {
      res.writeHead(200)
      res.end('Route not found')
    }
  })

  const listen = (port) => {
    server.listen(port)
    console.log('listening on port : ', port)
  }

  return { listen: listen, get: routes.get }
}

export default myExpress
