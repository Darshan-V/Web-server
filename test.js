import myExpress from './lib/myexpress.js'
const app = myExpress()

app.get('/morning/:name', function (req, res) {
  res.writeHead(200)
  res.end('Good morning, ' + req.params['name'])
})
app.listen(3000)
