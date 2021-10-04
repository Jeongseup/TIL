## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### mini-project 기간 메모들

maria db port 번호 확인 방법

1. cd C:\Program Files\MariaDB 10.6\bin>
2. $ mysql -u root -p => 초기 설치시 지정한 비밀번호 입력
3. $ show global variables like 'port';

or

1. 작업관리자 -> 서비스 maria db PID 번호 확인
2. cmd 창에 $ netstat -ano 검색
3. marida db PID 번호에 해당하는 로컬 주소 확인

포트번호 변경방법
maria db > data > my.ini 워크패드로 open
번호 변경

```javascript
database: "dev",
host: "169.254.167.138",
port: 3307,
user: "root",
password: "28660894"

를 아래와 같이 바꿔준다.(" or ' 를 제거)

database =  ..
host = ..
port = ..
user = ..
password = ..

이후, app.js 파일 내 아래와 같이 변경한다.

const dbPool = require('mysql').createPool({
  "database" : process.env.database, // dev
  "host": process.env.host, // ip 주소
  "port": process.env.port,
  "user": process.env.user,
  "password": process.env.password   // 비밀번호
});
```

// 21.07.13
const dotenv = require('dotenv');
const path = require('path');

\_\_dirname이라는 건 루트폴더를 찾아준다.

그리고
.gitignore에

# local env files

.env.local
.env.\*.local 추가

나의 환경변수 나의 개발환경
root 나 password

npm install multer
파일 업로드를 도와주는 library

서로 다른 사용자가 똑같은 이름을 업로드할 수도 있기 때문에
파일이름에 날짜 시간 분초등을 넣어준다.
항상 유니크값을 유지하기 위해서

multer는 어떤 위치에 어떤 명으로 넣을 건지를 잡아준다.

fs 는 filesystem의 약자

클라이언트에 서버로 파일을 넘길 때는 항상
headers: { 'Content-Type': 'multipart/form-data' }라는 걸 이용해야만 파일을 전송할 수 있다.

formData라는 객체는 파일이나 텍스트등을 다 보낼 수 있음
이때 보내는 keyvalue는 attachment

e.target.files[0] file이라는 건 기본 array객체라
파일 하나 즉 0번째걸 셀렉해준다.

multer라는 애가 자동으로 넘겨준다.
'attachment'라는 key값을 갖고

extname이라는 건 확장자 명을 의미함
현재날짜시간분초.확장자명

#### 21.07.18

node.js - express

-   express는 node.js의 프레임워크이다.(그래서 npm i express 해주는 것)
-   `const app = express();`와 같은 형태로 express라는 객체를 생성하여 프로그래밍한다.

> https://www.zerocho.com/category/NodeJS/post/5789e8d91c9e1ff02bdedad3

node.js - path

-   path는 node.js에서 디렉토리 주소를 다룰 때 사용하는 모듈이다.

```javascript
console.log("filename : ", __filename);
console.log("dirname : ", __dirname);

const path = require("path");
console.log("file path :", path.join(__dirname, filename));
```

app.use라는 미들웨어로 변경되지 않는 assets인 static file들을 저장할 주소를 지정한다.
app.use(express.static(path.join(\_\_dirname, 'html')));
이렇게 지정하면 클라이언트에서 접근할 때 localhost:8080/html/turn.js 가 아닌 바로 파일명
localhost:8080/turn.js 로 접근할 수 있다.

따라서, 서버에서 private 파일들은 접근이 불가능하게 만들 수 있다.

실제 경로와 브라우저의 경로를 달리해서 쉽게 서버 파일에 접근하지 못하도록 한다.
app.use('/static', express.static(path.join(\_\_dirname, 'html')));

> https://www.zerocho.com/category/NodeJS/post/5789e8d91c9e1ff02bdedad3

REST API routing 처리

app.get('/', 콜백) => express app 보고 '/'라는 get 요청이 올 때, 콜백 으로 처리하라는 것.
app.get( 요청명, 콜백함수 ) => OO으로된 get요청을 콜백함수로 처리한다.

강사님 vs code에 터미널 셋팅방법
각자 딴 브런치 가져와서 재 커밋하는 방법 찾기

// API 서버와 프론트엔드 서버가 달라서, 프론트엔드에서 API서버로 요청시에 Cross Origin Resource Sharing 요청이 된다.
// 일반적으로, 브라우저는 보안상의 이유로 CORS를 제한하고 있다. 이를 해결하기 위한 library
const cors = require("cors");

> http://guswnsxodlf.github.io/enable-CORS-on-express

multer API 설명
multer option
key = dest or storage : 파일이 저장될 위치
limits = 업로드 된 데이터의 한도
fileFilter = 어떤 파일을 허용할지 제어하는 함수

> https://github.com/expressjs/multer/blob/master/doc/README-ko.md
