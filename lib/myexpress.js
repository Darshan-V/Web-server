import http from 'http'

function myExpress() {
  let server = http.createServer(function (req, res) {
    let message = 'hello'
    res.setHeader('content-type', 'text/plain')
    res.setHeader('content-length', message.length)
    res.writeHead(200)
    res.end(message)
  })

  let listen = function (port) {
    server.listen(port)
    console.log('listening on port', port)
  }
  return { listen: listen }
}

export default myExpress
