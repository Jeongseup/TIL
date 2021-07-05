## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day26, 6주차 - vue.js - basic1

**vue의 등장배경**
- 구글은 js를 더욱 쉽게 사용하기 위해, angular라는 framework를 만들었다. vue도 그런 js framework이다.(... Fb - React)
- 기존에는 설치형 어플리케이션이었다. 하지만, 브라우저 같은 경우 어디서든 인터넷만 있으면 접속가능했다.
- 그래서 구글이 Angular라는 걸 만들었는데, 복잡한 어플리케이션을 만들 때 Angular를 쓰다보니까 처리가 느리다는 단점이 부각됬다.(Real DOM상에서 특정 child를 수정하면, 그 아래 모든 leaves가 다 수정되느라 느려짐)
- 페이스북이 그래서 가상DOM을 사용하는 React라는 framework를 만들어 Angular보다 빠르게 그려준다.(특정 child를 수정할 때 다 그려놓고, 그 이후에 가상 DOM상에 있던 수정요소를 한번에 뿌려주는 개념! 하지만, Angular의 좋은 장점 하나를 수용 안함)
- Vue의 등장!, 상위의 두 장점을 복합적으로 잘 이용하는 프레임워크


node.js 장점 npm
vue-cli(command line interface) 여러 library 뭉치

npm install vue@next
npm install -g vue@cli
npm create project_name
cd project_name

version down 
npm install @vue/cli-service@5.0.0-beta.0 @vue/cli-plugin-babel@5.0.0-beta.0 @vue/cli-plugin-eslint@5.0.0-beta.0 @vue/cli-plugin-vuex@5.0.0-beta.0


create vue.config.js 
module.exports = {
    lintOnSave: false
}

app.vue가 root componet -> 얘가 실행된다
vue는 html css js를 하나의 component를 묶어서 재활용하게 한다.
즉 하나만 만들면 이것저것을 굳이 다 만들 필요없이 
재활용을 잘 할 수있도록 만드는 component 설계가 중요하다.

main.js는 compent 설계 구조를 나타낸다.


결론적으로 /public/index.html 하나만 실행되는 것.

package.json -> name = 어플리케이션 이름
version -> 어플리케이션 현재 버젼
private -> true/false, ture하면 npm 오픈소스상에서 다른사람들이 쓰지 못하게 함(github에 자기만의 repo에 등록하는 개념)

npm run serve -> package.json > scripts > serve가 실행
vue 에서는 서로 잘 어울리는 버젼이 뭔지 체크해주는 기능이 있음
dependecies 의미 : 현재 어플리케이션 내 vue, core, plugin 각기 버젼 상세("내 어플을 쓸려면 이런 library를 기본으로 설치해야해")
devDependecies : 개발을 위한 편의성을 제공하기 위한 .. 버젼 상세
eslintConfig : 아까 false 한 부분

browerlist : 브라우저 지원 상태




manualy select fts..

router vuex 추가
chooser verison 3.x
y
prettier esLint
lint on save
package.. 
save > 현재 추가상태 저장

vue ui

패키지 매니저에서 
npm을 선택
깃 활성화 빼기

새로운 환경만들기
라우터만 선택
버젼은 3.x
eslint+prettier
저장 x

src>views>DataBinding.vue

<template>
<div>

</div>


url path 기본적으로 다 소문자로 한다.

app.vue에서 link의 to 의 path와 index.js의 path가 일치해야함
router는 어떤 정보를 연결시켜줄지를 결정해주는 것이다.
app.vue는 router에 입력된 정보에 따라 해당 컴포넌트를 찾아 웹에 띄운다

몇백개를 만들더라도 app.js와 chunk.js 두 개안에 다 들어간다.

실질적으로 페이지 소스보기를하더라도 
<script defer src="/js/chunk-vendors.js"></script><script defer src="/js/app.js"></script>
이렇게만 들어있음

vue는 spa(single page application) application임
그래서 js가 많아지면 첫 접속시간이 엄청 느림

처음에는 다 가져오다가 느리니까
특정 메뉴는
어떤걸 클릭하는 순간에 그 때 다시 서버로 요청한다.

다시 설명하면
메뉴가 100면 app.js 안에 그 100개 다 들어있는데.. 
메뉴 수가 많아지면 첫app.js를 켜는게 느려진다

