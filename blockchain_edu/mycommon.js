/**
 * description : 최소값과 최대값을 파라미터로 받고 그 사이의 무작위(random) 정수를 반환하는 함수
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} min과 max 사이의 랜덤 정수 값
 */
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

userList.filter((u) => u.gender == "male");
console.log(tagArr.filter((e) => e));

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
}

// startsWith()
var url = "http://naver.com";
if (url.startsWith("http://") || "https://") {
    console.log(url);
}

var imageFile = "logo.jpg";
if (imageFile.endsWith(".jpg") || imageFile.endsWith(".png")) {
    console.log(imageFile);
}

var isRightImageExtension = imageFile.endsWith(".jpg")
    ? true
    : imageFile.endsWith(".png")
    ? true
    : false;
console.log(isRightImageExtension);

// reduce()
var total = points.reduce(function (sum, currentValue) {
    return sum + currentValue;
});

console.log(total);

var total = points.reduce((sum, currentValue) => sum + currentValue);

function getIntervalDate2(intervalDay, format) {
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
}

// var output = getIntervalDate2(-7, "YYYY-MM-DD");
// console.log(output);
// * object로 set 자료형 구현하기 *

for (var user of userList) {
    if (oUser[user.gender]) {
        oUser[user.gender]++;

    } else {
        
        //userList 내 한 user의 gender 속성으로 접근
        var oUserGender = user.gender;
       
        // gender 데이터를 key값으로 저장
        oUser[oUserGender] = 1; // or oUser[user.gender] = 1;
    
        // '''            
        // * 하지만, oUser.oUserGender = 1; 은 안된다.
        // 어떤 값이 key로 들어갈 지 몰라서 
        // "list명.키명"의 형태가 아닌, "list명[키명]"의 형식으로 지정해야 한다.
        // '''
        console.log(oUser);
    }
    break;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"


var mathExample = Math.ceil(value / 10) * 10);

let person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: this.firstName + " " + this.lastName
};


// 화살표 함수 표현식
var arrowAdd1 = (x1, x2) => {
    return x1 + x2
};

var arrowAdd2 = (x1, x2) => x1 + x2;

var arrowAdd3 = (x1, x2) => {
    var sum = x1 + x2;
    return sum;
}

function add(...nums) {

    var sum = 0;

    for (var n of nums) {
        sum += n;
    }

    return sum;
}

var [longititue, latitude] = getScores();

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