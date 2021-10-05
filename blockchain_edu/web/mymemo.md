1. a tag : href 설정
2. tabl tag, nth-child 활용
   div의 시맨틱 요소 활용
3. css 선택자 활용(>, ~, [attr], [type])
4. css 가상 클래스 선택자 활용 (:hover, :active, :visitd)
   이미지 위에 글씨를 새겨넣어야 하는 경우는 image를 삽입하는게 아니라, bg-image로 넣는다. 그리고 그 위에 글을 적는다.
5. 실무에서는 px단위보다 비율 단위인 em단위를 사용한다.

input type reset 활용
정규식 활용 pattern attr + replace함수 활용 + str.match()
```
var str = "re, green, red, gree, gen ..."
var patt = /(red|green)/g;
var result = str.match(patt);
log(result);
```

keydown event 에서 enter 잡아내기
```
<input type="text" onkeydown="doKeyDown(event)>

function doKeyDown(e) {
    if(e.keyCode === 13) {
        doSearch();
    }

}
```

input 태그 속성 : placeholder required readonly autforcus
autocomplete

check input은 label tag로 감싼다.
form action target \_blank

display none
function hideElement() {
    document.getElementById("test").style.display = "none"
}
미디어 쿼리 활용
CSS 활용 방법

width를 33%를 주더라도, padding이나, bording때문에 화면 내 넓이를 100% 상을 초과할 수가 있다. 그런 경우를 대비하기 위해 box-sizing이라는 속성을 global하게 선언해준다.

border-box; content-box; 의 차이는 border값을 포함해서 boxing할 지 내부 content만 boxing 할지에 대해 차이이다.(언제 쓰일 지는 의문이지만, 이해만 해두자)
/_ 링크 뒤에 화살표 추가 _/
a::after {
content: "→";
}

부트스트랩은 12grid 시스템을 사용한다.(화면을 12개의 컬럼 영역으로 나누는 것을 의미)

실무 활용 UX/UI

기업 업무 시스템 같이 무거운 시스템 같은 경우 조회버튼 누르는 순간 disable 속성을 주고, 데이터가 넘어오면 다시 able 해준다.(그냥 조회버튼을 계속 활성화시켜두면, 시스템에 중복처리가 되서 에러가 야기될 가능성이 큼)
시스템의 안정성을 고려하기 위한 UX/UI이다.(무리한 트래픽에 대해서는 중간 중간 disable처리하는 것이 테크니컬한 능력)
툴팁 같은 곳에는 hover할 때, 설명이 나오게 하는 게 좋다(클라이언트를 위한 UX/UI 측면)
기본적인 css는 절대경로로 지정하고, 아래와 같은 개별 style은 해당 html 내에서만 적용하는 용도로 사용한다.(page by page styling)

기본 데이터 유형 종류로는 string / integer / boolean / undefined / null / symbol 등이 있다.(symbol은 최근에 나온 자료형으로 나중에 따로 공부해야할 요소임)
var greeting = (time < 10) ? "Good morning!" : (time < 16) ? "Good afternoon" : (time <= 20) ? "Good evening" :
"Good night!";

변수에 특정 값을 할당한 이후 null을 할당하면 해당 메모리 공간을 다시 확보할 수 있다.
실제로는 js 엔진이 알아서 주기적으로 필요없는 메모리에 대해서는 null처리를 해버려서 따로 개발자들이 선언을 하지 않는다.(다만, null 처리의 중요성을 인지하자 메모리 관리를 추후 복잡한 시스템에 있어서 중요한 요소임)
자바스크립트 object 문법

== 보다 ===을 쓰는 습관

Arrow 함수
console.table(userList.filter(u => u.gender == "male"));

    for문 속에서 var보다는 let으로 선언해야 버그를 평소에 방지할 수 있다.

string object
charAt function
charCoder function
split, join
startWith()

endsWith()

input 태그로 가져온 데이터는 parseFloat!

map() 배열에 오브젝트가 담겨있을 때만 쓴다. // 오브젝트가 들어가고 오브젝트가 나온다라 생각하면 쉽다.

