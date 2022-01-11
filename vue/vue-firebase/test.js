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
if (result) {
    console.log('pass')
}

// if (result.a) {
//     console.log('pass a')
// }

const a = result && result.a
console.log(a, result)
/*
 result.a 대신에 (result && result.a)를 사용하면 오류를 미연에 방지할 수 있다.
 자바스크립트의 논리 연산에서 null와 undefined는 false로 간주 하기 때문에 두번째 피연산자로 어떤 것이 오더라도 null을 반환하게 되어 있다.
*/

const apple = null
const banana = 'B'
const cat = apple || banana
console.log(cat)

const a1 = true && true // t && t returns true
const a2 = true && false // t && f returns false
const a3 = false && true // f && t returns false
const a4 = false && 3 === 4 // f && f returns false
const a5 = 'Cat' && 'Dog' // t && t returns Dog
const a6 = false && 'Cat' // f && t returns false
const a7 = 'Cat' && false // t && f returns false
