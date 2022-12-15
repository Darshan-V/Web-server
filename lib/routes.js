//making simple routes
function routes() {
  let route_handlers = {}

  let match = function (req) {
    let handler = route_handlers[req.url]
    return handler
  }
}
