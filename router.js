const express = require('express')
var router = express.Router()

router.get('/user',(req,res) => {
    const query = req.query
    res.send({
        status: 1,
        message: '请求成功!',
        data: query
    })
})

module.exports = router
