import setPrototypeOf from 'setprototypeof'
import methods from 'methods'
import http from 'http'
import layer from './layer.js'
import { appendFile } from 'fs'

let slice = Array.prototype.slice

app.init = function set(setting, val) {
  this.settings[setting] = val
  switch (setting) {
    case 'etag':
      this.set('etag fn', '')
      break
    case 'query parser':
      this.set('query parser fn', '')
      break
    case 'trust proxy':
      this.set('trust proxy fn', '')
      break
  }
  return this
}
