const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// 获取url中的动态参数
app.post('/user',(req,res) => {
    console.log(req.body);
    res.send(req.body)
})
app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})