import React, { useState, useEffect } from "react";

function Menu(props) {
  const [menuitems, setMenuItems] = useState([
    "HOME",
    "PROFILE",
    "GALLERY",
    "LECTURE",
    "GUEST",
  ]);
  // app.css 파일
  // CSS는 App.css 파일을 만들어 스타일 적용 후 App.js에서 임포트 한다
  return (
    <>
      <ul className="menu">
        {menuitems.map((item, i) => {
          return <li key="i">{item}</li>;
        })}
      </ul>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Comstudy SW School</h1>
      <Menu></Menu>
    </>
  );
}

export default App;
