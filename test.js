import myExpress from './lib/myexpress.js'
// import { fileURLToPath } from 'url'
// import { dirname } from 'path'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

const app = myExpress()

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
