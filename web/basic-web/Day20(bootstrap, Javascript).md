## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day20, 5주차 - bootscript, javascript

**bootstrap 사용법**
- 부트스트랩을 linking하면 기본 여러 css가 class의 형태로 적용되어 있다.
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```
- 부트스트랩 내 base 사이즈 : sm-핸드폰 사이즈 / md-핸드폰 ~ 세로 태블릿 / lg-가로 태블릿 / xl-노트북 사이즈 이상~
- 부트스트랩은 12grid 시스템을 사용한다.(화면을 12개의 컬럼 영역으로 나누는 것을 의미)
- 한 `div` 밖을 또 다른 `div`로 containering주면, 그 안에를 다시 12girding 한다.(다른 디자인 시스템은 12grid가 아닌 14gird같은 시스템을 적용할 수도 있음)
```html
<!-- 대충 이런 느낌.. -->
<div class="container">
<!-- 부트스트랩은 컨테이너 안을 다시 12girding 함 -->
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>

</div>
```
- 부트스트랩의 색상 체계는 기본 웹 서비스 구현에 있어서 필요한 색 구성의 기본 요소 체계를 본 따 만들었다.(나중에 필요시 각각의 체계 적용된 색상 코드만 변경해주면서 control하는 것을 의미)
- `div` 내 `col` 클래스 지정은 동일하게 안하고, 원하는 만큼 화면분할을 해서 할 수 있다.
- 태그 내 role속성은 정보성데이터(메타데이터)로 어떤 역할을 하는지를 적어준다.(아래 role attribute example)
```html
<!-- 경고창보다는 주의사항이나 부연설명시 사용 -->
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
```
- `modal`창 팝업이 뜨는 원리는 기존 html파일 위에 `bg`하나와 `msg`하나 이렇게 두 개의 `div`가 올라가는 것이다.
- css로도 scrolling speed를 조절가능하다.(`anchor tag href`)

#### 한줄평
부트스트랩에 익숙해지는 것이 실무에 빠르게 적응하는 최단 경로이지 않을까 싶다. 부트스트랩의 체계는 생각보다 엄청 체계적이다.(마치 기업처럼) 그리고, 해당 부트스트랩이 웹 casting하는 구조를 익히는 것이 빠르게 web structure를 익히는 데 도움이 될 것이란 느낌을 받았다.
___

**실무 활용 UX/UI**
- 기업 업무 시스템 같이 무거운 시스템 같은 경우 조회버튼 누르는 순간 **disable** 속성을 주고, 데이터가 넘어오면 다시 **able** 해준다.(그냥 조회버튼을 계속 활성화시켜두면, 시스템에 중복처리가 되서 에러가 야기될 가능성이 큼)
- 시스템의 안정성을 고려하기 위한 UX/UI이다.(무리한 트래픽에 대해서는 중간 중간 **disable**처리하는 것이 테크니컬한 능력)
- 툴팁 같은 곳에는 `hover`할 때, 설명이 나오게 하는 게 좋다(클라이언트를 위한 UX/UI 측면)
- **기본적인 css는 절대경로로 지정하고, 아래와 같은 개별 style은 해당 html 내에서만 적용하는 용도로 사용한다.(page by page styling)**

```html
<style>
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }

    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }
