## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day22, 5주차 - javascript basic2 

#### Day 21 Review part : 함수 연습
- 배열 속 배열 출력하기
```javascript
내가 만든 버젼

function printArray2(arr) {

    var len = arr.length;
    for (var i = 0; i < len; i++) {
        // console.log(arr[i]);

        var tempArr = arr[i];
        var tempLen = arr[i].length;

        for (var j = 0; j < tempLen; j++) {
            console.log(tempArr[j]);
        }
    }
};

강사님이 만든 버젼
function printArray3(arr2D) {

    let len1 = arr2D.length;

    for (let i = 0; i < len1; i++) {

        // arr2D[0] : [1, 2, 3, 4, 5]

        let len2 = arr2D[i].length;

        for (let j = 0; j < len2; j++) {
            // arr2D[i][j] : [1, 2, 3, 4, 5][j]
            console.log(arr2D[i][j]);
        }
    }
};
```



#### 한줄평
프로그래밍 언어도 결국 하나의 언어이다. 외국어를 배우다보면 해당 국가에 대한 문호적 특성이 정말 잘 드러나듯 하나의 프로그래밍 언어의 탄생과정과 해당 언어가 적용되는 것을 보다보면 문화적 및 시기적 배경이 잘 베여있는 것을 알 수 있다.
___

**자바스크립트 문법1 - let과 var**
- for문 속에서 var보다는 let으로 선언해야 버그를 평소에 방지할 수 있다.

- min값을 설정할 때 첫번째 인덱스 0번째 데이터로 defalut값을 설정하면 안된다. 애초에 참조한 데이터가 빈 arr인 경우 에러가 난다.
```javascript
            // let output = Number.MAX_SAFE_INTEGER;
            if (userList.length > 0) {
                let output = userList[0].age;
		.. 코드블록
	}
```


키가 없으면 변수명과 똑같다고 생각한다.
```javascript
	return {
	sum : sum,
	avg : avg,
	maxAge : maxAge,
	minAge : minAge
}	
```
026.html 메모




string 오브젝트 문법

        var txt = "Hello World";

        // 해당 인덱스 위치에 있는 딱 한 글자만 가져옴.
        // console.log(txt.charAt(10));

        // 해당 인ㄷ게스 위치에 있는 글자의 charaacter code를 가져옴.
        // console.log(txt.charCodeAt(1));

        // split()
        var date = "2021-06-25";
        var arr = date.split("-");

        console.log(arr);

        // join
        console.log(date);
        console.log(arr.join("/"));

        var date2 = "20210625";
        var arr2 = date2.split("");

        console.log(arr2);

        var tag = "#서울#양평#한경닷컴#개발의품격#잘한다";
        var tagArr = tag.split("#");
        console.log(tagArr);

        // filter empty element
        console.log(tagArr.filter(e => e));


        // startsWith()
        var url = "http://naver.com";
        if (url.startsWith("http://") || ("https://")) {
            console.log(url);
        }

        var imageFile = "logo.jpg";
        if (imageFile.endsWith(".jpg") || imageFile.endsWith(".png")) {
            console.log(imageFile);
        }

        var isRightImageExtension = imageFile.endsWith(".jpg") ? true : imageFile.endsWith(".png") ? true : false;
        console.log(isRightImageExtension);


number 오브젝트 문법
        var x = 123;
        // console.log(typeof x, x);

        // x = x.toString();
        // console.log(typeof x, x);
        // x + "";

        //toExponential(); 실무에서 거의 안 쓰임

        // console.log(x.toExponential(2));

        //toFixed();
        var y = 9.656;
        // console.log(y.toFixed(4));

        // 0으로 하면 반올림 : y.toFixed(0) => 10
        // 오버자리수로 하면 0이 붙음 : y.toFixed(4) => 9.6560


        // toPrecision()
        console.log(y.toPrecision(1));

        var x = "10";
        // console.log(parseInt(x));
        console.log(parseInt(10.623)); // 이건 버려버림
        console.log(parseInt("4011 10 30")); // 처음 발견한 수만 가져옴
        console.log(parseInt("10 years"));
        console.log(parseInt("years 10")); // NaN : Not a Number

        //parseFloat()

        console.log(parseFloat(10.627));


html은 input:number를 제외하고는 숫자가 아닌 문자로 돌려주기 때문에
parseFloat같은 기능을 자주 사용하게된다. 뭣모르고 3/0으로 infinity를 출력하면 
시스템상에 에러가 난다 하지만 어디서 에러가 난지 알기 어려우니 / 나 *할 때는 이점을 유의해야 한다.


