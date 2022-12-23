import myExpress from './lib/myexpress.js'

const app = myExpress()

app.get('/greet', function (req, res) {
  res.send('Good evening')
})

app.use(app.ztatic('public'))

app.listen(3000)
