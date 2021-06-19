 ## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

___
 ### 4주차 - html basic

**주석의 용도**
1. 다른 사람 혹은 과거의 내가 했던 작업에 대해 쉽게 설명하기 위함
2. 일부분의 에러로 인한 잠시 특정 부분만을 skip 처리하기 위함
3. 버젼 관리를 위함(실제 고객이 뭔가를 바꿔달라 했지만, 의심이 들 때 유용함, history시켜두면 됨)


**anchor tag 내의 target attribute**
- anchor tag내의 target attribute는 새 탭에 열리게 할 지를 결정하게 해준다.

```html
ex) <a href="blah blah" target="_blank"></a>

<!-- 
target value _blank 이외에 parent 같은 value도 존재하는 데,
이는  예전에 사용하던 iframe을 위해 만들어졌다. 요새는 거의 사용하지 않는다. 

지금은 SPA(single page application)라는 형태로 웹앱화를 시켜서 사용하기 때문이다.

* iframe이란 한 페이지 상에 메뉴 url에 따라 한 page내 중앙화면을 바꿔가면서 띄워주는 것을 의미한다.
-->
``` 

**anchor tag의 책갈피 기능**
- anchor tag는 한 page상에서의 특정 경로 이동도 가능하다.
- 한글 문서의 책갈피 기능과 유사하다.

```html
<a href="#content">blah blah</a>
```

**padding 기능**
- padding 안쪽 여백을 의미한다.
- padding을 바로 설정하면 사면이 다 적용된다.
- padding: 5px 10px; 의 형태로 설정하면 (left-right) (top-bottom)의 형태로 적용된다.
- padding: 5px 5px 10px 10px;로 설정하면 (top) (left) (right) (bottom) 순으로 적용된다.

**keybord shortcut**
- 삭제 단축키 : Ctrl + X
- 커서 다중 지정 : Ctrl + Alt + 방향키
- 복사 붙여넣기 : Shitf + Alt + 방향키

**nth-child 기능**
- `nth-child` : 테이블 내에서 주로 사용함, 요소의 인덱스 패턴을 나타내는 하나의 매견변수를 사용해 지정(인덱스는 1부터 시작)

```html
ex)
:nth-child(odd)
:nth-child(even)
```

**table tag 내 thead와 tbody**
```html
<table>

    <!-- 테이블의 속성명을 적을 때 -->
    <thead></thead>
    <!-- 테이블 내의 data를 기입할 때 -->
    <tbody></tbody>
    <!-- 테이블 내의 요약 정보를 표시할 때 -->
    <tfoot></tfoot>

</table>
```

**form tag**
- 사용자로부터 데이터를 입력 받기위해 사용하는 tag
- 예전에는 많이 쓰였지만 요즘에는 거의 쓰이지 않음(해당 form을 대신해서 지원하는 여러 framework가 존재함, vue or react)
- 다만, java에서는 아직도 쓰인다고 함.
