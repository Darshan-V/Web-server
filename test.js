import myExpress from './lib/myexpress.js'
import serveStatic from 'serve-static'

const app = myExpress()

// app.use(serveStatic('public', { index: ['default.html', 'default.htm'] })) //TODO : use middleware app.use pending

app.get('/morning/:name', function (req, res) {
  res.send('Good morning, ' + req.params['name'])
})

app.put('/', (req, res) => {
  let a = 'some string'
  res.json(a)
})

app.delete('/del', (req, res) => {
  let b = 'delete something'
  res.json(b)
})
app.listen(3000)