내가 필요한 것만으로 바꾸면 데이터의 전체적인 사이즈가 줄어든다. 효율성이 좋아진다. map을 서버에서 자주 구현함
클라이언트가 존도의 정보를 원할 때 서버에 요청을 하면 서버에 있는 node.js js는 한 배열(오브젝트) 마다 읽어 해당 정보를 잡고, 이후에 모든 키를 가진 정보를 정보를 던지는게 아니라 map으로 클라이언트에 필요한 정보만을 추출해서 던진다. 네트워크 속도가 증가된다!

    var newList = productList.map(function (drink) {
        return {
            "name": drink.name,
            "prcie": drink.price,
            "fee": drink.price * 0.1
        }
    });

단, 기능에 따라 클라이언트 쪽에서 처리하게 하는 것이 효율적인 분배의 경우 그렇게 처리하도록한다.

10의 자리 올림을 하고 싶은 경우 강제로 10으로 나누어 1의 자리를 소수점으로 바꾸고 ceiling 이후 다시 10을 곱한다.
Math.ceil(value / 10) \* 10)

자바스크립트 문법 - map 객체

map의 등장 배경 : 왜 굳이 set이 아닌 map을 쓸까? set에서 oUser[key명]의 형태는 프로그래밍스럽지가 않다. 또한, set은 문자열 값만을 key로 받을 수 있는 한계가 있다.(map을 사용한다면, 오브젝트 내에 또 다른 object를 넣는 DB의 형태 또한 구성가능함)
map에서는 key로 배열이나 오브젝트 등의 다양한 자료형을 넣을 수 있다.
실무에서는 map은 좀 더 선호한다.
map자료형은 키 값들을 바로 출력 가능하고, 몇 개의 데이터가 담겼는지 바로바로 알 수 있다. myMap.size & myMap.keys
set객체는 for-in문을 사용할 때 데이터 stack 순서를 보장하지 않기 때문에, 간혹 키값의 순서가 뒤바뀔 수 있다 하지만, map은 그 순서를 보장해준다.
map자료형은 console.log만을 사용하는 것이 좋다. console.table은 object나 arr만 가능하다. (왜냐 map은 여러 데이터 타입이 들어올 수 있어서)

클라이언트 => 정보 => 서버 인 상황에서
저 사이 정보를 string으로 처리하기 위해, JSON.stringify();를 쓴다.

    try {
        if (x == 0) {
            //throw 를 만나면 무조건 캐치로 간다
            throw "value is zero";
        }
    } catch (error) {
        console.log(error);


    } finally {
        console.log("try/catch를 모두 실행한 후 반드시 실행하는 부분")
    }

          var checkedItems = document.querySelectorAll("input[type='checkbox']:checked");
      var checked1 = document.querySelectorAll("#checks input[type='checkbox']:checked");
      var checked2 = document.querySelector("[name=city]:checked").value);

onclick event에 대해서도 항상 이렇게 onclick을 해줄 수 없으므로, id에 따라 addEventListener를 추가하는 것도 좋은 방법이다. 그리고 디자이너한테도 모든 button에 id="btn"라고 적어주세요! 라고 하는게 좋음

body의 온보드의 개념 getElementId("") 할 때, id값이 엄청 뒤에 있으면 DOM트리가 다 그려지기 전에 js 가 실행될 수 있어서 그런 경우 html 바디에는 있으나, 찾지를 못한다(실제로는 아직 그려지지 않아서) 그런 경우를 대비해서 온보딩을 하고 그 함수 안에서 getElement를 수행하여야 한다

for문 내에서 특정값을 찾을 때는 찾은 후에 break; 처리를 해줘야 한다. 자기가 찾고 싶은 값을 찾은 후에도 나머지를 돌아서 차라리 filter를 해주던가 하는게 더 효율적이다.

테이블을 다룰 때는 table 자체에 style="width:100%"를 준다.
연락처는 address tag를 잘 사용하는 것이 좋다.

