## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day24, 6주차 - javascript advanced

#### 수업 전 리뷰
**함수 주석 표기 방법**
- common.js 파일 내 함수 표기를 위해서 함수 위에서 /**을 해주면 주석 가이드 스타일이 나타난다.

```javascript
/**
 * description : ... 설명을 적는다.
 * @param {데이터 타입을 적는다} argumentName1 
 * @param {데이터 타입을 적는다} argumentName2
 * @returns {return되는 데이터 타입을 적는다} : return value 설명
 */
```
**타입스크립트 등장배경**
- 타입스크립트는 구글에서 만들었는데 이 타입스크립트는 자바스크립트 코드를 만들기 위한 언어이다. 어찌보면 또 다른 코딩을 하기 위해 다른 언어를 사용한다는 개념이 일반적이지는 않지만 자바스크립트의 높은 자유도에 버그를 사전에 방지하기 위함이라는 의미가 내포되어있다. 일반적인 자바스크립트는 함수를 만들 때 argument에 number나 string같은 데이터 형식을 잡아주지 못하는 문제가 있기 때문이다. 이 때문에 타입스크립트는 등장하게 되었고, 그래서 이름도 보면 type 스크립트이다. 사용처는 대기업같은 대규모 작업을 하는데 있어서는 오류를 잡아주기 위해 쓴다.

#### 한줄평
정말 짤은 기간이긴 하지만 단순히 프로그래밍을 익히는 것이 그치지 않고 웹과 한 프로그래밍 언어의 역사를 두루두루 알게되는 점들이 너무 재밌었고, 그 사이에서 기술 및 언어의 변천과정이 느껴져서 너무나 좋았다. 아마 역사는 반복되듯이 내가 지금 익히는 기술이나 무언가에 대한 역사적 흐름을 인지하는 것이 중요한 능력이라 사려된다.
___
#### 본격적인 수업 내용 - 자바스크립트 심화 문법
**this의 용도**
- `this`라는 키워드가 의미하는 것은 총 3가지로 js내에 쓰인다. 쉽게 생각하면 python class에서 self의 개념이고 해당 `this`는 특정 함수 및 오브젝트 내에서 다른 인자에 접근하기 위한 용도로 생각하면 된다.

```javascript
    1. window 객체 호출
        function myFunction() {
        console.log(this);
    }

    2. html tag 내 이벤트 발생시 특정 태그 value 접근
        function doChange(obj) {
        console.log(obj);
        console.log(obj.value);

    }


    3. object 에서 자기 object로 접근
        let person = {
        firstName: "John",
        lastName: "Doe",
        getFullName: this.firstName + " " + this.lastName
    };
```

**scope의 개념**
- 스코프란 선언되는 변수가 사용될 수 있는 area(범위)에 대한 개념이다. global scope(global variable)로 써야하는 값들은 제대로 인지하는 것이 중요하다.자칫하면 특정 함수에서 그걸 건들 수가 있기 때문이다.
- 규칙은 아니지만 룰이 될 수 있을 만한 팩터는 지속적으로 기억을 해야하는 변수 및 데이터에 대해서는 글로벌하게 가져가는 것이 좋다.
- global scope이 아닌 변수 즉 local variable은 함수 내에서 const이던 let이던 define되었더라도 함수가 끝나면 사라진다.

**Node.js의 등장**
- **브라우저는 js를 해석할 수 있는 엔진이 있어서 그 동안 js는 웹에서만! 사용해왔다. 즉, 웹 어플리케이션에서만 사용가능했다는 말이다. 하지만, 이런 제한점은 Node.js의 등장으로 바뀌었다. web broswer이 아닌 일반 command console에서도 사용가능하게 즉 웹이 아닌 다른 설치형 어플리케이션으로도 사용가능해짐을 의미한다. 이는 곧 키오스크, Iot, AI 등의 모든 프로그래밍 분야에서 사용가능한 언어가 됬다는 것을 의미하며, 즉! js를 배우면 다 할 수 있구나가 되었다.**
- 강사님 말씀 : node.js js에 있어서 정말 혁명같은 존재
- 근데 nodejs는 누가 만들었을까?는 해당 링크를 참조 : https://ko.wikipedia.org/wiki/Node.js


**자바스크립트 고급 문법 - 화살표 함수**
- 강사님 말씀으로는 실무에서 arrow function을 상당히 유용하게 사용한다 하셨다. 
(실무에서 많이 쓰는 이유는 익숙해지면 엄청 편하다)
- 이런 고급 문법은 편의성 극대화하여 효율성을 좋게 해줘서 배우는 것이다.
- 또한, 이런 고급 문법에서도 상기의 스코프개념이 같이 들어갈 수 있기도 하다.

```javascript
// 함수 표현식 
var add = function add(x1, x2) {

    // var sum = x1 + x2;
    return x1 + x2;
};


// 화살표 함수 표현식
var arrowAdd1 = (x1, x2) => {
    return x1 + x2
};

var arrowAdd2 = (x1, x2) => x1 + x2;

