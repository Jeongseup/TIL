## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day23, 6주차 - javascript basic3

#### Day 22 Review

- `getDate();`와 같은 함수 이외에 setDate()도 있지만 실무에서 자주 쓰지는 않는다.

- 실무에서는 시간 데이터를 handling하는게 상당히 어려운 문제라 moment js라는 open source library를 사용한다.(https://momentjs.com/)

- cdn : contents delivery network라고 한다.(절대 경로 외부 js를 가져다 쓰는 개념) 굳이 다운로드 하지 않아도 쓸 수 있음.

-사용방법은 cdn을 활용한 절대경로 tag참조 or moment.js를 만들어서 로컬에서 실행

-moment.js 날짜 시간을 다룰 때 엄청 많이 쓰임. date객체와 함께 알고 있는 것이 좋다.

-확장자가 .js인데 .min.js라고 적혀있는애들이 있다. (minified의 약자..?) 

-minify를 사용하는 이유는
	1. 공백이나 이런걸 명칭을 다 바꿔버림 나의 기술로 만들어진 노하우를 js는 다 f12로 확인할 수 있으니까 기술유출 방지하기 위함
	2. 파일 사이즈를 줄이기 위함(주석날리고, 공백날리고)
	3. 웹 어플리케이션을 사용할 때 다양한 linking을 하므로, 가벼운 상태로 참조하는 것이 필요함.

다시 beautify 를 사용하면 저장할 때 또 다시 용량이 커지므로, 다른이름으로 저장해서 사용할 것

실제 사용할 때는 절대경로로 참조하면 매번 요청해야해서 더 오래걸림
minify를 저장할 때 어떤 함수가 어떻게 바뀌었는지 내부적으로 저장되어 있어서 그냥 참조해도 치환이 된다.


___
자바스크립트 문법 - set
set과 date객체는 new 객체명();으로만 가능하다. 
- set함수 어떨때 유용할까? 배열 내 데이터에서 유니크한 값들을 추출할 때 사용!(unique())
- set함수가 등장 이전에는 object 형태로 변형해서 사용함

        var myArr = Array.from(mySet);
        console.log(myArr); 도 가능






        for (var user of userList) {
            if (oUser[user.gender]) {

                oUser[user.gender]++;

            } else {
                console.log(user.gender);

                var oUserGender = user.gender;
                console.log(oUserGender);
                
        
                oUser[oUserGender] = 1;
                //하지만 oUser.oUserGender = 1; 은 안됨
                // 어떤 값이 key로 들어갈 지 몰라서 
                // .키명 보다 [키명]의 형식으로 가야한다.
                console.log(oUser);

                // oUser[user.gender] = 1;

            }
            break;
        }



0만 false로 간주하고 나머진 숫자에 대해 true로 간주
        if (-1) {
            console.log("정수");
        }
하지만, 또 undefined도 false로 간주됨.



자바스크립트 map 객체
왜 굳이 set이 아닌 map을 쓸까? set에서 oUser[key명]은 프로그래밍스럽지가 않았다. 그리고 문자열만 올 수 있음

map에서는 key로 배열이나 오브젝트 등등을 넣을 수 있음(DB에서 특정 테이블을 가져올 때 사용할 수 있을거 같은데..?)

실무에서 map은 좀 쓰니까 set보다는 알아둬라. 키로 어떤 타입도 가능하고, 몇 개의 데이터가 담겼는지 바로바로 알 수 있다. `myMap.size`
set객체는 for in문을 사용할 때 데이터 stack 순서를 보장하지 않기 때문에 간혹 키값의 순서가 뒤바뀔 수 있음 map은 그 순서를 보장해줌


문자열 객체 활용 리뷰
- substr
```javascript
const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"
```
- charAt
```javascript
var anyString = 'Brave new world';
console.log("The character at index 0   is '" + anyString.charAt()   + "'");
// No index was provided, used 0 as default
```

