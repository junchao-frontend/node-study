// // exports 和 module.exports 相同 
// // 但是require得到的永远是module.exports
// exports.name = 'zs'
// module.exports = {
//     gender: '男',
//     age: 22
// } // gender age

// module.exports,name = 'zs'
// exports = {
//     gender: '男',
//     age: 22
// } // name


// exports.name = 'zs'
// module.exports.gender = '男'
// // 都有

exports = {
    name: 'zs',
    gender: '11'
}
module.exports = exports
module.exports.age = '22' // name gender age