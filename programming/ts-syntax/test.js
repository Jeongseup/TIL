// console.log(1+2)
var value1 = "hello TS";
var value2 = ['hello TS'];
var value3 = [123];
console.log(value1, value2, value3);
console.log(typeof value1);
// Key는 name, value는 string 형식을 가진 object만을 담는 변수
var value4 = { name: 'Jeongseup Son' };
// console.log(value4, typeof value4)
// 에러 출력
// let value5 :{name : string} = { name: 'Jeongseup Son', age:27}
// console.log(value5)
var value6 = {
    name: 'seup',
    age: 27
};
var value62 = { name: 'seup' };
var value63 = { age: 27 };
var value64 = {};
// 
var value71 = 26;
var value72 = null;
var value8;
// console.log(typeof value8)
//함수의 파라미터 및 반환값에도 타입 지정
function myFunc(x) {
    return '0';
}
console.log(myFunc(2));
var value9 = [0, 'seup', true];
var value10 = {
    'apple': 14,
    'banana': 22,
    'carrot': 10,
    'seup': 'asesa'
};
console.log(value10);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person = {
    age: 30,
    name: 'seup'
};
function getUser(user) {
    console.log(user);
}
getUser(person);
