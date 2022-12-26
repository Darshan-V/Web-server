import serveStatic from 'serve-static'

function middleware() {
  const middleware = []

  const run = function (req, res) {
    const next = createNext(req, res, middleware)
    next()
  }

  const createNext = function (req, res, middleware) {
    let currentMiddleware = -1

    const next = function () {
      currentMiddleware = currentMiddleware + 1
      const nextHandle = middleware[currentMiddleware]

      if (nextHandle) {
        nextHandle(req, res, next)
      } else {
        req.handler(req, res)
      }
    }

    return next
  }

  const use = function (handler) {
    middleware.push(handler)
  }

  const ztatic = (path) => {
    middleware.push(serveStatic(path))
  }

  return { use: use, run: run, ztatic: ztatic }
}

export default middleware()