3/0 => Infinity




push & pop
shift & unshift
splice는 처음보는 개념이니까 잘 알아둘것


숫자가 아닌 문자로 인식해서 이상하게 정렬되어 버린다.
        var points = [34, 12, 45, 22, 6, 8, 2, 54];
        console.log(points.sort());
그래서 아래와 같이 정렬 내부 함수를 만들어 버린다.
        var p = points.sort(function (a, b) {
            // if (a > b) return 1;
            // else if (a < b) return -1;
            // else return 0;

	return a - b;
        });

        console.log(p);

        // 이렇게도 사용가능하다. 결국 배열은 오브젝트끼리의 비교일 뿐이다.
        var p2 = productList.sort(function (a, b) {
            return a.price - b.price;
        });



JavaScript에서 true는 1과, false는 0과 같다고 표현되기도 합니다.

        // filter 
        let output = points.filter(function (p) {
            return p > 20;
        });

        console.log(output);

        let funcP = function (p) {
            return p > 20;
        };

        // 위에 filter는 아래와 같다, 내부적으로 [];이 선언되어 있음

        function filter2(arr, func) {

            var outputList = [];

            for (var p of arr) {
                console.log(p);
                if (func(p)) {
                    outputList.push(p);
                }
            }
            return outputList;
        }


// map() 배열에 오브젝트가 담겨있을 때만 쓴다.
// 오브젝트가 들어가고 오브젝트가 나온다라 생각하면 쉽다.
    
내가 필요한 것만으로 바꾸면 데이터의 전체적인 사이즈가 줄어든다. 효율성이 좋아진다.
map을 서버에서 자주 구현함

클라이언트가 존도의 정보를 원할 때 서버에 요청을 하면
서버에 있는 node.js js는 한 배열(오브젝트) 마다 읽어 해당 정보를 잡고, 이후에 모든 키를 가진 정보를 정보를 던지는게 아니라 map으로 클라이언트에 필요한 정보만을 추출해서 던진다.
네트워크 속도가 증가된다!

한두명이 요청하는거면 쉽지만, 백만명이 그걸 요청하는 사이트라고 하면 통신에 상당히 부담이 되기 때문에 map으로 정제해서 처리한다. 


        var newList = productList.map(function (drink) {
            return {
                "name": drink.name,
                "prcie": drink.price,
                "fee": drink.price * 0.1
            }
        });

단, 기능에 따라 클라이언트 쪽에서 처리하게 하는 것이 효율적인 분배의 경우 그렇게 처리하도록한다.

어떤 순간에 어떤 기능을 사용해야할지 명확히 아는 것이 중요하다!

        // reduce()
        var total = points.reduce(function (sum, currentValue) {
            return sum + currentValue;
        });

        console.log(total);

        var total = points.reduce((sum, currentValue) => sum + currentValue);
    



        const now = new Date();
        console.log(now);
이건 내 pc의 시간이 나오는 것 그렇기 때문에 어떤 글을 작성하는 것을 처리할 때 클라이언트 pc에서 가져오면 안되고 서버에서 가져와야 한다.





        function getIntervalDate(intervalDay) {

            let interval = (24 * 60 * 60 * 1000) * intervalDay;
            let now = new Date();

            let outputDay = new Date(now.getTime() + interval);


            var year = outputDay.getFullYear();
            var month = outputDay.getMonth();
            var day = outputDay.getDate();

            return year + "/" + month.toString().padStart(2, "0") + "/" + day;
        }

        var output = getIntervalDate(-7);
        console.log(output);

        function getIntervalDate2(intervalDay, format) {

            let interval = (24 * 60 * 60 * 1000) * intervalDay;
            let now = new Date();

            let d = new Date(now.getTime() + interval);

            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate();

            return format.replace("YYYY", year).replace("MM", month.toString().padStart(2, "0")).replace("DD", day);
        }

        // var output = getIntervalDate2(-7, "YYYY-MM-DD");
        // console.log(output);



        function getIntervalDate3(intervalDay, operator) {

            let outputDay = getIntervalDate(intervalDay);
            outputDay = outputDay.replace(/\//g, operator);

            return outputDay;
        }

        var output = getIntervalDate3(-7, "----");
        console.log(output);







___
#### *번외 - 추가로 공부해볼만한 것들*
- 조건식 내부에서 0 1 -1로 돌려되는 이유