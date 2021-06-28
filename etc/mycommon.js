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