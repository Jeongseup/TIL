## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day26, 27 7주차 - vue.js - basic1

#### vue 배경 및 설치, 환경설정

**vue의 등장배경**

-   구글은 js를 더욱 쉽게 사용하기 위해, angular라는 framework를 만들었다. vue도 그런 js framework이다.(... Fb - React)
-   기존에는 설치형 어플리케이션이었다. 하지만, 브라우저 같은 경우 어디서든 인터넷만 있으면 접속가능했다.
-   그래서 구글이 Angular라는 걸 만들었는데, 복잡한 어플리케이션을 만들 때 Angular를 쓰다보니까 처리가 느리다는 단점이 부각되었다.(Real DOM상에서 특정 child를 수정하면, 그 아래 모든 leaves가 다 수정되느라 느려지는 문제 존재)
-   페이스북이 그래서 가상-DOM을 사용하는 React라는 framework를 만들어 Angular보다 빠르게 그려준다.(특정 child를 수정할 때 다 그려놓고, 그 이후에 가상 DOM상에 있던 수정요소를 한번에 뿌려주는 개념! 하지만, Angular의 좋은 장점 하나를 수용 안함)
-   이로서, Vue가 등장했다. 상위의 두 장점을 복합적으로 잘 이용하는 프레임워크이다.

**node.js 장점**

-   node.js는 Js 기반으로 구성된 서버 사이드 런타임 언어
-   npm(Node Package Manager)은 node.js의 기반 모듈을 모아둔 집합 저장소(python open library 느낌)

> https://kdydesign.github.io/2017/07/15/nodejs-npm-tutorial/

**vue.js 설치 순서**

1. npm install vue@next
2. npm install -g vue@cli(vue-cli(command line interface) 여러 library 뭉치를 뜻함)
3. npm create { project_name }
4. cd { project_name }
5. npm install @vue/cli-service@5.0.0-beta.0 @vue/cli-plugin-babel@5.0.0-beta.0 @vue/cli-plugin-eslint@5.0.0-beta.0 @vue/cli-plugin-vuex@5.0.0-beta.0(for version down 수업 당시 vue3로 업데이트 되면서 버젼에러가 발생)
6. create vue.config.js(ESlint error debug)

```
module.exports = {
    lintOnSave: false
}
```

**vue project 내부 package.json의 설명**

-   package.json > name = 어플리케이션 이름
-   package.json > version = 어플리케이션 현재 버젼
-   package.json > private = 공유 true/false 설정, true하면 npm 오픈소스상에서 다른사람들이 쓰지 못하게 함(github에 자기만의 repo에 등록하는 개념)
-   npm run serve는 package.json 내부에서 serve 실행 전 서로 잘 어울리는 라이브러리 버젼을 체크해주는 기능이 있다.
-   package.json > dependecies = 현재 어플리케이션 내 vue, core, plugin 각기 버젼 상세을 뜻함("내 어플을 쓸려면 이런 library를 기본으로 설치해야해")
-   devDependecies : 개발을 위한 편의성을 제공하기 위한 .. 버젼 상세 목록
-   eslintConfig : 아까 false 한 부분을 포함한 ESlint라는 VScode extension detail settings
-   browerlist : 브라우저 지원 상태

**Vue create project 환경 설정 방법**

1. Vue create project > manualy select features
2. Add router & vuex
3. choose vue verison 3.x
4. add prettier & eslint (vscode extensions)
5. Set lint on save (현재 에러남)
6. package..
7. save > 현재 추가상태 저장

-   vue ui 명령어를 통해서도 가능하다.
-   추가 : vue ui에서 패키지 매니저를 통해(npm선택) 깃 활성화를 빼고... 새로운 환경 만들기 .. 를 통해 위와 같은 설정을 할 수 있다.

---

#### vue programming의 이해

**vue의 실행원리**

-   브라우저 상에서는 실질적으로 app.vue라는 파일을 로딩한다.
    (app.vue는 프로젝트 내에 root componet로 존재함)
-   vue는 `html, css, js`를 하나의 component를 묶어서 재활용하게 한다. 즉! 하나만 만들면 이것저것을 굳이 다 만들 필요없이 하는 프레임워크이기에 데이터들을 잘 재활용을 할 수있도록 만드는 component 설계가 중요하다.
-   main.js는 compenent 설계 구조를 나타낸다.
-   실제 console network 탭에 가서 확인하면, /public/index.html 하나만 실행되는 것을 볼 수 있다.(router가 알아서 뿌려줌)
-   router는 어떤 정보를 연결시켜줄지를 결정해주는 것이다.
-   app.vue는 router에 입력된 정보에 따라 해당 컴포넌트를 찾아 웹에 띄운다.
-   app.js 에 상단에 바는 <router-view />안에 들어가는 것이다.

**vue의 SPA(Single Page Application) 특징**

-   vue는 spa이기 때문에 결론적으로 `index.js` 하나만을 브라우저에 보낸다. 따라서, 몇백개를 만들더라도 app.js와 chunk.js 두 js 파일 안에 다 내포하는 것을 뜻한다.
-   실질적으로 페이지 소스보기를하더라도 아래와 같이 나타나는 것을 알 수 있다.

```javascript
<script defer src="/js/chunk-vendors.js"></script><script defer src="/js/app.js"></script>
```

