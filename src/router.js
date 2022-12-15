import setPrototypeOf from 'setprototypeof'
import Route from './route'
import layer from './layer'
import layer from './layer'

let proto = function (options) {
  let opt = options || {}
  function router(req, res, next) {
    router.handle(req, res, next)
  }
  setPrototypeOf(router, proto)
  router.params = {}
  router._params = []
  router.caseSensitive = opt.caseSensitive
  router.mergeParams = opt.mergeParams
  router.strict = opt.strict
  router.stack = []
  return router
}

proto.route = function route(path) {
  let route = new Route(path)
  let Layer = new layer(path, {}, route.dispatch.bind(route))

  Layer.route = route
  this.stack.push(Layer)
  return route
}

proto.handle = function handle(req, res, out) {
  let self = this
  let stack = self.stack
  let Layer = stack[0]
  let route = Layer.route
  route.stack[0].handle_request(req, res)
}
