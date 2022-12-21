function middleware() {
  let middleware = []

  let currentMiddleware = 0

  let run = function (req, res) {
    let next = createNext(req, res, middleware)
    next()
  }

  let createNext = function (req, res, middleware) {
    console.log(middleware)
    let currentMiddleware = -1

    let next = function () {
      currentMiddleware = currentMiddleware + 1
      let nextHandle = middleware[currentMiddleware]
      if (nextHandle) {
        nextHandle(req, res, next)
      } else {
        req.handler(req, res)
      }
    }

    return next
  }

  let use = function (handler) {
    middleware.push(handler)
  }

  return { use: use, run: run }
}

export default middleware()
