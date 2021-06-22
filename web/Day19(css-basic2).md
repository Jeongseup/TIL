 ## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트
 ### Day18, 5주차 - css basic

**개발직의 종류와 업계 현황**
- SI 업은 국내에서 꺼리고 대우가 좋지는 않지만, 오래하다 보면 다양한 시장에 대해 안목(논리)가 생길 수 있다.(다양한 시장에 대한 인사이트를 알 수 있는 책을 많이 읽어보는 것이 효용성이 있을 것 같음)
- 강사님의 경우는 SAP내(global SI업체)에서 SI를 보았는데, 이런 특출난 기업의 업무는 진입장벽이 상당히 높아서 경력이 가면 갈수록 더 쳐줄 수 있었다.(기업 선정에 있어서 글로벌적으로 보는 것은 상당히 미래지향적인 선택일 수 있다)
- 국내 SI는 날밤 새면서 해야하는 시정이라고 한다.(개인적인 소견일 수 있음)
- SM 업은 평상시 좀 편하지만, 계속해서 성장을 촉구해야 할 수있는 직종이라 한다.
- PM : R&R 프로젝트 전체를 관리하는 사람
- PL : 기술적인 것들을 리딩하는 사람
- 개발자의 성장과정 사례 : 개발자(SM, SI, etc) -> PL -> PM -> BA(기획 or 컨설팅)

#### 한줄평
창업에 있어서든 취업에 있어서든 job에 있어서 market을 국내만 보는 것보다 global 하게 보는 것이 안목을 넓힐 수 있는 기회이자, 미래지향적인 노력 및 선택일 가능성이 높다. 개발 공부 틈틈이 글로벌 인재가 될 수 있도록 english conversation을 준비해야 겠다.

___

**CSS media queries**
- css는 외우고 쓴다기 보다는 그냥 이해정도로 해두는 것이 효율적이다.
- css trend는 빠르게 변화하므로, 개발자라도 종종 새롭게 배우는 것이 시스템 효율을 높이는데 도움이 된다.(ux ui를 절대 경시하지 말자)
- 미디어 쿼리도 종종 써보면서 체득할 필요가 있다.


**CSS 활용 방법**
- `width`를 33%를 주더라도, `padding`이나, `bording`때문에 화면 내 넓이를 100% 상을 초과할 수가 있다. 그런 경우를 대비하기 위해 box-sizing이라는 속성을 global하게 선언해준다. 
```css
ex)
 * {
      box-sizing: border-box;
    }

    .clearfix::after {
      content: "";
      clear: both;
      display: block;
    }

    .box {
      float: left;
      width: 33.33%;
      height: 200px;
      background-color: aquamarine;
      border: 1px solid black;
      /* padding: 20px; */
    }
```

- 또한, 요즘 반응형 웹에서는 `float:left;` 로 display하는 것 보다는 `display:flex;`의 형태로 display한다.
```css
    * {
      box-sizing: border-box;
    }

    .box-container {
      display: flex;
    }

    .box {
      width: 33.33%;
      height: 200px;
      background-color: aquamarine;
      border: 1px solid black;
      /* padding: 20px; */
    }
```

**web개발자 도구 활용 방법**
- toogle device toolbar : `max-width`를 조절할 수 있다.(windows pc 같은 경우 `max-600px`를 확인할 때 사용하는 것이 좋다) 
- select element로 실제 웹 내 컨텐츠를 클릭해서 구현된 코드를 참고할 수 있다.
(computed 탭에 가면 최종적으로 실행된 것만 볼 수 있음)
- 콘솔은 javascript를 할 때 주로 사용한다.
- Network 탭은 브라우저가 서버에서 어떻게 데이터를 불러오는 지 볼 수 있다.

**Web의 트렌드**
- 오픈소스 가져다 쓰는 건 좋지만 점점 무거워진다. react가 대표적인 예시로 볼 수 다. 그래서 최근에는 vanilla js가 새로운 트렌드로 부상되고 있다. 하지만, 하나 하나 library를 다 짜야하기 때문에 이게 제대로 잡힌다면 웹 개발자들의 대부분의 자리가 위협될 수 있다.
- Web 언어를 개발하는 회사들
```
구글 - Angula.js
페이스북 - React.js(웹의 고질적인 문제를 해결함, 웹의 고질적인 문제 : DOM 구조 상에서 위에 하나를 건드리면 아래 루트를 다시 다 그려줘야 함 하지만, angular가 가지고 있는 장점을 하나 안 가지고 있음)
Evan You - Vue.js(vue는 angula와 react의 장점을 둘 다 가지고 있다. 굉장히 직관적이다)
Rich Harris - Svelte(=vanila.js, 강사님이 향후 보는 프레임 워크임)
```

