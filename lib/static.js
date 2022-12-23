const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // Get the file path from the request URL
  const filePath = req.url.substr(1)

  // Read the file from the 'public' folder
  fs.readFile(`public/${filePath}`, (err, data) => {
    if (err) {
      // Send a 404 Not Found status if the file was not found
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end(`404 Not Found: ${filePath}`)
    } else {
      // Send the file data with a 200 OK status
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end(data)
    }
  })
})

server.listen(3000)