-   vue의 SPA 특성상, 하나의 mobile app처럼 사용가능한 장점이 있기는 하나 SPA안에 포함되는 js가 많아지면 첫 접속시간이 엄청 느려지는 문제가 발생할 수 있다.
-   위의 SPA의 문제를 coverage하기 위해, 특정메뉴(사용성이 낮은)는 해당 기능을 클릭하는 순간에 다시 서버로 요청해서 받아오게끔 처리하기도 한다. 혹은 캐시만을 가지고 왔다가 브라우저에서 뿌려주게끔 처리하기도 한다. 해당 내용은 router 설정을 보면 알 수 있다.
-   요약하면, 한 SPA에 만약 메뉴가 100개 이상의 다수라면 app.js 안에 그 100개 다 들어있게 되어 첫 app.js를 켜는게 느려질 수 있다. 따라서, 몇몇의 메뉴는 첫 app.js를 켤 때 바로 안가져오게 처리하여 사용자의 편의성을 높인다.(기준은 사용자의 사용빈도를 기준으로 편의성을 높이는 쪽으로 구성한다)

```javascript
lazyload 처리 코드
import( /* webpackChunkName: "about" */ "../views/About.vue") 로 분리하는데 앞에 부분이 주석처리로 설정한다.(왜 주석으로 하는지는 그냥 프레임워크적 특성이다)

import( /* webpackPrefetch:true, webpackChunkName: "about" */ "../views/About.vue") 로 처리하면 브라우저 캐시 메모리에까지는 해당 vue를 보낸다. 다만, 클라이언트까지 떨어지지 않고 클라이언트가 기능을 클릭 시 바로 출력해준다.
```

**SPA 활용방법(router 설계에 따라 어플 성능이 많이 남)**

-   어플에서 사용성이 높고, 무조건 필요한 기능은 app.js 로딩할 때 같이 삽입한다.
-   그 다음으로 사용자들이 접근할 일이 많은 것 혹은 사이즈가 무거운 것들은 잠시 캐시에 올려놓는 prefetch를 사용한다.
-   잘 사용하지 않는 것들은 아예 chunk.js로 뺀다.

**views > vue file 특징**

-   기본적으로 DOM tree가 아래와 같이 구성되어 있다.

```
<template>
<div>
</div>
<template>
```

**vue programming rules**

-   router index.js 에서 url과path는 기본적으로 소문자로 한다.
-   app.vue에서 link의 to 의 path와 index.js의 path가 일치해야한다.(추가 navigation bar 시)
-   vue 문법은 v로 시작하며, method 짤 때 function을 빼고 define한다.

-   단방향으로 값을 넣을 때는 v-bind를 사용하고, 양방향으로 값을 넣을 때는 v-model를 사용한다.(img도 한 방향으로 이뤄지는 거라 v-bind:src:"imgSrc"를 이용함, 이런 data binding의 개념은 Angular가 처음 제시한 개념)

-   checkbox는 여러개를 선택 가능하기 때문에 배열로 설정하고, radio는 하나만 가져오면 되기 때문에 하나의 값으로 처리한다.
-   vue 내부에서 checkbox나 radio의 value를 가져올 수 있는 이유는 해당 element의 checked selector를 보고 가져오는 것이다.(v-model의 의미가 checked를 찾는 것)
-   vue는 html component와 js component가 하나의 공유된 데이터를 사용하는 것이 중요한 특징인데, html에서는 {{ 변수명 }}으로 사용하고, script영역에서 this.변수명으로 사용한다.(html문법을 사용해서 띄울 경우는 div 태그 내에 v-html:"html"로 선언하면 된다)

**main.js 의 의미**

```javascript
main.js 파일에서 내부 설명


import {
createApp
}
from "vue";

import App from "./App.vue";
import router from "./router";
router가 ./router/index.js를 자동으로 찾아서 연결하는 역할
* 만약 router내에 index.js가 아닌 다른 별칭을 쓰고 싶다면
./routr/router.js로 바꿔줄 수 있다.

import store from "./store";
// 얜 아직 무슨 기능인지 모르겠음

createApp(App).use(store).use(router).mount("#app");
// 처음에 프로젝트를 만들 때 router을 사용한다고 지정해서 생겼음
```

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
// if(user.gender == this.selectGender){
// newUserList.push(user);

// }
// }
// this.userList = newUserList;

일반적인 for문을 돌릴 때 이렇게 따로 []를 하나 더 만들어서 해주는 이유는 push를 할 때마다
코드가 그리려고해서 한번에 그리려면 따로 빈 array를 만들어 거기다가 push 하고 최종적으로 값을 넣어주어야한다.

해보는데 걍 안돌아가네..

v-if와 v-show의 차이는 화면에 안보이는 건 똑같지만 element상으로 display:none이냐 아니면 실제 띄우지를 않았냐의 차이 보안상 if가 더 나을듯

사용자의 접근자체가 불가능하게 처리하는 건 v-if지만,
빈번이 일어나는 필요기능을 보여주고 말고를 결정하는 건 v-show로 처리하는게 좋음
v-if는 아예 안만들기 때문에 비용이 없지만, v-show처럼 실제로는 만들지만 안보이게 하는건 비용이 든다. dom tree안에 결국 그리는 활동을 하기는 하기 때문에

---

#### 번외

**vue 공식 docs**

> https://cli.vuejs.org/guide/installation.html

**새로 관심이 생긴 직군**
소프트웨어 아키텍쳐