var arrowAdd3 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
}
```

**자바스크립트 고급 문법 - unknown arguments**
- add function 같은 계산은 되게 기초적이지만, 다시 생각해보면 input을 여러 개 받을 수 있다. 이럴 때 ...argumentName을 해주어 사용가능하게 한다.
``` javascript
function add(...nums) {

    var sum = 0;

    for (var n of nums) {
        sum += n;
    }

    return sum;
}
```

**자바스크립트 고급 문법 - array and object destructuring!**
- 그 동안의 외부데이터 참조는 데이터 내에서 필요없을 지도 모르는 모든 속성의 데이터를 가지고 와서 필요한 것들을 속아내었다면, 통신이 복잡할수록 좀 더 가볍게 다루기 위해 이런 destructuring 해주는 것이 필요하다.
- 또한, 아래의 형태로 애초에 할당할 때 값들에 대한 의미가 함축된 변수명으로 지정할 때 유용하다.
```javascript

기존 방법
var coodinates = getScore();
coodinates[0]
coodinates[1] 보다는 아래 처럼

* 더 좋은 방법
var [longititue, latitude] = getScores();
```

**가짜 서버 Mock 서버의 활용**
- Mock 서버는 fake server로서 일반적으로 개발을 할 때, 항상 서버와 클라이언트 두대의 컴퓨터를 다 다루지 못하는 여건이 발생할 확률이 높으므로(cost 발생) 웹 개발 시 server computer의 response를 test하기 mock서버라는 가짜 서버를 활용한다.
- 이 mock 서버는 개발의 단계에 있어서 굉장히 스케쥴 관리에 영향을 많이 끼친다. 백엔드가 안되어있으면 프론트는 항상 개발을 못하고 대기하면서 시간을 낭비하게 되는데, 이러면 일정이 늦춰져서(병목현상) 낭비가 발생한다. 그 때! 사용하는게 fake server인 mock server가 필요하다.
- 또한, 나중에 url만 바꿔주면 mock서버에서 진짜 서버로 대체하면 되는 거라 동시에 같이 개발을 할 수 있다!


**자바스크립트 request & response의 문제와 Ajax의 등장**
- 문제 : axios.get(url)을 해도 data가 바로 받아와지지는 않는다.(response를 기다려야 해서) 따라서, web이 결국 멈추게 되는 걸 의미하는데 이걸 커버하기 위해 생긴 개념이 await과 promise이다.

```javascript
문제 개념 설명
클라이언트 => http request => 서버
클라이언트 <= http response <= 서버

이렇게 작동이 되는데, 이렇게 작동 되다 보니 한번에 한 요청(request or response)만 가능했다.

이래서 Ajax가 등장함.
A = 비동기의(Async)
ja = javasciprt
x = extense

비동기 방식은 바로 바로가 아닌 여러 요청을 한번에 하고 다 올때까지 기다리는
promise 방식이다. 하지만, 나머지 code들은 웹에서 작동되고 있다.
```

**자바스크립트 고급 문법 -try & catch**
- 프로그래밍적인 에러 시스템 서비스 에러의 경우에 대처하기 위한 용도로 사용되는 개념으로, `try - catch`를 모든 어플리케이션 내부에 담아내지는 않는다.
- `try - catch`와 함께 `throw`나 `finally` 를 통해 시스템상 민감한 에러에 대해 경고적으로 만들기도 한다.

```javascript
    try {
        if (x == 0) {
            //throw 를 만나면 무조건 캐치로 간다
            throw "value is zero";
        }
    } catch (error) {
        console.log(error);


    } finally {
        console.log("try/catch를 모두 실행한 후 반드시 실행하는 부분")
    }
```

**자바스크립트 정규식**
- Regular Expression이라 불리는 정규식은 문자열 데이터를 특정 식에 맞춰 속아내는 것을 의미한다. 이 정규식은 js말고도 다양한 언어에서 쓰이는 데 정규식을 잘 아는 말도 안되게 효율적인 프로그램을 짜는데 도움이 될 수 있기도 하다.
- 다만 상당히 어려워 모든 걸 외워서 한다기 보다 이해하는 것이 중요하고 실무에서 자주 쓰일만한 것들만 따로 save하는 것도 방법이다.
- 그럼 어떠한 경우에 정규식을 상기하는 것이 좋을까? : 우편번호, 계좌번호 .. etc 뭔가 규칙이 있는 나열에 정규식을 활용할 방법을 생각해야 한다.

```javascript
예시)
이메일의 시작은 항상 문자이다. (마치 변수처럼)
var regexp4 = /^w+@\w+(\.\w{2, 3})+$/;
```
#### 한줄평
js를 배운다는 게 처음에는 단순히 웹을 배우는 것이라 생각했는데 자유도가 상당히 높은 언어이자 상당히 발달한 언어여서 그런지 단순히 웹적인 역량이 아닌 전반적인 프로그래밍 역량을 키워주는 언어라 생각하게 되었다. 그리고 filter나 arrow와 같은 고급 문법을 보면서 kotlin이나 python, R 등이 떠 올랐는데 데이터가 중요해지는 시기가 되면서 전반적으로 data handling에 더 적합한 방향으로 언어가 발달해 가는 것이 아닐까 싶다.

___
#### *번외 - 추후 정리해야 할 점들*
url reject 부분 다시 공부


- Backtick(`)
https://unix.stackexchange.com/questions/27428/what-does-backquote-backtick-mean-in-commands


- postman이라 얘는 뭔가?
https://brownbears.tistory.com/448

- axios라는 애는 뭐지..?
https://axios-http.com/docs/intro

https://ko.wikipedia.org/wiki/Node.js