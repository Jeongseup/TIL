## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day21, 5주차 - bootscript, javascript

**자바스크립트 내 null의 역할**

```javascript
let car2 = "foefofeoefo";
car2  = null;을 할당하면 메모리가 없어짐
```
하지만 실제로는 js 엔진이 알아서 주기적으로 필요없는 메모리에 대해서는 null처리를 해버려서 따로 개발자들이 선언을 안하기는 한다.


**자바스크립트 문법**
- 오브젝트 내에는 함수나 또 다른 오브젝트 등을 넣을 수도 있다.
- 오브젝트를 선언하고, 이후에 키값을 넣을 수도 있다.
```javascript
예시
let person2 = {};
person2.firstName = "john";
```
- 배열은 순서(인덱스를 가지고 있는) 오브젝트이다. 순서는 0번부터이다(외국에서는 0층이라고 함, 문화차이에 따른 언어적 특징일 수도 있음)



- push라는 것은 배열에 뒤에 새로운 값을 appending하는 개념
`console.log(arr.push("newValue");`

- typeof 를 선언하면 데이터에 대한 자료형 나타나는데 이 때, array도 object형으로 나타난다. (따로 arr인지 아닌지를 밝혀내는 방법이 있음)

- 프로그래밍 언어는 메모리 64비트 부동소수점을 표현한다는 규칙에 의해, 특정 숫자들의 합을 표현하지 못하는 경우가 생긴다. (python에서도 마찬가지)
>>> 0.1+0.2
0.30000000000000004

x == y : x와 y가 같은 값이냐?
x === y : x와 y가 같은 값이자 자료형이냐? 

조건 삼항 연산자와 조건문의 차이
조건 삼항 연산자는 코드를 실행한다기보다 변수에 값을 할당하기 위해 사용하고
조건문은 내부에서 코드(함수)를 실행하기 위해 사용하는 형식

```javascript

var time = 12;
var greeting = "Good night!";


if (time < 10) {
    greeting = "Good morning!";
} else if (time < 16) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

console.log("Hi,", greeting);  -> Hi, +" " + greeting이 출력된다. (console log상에서 쉼표는 spacebar를 하나 넣어줌!)
```

자바스크립트에는 Date();라는 객체가 있다.

var d = new Date();
var day = d.getDay(); -> 오늘의 요일을 0~6까지로 가지고 옴(일, 월, 화...)

0, 1, 2, 3,... 여러 형태에 대해 if 문으로 짤 수 있지만, switch로도 가능
근데 그걸 다시 arr로도 표현할 수 있음

```javascript
var dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]

var dayNames = {
 0 = "일요일",
 1  = "월요일",
	...ㄴ
};
```

var dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
console.log(dayNames[day]);

var dayNames2 = {
    0: "일요일",
    1: "월요일",
    2: "화요일",
    3: "수요일",
    4: "목요일",
    5: "금요일",
    6: "토요일"
};
console.log(dayNames2[day]);


```javascript
이렇게 반복문을 돌리면 매 loop당 매번 brands.length를 물어보는 형식이다.(시스템에 무리가 갈 수 있다)
for (var i = 0; i < brands.length; i++) {
    console.log(brands[i]);
}

그래서 아래와 같이 변형한다.
var brandLength = brands.length;

for (var i = 0; i < brandLength; i++) {
    console.log(brands[i]);
}
```

```javascript
for (var key in person) {
    console.log(key, "is", person[key]);
    // console.log(person[key]);
}

for (var brand of brands) {
    console.log(brand);
}

var lang = "javascript";
for (var char of lang) {
    console.log(char);
}
```
ES6되면서 추가된 방법이 in 이나 of이 있다.
고전적인 for-loop


```javascript
console.log(userList);

var maleUserList = [];

for (var user of userList) {
    // console.log(user);
    if (user.gender == "male") {
        maleUserList.push(user);
        // console.table(user);
        break;
    }
}

console.table(maleUserList);

console.table(userList.filter(u => u.gender == "male"));
```

**while문과 do while문**
- while문은 for문과 달리 배열데이터가 아닌 처리에 있는 반복이 필요할 때 사용한다.
- 반복문 사용시 항상 break이 있는지 exit가 있느지 확인해야한다 나중에 이런거 떄문에 시스템이 죽는 일이 발생함

```javascript
<script>
    let i = 1;
    // while (i <= 10) {
    //     console.log(i);
    //     i++;
    // }
    // console.log("hi")
    // do {
    //     console.log(i);

    // } while (i <= 10);

    // 배열처럼 길이가 있을 때는 for문이 적합하지만,
    // 배열 데이터를 활용하는데에는 for문을 쓰지만 while문은 데이터가 여러개 있는것과 상관없이 특정조건을 만족하는 동안 돌리고 싶을 때 사용한다.
</script>

```

함수를 사용하는 이유
- 내가 원하는 순간, 타임에 호출할 수 있음
- 불필요한 반복을 줄여준
- 유지보수가 쉽다.
- 코드의 품질이 좋아진다. ??
- 코드의 가독성이 높아짐
- 함수를 만들 때는 주석을 단다. (style guide)

기본 실행함수를 만드는 것은 기본이고 예외사항을 다양하게 고려하는 것이 중요하다


다양한 함수 사용방법
019.html  파일 공부
...

자바스크립트는 함수를 먼저 해석한다. 그래서 밑에다 넣어두어도 에러가 나지 않는다.
하지만 함수를 변수형태로 저장해두면 에러가 난다. 변수 취급되서 먼저 해석하지 않음
그럼 함수 표현을 왜 굳이 변수 처럼 하는 것일까? 메모리 구조적 차이가 있다고만 말씀하심


사용자가 뭘 누를 지 모를 때는 
calculator 함수를 바로 만드는 것 보다는 calculator 내에 따로 add함수를 만들어 둔다면,
사용자 및 개발자가 바로 내부에 


// 시스템적으로 공격 받을 수 있어서 쓰지 말라함
function calculator2(n1, n2, operator) {
    
    // 문자열을 프로그래밍 코드로 바꿔서 계산해준다.
    return eval(n1 + operator + n2);
}
자바스크립트 html은 굉장히 해킹에 취약한 언어임
정말 잘 짜지않으면 보안에 굉장히 취약한 언어


var person = {};
var person = new Object();

person.fistName = .. 
person.lastName = ..


오브젝트 안에서 다시 오브젝트로 접근할 때는 this나는 녀석이필요함

무언가를 배울 때는 기능적인 것보다 용도적인 측면을 고려해야 잘 기억된다.

해당 단어가 index안에 없으면 -1 값을 return한다.


        //  slice - 두개의 파라미터를 받는다.
        //  1. 시작 인덱스 번호 / 2. 종료인덱스 번호
        var text = "Apple, Banana, Kiwi";

        var findWord = "Banana";
        text.
        let slicedText = text.slice(7, 13)

        // text.slice(7, 13);
        // text.slice(7);
        // text.slice(-12);



        console.log(date); // 2021.06.24
        console.log(date.replace(".", "-")); // 2021-06.24
        console.log(date.replace(/\./g, "-")); // 2021-06-24

언제 uppercase나 lowercase를 사용하는가?
서버 프로그램끼리의 규약
- 사용자가 검색 조회를 할 때, 소문자로 검색할지 대문자로 검색하게 할지를 정함
- 여권같이 대문자로만 printing해야할 때 사용함



        var txt = "12";
        console.log(txt.padStart(2, 0));
날짜 사용시

___
*번외 - 추가로 공부해볼만한 것들*
(가비지 콜렉션?)



https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval

