 ## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트
 ### Day17, 4주차 - html basic


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

**button tag**
- 같은 버튼이지만, form tag내에서는 input button을 사용하는 게 더 적합함. 
```html
<button type="button">조회</button>
<!-- for adding meta information -->
<input type="button" value="저장">
```

**시간 업데이트 문제**
- 글로벌한 기업은 DB에 데이터를 저장할 때, 시간 저장하는 문제가 어려움
- 나라마다 기준 시각이 다르기 때문
- 이럴 때, GMT시간을 기준으로 0으로 잡고 저장한다. 
- 한국 데이터를 저장한다고 하면 -9를 해서 저장하는 것이 일반적

**UX/UI 문제**
- 선택지가 2,3개인 경우에는 radio button으로 하면 클라이언트가 한번만 누르게 된다.
- 선택지가 많은 경우에는 셀렉트 박스로 하는 편이 클라이언트가 선택하기 용잉하다.

**html tag tips** 
```html
1.
<!-- 프로그램적으로만 사용할 때 이용하려는 value는 input hidden을 이용한다, (변수 저장의 의미인듯) -->
<input type="hidden" name="" value="asdsdads">

2.
<!-- textare width 문제, 기기마다 화면크기가 다름 -->
<textarea name="" id="" rows="10" cols="30"> 보다는 아래 처럼 사용한다
<textarea name="" id="" rows="10" style="width:100%">
```
- 프로그래밍은 기능보다 용도를 고민해야 한다.
- 예를 들어, option을 여러 번 사용해야 한다면, selectbox보다 datalist가 효율적이다.
- 또한, datalist는 사용자들이 체크할 때 검색할 수 있게 해준다. 단, 받은 데이터를 DB로 보내기 전에 유효성 검사는 필요할 수 있다.

#### 한줄평
UX/UI나 프로그래밍이나 사업이나 결국 다 고객에 입장에서 좀 더 생각하는 방향이 옳다. 그리고 상대방을 배려하는 습관이 곧 그런 고객친화적 생각을 하게되는 방향이지 않을까 싶다. 우리는 giver가 되어야 한다.


