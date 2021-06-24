## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day21, 5주차 - bootscript, javascript

#### Day 20 Review

**자바스크립트 내 null의 역할**
- 변수에 특정 값을 할당한 이후 null을 할당하면 해당 메모리 공간을 다시 확보할 수 있다.
```javascript
    let car2 = "foefofeoefo";
    car2  = null; 
```
- 하지만 **실제로는 js 엔진이 알아서 주기적으로 필요없는 메모리에 대해서는 null처리를 해버려서 따로 개발자들이 선언을 하지 않는다.**(다만, null 처리의 중요성을 인지하자 메모리 관리를 추후 복잡한 시스템에 있어서 중요한 요소임)


**자바스크립트 object 문법**
- 오브젝트 내에 함수나 또 다른 오브젝트 등을 넣을 수도 있다.
- 오브젝트를 선언하고, 이후에 키 값을 넣을 수도 있다.(아래 예시)
```javascript
    let person2 = {};
    person2.firstName = "john";
```
- 배열은 순서(인덱스를 가지고 있는) 오브젝트이다. 순서는 0번부터이다(외국에서는 base floor를 0층이라고 함, 문화차이에 따른 언어적 특징일 수도 있음)

- `push`라는 것은 배열에 뒤에 새로운 값을 `append`하는 개념이다.(`console.log(arr.push("newValue");`)

- `typeof` 를 선언하면 데이터에 대한 자료형 나타난다. 이 때, `array`도 `object`형으로 나타나는 것을 유의해야 한다.(자바스크립트는 내부적으로 다 오브젝트를 바탕으로 이루어진 언어임, 이 때문에 따로 해당 자료형이 array인지 아닌지를 밝혀내는 방법이 있음)

- **프로그래밍 언어는 메모리 내 64비트, 부동소수점으로 표현한다는 규칙에 의해 특정 숫자들의 합을 표현하지 못하는 경우가 생긴다.**(다른 언어인 python에서도 마찬가지임)
```python
>>> 0.1+0.2
result : 0.30000000000000004
```

___

**자바스크립트 문법1 - 부등식 연산자**
- x == y : x와 y가 같은 값이냐? 의 물음이다.
- x === y : x와 y가 같은 값이자 자료형이냐? 의 물음이다.

**자바스크립트 문법2 - Object**
- 자바스크립트에는 일반적인 `var objectName = {};` 이외에 `Date();`와 같은 내장 객체가 있기도 하다.
- 내장 객체를 선언하는 방식은 아래와 같다.
```javascript
    var d = new Date();
    var day = d.getDay(); 
>>> 오늘의 요일을 0 ~ 6까지로 가지고 옴(일, 월, 화...)
```

**자바스크립트 문법3 - 반복문**
- 같은 for문이라도 반복을 돌리는 방식은 여러가지이다.
```javascript
    * ES6되면서 추가된 방법이 in 이나 of 이다.
    고전적으로는 아래와 같은 for-loop 반복문을 사용한다.
    // for-loop 반복의 예시
    for (var i = 0; i < len ; i++) {
        ...
    }

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

**자바스크립트 문법4 - while문과 do while문**
- `while`문은 `for`문과 달리 배열 데이터가 아닌 처리에 있는 반복이 필요할 때 사용한다.
- 반복문 사용시 항상 `break;`이 있는지 확인해야한다 나중에 이런거 때문에 시스템이 죽는 일이 발생한다.(궁금하면 실제로 해보면 바로 브라우저가 멈춰버리는 것을 알 수 있음)

```javascript

    // while 문
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
    
    // do while 문
    do {
        console.log(i);
        i++;
    } while (i <= 10);

    >>> 배열처럼 길이가 있을 때는 for문이 적합하지만,
    while문은 데이터가 여러개 있는것과 상관없이
    특정조건을 만족하는 동안 돌리고 싶을 때 사용한다.

