import http from 'http'

const router = [
    {
        path:'*',
        method:'*',
        handle:function(req,res){
            res.writeHead(200,{'content-type':'text/plain'})
            res.end(404)
        }
    }
]

const app = {
    get(path,fn){
        router.push({
            path:path,
            method:'GET',
            handle:fn
        })
    }
}
