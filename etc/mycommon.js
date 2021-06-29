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
        "가위": "보",
        "바위": "가위",
        "보": "바위"
    };

    return {
        "userRSP": userRSP,
        "playRSP": playerRSP,
        "winner": (userRSP == playerRSP) ? 0 : winValue[userRSP] == playerRSP ? 1 : -1
    };
}