import url from 'url'

//making simple routes

function routes() {
  let route_handlers = []

  let match_path = (route, path) => {
    let pathArray = path.split('/')
    let routeArray = route.path.split('/')
    let match = true
    let urlParams = {}

    for (let i = 0; i < routeArray.length; i++) {
      let r = routeArray[i]
      let p = pathArray[i]

      if (r[0] === ':') {
        urlParams[r.substr(1)] = p
      } else if (r === '*') {
        break
      } //no need to match any further routes
      else if (r !== p) {
        match = false
        break
      }
    }
    // console.log(route.handler)

    if (match) {
      return { params: urlParams, handler: route.handler }
    } else {
      return false
    }
  }

  //returns {param,handler} or false
  let match = (req) => {
    let path = url.parse(req.url).pathname
    // console.log(path)
    let result = false

    for (let i = 0; i < route_handlers.length; i++) {
      let route = route_handlers[i]
      result = match_path(route, path)
      //   console.log(result)
      if (result != false) {
        break
      }
    }

    return result
  }

  const get = (path, handler) => {
    route_handlers.push({ path: path, handler: handler })
    // console.log(route_handlers)
    // console.log(handler)
  }
  const put = (path, handler) => {
    route_handlers.push({ path: path, handler: handler })
  }
  const del = (path, handler) => {
    route_handlers.push({ path: path, handler: handler })
  }

  return { get: get, match: match, put: put, delete: del }
}

export default routes()
