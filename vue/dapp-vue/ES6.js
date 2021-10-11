// 상수 표현
const PI = 3.14;

// 여러개 변수 할당
let a = 1,
    b = 2,
    c;

// 화살표 함수
var calculateVolume = function (a, b, c) {
    var vol = a * b * c;
    return vol;
};

var calculateVolume2 = (a, b, c) => {
    var vol = a * b * c;
    return vol;
};

var calculateVolume3 = (a, b, c) => a * b * c;

var noneNamefun = () => console.log("abc");

function Animal(name) {
    this.name = name;
}

// 신기한 점은 프로토타입을 지정할 때는 애로우 함수가 안 먹힘
Animal.prototype.getName = function () {
    return this.name;
};

var lion = new Animal("lion");

// console.log(lion.name);
// console.log(lion.getName());

class Human {
    constructor(name) {
        this.name = name;
        this.type = "man";
    }

    getName = () => this.name;
}

let human = new Human("js");
// console.log(human.getName());
// console.log(typeof Human);

class Student extends Human {
    constructor(name) {
        super(name);
        this.type = "student";
    }
}

let student = new Student("std1");
// console.log(student instanceof Human);
// console.log(student.getName());

class Human2 {
    // If no static => TypeError: Human2.getName is not a function
    static getName = () => this.name;
}

console.log(Human2.getName());

// template string, 자동으로 \n 추가
console.log(`
a
b
c
`);

// destructuring
let arr = [1, 2, 3, 4];
let [a, b, , d] = arr;
console.log(a, b, d);

function test(a, b, ...arr) {
    console.log(arr);
}

test(1, 2, 3, 4, 5);
