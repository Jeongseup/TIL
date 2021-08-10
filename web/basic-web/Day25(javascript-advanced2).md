## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day25, 6주차 - javascript advanced

**자바스크립트를 통한 DOM 요소 접근**
- 자바스크립트를 통한 DOM 요소 접근 방법에는 기존에 CSS 문법이 대부분 적용된다.(단 하나만 있는 Id로 element 접근하는 것이 예시)
- 단, 이렇게 여러 태그 및 클래스로 인한 접근을 하다보면, 곂칠 수가 있는데 이 때 중요한 기능(ex:저장)은 따로 Id로 select하는 것이 버그를 줄일 수 있다.

- HTML element에 접근하는 방법
```javascript
function myBtn(e) {

    * html element에 접근하는 방법 1 : event & this(=target)
    
    console.log(e);
    console.log("event 접근", e.target); // this의 효과


    * html element에 접근하는 방법 2 : Use selector(id, class, tag)
    var btnEle = document.querySelector("#btnSave");
    console.log("selector id 접근", btnEle);
    console.log("selector tag 접근", btnEle2);

    * html element에 접근하는 방법 3 : Use getElement by id, classe, tags
    var btnEle3 = document.getElementsByTagName("button");
    console.log(btnEle3);

    접근된 element에 대한 value로 접근하는 방법은 두 가지
    console.log(btnEle3.value);
    console.log(btnEle3.getAttribute("value"));
}
```
- 접근된 element를 handling하는 방법
```javascript
function myBtn2(e) {

    var btnEle = e.target;
    btnEle.disabled = true;


    // 특정 기능을 수행하고, 몇 초 뒤 다시 풀 수도 있다.
    setTimeout(function () {
    btnEle.disabled = false;
    }, 2000);

    
    == input element에 text를 넣는 방법 2 가지 ==

    * input text method.1 : element.value = "";
    ele2.value = "가나다";

    * input text method.2 : setAttribute("value", "");

    ele2.setAttribute("name", "가나다");
    console.log(ele2);
}
```

- Id가 아닌 tags나 selectorall를 통한 다중 엘리멘트 추출 시 유의할 점 : return 배열이다.
```javascript
    function myBtn5() {
      var pTag = document.getElementsByTagName("p");

      // array로 출력된다.
      console.log(pTag[0]);

      var pTag2 = console.log(document.querySelectorAll("p"));
      console.log(pTag[0]);
      console.log(pTag[1]);

      var chks = document.getElementsByName("chk_interest");

      var len = chks.length;
      // 이렇게 출력하면 가능함
      for (var i = 0; i < len; i++) {
        console.log(chks[i]);
      }
    }
```

- Qurey문(CSS문법)을 통한 element 접근
```javascript
    function myBtn6() {

      // selector 사용 방법
      var chks = document.querySelectorAll("[name=chk_interest]");
      console.log(chks);

      for (var chk of chks) {
        if (chk.checked) {
          console.log(chk.value);
        }
      }
    

      //checked item만 가져오는 방법
      var checkedItems = document.querySelectorAll("input[type='checkbox']:checked");
      var checked1 = document.querySelectorAll("#checks input[type='checkbox']:checked");
      var checked2 = document.querySelector("[name=city]:checked").value);

      for (var chk of checkedItems) {
        console.log(chk.value);
      }
    }
```



**자바스크립트의 신기한 특성**
- console이 js를 해석하고 출력할 때, 반드시 순차적으로 코드를 실행하지는 않는다.

```javascript
아래의 케이스 같은 경우는 당연히 첫 번째 ele2의 `name = ""`인 상태로,
그리고 그 다음 ele2는 `name="가나다"`인 상태로 출력될 것 같지만
둘 다 `name="가나다"`인 상태로 출력된다.

function myBtn4() {

    // html element를 가져온다
    var ele2 = document.getElementById("txt2");
    // ele2 확인
    console.log(ele2);

    // ele2 setattribut
    ele2.setAttribute("name", "가나다");
    // ele2 확인
    console.log(ele2);
}

이런 이유는 자바스크립트가 짧은 시간 내에 있는 함수를 실행할 때 각 줄 별로 compute하는게 아니라, 
병렬적으로 실행하기 때문이라고 * 추정! 할 수 있다.

이런 에러를 방지하기 위해, 
getElement를 하는 function 과 setElement를 하는 function 을 분리해야 한다.

```


