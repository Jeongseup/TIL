 ## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트
 ### Day18, 5주차 - css basic

**블록체인이란 무엇이라 설명해야 할까?**
- 내가 조로를 보고 루피라 하더라도, 다른 모든 사람들이 루피를 이미 알고 있다면 내 의견(해킹 or 손실)에 대해 검증될 수 있다.(아니야! 그건 조로가 아니라 루피야, 네 의견을 잘못됬어)

**블록체인 기술의 의미**
- 한 데이터를 한 원장이 아닌, 분산 원장(ledger)로 나눠 저장한다.
- 한 노드가 자연재해와 같이 불가피한 사태로 망가진다 하더라도, 데이터가 분산되어있어 다른 노드들이 해당 데이터에 대해 보증을 해줄 수 있다.
- 데이터의 주권을 개인에게 돌려주는 기술이다. (steemit 사례)

#### 한줄평
블록체인 기술은 상당히 민주적이고 자유주의적인 기술이긴 하다. 하지만, 현대의 CBDC를 발행하려는 정부들(미, 중, 한)의 움직임을 보면 과연 이 기술이 지향하는 그런 민주적이고 자유주의적인 모습으로서 세상에 드러나게 될 지는 의문이다. 기존 기술과 달리 4차 산업혁명에 속해 있는 기술들은 단순히 기술적인 revolution과 함께 시민의식(민중의식)의 철학적인 성장 또한 요구되는 기술이지 않을까 싶다.<br>
그리고, 이 오늘 DID나 CBDC를 보면서 투명사회라는 책이 생각났다. 기회가 된다면 다같이 보고 얘기를 나눌 수 있으면 좋을 것 같다.
___

**HTML semantic 요소의 유래**
- 원래는 HTML 레이아웃을 만들 때, <code>div</code>으로만 분할했다. 하지만, 그렇게 쓰다보니까 외부적으로는 분할되어 있더라도 내부적으로 다 같은 <code>div</code>라서 코드 내부상으로는 지역 구분이 어려웠다. 그로 인해, 시맨틱 요소(<code>nav, section, etc</code>)가 등장했다.

**HTML semantic 요소**
- <code>nav</code>는 메뉴(네이게이션) 역할을 한다. (블로그 카테고리를 떠 올리면 쉽다)
- 태그명이<code>header, nav, footer</code>라고 해서 무조건 해당 지역을 의미하는 형태의 <code>div</code>는 아니다.(<code>footer</code> 해서 아래에 위치되는 <code>div</code>아니다)

**CSS selector**
- CSS 선택자의 기본 구조는 아래와 같다.
```html
선택자 { 속성: 값; 
속성: 값; ...
}
```
- 선택자 종류는  (*, tag_name, class_name, id_name) 등이 있다.
- " * "이라는 선택자는 all(전역 선택)을 의미한다.
- class 선택자는 <code>.class_name</code>으로 적용한다.
- 한 tag내에는 여러 개의 class를 넣을 수 있다.
```html
<div class="bg-red h-100">)
```
- id 선택자는 #id_name으로 적용한다.

**선택자의 종류**
- 이 개념은 다소 헷갈리는 부분이 많은 부분이라 아무래도 자주 사용하면서 체득하는 것이 필요하다. 하위 선택자, 자식 선택자, 속성 선택자 정도는 제대로 익히는 것이 좋다.(실무 사용 빈번)
```html
<!-- 하위 선택자 : 띄워 쓰기로 표현된다. -->
section ul {
    border : ... 
}

<!-- 자식 선택자 : > 으로 표현된다. 한 선택내에서 다음 선택으로 entering한다는 느낌으로 이해하면 좋다. -->
section>ul {
    border : ...
}

<!-- 인접 형제 선택자 : 앞에 선택된 선택자 다음의 선택자에 적용된다(실무 사용도 낮음) -->
h1+ul {
  border : ...
}

<!-- 일반 형제 선택자 : 앞에 선택된 선택자 다음의 모든 해당 선택자에 적용된다(실무 사용도 낮음) -->
/* h1~ul {
  background: ...
} */

<!-- 속성 선택자 : 선택자 내 특정 속성 내에 적용된다(실무 사용도 높음) -->

<!-- E[attr] 형식 -->
a[href] {
  color: ...
}

<!-- E[attr="val"] 형식 -->
input[type="text"] {
  width: 200px;
  border: 1px solid #ddd;
}
```

