import React, { useState } from "react";
import "./ItemRow.css";

// todoList 각한줄
function ItemRow(props) {
  const [mode, setMode] = useState(false);
  const [title, setTitle] = useState(props.item.title);
  return (
    <li>
      <p>
        <input
          onChange={(e) => {
            props.item.done = e.target.checked;
            props.updateItem(props.item);
            console.log(props.item);
          }}
          checked={props.item.done}
          type="checkbox"
        />
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className={props.item.done ? "checked" : ""}
          type="text"
          disabled={mode ? "" : "disabled"}
        />
        <button
          onClick={() => {
            props.removeItem(props.item.no);
          }}
        >
          삭제
        </button>
        <button
          onClick={(e) => {
            setMode(!mode);
            if (mode) {
              props.item.title = title;
              props.updateItem(props.item);
            }
          }}
        >
          {mode ? "수정완료" : "수정"}
        </button>
      </p>
    </li>
  );
}

export default ItemRow;
