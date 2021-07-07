## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day29, 7주차 - vue.js - basic3

**vue의 추가 구성요소 - vuex**

-   vuex란 vue 프레임워크 내 모든 Component에서 접근가능한 데이터 저장소이다.
-   vuex 설치방법 `npm install vuex@next` next란 최신 버젼을 설치하는 것을 의미한다.
-   이후, main.js와 app.vue에 store를 import하여 사용가능하다

```javascript
code;

vuex 중에서 createStore라는 기능만 쓰는 것
```

**vue store uses case**

-   store 내부의 데이터 선언 구조는 일반적인 vue의 data()의 구조와 동일하다.
-   다른 점은 store 내부의 데이터는 업데이트가 가능해야하기 때문에 `mutation`이라는 데이터와 연동되는 함수를 사용한다.

```
const store = createStore(
state() {

    }

);
```

**vuex data persistion**

-   vuex > store에 define된 데이터는 매번 application을 활성화할 때 initialization이 되는데 login or logout과 혹은 장바구니와 같은 영속적을 지니게 해야하는 데이터에 대해서는 vuex-persistdstat라는 기능을 추가로 import한다. (단, server를 reset하면 날라감)
-   vuex-persistedstate 설치방법 : npm install vuex-persistedstate --save

**vuex login access 관리**

-   web application을 만들때 login과 같이 data에 대해 access를 달리하게 해주는 기능은 보안적으로 상당히 중요하다. 일반 web에도 admin page가 따로 존재하듯이 말이다. 따라서, 어떤 기능이나 display에는 login을 했는지 안했는지를 먼저 따지고 보여지도록 설계하는 것이 중요하다.
-   실무적으로도 vuex 의 사용용도는 사용자 정보를 관리하는데 많이 쓰인다. store에 userInfo를 저장한 후 login-access로 항상 login를 바라보게 하여 login이 확인되면 access page를 보여주게 하는 것처럼 말이다. 만약에 login 안된 상태로 접근하면 router로 path를 다시 login창으로 잡아주기도 한다.(for UX)

**구글, 네이버 카카오 로그인**

-   구글이나 네이버 카카오 등의 로그인 어플리케이션을 쓰면 기업 입장에서 사용자 정보를 관리 안해도 되는 것을 의미한다. 스타트업과 같은 작은 기업에게는 상당히 powerful한 요소이지 않을까 싶다.
-   GDPR에 따라 개인정보 보호법은 2018.05 EU를 통해 공식적으로 법제화가 되었고 벌금이 상당하기 때문에 왠만하면 대기업 로그인을 사용하는 것이 비용 및 규제적인 측면에서 좋을 수 있다.
-   하지만, GDPR과 같은 개념은 블록체인의 개념과 상충되는 개념이다. 블록체인은 appending만 가능한 DB이기 때문이다. 즉, 개인정보를 삭제할 수 없는 기술이기 때문이다.

**외부 JS SDK를 사용방법**

1. @/public/index.html에 javascript import

```javascript
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
```

-   주의사항 : 바로 Kakao나 naver라는 객체를 호출할 수 없고 반드시 앞에 window를 붙여주어야 한다.
-   scope 의미 : scope 무슨 항목을 쓸지는 말해주는 것

CORS? 에러..? 보안의 이유로 거절? 도메인이 다른애가 요청하면 이렇게 뜸
네이버는 서버에서만 가능하게 함.

proxy? 중개인..? 코스라는 문제로 도메인이 다르면 요청이 못하게 되어이쓴데..? 요청을 대리해주는ㅇ ㅐ가 있음
그게 중개인

내부적으로는 중개서버가 돌아가는 거
브라우저가 네이버에 요청하면 안받아줌 proxy가 대신 요청해주고 그걸 다시 받아서전해줌
개발환경에서만 가능

-   그동안 너무 정보를 쉽게 다뤘음 기업들이.. 하지만 GDPR이 나오면서 개인정보에 대한 중요성,.

---

#### 번외

1. 강사님 github wiki 가면 강의일정이 있다.
   https://github.com/seungwongo/vue-test04/wiki/%EA%B0%95%EC%9D%98-%EC%9D%BC%EC%A0%95
   스벨트 반응형
