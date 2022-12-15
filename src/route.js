import methods from 'methods'
import flatten from 'array-flatten'
import layer from './layer'
import layer from './layer'

function Route(path) {
  this.path = path
  this.stack = []
  this.methods = {}
}

Route.prototype.dispatch = function dispatch(req, res, done) {}

methods.forEach(function (method) {
  Route.prototype[method] = function () {
    let handles = flatten(Array.prototype.slice.call(arguments))
    for (let i = 0; i < handles.length; i++) {
      let handle = handles[i]
      if (typeof handle !== 'function') {
        let type = toString.call(handle)
        let msg =
          'Route.' + method + '() require a callback function but got a' + type
        throw new Error(msg)
      }
      let layer = layer('/', {}, handle)
      layer.method = method
      this.methods[method] = true
      this.stack.push(layer)
    }
    return this
  }
})
