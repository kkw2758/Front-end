import React, { useState } from "react";

// appendItem, item
function InputItem(props) {
  const [newItem, setNewItem] = useState("");
  return (
    <div>
      할일 :
      <input
        type="text"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.appendItem(newItem);
            setNewItem("");
          }
        }}
      />
      <button
        onClick={() => {
          props.appendItem(newItem);
          setNewItem("");
        }}
      >
        추가
      </button>
    </div>
  );
}

export default InputItem;
