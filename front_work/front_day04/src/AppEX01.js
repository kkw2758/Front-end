import React, { useState } from "react";
import Hello from "./app_ex01/Hello";
import Car from "./app_ex01/Car";
import "./App.css";

function AppEx01() {
  // state 선언
  const [brand, setBrand] = useState("KIA");
  const [carName, setCarName] = useState("K7");
  const [user, setUser] = useState("길동");

  function changeName(newName) {
    console.log("changeName() 호출!");
    setUser(newName);
  }
  function assignTest() {
    console.log("assignTest() 호출");
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };
    const returnedTarget = Object.assign(target, source);
    console.log(target);
    console.log(returnedTarget);
    console.log(target === returnedTarget);
  }
  function assignTest2() {
    console.log("assignTest2() 호출");
    const target = { a: 1, b: 2 };
    const source = [
      { b: 4, c: 5 },
      { b: 6, c: 7, d: 8 },
      { b: 9, c: 10, d: 11 },
      { b: 12, c: 13, d: 14, e: 15 },
    ];
    Object.assign(target, ...source);
    console.log(target);
    // const returnedTarget = { target, ...source };
    // console.log(returnedTarget);
  }

  function testSpread() {
    console.log("testSpread() 호출...");
    const arr = [{ name: "kim" }, { name: "lee" }, { name: "park" }];

    // arr과 newArr은 서로 다른 객체
    console.log(arr);
    const newArr = [...arr, { name: "kang" }];
    console.log(newArr);
  }
  return (
    <div>
      {
        // 컴포넌트 생성
      }
      <Car brand={brand} name={carName} />
      <Hello name={user} address="Seoul" _changeName={changeName} />
      <hr />
      <button
        onClick={(event) => {
          assignTest();
        }}
      >
        assign 테스트
      </button>
      <hr />
      <button
        onClick={(event) => {
          assignTest2();
        }}
      >
        assign2 테스트
      </button>
      <hr />
      <button onClick={testSpread}>spread 테스트</button>
    </div>
  );
}

export default AppEx01;
