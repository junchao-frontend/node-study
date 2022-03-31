const path = require('path')

// path.basename(path[, ext]) 可以获取路径中的最后一部分 经常通过这个方法获取路径中的文件名

const fpath = '/a/b/c/index.html'

let fullName = path.basename(fpath)
console.log(fullName);

let nameWithoutExt = path.basename(fpath,'.html')
console.log(nameWithoutExt);

// path.extname 可以获取路径中的扩展名部分
const test = '/a/b/c/index.html'
console.log(path.extname(test));