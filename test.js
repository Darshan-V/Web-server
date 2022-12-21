import myExpress from './lib/myexpress.js'
let app = myExpress()

const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}
app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!'
  responseText += `Requested at: ${req.requestTime}`
  res.send(responseText)
})
// app.use(express.static('public'))

app.listen(3000)