**CSS 문법 노트**
- border-box; content-box; 의 차이는 border값을 포함해서 boxing할 지 내부 content만 boxing 할지에 대해 차이이다.(언제 쓰일 지는 의문이지만, 이해만 해두자)
```css
        * {
            box-sizing: content-box;
        }


        .clearfix::after {
            content: "";
            clear: both;
            display: block;
        }
```
- `::befor`이나`::after`에 아이콘을 attaching 할 때, content-box를 사용하기도 한다고는 한다.
- 우리가 사용하는 앱의 60%에 대부분은 웹으로 만든다. 요즘에는 웹을 앱으로 감싸는 기술이 있다. 사용성 측면에서 앱이 더 좋지만, 웹을 앱으로 만드는 이유는 변경사항에 대해 빠르게 대응하기 위한 장점이 있어서이다. 하지만, 웹으로 연동하면 변경사항을 쉽게 쉽게 변경가능하며 주기적인 앱마켓 점검에서 유연성이 좋다.
- svg(square vector image) : 이미지나 아이콘등을 보다 쉽게 인용하기 위해서 만들어 둔 텍스트화 이미지이다.(데이터 경량화 효과, 일반 html tag style 주듯이 사용 가능하다는 장점이 있음)
- `cite, bdo, abdr` 태그는 프론트 제작 시 종종 고민해볼 요소들이다. 나중에 SEO를 고려하면서 웹 제작 시 메타 데이터를 붙이는 습관이 상당히 중요할 것으로 고려된다.
- **block 요소 inline 요소는 display 속성으로 block이나 inline으로 스타일제어가 가능하다.**
-  input tag 내 disabled와 readonly차이 disable는 submit할 때 데이터가 전송되지 않는다. 
-  **만약, 요소의 넓이를 100%으로 지정했고, 부모 요소의 넓이가 100px일 때 현재 요소는 1000px이 됩니다. 그런데 이 때 `max-width:800px;` 이라고 지정하면 최대 넓이는 800px로 제한 됩니다(미디어 쿼리 시 고려해야할 `max-width` 요소)
**
- viewport : 미디어 쿼리를 사용하기 위한 필수 메타요소 이다. viewport를 설정해야 핸드폰에 따라 컨텐츠 크기를 맞춰준다.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### 한줄평
금일은 CSS에 대한 포괄적인 요소 공부와 함께 간단한 resume를 제작해보는 연습을 했다. static하게는 이것저것 시도하면서 만들 수는 있겠으나, 다른 여러 situation을 고려하면서는 아직 익숙하지가 않다. 현재 해본 resume는 나중에 기회가 될 때 좀 더 practical하게 연습해두면 좋을 것 같다. 또한, 실제 개인 resume를 제작해보는 용도로도 좋을 것 같다.

기회가 된다면, 웹의 변천과정을 알 수 있는 책을 한번 보는 것도 현재의 웹을 공부하는 데 있어서 큰 도움이 될 것 같다. 결국, 개발은 수단이지 무엇을 목적으로 하는가에 대한 지속적인 물음을 가져야하는 것은 사람이다. 그런 관점에 있어 php라는 언어가 도태되어 결국 wordpress에서 지원을 안하는 형태로 가듯 언제 어느 언어가 또 그렇게 사라질지는 모르지만 모든 이유에 있어서는 '그 언어는 왜 필요하는가?'란 목적에 따라 생존될 것으로 생각된다.

___

**web development trend confirming cites**
- state js 2021
- vanila-js.com
- https://css-weekly.com/
- https://unsplash.com/
- https://www.freepik.com/search?dates=any&format=search&from_query=hospital&page=1&query=hospital&selection=1&sort=popular
- https://fontawesome.com/
- https://javascriptweekly.com/
- https://frontendfoc.us/


___
#### *번외 - 개인 공부시 참고할 것*
아직 정리 X
자바스크립트 이름의 유래
https://wit.nts-corp.com/2014/08/13/1925
https://content.v.kakao.com/v/57f4d307ed94d2000107a349
float 의 의미 : 뜨다
float[floʊt]
(부사 : afloat)
동사
1.(물 위나 공중에서) 떠[흘러]가다[떠돌다] (=drift)
A group of swans floated by.
한 무리의 백조들이 물 위를 떠갔다.
2.(가라앉지 않고 물에) 뜨다
Wood floats.
나무는 물에 뜬다.
명사

https://www.w3schools.com/cssref/pr_class_float.asp
코드에 빨갛게 어떻게 하지..?
The float property specifies whether an element should float to the left, right, or not at all.

::after과 ::before
https://developer.mozilla.org/ko/docs/Web/CSS/::after

네이버 d2 - flex 사용방법
https://d2.naver.com/helloworld/8540176
