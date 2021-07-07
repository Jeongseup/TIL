vuex 모든 컴포넌트에서 접근 가능한 데이터 저장 장소이다

github wiki 가면 강의일정이 있음

https://github.com/seungwongo/vue-test04/wiki/%EA%B0%95%EC%9D%98-%EC%9D%BC%EC%A0%95

---

vuex 설치
npm install vuex@next

이러면 store folder를 쓸 수 있음

// vuex 중에서 createStore라는 기능만 쓰는 것

const store = createStore(
state() {

    }

);

이것과
다른 vue나 컴포넌트의 data랑 똑같은 구조
data (){

}

mutation은 데이터와 연동되어 사용하는 함수
