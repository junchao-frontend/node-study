## CORS(跨域资源共享)

由一些列HTTP响应头组成, 这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源

浏览器的同源策略默认会阻止网页跨域获取资源 但如果接口服务器配置了CORS相关的HTTP响应头 就可以解除浏览器前端的跨域访问限制


### 响应头

Access-Control-Allow-Origin

如果指定了通配符* 表示允许来自任何域的请求
```
res.setHeader('Access-Control-Allow-Origin','*')


``` 

Access-Control-Allow-Methods  默认支持get post head