</style>
```

**svg에 대한 설명**
- svg의 유래 : 웹이 많이 발전되고, 웹 안에서 다양한 그래픽 요소가 중요해지자, 브라우저가 지원하기 시작했다.(UX/UI가 중요해지면서 lean한 모델링에 대한 영향을 많이 받았을 것 같음)
- **svg의 장점은 해상도 조절도 되고, 텍스트 기반이라 가볍고, 깨지지도 않는다는 점이다.**
- html과 다른 언어지만, 문법이 유사한 언어이다.(`width`나 `height` 같은 속성들을 지님)
- 그림을 그려주는 언어라고 이해하면 된다.
- 개발자의 영역이다.(개발자가 코드로 짠다)
- 일반적인 차트(주식 차트)들도 내부적으로는 대부분 svg로 되어 있다.
- svg는 텍스트라서 부가적인 description을 넣을 수가 있어서 검색 엔진에 노출도가 높아진다.(SEO에 유리함)

#### 한줄평
svg는 생각보다 오래된 기술이지만, 제대로 사용되기 시작한 것은 근래이다. 기술의 발전은 발전이지만 시기가 상당히 중요한 것을 느낀다. 창업을 하다보면 스타트업의 트렌드 및 기업들의 트렌드를 교육 받게 되는데, 확실히 현재는 플랫폼의 시대이자 고객경험의 시대이다. 해당 포커스에 적합한 기술이 빛을 바라는 시기이라 생각한다. 그리고 한편으로는 아직 UX가 부족한 시장에 대한 기회를 찾아볼 수 있는 시기라 생각한다. **개발자는 머리만 좋을 게 아니라, 공감할 줄 알아야 한다. 가장 큰 강점이 될 것이다.**

___
**vscode keyborad shortcut**
- `ctrl + B` 왼쪽 사이드 패널 여닫기 역할 

**자바스크립트의 유래**
- 넷스케이프(브랜든 아이크)가 만든 언어이다.
- 원래는 모카라는 이름에서 라이브스크립트였다 최종적으로 자바스크립트라는 명칭으로 바뀌었다.
- 자바스크립트 탄생 이후, MS가 jscript를 만들기도 하였으나,ECMA라는 협회가 생겼다.
- ECMA Script(ES)가 표준 스크립트를 정해두었다.
- 버젼명을 붙여 ES5, ES6가 되었다.


**자바스크립트 작성방법**
- `head`나 `body` tag 안에 작성할 수 있다.
- 외부 .js 파일에 작성하고 import할 수 있다.
- 스크립트 바디 태그 내 제일 밑에 넣는다. (클라이언트 입장에서 컨텐츠 보다 일단 레이아웃부터 나오는 것이 편하다 응답받는 느낌, 화면속도에 많은 영향을 끼치기 때문)
- 자바스크립트는 개발 내내 콘솔창을 사용해야 한다.
- 자바스크립트 함수는 다음과 같다.
```javascript
console.log("콘솔창에 출력합니다")
```

**브라우저 내 콘솔창 용도**
- 자바스크립트 스크립트 태그 문법 체크를 위한 디버거 역할을 한다.
- 연산 프로그래밍시 사용한다.(`console.log`로 부분적인 함수를 테스트할 때 사용)

**자바스크립트의 변수명 선언 규칙**
- 중간에 공백이 있을 수 없다.
- 중간에 특수문자가 있을 수 없다.(단, $ 과 _ 는 가능)
- 변수명의 시작은 숫자가 올 수 없다.
- **프로그래밍 언어의 스타일 가이드 대표 예시**
```javascript
        var myAge; //카멜케이스, camelCase 
        var my_age; //스네이크케이스, snake_case
        var MyAge; //파스칼케이스, PascalCase
        var intMyAge;
        var strUserName; //헝가리언케이스, hungarian case 

        요즘 추세는 카멜케이스로이다. 
        ES6가 그렇게 이루어져 있다.
```

**자바스크립트 언어의 특징**
- `var x = 5;`라고 선언하면, x와  5는 내부 메모리에 저장된다.
그리고 js는 재선언이 가능한데 `x = 9;`와 `var x = 9;`이렇게 둘 다 가능하다.
- 후자 같은 경우는 메모리 상에 또 다른 x블록이 생기는 개념이다. 그래서 let이라는 변수할당자가 있다. 상위에 적힌 변수 할당을 중복 안되게 하는 역할을 한다.
- const는 상수의 개념으로 코드 내 절대변치 않는 절대 상수(변수)이다.

**자바스크립트의 undefined 와 null**
- `undefined`는 시스템이 임의적으로 할당한 변수이지만, `null`은 의도적으로 넣어주는 공백 변수이다.
- 기본 데이터 유형과 object 유형으로 구분된다.
- 기본 데이터 유형 종류로는 s`tring / integer / boolean / undefined / null / symbol` 등이 있다.(symbol은 최근에 나온 자료형으로 나중에 따로 공부해야할 요소임)
```javascript
        undefined 와 null 예시

        // undefined
        let car;
        console.log(car);
        console.log("is car undefined ?\n", car == undefined); // true

        // null
        let car2 = null;
        console.log(car2); // null
```

**자바스크립트의 object 유형 예시**
```javascript
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 40,
        tel: "123456",
        email: "abc@email.com"
    };
