const test = function () {
    return null
}

const result = test()
// const foo = result.a

/*
TypeError: Cannot read properties of null (reading 'a')
    at Object.<anonymous> (c:\Projects\TIL\vue\vue-firebase\test.js:6:20)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47
*/

/*
 result.a 대신에 (result && result.a)를 사용하면 오류를 미연에 방지할 수 있다.
*/
const a = result && result.a

const apple = null
const banana = 'B'
const cat = apple || banana
console.log(cat)

// var a1 = true && true // t && t returns true
// var a2 = true && false // t && f returns false
// var a3 = false && true // f && t returns false
// var a4 = false && 3 === 4 // f && f returns false
// var a5 = 'Cat' && 'Dog' // t && t returns Dog
// var a6 = false && 'Cat' // f && t returns false
// var a7 = 'Cat' && false // t && f returns false
// console.log(a1, a2, a3, a4, a5, a6, a7)
