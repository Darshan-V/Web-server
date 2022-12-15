import server from './index.js'
const app = server()

app.get('/hello', function (req, res) {
  res.send('hello world')
})

app.listen(3000, function () {
  console.log('test app.listen and app.get')
})
