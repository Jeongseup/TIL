## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day30, 7주차 - vue.js - basic4 & SQL - basic

**플랫폼 로그인 상의 토큰에 대해**

- 작은 규모의 기업의 경우 회원정보를 일일이 관리하는 것은 비용적인 측면에서 비효율적일 수 있다. 따라서, 기존의 큰 소셜 플랫폼(네이버나 카카오)의 로그인 API를 사용하는 것이 좋은데, 이 때 사용시 로그인을 하고 난 뒤 로그인된 상태가 vue application 내에서 유지될 수 있는 이유는 해당 회원에 대한 토크인 application 안에 지속적으로 존재하기 때문이다. 따라서, 로그아웃을 한다는 것은 발급 받은 토큰을 삭제하는 행위로 볼 수 있다.(이제 아주 정확한 설명인지는 모르겠지만, 현재는 대강 이런 느낌으로 이해했음 21.07.10)
- 네이버 로그인의 경우 request를 보내고 다시 callback Url(토큰 삭제된 것에 대한 callback)을 받으면 삭제된 것으로 간주하고 application 내에서 로그아웃된 상태로 처리하고 기능을 비활성화한다.

**vs code extension for vue**

- vs setting format
  1. format deafult : prettier
  2. format on save checked
- ESlint는 vue 문법에 맞게 규칙을 잡아주는(debug) extension이고, prettier를 말 그대로 코드를 문법에 맞게 가시성 좋게 잡아주는 extension이다.

**vue의 작동원리**

- vue라는 프레임워크가 작동하는 원리는 다음과 같다.
  1. main.js가 실행이 된다.(package.json에 적혀있는 기준에 맞게)
  2. vue가 html-css-js를 그리기 시작한다.
  3. main.js 파일 내에 아래 그리기 전 import 해야할 것들에 대한 정의가 있다.
  ```javascript
  createApp(App).use(store).use(router).mount("#app");
  ```
  4. 그리고 app.vue로 가면 SPA(Single Page Application)가 만들어지고 component들이 router로 지정된다.

**key press 기능의 작동 순서**

- keypress 기능, vue에서는 `@keyup=""`같은 경우 keydown -> keypress -> keyup의 순서로 작동한다. 일반적으로 자주 사용되는 검색 버튼 대신 enter key를 누를 때 검색이 되게 하는 것은 vue에서 `keyup.enter`라는 기능을 바로 사용하면 된다. ex) `@keyup.enter="doSerch"`, 또한 일반적으로 enter키는 13번이다.

**vue computed와 watch의 차이**

- computed는 변경사항이 없는 초기화 상태부터 데이터를 반영하며, watch는 data에 대한 변경사항(update)가 생겨야 작동된다.

**vue v-if & v-show**

- v-if는 DOM tree상에 애초에 그리지 않고, v-show는 그리긴 그리는데 display:none;인 상태로 그려서 보이지 않는 것이다. memory 및 ux의 측면에서 차이가 존재한다.

main.js 에서는 기본적으로 index.js가 실행된다
import router from './router'
import store from './store'
그래서 이렇게 되어있지만
사실상 ./store/index.js인거 ㅇㅇ

state : 보다는
state() 로 쓰고 return하나ㅡㄴ게 좋음

const store = createStore({
state() {
return {
user: {},
header: [],
body: [],
};
},
mutations: {
user(state, data) {
state.user = data;
},
header(state, data) {
state.header = data;
},
body(state, data) {
state.body = data;
},
},
plugins: [
persistedstate({
paths: ["user", "header", "body"],
}),
],
});

export default store;

이거랑

export default createStore({
state() {
return {
user: {}
}
},
mutations: {
user(state, data) {
state.user = data
}
},
actions: {},
modules: {},
plugins: [
persistedstate({
paths: ['user']
})
]
})

이거랑 같은 문법
함수안에서 this가 실행되면 undefined가 되지만
애로우함수 안에서는 this가 일반적인 window 객체가 나타난다.
this 자체가 컴포넌트 자체임

parent - child 개념 다시 보기

lifecycle : 한 컴포넌트(\*.vue)가 만들어지는 순서
before created -> created -> before mounted -> mounted -> before updated ->updated(데이터가 변경되면 그걸 감지) -> before unmounted ->unmounted(종료)

컴포넌트 안에 다른 컴포넌트가 들어오면 그 작업을 끝내고 현재의 컴포넌트를 그린다.

API.request(url, success, fail)은
success란 함수,fail이라는 함수를 던진 개념

