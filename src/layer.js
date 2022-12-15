//Contains the path and necessary function reference to execute when a path matches the given request.

function layer(path, options, fn) {
  if (!(this instanceof layer)) {
    return new layer(path, options, fn)
  }
  this.handle = fn
  this.name = fn.name
  this.params = undefined
  this.path = undefined
}

layer.prototype.match = function match(path) {
  return this.route.path === path
}

layer.prototype.handle_request = function handle(req, res, next) {
  let fn = this.handle
  try {
    fn(req, res, next)
  } catch (error) {
    console.error(error)
  }
}

export default layer
