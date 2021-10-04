//worker.js 파일
let startTime = process.uptime(); // 스레드 생성 시간.
const Worker = require("worker_threads");
let jobSize = 100000;

doSomething(); // 스레드가 처리해야 할 CPU 하드한 작업

let endTime = process.uptime();
console.log(Worker.threadId + " thread time: " + (endTime - startTime));

function doSomething() {
    let data;
    for (let i = 0; i < jobSize; i++) {
        // CPU Hard
        data += i;
    }
}
