/**
 * description : 최소값과 최대값을 파라미터로 받고 그 사이의 무작위(random) 정수를 반환하는 함수
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} min과 max 사이의 랜덤 정수 값
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 삼한 연산자 활용 좋은 예시
function rspPlayer(userRSP) {
    const arrRSP = ["가위", "바위", "보"];
    const playerRSP = arrRSP[getRandomInteger(0, 2)];

    const winValue = {
        가위: "보",
        바위: "가위",
        보: "바위",
    };

    return {
        userRSP: userRSP,
        playRSP: playerRSP,
        winner:
            userRSP == playerRSP ? 0 : winValue[userRSP] == playerRSP ? 1 : -1,
    };
}

// arrow function example1
userList.filter((u) => u.gender == "male");

// 문자열 #로 split하고 empty element 제거
var tagFilter = function () {
    var tag = "#서울#양평#한경닷컴#개발의품격#잘한다";
    var tagArr = tag.split("#");
    console.log(tagArr);

    // filter empty element
    console.log(tagArr.filter((e) => e));
};

// endWith() 활용
var imgFilter = function () {
    var isRightImageExtension = imageFile.endsWith(".jpg")
        ? true
        : imageFile.endsWith(".png")
        ? true
        : false;
    console.log(isRightImageExtension);

    var imageFile = "logo.jpg";
    if (imageFile.endsWith(".jpg") || imageFile.endsWith(".png")) {
        console.log(imageFile);
    }
};

var sorter = function (arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
};

// reduce() 활용
var total = points.reduce(function (sum, currentValue) {
    return sum + currentValue;
});

// reduce arrow version
var total = points.reduce((sum, currentValue) => sum + currentValue);

// interval date 구하는 함수
// var output = getIntervalDate2(-7, "YYYY-MM-DD");
var getIntervalDate = function (intervalDay, format) {
    let interval = 24 * 60 * 60 * 1000 * intervalDay;
    let now = new Date();

    let d = new Date(now.getTime() + interval);

    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();

    return format
        .replace("YYYY", year)
        .replace("MM", month.toString().padStart(2, "0"))
        .replace("DD", day);
};

let person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: this.firstName + " " + this.lastName,
};

// object로 set 자료형 구현하기 *
var setObject = function (userList) {
    for (var user of userList) {
        if (oUser[user.gender]) {
            oUser[user.gender]++;
        } else {
            var oUserGender = user.gender;

            // gender 데이터를 key값으로 저장
            oUser[oUserGender] = 1; // or oUser[user.gender] = 1;
            console.log(oUser);
        }
        break;
    }
};

var getSpecificGroup = function (userList, keyAge) {
    let myMap = new Map();

    for (let user of userList) {
        var ageFirtStr = user[keyAge].toString()[0];
        var ageGroup = ageFirtStr.padEnd(2, "0");

        // 2가 올텐데..
        if (myMap.has(ageGroup)) {
            myMap.set(ageGroup, myMap.get(ageGroup) + 1);
        } else {
            myMap.set(ageGroup, 1);
        }
    }

    return myMap;
};

// 화살표 함수 표현식
var simpleAdd = function (x1, x2) {
    return x1 + x2;
};

var arrowAdd1 = (x1, x2) => {
    return x1 + x2;
};

var arrowAdd2 = (x1, x2) => x1 + x2;

function add(...nums) {
    var sum = 0;

    for (var n of nums) {
        sum += n;
    }

    return sum;
}

// table example
function doSearch() {
    var gender = document.getElementById("sel_gender").value;

    // * 배열의 형태로 담는 이유 : 퍼포먼스적으로(성능적으로) 배열의 형태로 담는 것이 좋다. 좀 더 직관적으로 그릴 수도 있음.
    var h = [];
    for (var user of userList) {
        if (gender == user.gender) {
            h.push("<tr>");
            h.push("<td>" + user.name + "</td>");
            h.push("<td>" + user.gender + "</td>");
            h.push("<td>" + user.company + "</td>");
            h.push("</tr>");
        }
    }
    document.getElementById("tb").innerHTML = h.join("");
}

function getScores() {
    return [70, 80, 90];
}

let [x, y, z] = getScore();

// basic promise by axios
function getData(_url) {
    return new Promise(function (resolve, reject) {
        axios.get(_url).then(function (res) {
            console.log(res.data);
            resolve(res.data);
        });
    });
}

/* 
<script type="module">
    import {log, err, PI} from "/scripts/test.js";
    log(PI);
</script> 
*/

const condition = true; // true -> resolve, false -> reject
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("success");
    } else {
        reject("failure");
    }
});

// 더 간단하게
var sayNode = function () {
    console.log("Node");
};
var es = "ES";

const newObject = {
    sayJS() {
        console.log("JS");
    },
    sayNode,
    [es + 6]: "Fantastic",
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6); // Fantastic

const relationship2 = {
    name: "zero",
    friends: ["nero", "hero", "xero"],
    logFriends() {
        // 여기서 this 는 logFreinds()
        // arrow function 사용하면 상위 스코프의 this 를 그대로 사용할 수 있다.
        this.friends.forEach((friend) => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logFriends();

const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();
