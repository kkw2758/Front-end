import React, { useState } from "react";

function InputItem(props) {
  const [newWork, setNewWork] = useState("");
  return (
    <div>
      <input
        type="text"
        value={newWork}
        onChange={(e) => {
          setNewWork(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          props.appendItem(newWork);
          setNewWork("");
        }}
      >
        추가
      </button>
    </div>
  );
}

export default InputItem;
