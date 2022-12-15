//making simple routes
function routes() {
  let route_handlers = {}

  let match = (req) => {
    let handler = route_handlers[req.url]
    return handler
  }

  let get = (path, handler) => {
    route_handlers[path] = handler
  }

  return { get: get, match: match }
}

export default { routes }
