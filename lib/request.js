import qs from 'qs'
import url from 'url'

const request = (req) => {
  req.parms = qs.parse(url.parse(req.url).query)
}

export default request
