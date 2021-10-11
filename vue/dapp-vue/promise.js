function get(url) {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open("get", url);

        req.onload = function () {
            if (req.status == 200) {
                // 성공시
                resolve(req.response);
            } else {
                // 실패시
                reject(Error(req.statusText));
            }
        };

        req.onerror = function () {
            reject(Error("Network err"));
        };

        req.send();
    });
}

// 여러개 promise, promise들이 객체일 때
Promise.all([promise1, promise2]).then(function (valuse) {
    console.log(values);
});
// 여러개 promise, promise들이 함수일 때
Promise.all([promise1(url), promise2(url)]).then(function (valuse) {
    console.log(values);
});

async function test() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done", 10000));
    });

    const result = await promise;
    console.log(result);
}

