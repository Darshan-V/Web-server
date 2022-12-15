import setPrototypeOf from 'setprototypeof'
import methods from 'methods'
import http from 'http'
import Router from './router.js'

let slice = Array.prototype.slice

app.init = function () {
  this.cache = {}
  this.engines = {}
  this.settings = {}
  this._router = undefined
}

app.set = function set(setting, val) {
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

app.enable = function enable(setting) {
  return Boolean(this.set(setting))
}

app.lazyRouter = function lazyRouter() {
  if (!this._router) {
    this._router = new Router({})
  }
}

app.listen = function listen() {
  let server = http.createServer(this)
  return server.listen.apply(server, arguments)
}

app.handle = function handle(req, res, callback) {
  let router = this._router
  router.handle(req, res)
}

methods.forEach(function (method) {
  app[method] = function (path) {
    this.lazyRouter()
    let route = this._router.route(path)

    route[method].apply(route, slice.call(arguments, 1))
    return this
  }
})
