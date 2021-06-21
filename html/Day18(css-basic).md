 ## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트
 ### Day18, 5주차 - html basic


**블록체인이란 무엇이라 설명해야 할까?**
- 내가 조로를 보고 루피라 하더라도, 다른 모든 사람들이 루피를 이미 알고 있다면 내 의견(해킹 or 손실)에 대해 검증될 수 있다.(아니야! 그건 조로가 아니라 루피야, 네 의견을 잘못됬어)
- 한 데이터를 한 원장이 아닌, 분산 원장(ledger)로 나눠 저장한다.
- 한 노드가 자연재해와 같이 불가피한 사태로 망가진다 하더라도, 데이터가 분산되어있어 다른 노드들이 해당 데이터에 대해 보증을 해줄 수 있다.
- 데이터의 주권을 개인에게 돌려주는 기술이다. (steemit 사례)

**HTML semantic 요소의 유래**
- 원래는 HTML 레이아웃을 만들 때, <code>div</code>으로만 분할했다. 하지만, 그렇게 쓰다보니까 외부적으로는 분할되어 있더라도 내부적으로 다 같은 div라서 지역구분이 어려운 점이 있었다. 그래서 시맨틱 요소가 등장했다.

**HTML semantic 요소**
- <code>nav</code>는 메뉴(네이게이션) 역할이다.
- header, nav, footer라고 해서 무조건 지역적으로 구분되는 것은 아니다.(footer라고 해서 아래에 위치되는 div가 아니다)

**CSS selector 종류**
기본 구조 : 선택자{ 속성: 값; 속성:값; ...}
선택자 종류 : *, tag_name, class_name, id_name
- "*"이라는 선택자는 all을 의미한다.
- 태그 선택자는 기본 normal 양식으로 적용한다.
- class 선택자는 .class_name으로 적용한다.
- class는 한 tag에 여러 개를 넣을 수 있다. (<div class="bg-red h-100">)
- class명은 "bg-red"와 같이 내부 속성과 값을 함축적으로 표현하는 명으로 하는 것이 좋다.
- id 선택자는 #id_name으로 적용한다.
- id 선택자는 정말 HTML 내에 딱 한 군데만 적용하고 싶을 때 사용한다.

**선택자의 선택종류**
- 하위 선택자
```html
<!-- 하위 선택자 -->
section ul {
    border : ... 
}

<!-- 자식 선택자 -->
section>ul {
    border : ...
}

<!-- 인접 형제 선택자 : 앞에 선택된 선택자 다음의 선택자에 적용된다 -->
<!-- 실무 자주 사용X -->
h1+ul {
  border : ...
}

<!-- 일반 형제 선택자 : 앞에 선택된 선택자 다음의 모든 해당 선택자에 적용된다 -->
<!-- 실무 자주 사용 X -->
/* h1~ul {
  background: ...
} */

<!-- 속성 선택자 : 선택자 내 특정 속성 내에 적용된다 -->
<!--  실무 자주 사용 -->
/* E[attr] 형식 */
a[href] {
  color: ...
}
/* E[attr=”val”] 형식 */
input[type=”text”] {
  width: 200px;
  border: 1px solid #ddd;
}
```

**가상 클래스 선택자**
- :hover : 마우스를 롤오버 했을 때
- :active : 마우스로 클릭했을 때
- :visited : 방문한 적이 있을 때 (적용되는 원리가 뭘까? 난 쿠키를 활용한다 생각했는데..)


**background image 사용방법**
- bg-repeat : repeat-x; repeat-y; no-repeat;
- bg-posision : 이미지 위치
- bg-attachment : 이미지 화면 고정

**실무활용방법**
- 실제 bg-red라기보다는 bg-primary와 같이 5-7개의 스타일 색상을 구분해두고 바꿔가면서 쓴다.
- 대부분의 디자인 css는 많아야 20개 ~ 5개 그리고 그것에 대해서 예제 가이드라인을 준다. 그리고 이제 개발자가 스타일시트를 받아서 사용하다가 특정 이슈가 생기면 그 때 인터널 스타일이나 인라인 스타일을 사용한다. 혹은 디자이너에게 물어본다.
- 디자이너가 jpg파일로 보내주면, 그걸 다시 포토샵을 켜서 각 색상을 코드화시키고 각각의 로고들은 따로 jpg 분할하여 저장하여 사용한다.
- 이미지위에 글씨를 새겨넣어야 하는 경우는 image를 삽입하는게 아니라, bg-image로 넣는다. 그리고 그 위에 글을 적는다.


- 대부분의 css 내에서 80~90%는 class선택자, 1,2%는 id선택자, 그리고 나머지를 tag 선택자로 사용한다.
- a tag에서 text-decoraton:none;으로 해서 전부 적용하는 경우가 많다.
- body tag에 패딩을 줘서, 용지여백을 기본설정하고 이후 작업한다. 
- 폰트도 마찬가지로 기본설정을 하고 이후 작업한다.
- id tag는 디자이너보단 오히려 개발자들이 주로 사용한다. 한 곳에만 뭔 효과를 주고 싶을 때

css 색의 표현 종류
- hex / rgb /hsl(자주 사용x)
- 색 표현 시 white나 black처럼 명확한 것은 그냥 사용하기도 하는데 이게 속도가 더 빠를 수도 있음..(확실한건 아니라고 하심, 대신 개발자에게 좀 더 배려있는 표현일 수 있음)

css 상에 url 지정에 상대경로가 아닌 인터넷상의 절대경로도 사용가능하다.
```html
body {
    background-image: url("/images/gradient_bg.png");
    background-repeat: no-repeat;
}

p.mix {
    border-style: dotted dashed solid double;
}
```
*개인 공부시 참고할 것*
<a href="https://thrillfighter.tistory.com/487" target="_blank">CSS 우선순위 규칙 Cascading</a>
https://developer.mozilla.org/ko/docs/Web/HTML/Element/link

DOM 트리..? 구조 찾아볼 것
html 주석 구조 : <!-- content -->
css 주석 구조 : /* content */