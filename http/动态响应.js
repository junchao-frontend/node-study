const http = require('http')
const server = http.createServer()
// req是请求对象,包含了与客户端相关的数据和类型
server.on('request',(req,res) => {
    const url = req.url
    console.log(url);
    let content = '<h1>404 Not found!</h1>'
    if(url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    }else if(url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    // console.log(str);
    // 为了防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 向客户端发送指定的内容, 并结束这次请求的处理过程
    res.end(content)
})

server.listen('80',() => {
    console.log('server running at http://127.0.0.1');
})