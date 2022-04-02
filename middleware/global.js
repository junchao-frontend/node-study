// 全局中间件函数
// 作用:多个中间件之间 共享同一份req和res  基于这样的特性 我们可以在上游的中间件中
// 统一为req和res对象添加自定义的属性和方法 供下游的中间件或路由进行使用
const express = require('express')
const app = express()

const mw = function(req,res,next){
    const time = Date.now()
    req.startTime = time
    next()
}
app.use(mw)
// 监听客户端的get post请求
app.get('/user',(req,res) => {
    res.send('2222' + 'time:' + req.startTime)
})
app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})