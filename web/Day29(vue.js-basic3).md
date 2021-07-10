## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day29, 7주차 - vue.js - basic3

**vue의 추가 구성요소 - vuex**

- vuex란 vue 프레임워크 내 모든 Component에서 접근가능한 데이터 저장소이다.
- vuex 설치방법 `npm install vuex@next` next란 최신 버젼을 설치하는 것을 의미한다.
- 이후, main.js에 store를 import하여 사용가능하다

```javascript
1. import store from "./store/store";
2. createApp(App).use(store).use(router).mount("#app");
___________________
store.js 내 첫 줄에 선언된 import는 vuex 중에서 createStore라는 기능만 쓰는 것을 의미함
import { createStore } from "vuex";
```

**vue store uses case**

- store 내부의 데이터 선언 구조는 일반적인 vue의 data()의 구조와 동일하다.
- 다른 점은 store 내부의 데이터는 업데이트가 가능해야하기 때문에 `mutation`이라는 데이터와 연동되는 함수를 사용한다.

```javascript
store.js 내부 데이터 선언 구조
    state() {
        return {
            user: {},
            header: [],
            body: [],
        };
    },
______________________
일반 .vue 내부 데이터 선언 구조
  data() {
        return {
            naverLogin: null,
            // header: [],
            // body: [],
        };
    },
```

**vuex data persistion**

- vuex > store에 define된 데이터는 매번 application을 활성화할 때 initialization이 되는데 login or logout과 혹은 장바구니와 같은 영속적을 지니게 해야하는 데이터에 대해서는 vuex-persistdstat라는 기능을 추가로 import한다. (단, server를 reset하면 날라감)
- vuex-persistedstate 설치방법 : npm install vuex-persistedstate --save

**vuex login access 관리**

- web application을 만들때 login과 같이 data에 대해 access를 달리하게 해주는 기능은 보안적으로 상당히 중요하다. 일반 web에도 admin page가 따로 존재하듯이 말이다. 따라서, 어떤 기능이나 display에는 login을 했는지 안했는지를 먼저 따지고 보여지도록 설계하는 것이 중요하다.
- 실무적으로도 vuex 의 사용용도는 사용자 정보를 관리하는데 많이 쓰인다. store에 userInfo를 저장한 후 login-access로 항상 login를 바라보게 하여 login이 확인되면 access page를 보여주게 하는 것처럼 말이다. 만약에 login 안된 상태로 접근하면 router로 path를 다시 login창으로 잡아주기도 한다.(for UX)

**GDRP과 구글, 네이버 카카오 로그인**

- 구글이나 네이버 카카오 등의 로그인 어플리케이션을 쓰면 기업 입장에서 사용자 정보를 관리 안해도 되는 것을 의미한다. 스타트업과 같은 작은 기업에게는 상당히 powerful한 요소이지 않을까 싶다.
- GDPR에 따라 개인정보 보호법은 2018.05.25 EU를 통해 공식적으로 법제화가 되었고 벌금이 상당하기 때문에 왠만하면 대기업 로그인을 사용하는 것이 비용 및 규제적인 측면에서 좋을 수 있다.
- 하지만, GDPR과 같은 개념은 블록체인의 개념과 상충되는 개념이다. 블록체인은 appending만 가능한 DB이기 때문이다. 즉, 개인정보를 삭제할 수 없는 기술이기 때문이다.
- GDPR(Genernal Data Protection Regulation), 유럽연합 일반 개인 정보 보호법 아직 국내에서는 필수적인 것 같지는 않지만, EU관련 서비스를 해야하는 Global 기업에는 필연적 한국에서는 이런 개념이 '마이데이터'라는 명칭으로 들어온 듯하다.(둘 다 개인 데이터에 대한 주권을 바로 잡기 위해 생기는 제도)
- 추가 이해 필요 시 참고문헌
  > https://brunch.co.kr/@beusable/108

**외부 JS SDK를 사용방법**

1. @/public/index.html에 javascript import

```javascript
<script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
```

- 주의사항 : 바로 Kakao나 naver라는 객체를 호출할 수 없고 반드시 앞에 window를 붙여주어야 한다.
- scope 의미 : scope 무슨 항목을 쓸지는 말해주는 것

```javascript
window.Kakao.Auth.login({
  scope: "profile_nickname, account_email, gender",

  success: this.getKakaoAccount,

  // function (response) {
  //     console.log(response);
  // },

  fail: function (error) {
    console.log(error);
  },
});
```

**CORS(Cross Origin Resource Sharing), 교차 출처 리소스 공유**

- 카카오에서는 로그아웃(토큰 삭제) 기능을 SDK에서 지원하지만, 네이버 같은 경우 지원하지 않는다. 즉, 네이버 로그인을 만들고 .. 서로 다른 도메인에서 나오는 요청에 대해서 브라우저가 CORS 정책에 따라 보안상의 이유로 그 request를 그냥 날려버린다.

- 추가 이해가 필요시 참고 문헌

  > https://evan-moon.github.io/2020/05/21/about-cors/ > https://xiubindev.tistory.com/115

- 그래서 CORS ERROR를 넘기기 위해, 브라우저에게 같은 호스트로 요청을 해줘야하는데, 이 때 middelwaree인 proxy(중개인) 요청을 대리해주는 애를 만들어서 이를 해결한다. (잘은 모르겠지만, 개발상 테스트상에서만 발생하는 문제인듯)
- proxy를 이용해 내부적으로 중개서버가 돌아가게하여 클라이언트가 네이버에 요청하던 token 삭제를 proxy가 대신 요청해주고 그걸 다시 받아서 전해주는 역할을 한다.

- vue.confing.json 설정

```javascript
    devServer: {
        proxy: {
            "/oauth2.0": {
                target: "https://nid.naver.com",
            },
        },
    },
```

#### 한줄평

Web이라는 세계에서 그 동안 너무 쉽게 개인의 정보를 다뤄왔고, 그것에 대해 주권을 확보하기 위해 기술적 진보 및 협회 운동들이 역사적으로 움직여왔슴을 느낄 수 있는 강의였다. EU도 그렇고 우리나라도 그렇고 global 방향은 개인(or고객)에게서 산출되는 데이터라는 원재료? 에 대해 해당 가치를 기업이 아닌 개인에게 다시 돌려주기 위함이지 않을까 싶다. 그리고 이런 맥락은 단순히 컴퓨터 개발에서 그치지 않고 지금 교육 중인 블록체인 비즈니스에서도 지속적으로 노출하고 다루고 있는 문제이다. 카카오 및 네이버 개발 SDK를 통해 내 개인정보를 개발적으로 다뤄본 입장에서 이렇게 손쉽게 내 사적인 정보가 기업에 넘어가고 있었다는 사실이 한편으로 좀 충격적으로 다가왔던 시간이었다.

---

#### 번외

1. 강사님 github wiki 가면 강의일정이 있다.
   https://github.com/seungwongo/vue-test04/wiki/%EA%B0%95%EC%9D%98-%EC%9D%BC%EC%A0%95

2. 스벨트 반응형