dl(discription list) tag는 일반적으로 남용하지 말고, 용어 설명시에 사용한다.(보통 마크업에 편리하다 생각해서 막 사용하는 경우가 있다고 한다)
용어를 설명하기 위한 태그이므로, dl 태그 내 dt와 dd가 1:1 쌍을 이뤄서 들어가야 한다.(용어 : 용어설명 = 1:1)
이미지를 나열하고 싶을 때는 dl보다 차라리 figure를 사용한다.
input tag의 종류들에는 사용자에게 기입해야하는 정보에 대한 hint를 주기위해 placeholder라는 element가 있다.

프로그램 적으로 사용하기 위한 tag은 input type에 "hidden"이 존재한다.
input form은 왠만하면 autofocus를 해주자(사용자 편의)기
input type에 maxlength 속성을 이용하면 최대기입되는 값을 제한할 수도 있다. 사용자가 실수하는 걸 방지
required 도 마찬가지로 꼭 필요한 사용자정보를 얻기 input tag에 지정 가능 하다
사용자 편의 : autocomplete 브라우저 메모리에 사용자 데이터 저장하게 하는 기능
정규식은 input 태그 내에 pattern element로 DB에 올라가기전에 확인할 수도 있다.
css를 입힐 때 id나 class 말고 tag의 element에도 접근 가능하다.

보통 a태그에 이렇게 많이 해둠
/_ E[attr] 형식 _/
a[href] {
color: black;
text-decoration: none;
}
테이블이나 아이콘에 hover속성도 이렇게 접근 가능!
#customers tr:hover {
background-color: #ddd;
}
html background
css로 마우스커서 모양 변경 가능 - modul 과 JscriptUI? 라는 걸 사용한다고 한다..

뭔가 레이아웃을 크게크게 잡아두고 그 안에 relative로 설정하면 편하지 않을까?
div.relative {
position: relative;
width: 400px;
height: 200px;
border: 3px solid #73AD21;
}

        div.absolute {
            position: absolute;
            top: 80px;
            right: 0;
            width: 200px;
            height: 100px;
            border: 3px solid #73AD21;
        }

주말 평일을 구분한 조건문을 할 때에는 %를 활용하는 방법도 있다
자료형까지 일치해서 비교하려면 ===을 써야한다

for반복문에는 for-loop/for-in/for-of의 형태가 있ㄹ음

