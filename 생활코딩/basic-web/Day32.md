## 2021 혁신성장 청년인재 양성사업 - 블록체인을 활용한 비즈니스 모델 개발 프로젝트

### Day32, 8주차 - Maria DB & DBeaver

**MariaDB의 탄생 배경**
MySQL의 My는 자신의 첫째 딸 이름을 따온 것이고, MariaDB에서 Maria는 자신의 둘째 딸 이름을 따온 것입니다. 참고로 첫째 아들 이름이 Max 인데 MaxDB도 있다고 합니다.

> "현재 오라클은 당장 이익에 취해 MySQL을 폐쇄적인 방향으로 이끌고 있습니다. 일명 '오픈코어'로 불리는 오픈 소스 전략을 추구한다고 말하면서 말이지요. 오픈코어는 결코 오픈 소스 활성화를 위한 전략이 아닙니다."

"오픈코어는 오픈 소스를 활용한 결과물의 확장기능이나 엔터프라이즈 기능은 공개하지 않는 전략을 말합니다. 오라클은 개발 방향에 대해 이미 오픈 소스 커뮤니티와 협력을 중단한 상태로 이는 올바른 오픈소스의 활용법이라고 볼수 없습니다."

"아마도 InnoDB 스토리지 엔진을 제외한 MySQL에 있는 기능 대부분은 썬마이크로시스템즈 때 있었던 기능들입니다. 오라클 인수 후 MySQL은 발전하지 않았습니다. 오라클은 ‘MySQL을 어떻게 하면 자신들의 소유로 할 수 있을까’만 고민했고, 그래서 회사를 나왔습니다"

MariaDB는 오픈 소스의 관계형 데이터베이스 관리 시스템(RDBMS)이다. MySQL과 동일한 소스 코드를 기반으로 하며, GPL v2 라이선스를 따른다. 오라클 소유의 현재 불확실한 MySQL의 라이선스 상태에 반발하여 만들어졌으며, 배포자는 몬티 프로그램 AB(Monty Program AB)와 저작권을 공유해야 한다.[2] 이것은 MySQL과 높은 호환성을 유지하기 위함이며, MySQL API와 명령에 정확히 매칭하여, 라이브러리 바이너리와 상응함을 제공하여 교체 가능성을 높이고자 함이다.[3] 마리아 DB에는 새로운 저장 엔진인 아리아(Aria)뿐만 아니라, InnoDB를 교체할 수 있는 XtraDB 저장 엔진을 포함하고 있다.[4] 이것은 트랜잭션과 비트랜잭션 엔진 그리고 미래에 나올 MySQL 판에 대응하고자 함일 것이다.[5]

마리아 DB의 주요 개발자는 MySQL과 몬티 프로그램 AB를 설립한 몬티 와이드니어스(Michael Monty Widenius)이다. 그는 이전에 자신의 회사, MySQL AB를 썬 마이크로시스템즈에 10억 달러에 판매를 한 적이 있으며, 마리아 DB는 그의 둘째 딸인 마리아의 이름을 딴 것이다.

마리아 DB는 오픈소스
mySQL이 상업적용도로 쓰이는 것 옳지 않다 생각하여 마리아 DB가 새로 생김

maria db - 28660894
utf-8을 안하면 다른 외국 문자(한국도 포함)의 경우 꺠질 수도 있음

buffer pool size 는 램용량의 50~80%

cmd 에서
cd C:\Program Files\MariaDB 10.6\bin
mysql.exe -u root -p 후 접속

show databases;
create database dev

```sql
현재 아무 db도 선택되지 않음 > db 선택
MariaDB [(none)]> use dev;
Database changed
MariaDB [dev]>


MariaDB [dev]> create table mammals(
    -> id char(4) primary key, # primay key는 기본 키를 의미 테이블간의 연결해서 자료를 찾을 때 사용하기 위함, index개념
    -> name char(20) not null, # not null은 반드시 기입하게 만들기 위함
    -> height int,
    -> weight int
    -> );
```

insert data 2 type

```sql
insert into mammals values(
    -> "001",
    -> "dog",
    -> 60,
    -> 30
    -> );


insert into mammals(id, name, height, weight)
    -> values("002", "cat", 20, 5);
```

컬럼명에 ' \* ' 라는 애스터리스크..? 를 넣으면 all 를 의미

DBeaver 는 cmd로 제어하기 너무 딱딱해서, 이쁘게 만들려고 하는 tools 콘솔과 자주쓰는 기능을 제공하는 프로그램
기업용은 유료지만, 교육은 무료!

https://ko.wikipedia.org/wiki/MariaDB
https://ko.wikipedia.org/wiki/DBeaver