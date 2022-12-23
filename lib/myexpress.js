import http from 'http'
import routes from './routes.js'
import request from './request.js'
import response from './response.js'
import middleware from './middleware.js'

function myExpress() {
  let server = http.createServer((req, res) => {
    request(req)
    response(res)
    // console.log('🚀 ~ file: myexpress.js:11 ~ server ~ response', response(res))
    // console.log('🚀 ~ file: myexpress.js:28 ~ server ~ request', request(req))

    let match = routes.match(req)
    // console.log(match)

    if (match) {
      req.params = match.params
      //   console.log(req.params)
      req.handler = match.handler
      //   console.log(match)
    } else {
      req.handler = function (req, res) {
        res.writeHead(404)
        res.end('Route not found')
      }
    }
    middleware.run(req, res)
  })

  const listen = (port) => {
    server.listen(port)
    console.log('listening on port : ', port)
  }

  return {
    listen: listen,
    get: routes.get,
    put: routes.put,
    delete: routes.delete,
    use: middleware.use,
    ztatic: middleware.ztatic,
  }
}

export default myExpress
