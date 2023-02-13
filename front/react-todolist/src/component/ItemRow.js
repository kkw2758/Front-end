import React, { useState } from "react";
import "./ItemRow.css";

// todoList 각한줄
function ItemRow(props) {
  const [checked, setChecked] = useState(false);
  return (
    <li>
      <p>
        <input
          onChange={() => {
            setChecked((target) => !target);
            props.onToggle(props.item.no);
          }}
          type="checkbox"
        />
        <input
          className={checked ? "checked" : ""}
          type="text"
          value={props.item.title}
          disabled
        />
        <button
          onClick={() => {
            props.removeItem(props.item.no);
          }}
        >
          삭제
        </button>
      </p>
    </li>
  );
}

export default ItemRow;