filter 문법 정리
userList.filter(u => u.gender == "male"
js-basic 16까지 봄

if (confirm("삭제?")) {
console.log("삭제");
}

<>


한줄평

자바스크립트는 내가 평소에 쓰던 python 문법과 맥락은 비슷하지만 좀 더 자유도가 높은 느낌이다. 이후 조건문이나 반복문을 더 익혀봐야 어떤 느낌으로 해야할 지 갈피가 잡힐 수 있을 것 같다. 지금은 단순히 기초 html과 css, javascript를 배우고 있지만 computer science의 이론도 되게 매력적인 부분인 것 같다.

한줄평

프로그래밍 언어도 결국 하나의 언어이다. 외국어를 배우다보면 해당 국가에 대한 문호적 특성이 정말 잘 드러나듯 하나의 프로그래밍 언어의 탄생과정과 해당 언어가 적용되는 것을 보다보면 문화적 및 시기적 배경이 잘 베여있는 것을 알 수 있다.

한줄평

무언가를 배울 때는 기능적인 것보다 용도적인 측면을 고려해야 잘 기억된다고 강사님께서 말씀하셨다. 이번에 배운 자바스크립의 함수는 상당히 외워야할 요소들이 많았다. 그리고 일반적인 개발자들 사이에서도 발전된 기능이 있지만 못 따라가는 요소들도 존재하는 것을 느꼈다. 하나의 언어는 특히 프로그래밍 언어는 생존 법칙(필요성)에 크게 의존하면서 발전한다. 주기적으로 언어 main docs를 살피는 것이 상당히 큰 도움이 되겠다는 생각이 들었다.

한줄평

인터넷의 발달이 정말 다양한 오픈소스 프로젝트로 이루어져있다라는 것을 체감하게 되었다. 또한, 그런 관점에서 서로의 기술특허성을 보존하기 위한 minify&beautify의 개념 또한 충분히 이해가 되기도 했다. 나아가, 현재의 블록체인 프로젝트들 또한 이런 WEB의 발달의 역사와 유사한 어느 거대한 시대의 흐름이 아닐까 싶었다.

한줄평

다른 건 몰라도 javascript를 하면서 정말 다양한 자료형에 대해 배울 수 있는 점이 좋았다. 기존에 python에서만 쉽게 지나가던 자료형들에 대해 어떻게 쓰이는지 알 수 있었다. 원래는 배열만 자주 사용했는데 어떤 관점에서 set이나 map 객체가 필요한지 알 수 있어서 좋았다.

myCommon.js파일 만들기 공통함수 및 공통모듈은 개인 스터디하면서 필요한거 따로 .js로 만들어서 저장해서 잘 정리해두는 것이 좋다. 언제 어느시기에 알찬 구성들이 필요할지 모른다. 또한, 회사에서도 공통적으로 많이 쓰는건 다같이 저장해두고 쓰는 형식으로 co-work을 한다.

업데이트 X

한줄평

정말 짤은 기간이긴 하지만 단순히 프로그래밍을 익히는 것이 그치지 않고 웹과 한 프로그래밍 언어의 역사를 두루두루 알게되는 점들이 너무 재밌었고, 그 사이에서 기술 및 언어의 변천과정이 느껴져서 너무나 좋았다. 아마 역사는 반복되듯이 내가 지금 익히는 기술이나 무언가에 대한 역사적 흐름을 인지하는 것이 중요한 능력이라 사려된다.

한줄평

js를 배운다는 게 처음에는 단순히 웹을 배우는 것이라 생각했는데 자유도가 상당히 높은 언어이자 상당히 발달한 언어여서 그런지 단순히 웹적인 역량이 아닌 전반적인 프로그래밍 역량을 키워주는 언어라 생각하게 되었다. 그리고 filter나 arrow와 같은 고급 문법을 보면서 kotlin이나 python, R 등이 떠 올랐는데 데이터가 중요해지는 시기가 되면서 전반적으로 data handling에 더 적합한 방향으로 언어가 발달해 가는 것이 아닐까 싶다.

이렇게 PM이 정말 중요함. 이런 설계에 대해서 개발 디자인 고객관리를 유기적으로 연결해주어야 함.

2가지 방법들이 같이 일하는 사람들한테 어떤 효율을 줄 수 있을까? 효율 효율 효율, 배려배려 배려 -> PM이 되는 과정

onchange 이벤트는 this를 활용한다

때로는 데이터를 바로바로 사용하는게 아니라 프로그래밍하려는 구조에 맞게 변경해서 사용하는 것도 중요함

'와 "를 잘 구분할것

기존에 submit할 때 바로 말고 한 컨텐츠 입력후 블러로 확인한뒤 다시 포커스 시키는 것도 방법ㄴ

onload 는 뭐였지? onunload 사용자가 현재 페이지에서 빠져나갈 때 사용

body의 온보드의 개념 getElementId("") 할 때, id값이 엄청 뒤에 있으면 DOM트리가 다 그려지기 전에 js 가 실행될 수 있어서 그런 경우 html 바디에는 있으나, 찾지를 못한다(실제로는 아직 그려지지 않아서) 그런 경우를 대비해서 온보딩을 하고 그 함수 안에서 getElement를 수행하여야 한다

for문 내에서 특정값을 찾을 때는 찾은 후에 break; 처리를 해줘야 한다. 자기가 찾고 싶은 값을 찾은 후에도 나머지를 돌아서 차라리 filter를 해주던가 하는게 더 효율적이다.

백만건 이렇게 되면 필터보다 차라리 break; 해주는게 좋다

시간내서 이쁘게 자판기 꾸밀것


