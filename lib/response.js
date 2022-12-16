const response = (res) => {
  res.send = function (body) {
    res.setHeader('Content-Type', 'text/plain')
    res.setHeader('Content-Length', body.length)
    res.writeHead(200)
    res.end(body)
  }

  res.json = function (body) {
    body = JSON.stringify(body)
    res.setHeader('Content-type', 'text/plain')
    res.setHeader('Content-lenght', body.length)
    res.writeHead(200)
    res.end(body)
  }
  return res
}

export default response
