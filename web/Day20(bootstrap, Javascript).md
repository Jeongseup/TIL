 ## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트
 ### Day20, 5주차 - bootscript, javascript

**bootstrap 사용방법**
- 부트스트랩을 linking하면 기본 여러 css가 class의 형태로 적용되어 있다.
- sm 핸드폰 사이즈/md 핸드폰 ~ 세로 태블릿/lg는 가로 태블릿/xl부터는 노트북..
- 부트스트랩은 12grid 시스템을 사용한다. (화면을 12개의 컬럼 영역으로 나누는 것을 의미)
- 한 div 밖을 또 다른 div로 container를 주면, 그 안에를 다시 12girding 한다.(다른 디자인 시스템은 12grid가 아닌 14gird같은 시스템을 적용하기도 함)

```html
<!-- 대충 이런 느낌.. -->
<div class="container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>

```
- 부트스트랩의 색상 체계는 기본 웹 서비스 구현에 있어서 필요한 색 구성의 기본 요소 체계를 본 따서 만들었다. 나중에 필요시 각각의 체계 적용된 색상 코드만 변경해주면 됨.
- div 내 col 클래스 지정은 동일하게 안하고, 원하는 만큼 화면분할을 해서 할 수 있다.
role은 정보성 데이터로 어떤 역할을 하는지를 적어준다.

```html
<!-- 경고창보다는 주의사항이나 부연설명시 사용함 -->
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
```

- modal창 팝업이 뜨는 원리는 기존 html 파일위에 bg하나와 msg하나 이렇게 두 개의 div가 올라가는 것

css로도 scrolling speed를 조절가능하다.

#### 한줄평
창업에 있어서든 취업에 있어서든 job에 있어서 market을 국내만 보는 것보다 global 하게 보는 것이 안목을 넓힐 수 있는 기회이자, 미래지향적인 노력 및 선택일 가능성이 높다. 개발 공부 틈틈이 글로벌 인재가 될 수 있도록 english conversation을 준비해야 겠다.

___

**실무 활용 UX/UI**
- 기업 업무 시스템 같이 무거운 시스템 같은 경우 조회버튼 누르는 순간 disable 속성을 주고, 데이터가 넘어오면 다시 able하게 해준다.(그냥 조회버튼을 계속 활성화시켜두면, 시스템에 중복처리가 되서 에러가 야기될 가능성이 큼)
- 시스템의 안정성을 고려하기 위한 UX/UI (무리한 트래픽에 대해서는 중간중간 disable함)
- 툴팁 같은 곳에는 hover할 때, 설명이 나오게 함
#### 한줄평

기본적인 css는 따로 절대경로로 지정하고, 
아래같은 개별 style은 해당 html 내에서만 적용하는 용도로 사용한다.

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



.bg-primary {
    background-color: #1abc9c !important;
}

여기서 !important는 뭐지..?

**svg 간략한 설명**
- html과 다른 언어지만, 문법이 유사한 언어(`width`나 `height` 같은 속성들을 지님)
- 그림을 그려주는 언어
- 웹이 많이 발전되고, 웹 안에서 다양한 그래픽 요소가 중요해지자, 브라우저가 지원하기 시작함
해상도 조절도 되고, 텍스트 기반이라 가볍고, 깨지지도 않음
- 개발자의 영역(개발자가 코드로 짠다)
- 일반적인 차트(주식 차트)들도 내부적으로는 대부분 svg로 되어 있다.
- svg는 텍스트라서 부가적인 description을 넣을 수가 있어서 검색 엔진에 노출도가 높아진다.

**javascript**
- 넷스케이프(브랜든 아이크)가 만듬
- 원랜 모카라는 이름 -> 라이브스크립트였다가 -> 자바스크립트로 바뀜
- 이걸 보고 MS가 jscript를 만들기도 함. 그래서 ECMA라는 협회가 생김
- ECMA Script(ES)가 표준 스크립트를 정해둠.
- 버젼명을 붙이면 ES5, ES6가 됨.

**자바스크립트 작성방법**
- head나 body tag 안에 작성할 수 있다.
- 외부 .js 파일에 작성하고 import할 수 있다.
- 스크립트 바디 태그 내에 제일 밑에 넣는다. (클라이언트 입장에서 컨텐츠 보다, 일단 레이아웃부터 나오는 것이 편하다 응답받는 느낌, 화면속도에 많은 영향을 끼치기 때문)
- js는 개발 내내 콘솔창을 사용해야 한다.
- 꿀팁
.log = 함수이다.
```js
console.log("콘솔창에 출력합니다")
```

**콘솔창 용도**
- js의 문법 오류시 디버그 역할
- 연산과 같은 프로그래밍이 필요할 때 사용(console.log로 부분적인 함수를 테스트할 때 사용)

**자바스크립의 변수명 선언 규칙**
- 중간에 공백이 있을 수 없다.
- 중간에 특수문자가 있을 수 없다(단, $ 과 _ 는 가능)
- 변수명의 시작은 숫자가 올 수 없다.

```js
        var myAge; //카멜케이스, camelCase 
        var my_age; //스네이크케이스, snake_case
        var MyAge; //파스칼케이스, PascalCase
        var intMyAge;
        var strUserName; //헝가리언케이스, hungarian case 
```
- 요즘 추세는 카멜케이스로가고 있음 ES6가 그렇게 이루어져 있어서


var x = 5;라고 선언하면, x와  5는 내부 메모리에 저장된다.
그리고 js는 재선언이 가능한데 x=9;와 var x =9; 이렇게 둘 다 가능하다.
후자 같은 경우는 메모리 상에 또 다른 x블록이 생기는 개념이다.
그래서 let이라는 개념이 있음 상위에 적힌 변수 할당을 중복 안되게 함
const는 상수의 개념 절대변수의 느낌

___
#### *번외 - 개인 공부시 참고할 것*

**그리드 시스템**
- 그럼 그리드 시스템이란 건 뭘까?

**breadcrumb**
https://ko.wikipedia.org/wiki/%EC%82%AC%EC%9D%B4%ED%8A%B8_%EC%9D%B4%EB%8F%99_%EA%B2%BD%EB%A1%9C

**CSS 애니메이션**
배워보면 좋을 것 같은 부분

https://ko.wikipedia.org/wiki/ECMA%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

https://github.com/parksb/javascript-style-guide/blob/master/README.md