```

**자바스크립트 문법5 - function**
- 함수를 사용하는 이유는 다음과 같다
    1. 내가 원하는 순간, 타임에 호출할 수 있어서
    2. 불필요한 반복을 줄여줘서
    3. 유지보수가 쉬워서
    4. 코드의 품질이 좋아져서
    5. 코드의 가독성이 높아져서

- 함수를 만들 때는 주석을 단다.(함수 스타일 가이드가 따로 존재하는데 기회가 되면 공유해야겠다)
- 개발자는 기본 실행함수를 만드는 것은 기본이고, 예외사항을 다양하게 고려하는 것이 중요하다.(try나 assert등의 사례 때문)

- 자바스크립트는 기본적으로 함수 코드를 먼저 해석한다. 그래서 밑에 다 넣어두더라도 에러가 나지 않는다. 하지만, 함수를 변수형태로 저장해두면 에러가 밑에 둘 경우 에러가 발생한다.(함수이지만, 변수 취급으로 선언해서 먼저 해석하지 않는 다는 것을 알 수 있음)
- 그렇다면, 함수 표현을 왜 굳이 변수처럼 할 수 있도록 만들어 둔 것일까? -> 확실치는 않으나, 메모리 구조적 차이가 있을 수 있다.(생각해보면, 모든 함수를 다 해석하고 프로그램을 실행시키는 것은 비효율적일 수 있음)


사용자가 뭘 누를 지 모를 때는 
calculator 함수를 바로 만드는 것 보다는 calculator 내에 따로 add함수를 만들어 둔다면,
사용자 및 개발자가 바로 내부에 



**자바스크립트 문법들의 활용 사례**
- 조건 삼항 연산자(`?`)와 조건문의 차이(`if`)는 조건 삼항 연산자는 코드를 실행한다기보다 변수에 값을 할당하기 위해 사용하고, 조건문은 내부에서 코드(함수)를 실행하기 위해 사용하는 형식이다.
- 특정 값을 여러 방식으로 대체 표현하는 방법은 아래와 같다.
```javascript
    var d = new Date();
    var day = d.getDay(); 

    0, 1, 2, 3,... 인 day의 변수를 실제 요일로 표현하는 방법에 대해서는 일반적으로 if 조건문으로 짤 수 있지만, switch 문으로도 가능하며, 나아가 array 형식으로도 표현할 수 있다.

    * 특정 데이터에 대해 배열형식(일정한 순서 형식)이라면, 
    array 를 활용하는 습관을 기르는 것이 좋을 수 있다 
    생각한다.

    // best case인 array 활용 예시
    var dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

    console.log(dayNames[day]);

    // 그리고 array도 결론적으로는 object이므로, 시스템 내부적으로는 아래와 깉이 define되어 있을 것이라 유추할 수도 있다.
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
```


- 주의해야할 프로그래밍 문법 오류 사례(시스템 에러를 야기하는 사례는 대게 반복문에서 나타남)
```javascript

    // case1 : for 문 내 반복 length function으로 인한 과부하
    for (var i = 0; i < brands.length; i++) {
        console.log(brands[i]);
    }

    >>> 이렇게 반복문을 돌리면, 매 loop당 매번 brands.length를 물어보는 형식이다.
    (시스템에 무리가 갈 수 있다)


    * 따라서, 아래와 같이 변형하는 것을 권유한다.
    // solution1 : for문 내 length function 활용하는 좋은 예시

    // length값을 임의의 변수값으로 지정하고 for문에서 해당 변수를 활용한다.
    var brandLength = brands.length;

    for (var i = 0; i < brandLength; i++) {
        console.log(brands[i]);
    }
    
    >>> for문 내에서 반복적으로 length function 이 실행되는 것을 방지할 수 있다.

```

- 축약된 자바스크립트 반복문 표현방식
```javascript
    
    // case1 : 기본 반복문
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

    // case2 : 축약 반복문(엑셀에서 필터 기능을 사용한다고 이미지를 그리면서 생각하면 보다 쉬움)
    console.table(userList.filter(u => u.gender == "male"));
```

- 사용하지 말아야할 자바스크립트 내부함수 eval : 자바스크립트 및 html은 정말 잘 짜지않는다면 보안에 굉장히 취약한 언어이다.(브라우저로 코드 구성을 엿볼 수 있기 때문)
```javascript
    *하지만, 그런 eval함수를 잘 사용하면 아래와 같이 심플한 이점이 있기는 하다.

    // 시스템적으로 공격 받을 수 있어서 쓰지 말라함
    function calculator2(n1, n2, operator) {
    
    // 문자열을 프로그래밍 코드로 바꿔서 계산해준다.
    return eval(n1 + operator + n2);
}
```


**자바스크립트 문법 내 신기한 점들**
```javascript
기존 조건 삼항 연산자를 if문으로 바꾼 사례

var time = 12;
var greeting = "Good night!";

if (time < 10) {
    greeting = "Good morning!";
} else if (time < 16) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}

재미난 점은 console상의 출력은 시 ","사이에 공백이 하나씩 추가된다는 점이다.

console.log("Hi,", greeting); 
>>>  Hi, +" " + greeting이 출력된다. 
(console log상에서 쉼표는 spacebar를 하나 넣어줌!)
```



___
#### *번외 - 추가로 공부해볼만한 것들*
정리 안됨 - 주말에 몰아서 공부하고 수정할 예정

1. 가비지 콜렉션..? (메모리 사용방법에 대한 부분)

2. javascript 의 eval function : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval

3. 
다양한 함수 사용방법
019.html  파일 공부


- 오브젝트 내 this 구문
```javascript
    var person = {};
    var person = new Object();

    person.fistName = .. 
    person.lastName = ..

```
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