**가상 클래스 선택자**
- :hover : 마우스를 롤오버 했을 때
- :active : 마우스로 클릭했을 때
- :visited : 방문한 적이 있을 때 (적용되는 원리가 뭘까? 난 쿠키를 활용한다 생각했는데..)


**background-image 사용방법**
- bg-repeat : repeat-x; repeat-y; no-repeat; 등의 선택지가 있다.
- bg-posision : 이미지 위치를 표현할 때 쓴다.(아래 attahment랑 같이 사용하면 웹 서비스 내 Q&A 가 화면 하단에 따라다니는 용도로 사용될 수 있다)
- bg-attachment : 이미지 화면 고정할 때 쓴다.
- css 상에 url 지정에 상대경로가 아닌 인터넷상의 절대경로도 사용가능하다.
```html
body {
    background-image: url("/images/gradient_bg.png");
    background-repeat: no-repeat;
}

p.mix {
    border-style: dotted dashed solid double;
}
```


**css 색의 표현 종류**
- hex / rgb /hsl(자주 사용x)
- 색 표현 시, white나 black처럼 명확한 것은 그냥 사용하기도 하는데 이게 속도가 더 빠를 수도 있다.(확실한건 아니라고 하심, **대신 개발자에게 좀 더 배려있는 표현일 수 있음**)

**CSS style guide tips**
- css <code>width</code>와 <code>height</code>를 줄 때는 둘 다 주는 것이 아니라, width나 height 중 하나를 기준으로 주고 나머지 부분을 auto로 줘서 원하는 레이아웃에 맞춘다.
- `initial`은 대상 요소의 기본값이 적용한다.
- `inherit`은 부모 요소의 속성값을 적용 받아온다.
- **한 <code>div</code>안에 여러 개의 컨텐츠가 들어가는 경우라면, 각 컨텐츠별로 `margin`을 주는 것보다 차라리 레이아웃인 `div`에 `padding`을 주는 것이 좋다.**


**css box model**
- border : 바깥 여백
- padding : 안 여백
- outline-style : border 밖을 둘러 싼 line


___
### 실무 활용 팁 메모

**CSS 실무 활용 팁**
- 실제 bg-red라는 클래스를 직접적으로 쓴다기 보다는 **bg-primary와 같이 5-7개의 스타일 색상을 구분해두고 바꿔가면서 쓴다.**(아마 서비스마다의 브랜드 컬러를 정해뒀을 것이다)
- 대부분의 디자인 css는 많아야 20개 ~ 5개 정도이다. 그리고 그것에 대해서 예제 가이드라인을 준다. 그럼 **개발자는 스타일시트를 받아서 사용하다가 특정 이슈가 생기면 그 때 인터널 스타일이나 인라인 스타일을 사용하거나 디자이너에게 물어보면서 작업을 진행한다.**
- 퍼블리셔는 디자이너가 jpg파일로 보내주면, 그걸 다시 포토샵을 켜서 각 색상을 코드화시키고 각각의 로고들은 따로 jpg 분할하여 저장하여 사용한다.
- **이미지 위에 글씨를 새겨넣어야 하는 경우는 image를 삽입하는게 아니라, bg-image로 넣는다.** 그리고 그 위에 글을 적는다.
- **실무에서는 px단위보다 비율 단위인 em단위를 사용한다.**
- **class명은 "bg-red"와 같이 내부 속성과 값을 함축적으로 표현하는 명으로 사용하는 것이 좋다.** (강사님이 그렇게 사용하시길래.. 근데 직관적인 표현이라 이렇게 사용할 것 같음)
- **id 선택자는 정말 HTML 내에 딱 한 군데만 적용하고 싶을 때 사용한다.**

