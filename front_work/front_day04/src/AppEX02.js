import React, { useState } from "react";

function App(props) {
  const [fishArr, setFishArr] = useState(["상어", "고래", "거북이"]);
  const [newFish, setNewFish] = useState("");
  return (
    <>
      <h1>Hello ReactJS</h1>
      <p>
        <input
          type="text"
          onChange={(e) => {
            setNewFish(e.target.value);
          }}
          value={newFish}
        ></input>
        <button
          onClick={(e) => {
            // state가 변경되면서 component가 다시 렌더링 된다.
            setFishArr([...fishArr, newFish]);
            setNewFish("");
          }}
        >
          추가
        </button>
      </p>
      <ul>
        {fishArr.map((fish, idx) => {
          return <li key={idx}>{fish}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
