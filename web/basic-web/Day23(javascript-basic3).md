## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day23, 6주차 - javascript basic3
#### Day 22 Review

**자바스크립트 - 날짜 시간관련 object**
- `getDate();`와 같은 함수 이외에 `setDate()`도 있지만 실무에서 자주 쓰지는 않는다.
- 실무에서는 시간 데이터를 handling하는 게 상당히 어려운 문제라 moment.js라는 open source library를 사용한다.(<a href="https://momentjs.com/" target="_blank">MOMENT JS LINK</a>)
- CDN(Contents Delivery Network) : 절대경로로 외부 js를 가져다 쓸 수 있게하는 서비스(굳이 다운로드 하지 않아도 쓸 수 있음)
- 사용방법은 CDN을 활용한 절대경로 tag참조나 moment.js를 만들어서 로컬에서 실행하는 방법이 있다.
- **`moment.js`는 날짜 및 시간을 다룰 때 엄청 많이 쓰임.** (date객체와 함께 알고 있는 것 좋음)
- **확장자가 `.js`인데 `.min.js`라고 적혀있는 애들도 있다.**(minified의 약자) 
- minified version을 사용하는 이유
	1. 개인 기술 유출 방지 : 공백이나 함수명을 다 바꾸어 개인의 노하우를 F12(web개발자 도구)로 트래킹할 수 있는 것을 방지한다.
	2. 파일 사이즈 경량화 : 주석 및 공백을 제거해서 js파일을 경량화한다.
	3. 가벼운 웹 어플리케이션 제작 : 어플리케이션을 제작 시 다양한 library를 linking을 하므로, 가벼운 상태로 참조하는 걸 선호한다.
    
- minify & beautify : 다시 **`beautify(VS code extension)`** 를 사용하면, 저장할 때 또 다시 용량이 커질 수 있다.
- 주의사항 : 실제 사용할 때, 절대경로로 참조하면 매번 CDN을 요청해야해서 더 오래걸릴 수 있다.
- 내부 원리 : minify를 저장할 때 어떤 함수가 어떻게 바뀌었는지 내부적으로 저장되어 있어서 그냥 참조해도 치환이 된다.

#### 한줄평
인터넷의 발달이 정말 다양한 오픈소스 프로젝트로 이루어져있다라는 것을 체감하게 되었다. 또한, 그런 관점에서 서로의 기술특허성을 보존하기 위한 minify&beautify의 개념 또한 충분히 이해가 되기도 했다. 나아가, 현재의 블록체인 프로젝트들 또한 이런 WEB의 발달의 역사와 유사한 어느 거대한 시대의 흐름이 아닐까 싶었다.

___
#### Day23 

**자바스크립트 문법 - set object**
- `set`과 `date`객체는 `var 변수명 = new 객체명();`으로만 define가능하다. 
- set객체는 어떨때 유용할까? : 배열 내 데이터에서 unique value를 추출할 때 사용한다.
- set객체 등장 이전에는 basic object를 변형해서 사용했다.(아래 코드 참고)

```javascript
    * object로 set 자료형 구현하기 *

    for (var user of userList) {
        if (oUser[user.gender]) {
            oUser[user.gender]++;

        } else {
            
            //userList 내 한 user의 gender 속성으로 접근
            var oUserGender = user.gender;
           
            // gender 데이터를 key값으로 저장
            oUser[oUserGender] = 1; // or oUser[user.gender] = 1;
        
            '''            
            * 하지만, oUser.oUserGender = 1; 은 안된다.
            어떤 값이 key로 들어갈 지 몰라서 
            "list명.키명"의 형태가 아닌, "list명[키명]"의 형식으로 지정해야 한다.
            '''
            console.log(oUser);
        }
        break;
    }
```

- set to array / array to set : python에서 하던 습관이 생각나 from set to arr / from arr to set을 찾아보았다.
```javascript
var myArr = Array.from(mySet);
var mySet2 = new Set([1, 2, 3, 4]);
```

