var name = '123'
// console.log(module);
module.exports.name = name

module.exports.sayName = function(){
    console.log(name);
}
// 每个.js 自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息