mixin은 공통적인 함수를 어떤 컴포넌트에서라도 사용하게 재활용하기 위해서 그 함수들을 module화 시켜논 것.
일반적으로 모든 컴포넌트에서 사용하는 mixin은 main.js에 선언하고, 일부만 사용하는 것은 해당 컴포넌트 내에 mixins:[]를 만들고 import ... 로 사용한다.

하지만, 컴포지션 API는 이런 일련의 과정들이 프로그래밍스럽지가 않기 때문에 컴포지션 APi라는 걸로 만들어서 뿌리는 형태로 바꾸는 중..?

원래는 js에서 promise와 fetch, ajax로 직접구현해서 서버와 통신하는데 복잡하니까 쉽게 전송하고 받기 위해서 axios라는 library 이다.
axios에서 get delete update할 때 .. 쓴다 나중에 node.js할 때 보여준다하심..

실무에서는 ajax로 하다가 지금은 그냥 axios로 통일됨..
카카오가 만든 common.js 가 그냥 SDK인 것 뿐이다.
library = module = plugins 설치되지 않는?
url로 삽입해서 쓰는 것? 설치가 되면 module

**다음주 할일**
DB를 깔기 전에 넷플릭스 구조를 한번 파악해보기
DB를 잘 짜는게 중요하기 때문에 어떻게 설계할지는 배우고

다음주 월요일에는 실제 설치
query 질의문을 만든다..? -> data handling 과정

axios도 docs 읽어봐라..
https://eslint.org/docs/rules/
https://github.com/axios/axios

Oauth2.0 기반이란..?
사용자 인증ㅇ ㅐ한 기준! 이
Oauth2.0 라는 기준 체계에 맞게끔 처리해둠..
인증 규칙!

넷플릭스 구조 파헤치기

DB도 하나의 시스템이다.
excel sheet이 여러 개있는 구조이다.
DB에 append되는 모든 data들은 key value를 가지고있다.
서로 다른 테이블에는 키가 달라도 상관없음
배우명같은 경우는 영어명으로 하는 테이블을 별개로 마들던가? 기존 테이블에 합치던가?

이런 엑셀시트에 있는 데이터들을 간단히 가져오기 위해 DB를 쓴다.
이렇게 안하면 js에서 다 filter로 해서 처리해주니까 한참 걸림..
데이터가 몇개 있을지 모르는 데이터인 경우는 row로 데이터를 쌓고

40개의 언어만 지원한다고 지정한 특징 데이터의 규모가 정해진 경우는 컬럼으로 쌓는 것이 좋다.

속도는 컬럼이 훨씬 빠름ㄴ

그리고 시즌으로 구별되어 있는 경우
마리아 DB? MySQL MSSQL .. 는 RDBMS
특정 데이터를 넣을 때 존재하지 않는 아이디가 들어오는 경우는 자동으로 에러가 나게 하는 시스템 데이터간의 생성 우선순위가 정해지는 것

스타트업의 성공여부의 실패는
안보이는 곳의 데이터를 어떻게 설계하고 수집하고 활용할지가 중요함
마우스휠이 어디서 많이 움직였고, 어떤 영상에 얼마나 머물렀고? 얼마나 시청했고만 중요한게 아니라
시청 시작시간과 종료시간를 차라리 저장하는게 팁
강사님이라면...
만약 2시간인데 실제로 2시간만에 보는 성격이 아닌 사람은 실제로 차이는 1시간 이면 성격까지 알 수 있음

한 영상에 대해 여러번 나눠보는 사람은
레코드 자체가 여러개면 그 고객에 대해서 바쁜 사람이구나 라고 유추도 가능
그리고 이렇게 얼마나 레코드가 쌓일지 모르는 데이터는 row stacking한다.

하나의 페이지를 만들더라도 해당 페이지에 띄워지는 컨텐츠들은 DB에 어디에서 가져올 것이고 그 데이터는 어떤 형태로 저장될 것인지? 그리고 거기서 사용하는 언어가
sql

안보이는 데이터들이 보이기 시작하는게 정말 중요함
한

검색키워드에 대해서도 안나오는 검색키워드를 검색한 경우도 다 저장하고, 5만명이 안나오는 검색키워드를 쓰고 있다면 그런 컨텐츠를 니즈를 찾을 수 있음

SELECT \* FROM [Customers] where country == "Mexico"

sql상에서 데이터를 처리한 뒤에 클라이언트로 가지고 와서 그 이후에 js에서 처리한다. 그냥 db에서 다 가지고와서 js함수로 처리하는 게 아니다.

어떤 컬럼부터 join하냐에 따라서도 속도 차이가 많이난다.

join의 개념
https://www.w3schools.com/sql/img_leftjoin.gif