**CSS tag선택자 실무 활용 팁**
- **태그 선택자는 해당 page 내의 normal한 base양식을 적용할 때 사용한다.**
- **대부분의 css 내에서 80~90%는 class선택자, 1,2%는 id선택자, 그리고 나머지를 tag 선택자로 사용한다.**
- **a tag에서 text-decoraton:none;으로 해서 전부 적용하는 경우가 많다.**
- body tag에 패딩을 줘서, 용지여백을 기본설정하고 이후 작업할 수도 있다.
- 폰트도 마찬가지로 기본 설정(body tag)를 하고 이후 작업할 수도 있다.
- id tag는 디자이너보단 오히려 개발자들이 주로 사용한다. 한 곳에만 뭔 효과를 주고 싶을 때


**CSS 추가 기능 팁**
- `text-align:justify;` 컨텐츠 크기에 맞춰서 텍스트 정렬할 때 쓰인다.
- `text-shadow : 2px 2px red;` 내 value의 의미는 (x축 이동, y축 이동, 색상) 순이다.
- **font-family: "첫번째 글씨체", "두번째 글씨체", "세번째 글씨체" 로 지정할 수 있다.(단, 마지막 글씨체는 기본 폰트 패밀리로 구성해야 한다)**
-  해상도가 다른 기기에 대해 비율로 조정하는 것이 좋기 때문에, 16px = 1em인 em 단위로 바꾸어 설정한다.
- display는 none하면 공간 자체가 사라지지만, visibility는 hidden을 해도 공간은 남아있다.
- 한 stylecss을 하나 가져와서 media screen으로 max-width마다 각기 지정을 하기도 한다.

#### 한줄평
프론트 개발자로서 일을 잘하려면 결론적으로 상대방(디자이너, 퍼블리셔, 고객)에 대한 배려심이 깊은 사람이 일을 잘할 수 있는 것 같다. 결국 모든 팁들은 UX를 보다 편하게 하기 위해 생긴 팁들이 많다. 개발을 하다가 애매한 부분이 생긴다면, 같이 일하는 이해관계자들이 바라볼 때 어떤 것이 더 편할까?를 고민하는 것이 더 나은 개발자로 성장하는 길이 아닐까 싶다.
___
#### *번외 - 개인 공부시 참고할 것*

**CSS 우선순위 규칙**
- 서버(저작자)의 CSS 규칙 >>> 클라이언트의 CSS규칙이 우선 순위이다.
- !importan >>> Id >>> class >>> tag의 설정이 우선 순위를 지닌다. 
> 참고자료 : https://thrillfighter.tistory.com/487

**link(외부리소스 참조) 문법**
- HTML 내 `link` 요소는 현재 문서와 외부 리소스의 관계를 명시, 일반적으로는 스타일 시트를 연결할 때 제일 많이 사용하지만, 아이콘이나 `svg`이미지 연결 등 여러가지로 쓰일 수 있음

```html
link 예시
  <link href="main.css" rel="stylesheet">
  <link rel="icon" href="favicon.ico">
```

- rel의 의미 : rel는 막하는 게 아니고, 정해진 룰이 있음
> 참고자료 : https://developer.mozilla.org/ko/docs/Web/HTML/Element/link
> rel 유형 : https://developer.mozilla.org/ko/docs/Web/HTML/Link_types


**DOM tree structure**
- 우리가 만드는 html 구조에 대한 것을 DOM이라고 하는데 DOM tree를 만듦으로서 전반적인 서비스 구조를 확인할 수 있다.

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/800px-DOM-model.svg.png" width="30%"><br>
<label>돔 트리 구조 예시 - source : wikipedia</label>
</center>

**언어별 주석 표현방식**
- html 주석 구조 : `<!-- content -->`
- css 주석 구조 : `/* content */`