## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day24, 6주차 - javascript advanced
#### 함수 주석 표기 방법 및 타입스크립트 등장배경

- common.js 파일 내 함수 표기를 위해서 함수 위에서 /**을 해주면 스타일이 나타난다.
```javascript
/**
 * description : 최소값과 최대값을 파라미터로 받고 그 사이의 무작위(random) 정수를 반환하는 함수
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number} min과 max 사이의 랜덤 정수 값
 */
```
타입스크립트는 구글에서 만들었는데 자바스크립트 코드를 만들기 위해서 타입스크립트라는 언어를 쓰는게 이해가 안됬는데.. 일반적인 자바스크립트를 함수화하는데 number나 string같은 데이터 형식을 잡아주지 못해서 타입스크립트를 만들게 되었다. 그래서 이름도 보면 type 스크립트이다. 대기업같은 대규모 작업을 하는데 있어서는 오류를 잡아주기 위해 쓴다.

___
js-advanced에서 001.html 내용 정리할 것

this의 용도 
1. window 객체 호출, 
2. html tag 내 이벤트 발생시 특정 태그 value 접근
3. object 에서 자기 object로 접근



**scope**
- 글로벌 스코프로 써야하는 값들은 제대로 인지하는 것이 중요하다. 자칫하면 특정 함수에서 그걸 건들 수가 있어서.
- 지속적으로 기억을 해야하는 변수 및 데이터에 대해서는 글로벌하게 가져간다.

브라우저에 js를 해석할 수 있는 엔진이 있어서 그 동안 js는 웹에서만! 즉 웹 어플리케이션에서만 사용가능하다가 Node.js가 등장하면서 바뀌었다. 웹이 아닌 다른 설치형 어플리케이션도 가능해졌다.
키오스크.. iot .. ai..  즉 js를 배우면 다 할 수 있구나가 되었음

웹 클라이언트에서 웹 서버나 데스크탑 . .모바일.. 로 바뀜


강사님 왈 : node.js js에 있어서 혁명같은 존재

근데 nodejs는 누가 만들었을까?
https://ko.wikipedia.org/wiki/Node.js


**화살표 함수**
-강사님은 실무에서 arrow function만 사용한다 하심
실무에서 많이 쓰고 익숙해지면 편하니까 많이 익숙해져야한다.. 

고급 문법은 편의성 극대화 효율성을 좋게 해줘서 배우는 것
스코프개념이 같이 들어갈 수 있음

array and object destructuring!
var [x, y] = getScore();
// 이런 형태로 애초에 할당할 때 값들에 대한 의미가 함축된 변수명으로 지정할 때 유용함

___
번외
- Backtick(`)
https://unix.stackexchange.com/questions/27428/what-does-backquote-backtick-mean-in-commands