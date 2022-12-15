import http from 'http'
import routes from './routes.js'
import request from './request.js'
import response from './response.js'

function myExpress() {
  let server = http.createServer(function (req, res) {
    request(req)
    response(res)

    let pathHandler = routes.match(req)

    if (pathHandler) {
      pathHandler(req, res)
    } else {
      res.writeHead(200)
      res.end('Route not found')
    }
  })

  const listen = function (port) {
    server.listen(port)
    console.log('listening on port : ', port)
  }

  return { listen: listen, get: routes.get }
}

export default myExpress