**자바스크립트 조건문 내 set & map 의 차이**
- 조건문 `if()` 내에서 0만 false로 간주하고 나머진 숫자에 대해 true로 간주한다.**(신기한 점은 undefined도 false로 간주)**
```javascript
    아래의 경우도 true의 형태이다.

    if (-1) {
        console.log("정수");
    }
```

- set으로 if문을 만들면, `true : 숫자 / false : undefined` map으로 만들면 `true : true / false : false`
- **실무상에서 `undefined`는 결국 false로 처리되지만, undefined라는 데이터를 생성하는 것으로 메모리를 더 잡아먹게 된다. 따라서, 메모리의 관점에서도 set보다는 정상적인 true & false형태로 조건문을 완성하기 위해 map을 사용한다.**



**자바스크립트 문법 - map 객체**
- map의 등장 배경 : 왜 굳이 set이 아닌 map을 쓸까? set에서 `oUser[key명]`의 형태는 프로그래밍스럽지가 않다. 또한, set은 문자열 값만을 key로 받을 수 있는 한계가 있다.(map을 사용한다면, 오브젝트 내에 또 다른 object를 넣는 DB의 형태 또한 구성가능함)
- map에서는 key로 배열이나 오브젝트 등의 다양한 자료형을 넣을 수 있다.
- 실무에서는 map은 좀 더 선호한다.
- map자료형은 키 값들을 바로 출력 가능하고, 몇 개의 데이터가 담겼는지 바로바로 알 수 있다. `myMap.size & myMap.keys`
- **set객체는 for-in문을 사용할 때 데이터 stack 순서를 보장하지 않기 때문에, 간혹 키값의 순서가 뒤바뀔 수 있다** 하지만, map은 그 순서를 보장해준다.
- map자료형은 `console.log`만을 사용하는 것이 좋다. `console.table`은 object나 arr만 가능하다. (왜냐 map은 여러 데이터 타입이 들어올 수 있어서)


**자바스크립트 문법 - math 객체**
- `ceil()` 는 어떨 때 사용하는가? : 게시글이 96개이고, 한 페이지에 보여줄 개수 n(=10)으로 설정하면 96/n을 한 값에 `ceil()`을 해서 올려서 총 개수를 구한다.

- `ceil()`함수는 소수점만 올림이 가능한데, 이를 고려하여 다음과 10의 자리 올림을 하고 싶은 경우 다음과 같이 변형가능하다.

```javascript
10의 자리 올림을 하고 싶은 경우 강제로 10으로 나누어 1의 자리를 소수점으로 바꾸고 ceiling 이후 다시 10을 곱한다.
Math.ceil(value / 10) * 10);
```

- `random()` 함수는 기본적으로 0~1사이 숫자가 나오는데, 이를 변형하여 자리수를 1~10 or 10~100까지 등으로 바꿀 수 있다.
```javascript
console.log(Math.floor(Math.random() * 10));
```

- 난수 생성 함수 : 나아가서 아래의 형식으로 난수의 범위를 지정해줄 수 있다.(실무에서 정말 많이 쓰임)
```javascript
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

- 조건 삼항식의 좋은 예시
```javascript

