-- 테이블 삭제
drop table if exists saram;

-- 테이블 생성
create table if not exists saram(
seq bigint not null primary key auto_increment,
id varchar2(20) not null,
name varchar2(20),
age int
);

-- 데이터 입력SARAM 
insert into saram(id, name, age) values('PARK', '박혁거세', 23);
insert into saram(id, name, age) values('KIM', '김유신', 23);
insert into saram(id, name, age) values('LEE', '이순신', 23);

select * from saram;
select * from saram where seq=2;

-- 트랜잭션 (commit, rollback)
commit;
--
-- 데이터 수정
update saram set name='김수한무', age=90 where seq=2;

-- 데이터 삭제 / 대소문자 구분x, where은 조건 
DELETE from saram where seq=2;