그래서 몇몇 메뉴를 첫 app.js를 켤 때 바로 안가져오게 할 수 있음

바로바로 들어가는 자주들어가는 메뉴는 app.js에 같이 떨어는게 좋지만, 잘 안들어가는 메뉴는 따로 about처럼 분리하는게 좋다.

이런걸 lazyload
  import( /* webpackChunkName: "about" */ "../views/About.vue") 로 분리하는데
앞에 부분이 주석처리로 설정해두었따.


webpackPrefetch:true 를 하면 브라우저 캐시 메모리에만 들어있지 클라이언트까지 떨어지지 않음


app.js 로딩할 때 다 무조건 필요한 것
prefetch 그 다음으로 사용자들이 접근할 일이 많은 것 혹은 사이즈가 무거워서 잠시 캐시에 올려놓는 용도
router 설계에 따라 어플 성능이 많이 차이난다.

소프트웨어 아키텍쳐

app.js 에 상단에 바는 
<router-view />안에 들어가는 것

inputtype text html-js가 서로 연동되어야 함

vue 문법은 v로 시작한다
method 짤 때 function을 뺀다
function 

단방향으로 값을 넣을 때는

checkbox는 여러개 가능하니까 배열이었고
radio는 하나만 가져올거니까 1개면 됨
그 값을 가져오는 것은 checked를 보고 가져오는 것


https://cli.vuejs.org/guide/installation.html


views > vue 파일에서 
{{변수명}}은 바로바로 화면에 띄울 수 있게하고,
html문법을 사용해서 띄울 경우는 div 태그 내에 v-html:"html"로 선언한다.



**main.js 의 의미**

import {
    createApp
}
from "vue";


import App from "./App.vue";
import router from "./router"; // router가 ./router/index.js를 자동으로 찾아서 연결해줌
만약 router내에 index.js가 아닌 다른 별칭을 쓰고 싶다면
./routr/router.js로 바꿔주면 된다.

import store from "./store";

createApp(App).use(store).use(router).mount("#app");
// 처음에 프로젝트를 만들 때  router을 사용한다고 지정해서 생겼음
store는 아직 무슨 기능인지 모르곘음..

checkbox에서 연결된 것은 checked속성임. v-model의 의미가 checked를 찾는 것
img도 한 방향으로 이뤄지는 거라 v-bind:src:"imgSrc"를 이용함

근데 angular가 처음 데이터 바인딩 개념을 가져옴

value를 가져오는 건 결국 v-model를 가져오는 것
value와 v-model은 연결되어있다
import 명도 굳이 맞춰줄 필요 없고
name 또한 마찬가지

css style scoped는 해당 컴포넌트 내에서만 그걸 풀면 전역으로 먹힘

this.userList = (await axios.get(this.url)).data.data;
첫번째 data는 데이터 불러오는거 에러랑 뭐 이상한 거슬 중
그다음 data는 


            if(this.selectGender ==""){
                this.userList = userList;
            
            }else{
                this.userList = this.userList.filter((u) => u.gender == this.selectGender);
            }
============위랑 아래랑 같은데.. ==========
            // var newUserList = [];
            // for(var user of userList){
            //     if(user.gender == this.selectGender){
            //         newUserList.push(user);
            
            //     }
            // }
            // this.userList = newUserList;
일반적인 for문을 돌릴 때 이렇게  따로 []를 하나 더 만들어서 해주는 이유는 push를 할 때마다
코드가 그리려고해서 한번에 그리려면 따로 빈 array를 만들어 거기다가 push 하고 최종적으로 값을 넣어주어야한다.

해보는데 걍 안돌아가네.. 



v-if와 v-show의 차이는 화면에 안보이는 건 똑같지만 element상으로 display:none이냐 아니면 실제 띄우지를 않았냐의 차이 보안상 if가 더 나을듯

사용자의 접근자체가 불가능하게 처리하는 건 v-if지만,
빈번이 일어나는 필요기능을 보여주고 말고를 결정하는 건 v-show로 처리하는게 좋음
v-if는 아예 안만들기 때문에 비용이 없지만, v-show처럼 실제로는 만들지만 안보이게 하는건 비용이 든다. dom tree안에 결국 그리는 활동을 하기는 하기 때문에

