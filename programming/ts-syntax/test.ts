// console.log(1+2)

let value1 :string = "hello TS"
let value2 :string[] = ['hello TS']
let value3 :number[] = [123]

console.log(value1, value2, value3)
console.log(typeof value1)

// Key는 name, value는 string 형식을 가진 object만을 담는 변수
let value4 :{name : string} = { name : 'Jeongseup Son'}

// console.log(value4, typeof value4)

// 에러 출력
// let value5 :{name : string} = { name: 'Jeongseup Son', age:27}
// console.log(value5)

let value6 :{name? : string, age? :number} = 
{
    name : 'seup',
    age : 27
}

let value62 : {name? : string, age? : number} = { name : 'seup'}
let value63 : {name? : string, age? : number} = { age : 27}
let value64 : {name? : string, age? : number} = { }

// 
let value71 :string | number = 26;
let value72 : string | number | null = null;

// console.log(typeof value72, value72)


// 지정할 자료형이 많은 경우 따로 type 변수를 선언하여 사용 가능
type customType = string[] | number | {name:string, age:number};
let value8 :customType

// console.log(typeof value8)

//함수의 파라미터 및 반환값에도 타입 지정
function myFunc(x?: number) :string {
    return '0'
}


console.log(myFunc(2))


type itemType1 = [number, string, boolean]
let value9 :itemType1 = [0, 'seup', true]

type itemType2 = {
    [key :string] : any,
}

let value10 :itemType2 = {
    'apple' : 14,
    'banana' : 22,
    'carrot' : 10,
    'seup' : 'asesa'
}

console.log(value10)


class Person {
    name :string;

    constructor(name :string) {
        this.name = name
    }
}

// let person = new Person('seup');
// console.log(person)



interface User {
    age: number;
    name: string;
  }
  
var person: User = {
    age: 30,
    name: 'seup',
  }
  
function getUser(user: User) {
    console.log(user)
  }
  
getUser(person)