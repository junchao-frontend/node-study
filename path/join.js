const path = require('path')
const fs = require('fs')
// const pathStr = path.join('/a', '/b/c', '../', '/d','e')

// console.log(pathStr);

fs.readFile(path.join(__dirname,'/test.txt'),'utf-8',function(err,data){
    console.log(data);
})