import React from "react";

// 구조 분해 할당 - 객체나 리스트의 요소를 바로 끄집어 내어서 사용
function Hello({ name, address, _changeName }) {
  return (
    <h1>
      I am a {name} of {address}
      <br />
      <button
        onClick={function () {
          _changeName("철수");
        }}
      >
        이름 바꾸기
      </button>
    </h1>
  );
}

export default Hello;