**자바스크립트 query innerHTML와 innerText**
- 자바스크립트를 이용하여 DOM 요소를 추가하거나, text를 넣어주는 기능은 innerHTML와 innerText로 구분된다.
- 주의해야할 점은 qureyselect를 id값이 아닌 class나 tag로 할 경우 배열이 return되기 때문에(Node...) 뒤에 꼭 [0]를 붙여주어야 한다.
- innerHTML은 아예 HTML 요소를 추가하는 개념이고, 텍스트만 바꾸기 위해서는 innerText를 사용한다.(with strong or span tag)
```javascript
document.querySelector("#div1").innerHTML = '<h1>Hello world!</h1>';
document.querySelectorAll("h2")[0].innerText = "H2 영역이 바뀌었습니다.";
```


- 특정 value에 대한 조회화면을 설계할 때에도 innerHTML를 사용한다. selctbox나 radio로 사용자로부터 value를 지정받고, 선택된 value에 따른 table을 js가 그리도록 한다.

```javascript
<body> 
  <button onclick="doSearch();">조회</button>


  <table>

    테이블 영역의 head(column index)는 미리 잡아주고
    <thead>
      <tr>
        <th>이름</th>
        <th>성별</th>
        <th>회사</th>
      </tr>
    </thead>

    table body부분에서 js가 그리도록 한다. => 아래 doSearch();
    <tbody id="tb"></tbody>
  

  </table>
  <script>
    function doSearch() {
      var gender = document.getElementById("sel_gender").value;


      * 배열의 형태로 담는 이유 : 퍼포먼스적으로(성능적으로) 배열의 형태로 담는 것이 좋다. 좀 더 직관적으로 그릴 수도 있음.
      var h = [];
      for (var user of userList) {
        if (gender == user.gender) {
          h.push('<tr>');
          h.push('<td>' + user.name + '</td>');
          h.push('<td>' + user.gender + '</td>');
          h.push('<td>' + user.company + '</td>');
          h.push('</tr>');
        }

      }
      * seperator를 join("")으로 하는 이유 : [ , , ] 내부의 seperator는 우리 눈에만 보이는 것이지 실제로는 seperator가 없는 것
      document.getElementById("tb").innerHTML = h.join("");
    }
  </script>
</body>
```



**자바스크립트 onclick event와 addEventListener**
- onclick event에 대해서도 항상 이렇게 onclick을 해줄 수 없으므로, id에 따라 addEventListener를 추가하는 것도 좋은 방법이다.
그리고 디자이너한테도 모든 button에 id="btn"라고 적어주세요! 라고 하는게 좋음
```html
<button onclick="myFunction();">click</button>
<button id="btn">click2</button>

    var listen = document.getElementById("btn").addEventListener("click", myFunction, true);
    console.log(listen);

    function myFunction() {
      //insertAdjacentHTML()
      //파라미터가 2개
      //afterbegin
      //afterend
      //beforebegin
      //beforeend

      var addHTML = "<li>새로운 항목</li>";
      // var addHTML = "<h1>새로운 항목</h1>";

      //내가 삽입할 HTML 문자열
      document.getElementById("myUL").insertAdjacentHTML("beforeend", addHTML);
    }



```
이렇게 PM이 정말 중요함. 이런 설계에 대해서 개발 디자인 고객관리를 유기적으로 
연결해주어야 함.

2가지 방법들이 같이 일하는 사람들한테 어떤 효율을 줄 수 있을까?
효율 효율 효율, 배려배려 배려 -> PM이 되는 과정

onchange 이벤트는 this를 활용한다

때로는 데이터를 바로바로 사용하는게 아니라
프로그래밍하려는 구조에 맞게 변경해서 사용하는 것도 중요함

'와 "를 잘 구분할것 
<input type="text" name="" id="" onfocus="javascript:console.log('focused!');">


기존에 submit할 때 바로 말고 한 컨텐츠 입력후 블러로 확인한뒤 다시 포커스 시키는 것도 방법ㄴ


onload 는 뭐였지? 
onunload 사용자가 현재 페이지에서 빠져나갈 때 사용




body의 온보드의 개념
getElementId("") 할 때,
id값이 엄청 뒤에 있으면 DOM트리가 다 그려지기 전에 js 가 실행될 수 있어서
그런 경우 html 바디에는 있으나, 찾지를 못한다(실제로는 아직 그려지지 않아서)
그런 경우를 대비해서 온보딩을 하고 그 함수 안에서 getElement를 수행하여야 한다

for문 내에서 특정값을 찾을 때는 찾은 후에
break; 처리를 해줘야 한다. 자기가 찾고 싶은 값을 찾은 후에도 나머지를 돌아서 차라리 filter를 해주던가 하는게 더 효율적이다.


백만건 이렇게 되면 필터보다 차라리 break; 해주는게 좋다

시간내서 이쁘게 자판기 꾸밀것