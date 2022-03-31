const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer()
server.on('request',(req,res) => {
    const url = req.url
    let fpath = ''
    if(url === '/') {
        fpath = path.join(__dirname,'./clock/index.html')
    }else{
        fpath = path.join(__dirname,'./clock', url)
    }
    fs.readFile(fpath,'utf-8',function(err,dataStr) {
        if(err) {
            return res.end('404 Not Found')
        }
        res.end(dataStr)
    })
})
server.listen('80',function(){
    console.log('server running at http://127.0.0.1');
})