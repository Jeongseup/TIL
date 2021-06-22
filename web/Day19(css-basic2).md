 ## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트
 ### Day18, 5주차 - css basic

<style>
  code {
    font-color : red;
  }
</style>

**SI와 SAP**
- SI 업은 국내에서 꺼리고 대우가 좋지는 않지만, 오래하다 보면 다양한 시장에 대해 안목(논리)가 생길 수 있다.(다양한 시장에 대한 인사이트를 알 수 있는 책을 많이 읽어보는 것이 효용성이 있을 것 같음)
- SAP업무는 진입장벽이 상당히 높아서 경력이 가면 갈수록 더 쳐줄 수 있었다.
- SI는 날밤새면서.. 해야하는 국내 시장상황
- SM개발자는 평상시 좀 편하지만, 계속해서 성장을 촉구해야 할 수있음
- PM : R&R 프로젝트 전체를 관리하는 사람
- PL : 기술적인 것들을 리딩하는 사람

**개발자의 진화과정**
- 개발자(SM, SI, etc) -> PL -> PM -> BA(기획 or 컨설팅)

#### 한줄평
___
**미디어 쿼리.. **
css는 외우고 쓴다기 보다는 그냥 이해만 해두는 것이 좋다




<code style="color:red;">width</code>

<code class="red">width</code>width를 33%를 주더라도, padding이나, bording 때문에 화면 내 넓이를 100%이상을 초과할 수가 있다. 그런 경우를 대비하면
box-sizing이라는 속성을 global하게 선언해준다.
```css
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

하지만, 요즘 반응형 웹에서는 float:left보다는 display:flex를 사용하는 형태로 트렌드가 바뀌어간다.
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

F12에 들어가면
- toogle device toolbar : max-width를 조절할 수 있다.(windows pc 같은 경우 max-600px를 확인할 때 필요) 
- select element로 실제 웹 내 컨텐츠를 클릭해서 구현된 코드를 참고할 수 있다.
computed에 가면 최종적으로 실행된 것만 볼 수 있음
콘솔은 자	바스크립트 할 때 주로 사용하는 것
네트워크 탭은 - 어떻게 서버에서 데이터를 불러오는 지 볼 수 있음

오픈소스 가져다 쓰는 건 좋지만 점점 무거워짐.. react가 대표적인 예시 -> 그래서 바닐라 js게 나오고 있음 -> 하지만 정말 이렇게 되면 90%가 사라짐


구글 - angula.js
페이스북 - react.js(웹의 고질적인 문제를 해결함, 웹의 고질적인 문제 : DOM 구조 상에서 위에 하나를 건드리면 아래 루트를 다시 다 그려줘야 함 하지만, angular가 가지고 있는 장점을 하나 안가지고 있음)
vue는 angula와 react의 장점을 둘 다 가지고 있음(굉장히 직관적임)
svelte(vanila.js, 강사님이 향후 보는 프레임 워크)

state js 2021 검색
vanila-js.com

```css
        * {
            box-sizing: content-box;
        }
/* border-box; content-box; 의 차이는 border값을 포함해서 boxing할 지 내부 content만 boxing 할지에 대해 차이임*/

        .clearfix::after {
            content: "";
            clear: both;
            display: block;
        }	


```
로 befor after에 아이콘 같은 걸 만들어 줄 때..? content를 사용함


우리가 사용하는 앱의 60%에 대부분은 웹으로 만든다..?
웹을 앱으로 감싸는 기술이 있음
앱이 더 좋지만, 웹을 앱으로 만드는 이유는 변경사항에 대해 빠르게 대응하기 어려움
하지만 웹으로 연동하면 변경사항을 쉽게 쉽게 변경가능함


svg - square vector image
이미지나 아이콘등을 보다 쉽게 인용하기 위해서 만들어둔 텍스트화(데이터 경량화)
일반 html tag style 주듯이 사용가능 함

https://css-weekly.com/
https://unsplash.com/
https://www.freepik.com/search?dates=any&format=search&from_query=hospital&page=1&query=hospital&selection=1&sort=popular
https://fontawesome.com/
https://javascriptweekly.com/
https://frontendfoc.us/


cite
bdo
abdr 태그는 종종 고민해볼 것. 이건 습관이 필요할 듯


block 요소 inline 요소는
display 속성으로 block이나 inline으로 스타일제어가 가능하다

input tag 내 disabled와 readonly차이 disable는 submit할 때 데이터가 전송되지 않는다. 

만약에 요소의 넓이를 100%으로 지정했고, 부모 요소의 넓이가 100px일 때, 현재 요소는 1000px이 됩니다. 그런데 이 때 max-width:800px; 이라고 지정하면 최대 넓이는 800px로 제한 됩니다


viewport
<meta name="viewport" content="width=device-width, initial-scale=1.0">를 해둬야 핸드폰에 따라 컨텐츠 크기를 맞춰준다.

반응형 웹은 media quarey 를 이용하여 만든다.
__
#### *번외 - 개인 공부시 참고할 것*

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
