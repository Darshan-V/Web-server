import http from 'http'
import routes from './routes.js'

function myExpress() {
  const server = http.createServer(function (req, res) {
    const handler = routes.match(req)

    if (handler) {
      handler(req, res)
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
