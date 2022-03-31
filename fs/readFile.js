// 导入fs模块 操作文件
const fs = require('fs')
// 读文件
fs.readFile('../files/1.txt', 'utf8' , function(err,dataStr){
    // console.log(err);
    // console.log('-------');
    if(err) {
        return console.log('读取文件失败' + err.message);
    }
    const arrOld = dataStr.split(' ')
    const arrNEw = []

    arrOld.forEach(item => {
        arrNEw.push(item.replace('=',':'))
    })
    const newStr = arrNEw.join('\r\n')
    fs.writeFile('../files/chengji.txt',newStr,function(err){
        if(err) {
            return console.log('写入失败' + err.message);
        }
        console.log('写入成功');
    })
})
// 写入文件
// fs.writeFile('./files/1.txt', '写入文件', function(err){
//     // 如果写入成功 err等于null
//     // 如果失败err就是一个错误对象
//     console.log(err);
// })