```
**자바스크립트의 key-value 선언 예시**
- 어떤 속성을 클라이언트가 선택할지 몰라서 해당 속성을 하나의 변수로 지정 해둘 때(keyValue) 해당 속성에 대한 값은 keyValue 자체가 값이 아니라, 해당 변수에 담긴 keyValue의 value가 속성이므로 object[keyValue]로만 선택 가능하다. 그래서 대부분의 프로그래밍 방식에서는 person[keyvalue]로 선택을 한다.
```javascript
    // 이 두개의 차이는 뭘까?
    console.log(person.email);
    console.log(person["email"]);
    
    let keyValue= "email"

    console.log(person.keyValue); -> 에러
    console.log(person[keyValue]); -> 작동 
```


**자바스크립트의 특징**
- 배열과 오브젝트를 가장 많이 쓴다. 그리고 배열에 담기는 하나하나의 정보는 오브젝트 데이터이다.(즉, [person1, person2, ... person100]의 형태)
- python처럼 -1로 하면 인덱싱이 되지 않는다.(error : `console.log(cars[-1]);`)
- arr이나 object나 결국 js는 다 원래 오브젝트를 상속받아 생긴 개념이므로, typeof 를 arr과 object를 해도 다 object이다.

      
**프로그래밍 언어의 상의  메모리 에러**
- js는 64bit 부동소수점으로 저장한다. 64비트 공간에 저장하는데, 무한소수의 개념 때문에 저 64비트 공간안에 안 담겨서 중간에 임의적으로 메모리를 짜르다 보니까 끝에 0.0.00000000000000004 나타난다.
```javascript
    let x = 0.2 + 0.1;
    console.log(x); // 0.30000000000000004 라고 함.
```
- 또한 자바스크립트에는 maximum integer이 있다.(9007199254740991)
```javascript
    let y = 9999999999999999;
    console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
    console.log(y); //10000000000000000
```
- `console.log(0.2 + 0.1);`이 오류나는 걸 아래처럼 우회해서 쓰기도 한다. `console.log(3 / 10);` 이 경우에는 3과 10의 메모리 할당 충돌 없어서 잘 된다.


**자바스크립 내 햇갈리는 문법**
```javascript
    // x = x + y; 과 같음
    x += y;
    console.log(x);

    언제 쓰는지? : 최종 합계를 구하는 코드에 자주 사용한다(shortcut)

    ex)
    sum = sum + x1;
    sum = sum + x2;
    ..
    보다
    sum += x1;
    sum += x2;
    로 사용한다.
```

```javascript
<script>
    var x = 1;

    // x += 1;
    // x = x + 1;

    x++; // 아직까지는 1, 이 아래서부터 2

    console.log(x); // 2
    console.log(x++); // 2
    console.log(x); // 3

    console.log(++x); // 앞에서 더하면 더하고 실행 
</script>
```

```javascript
        //논리 연산자 : and조건, or조건
        var x1 = true && true; // AND - &&
        var x2 = true || false; // OR - ||
```


**조건 삼항 연산자**
```javascript
    var age = 28;
    var isAdult = (age >= 19) ? true : false;

    var time = 12;
    var greeting = (time < 10) ? "Good morning!" : (time < 16) ? "Good afternoon" : (time <= 20) ? "Good evening" :
        "Good night!";
```
#### 한줄평
자바스크립트는 내가 평소에 쓰던 python 문법과 맥락은 비슷하지만 좀 더 자유도가 높은 느낌이다. 이후 조건문이나 반복문을 더 익혀봐야 어떤 느낌으로 해야할 지 갈피가 잡힐 수 있을 것 같다. 지금은 단순히 기초 html과 css, javascript를 배우고 있지만 computer science의 이론도 되게 매력적인 부분인 것 같다.

___
#### *번외 - 개인 공부시 참고할 것*
아직 정리 안됨.

**그리드 시스템**
- 그럼 그리드 시스템이란 건 뭘까?

**breadcrumb**
https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EC%9D%B4%EB%8F%99_%EA%B2%BD%EB%A1%9C

**CSS 애니메이션**
배워보면 좋을 것 같은 부분

https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

https://velog.io/@sgyoon/2019-09-15-01

https://github.com/parksb/javascript-style-guide/blob/master/README.md

https://ko.wikipedia.org/wiki/%EC%A1%B4_%EB%8F%84.

bg-primary {
    background-color: #1abc9c !important;
}

여기서 !important는 뭐지..?

