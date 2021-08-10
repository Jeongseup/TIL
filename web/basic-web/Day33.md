## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day33, 8주차 - Node.js Image upload

**node.js library instal**

1. npm install dotenv
   - local 환경변수(DB name, host, port ...)를 외부 파일에서 읽도록 도와주는 library
   - `.env.local`이라는 file을 node.js root folder에 만들어주고, information일 기입
   - 같은 level에 존재하는 `.gitignore`에 `.env.local`이라는 파일을 추가

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
