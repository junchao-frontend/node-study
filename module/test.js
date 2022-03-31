// 在外界使用require导入一个自定义模块的时候得到的成员
// 就是在那个自定义模块中通过module.exports指向的那个对象 默认为空

const m = require('./module')
console.log(m.name);
m.sayName()