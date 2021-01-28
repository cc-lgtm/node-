const { throws } = require('assert')
const fs = require('fs')

//同步实现
let data = fs.readFileSync('input.txt')

console.log(data.toString())

console.log('程序运行结束')

//异步实现
fs.readFile('input.txt', 'utf-8', (data, err) => {
    if(err) throw err
    console.log(data)
})

console.log('程序运行结束')