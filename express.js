const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const userRouter = require('./router.js')
const app = express()
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
db.query('SELECT * FROM users',(err,res) => {
    console.log(res);
})
// 如果执行的select语句 结果是一个对象数组
app.use(cors())
app.use('/api',userRouter)

// 监听客户端的get post请求
// app.get('/user',(req,res) => {
//     res.send({name: 'zs',age:20})
// })
// 通过req.query对象可以访问到客户端通过查询字符串的形式 发送到服务器的参数
// 例如/user/?name=10&age=12 可以用query

// 获取url中的动态参数
// app.get('/user/:id',(req,res) => {
//     console.log(req.params);
//     res.send(req.params)
// })
app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})