const express = require('express')
const app = express()

const mw = function(req,res,next){
    const time = Date.now()
    req.startTime = time
    next()
}
// 局部中间件
app.get('/user',mw, (req,res) => {
    res.send('2222' + 'time:' + req.startTime)
})

app.get('/api', (req,res) => {
    res.send('2222' + 'time:' + req.startTime)
})
app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})