function rspPlayer(userRSP) {

    const arrRSP = ["가위", "바위", "보"];
    const playerRSP = arrRSP[getRandomInteger(0, 2)];

    * 각각의 경우를 다 고려하여 조건문으로 return하기 보다는 
    아래와 같이 한 케이스만의 데이터를 const value로 지정하는 것이 효율적일 수 있다.

    const winValue = {
        "가위": "보",
        "바위": "가위",
        "보": "바위"
    };

    return {
        "userRSP": userRSP,
        "playRSP": playerRSP,
        "winner": (userRSP == playerRSP) ? 0 : winValue[userRSP] == playerRSP ? 1 : -1
    };
}
```

**자바스크립트 문법 - JSON 객체**
- JSON is JavaScript Object Notation : 웹에서 가장 많이 쓰이는 데이터 통신 형식
- JSON의 등장 배경 : 예전에는 json 포맷으로 다루지 않아 데이터를 웹 상에서 처리할 때 불편한 점이 존재했다. 하지만, JSON 객체는 javascript 내의 object랑 똑같이 생겨서 바로 사용할 수 있는 형태이다.
- url는 다 문자인데 object형식으로 보낼 수 없는 경우가 생긴다. (서버는 다른 언어일 수도 있기 때문) 이 때 사용한다.
- 단 json 객체의 모든 key는 `"key명"`의 형태로 지정해야 한다.
- 클라이언트와 서버간의 통신처리시 JSON 형태가 좋은 이유(아래)
```javascript
클라이언트 => 정보 => 서버 인 상황에서
저 사이 정보를 string으로 처리하기 위해, JSON.stringify();를 쓴다.
```


**자바스크립트 문법 - window 객체**
- Window 객체는 전역 객체로서 global 객체이므로 `window.함수명`이 아닌 `함수명`으로 바로 선언이 가능하다.
```javascript
- window.alert("이것은 alert 창입니다."); 
- alert("이것은 alert 창입니다."); 
```
- 단, window객체 내 open함수 같은 경우는 희한하게 `window.open();`의 형태로 쓴다.(개발 시 open이라는 함수명을 사용할 가능성이 높기 때문, `window.open("https://naver.com");`)

- setTimeout 함수는 parameter로 함수와 시간(milisec)를 받는다.
```javascript
// setTimeout 함수 
// param. 1 : function
// param. 2 : 시간

setTimeout(function () {
    alert("프로그램 실행");
}, 2000);
```

- setInterval 는 정해진 시간마다 갱신하는 프로그램을 짤 때 쓰인다. 
     - ex) 주식같은 걸 갱신할 때 예전에 이런 방법을 썼다. 하지만, html5가 나오면서 클라이언트가 요청한다기 보다 반대로 바뀐경우 서버가 알아서 내려주는 개념으로 바뀌었다.

    ```javascript
            var fun = setInterval(function () {
                if (count < 5) {
                    console.log("프로그램 실행:", count);
                    count++;
                } else {
                    console.log("종료");
                    clearInterval(fun);
                }
            }, 1000);
    ```
#### 한줄평
다른 건 몰라도 javascript를 하면서 정말 다양한 자료형에 대해 배울 수 있는 점이 좋았다. 기존에 python에서만 쉽게 지나가던 자료형들에 대해 어떻게 쓰이는지 알 수 있었다. 원래는 배열만 자주 사용했는데 어떤 관점에서 set이나 map 객체가 필요한지 알 수 있어서 좋았다.
___

#### *번외 - 추가로 공부해볼만한 것*

**myCommon.js파일 만들기**
공통함수 및 공통모듈은 개인 스터디하면서 필요한거 따로 .js로 만들어서 저장해서 잘 정리해두는 것이 좋다. 언제 어느시기에 알찬 구성들이 필요할지 모른다. 또한, 회사에서도 공통적으로 많이 쓰는건 다같이 저장해두고 쓰는 형식으로 co-work을 한다.

업데이트 X

**javascript scope**
오늘 마지막 시간에 주차요금 계산 함수를 짜면서 var와 let 그리고 const의 차이로 인한 함수 내 버그가 발생했다. 후일을 위해 해당 개념을 공부할 필요가 있다. 
(참고 : https://medium.com/@yeon22/javascript-%EC%8A%A4%EC%BD%94%ED%94%84-scope-%EB%9E%80-bc761cba1023)


**문자열 객체 활용 리뷰(출처 : Mozilla)**
- substr
```javascript
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"
```
- charAt
```javascript
var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");
// No index was provided, used 0 as default
```
