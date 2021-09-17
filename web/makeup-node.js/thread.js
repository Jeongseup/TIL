const { Worker } = require("worker_threads");
const http = import("http");
let startTime = process.uptime(); // 프로세스 시작 시간
let jobSize = 100000;
let myWorker1, myWorker2;

myWorker1 = new Worker(__dirname + "/worker.js"); // 스레드를 생성해 파일 절대경로를 통해 가리킨 js파일을 작업
myWorker2 = new Worker(__dirname + "/worker.js");

doSomething(); // event loop가 처리해야 할 CPU 하드한 작업

let endTime = process.uptime();
console.log("main thread time: " + (endTime - startTime)); // 스레드 생성 시간 + doSomething 처리하는 데 걸린 시간.

function doSomething() {
    let data;
    for (let i = 0; i < jobSize; i++) {
        // CPU Hard
        data += i;
    }
}
