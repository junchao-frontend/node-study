// 导入fs模块 操作文件
const fs = require('fs')
// 读文件
// fs.readFile('./files/1.txt', 'utf8' , function(err,dataStr){
//     // console.log(err);
//     // console.log('-------');
//     if(err) {
//         return console.log('读取文件失败' + err.message);
//     }
//     console.log('成功' + dataStr);
// })

// 不要用相对路径 可以用绝对路径  即完整的路径
// fs.readFile('C:\\等等./files/1.txt', 'utf8' , function(err,dataStr){
//     // console.log(err);
//     // console.log('-------');
//     if(err) {
//         return console.log('读取文件失败' + err.message);
//     }
//     console.log('成功' + dataStr);
// })

// 也可以用__dirname 表示当前路径
console.log(__dirname);
fs.readFile(__dirname + '/files/1.txt', 'utf8' , function(err,dataStr){
    // console.log(err);
    // console.log('-------');
    if(err) {
        return console.log('读取文件失败' + err.message);
    }
    console.log('成功' + dataStr);
})