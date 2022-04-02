// express提供了一个非常好用的函数，叫做express.static() 通过它 我们可以非常方便地创建一个静态资源的服务器
// 通过一下代码可以将clock目录小的图片 css js对外开放

const express = require('express')

const app = express()

app.use(express.static('./clock'))

// 挂载路径前缀
app.use('/public',express.static('./public'))

app.listen(80,() => {
    console.log('express server running at http://127.0.0.1');
})