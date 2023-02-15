import React, { useState } from "react";
import "./ItemRow.css";

function ItemRow(props) {
  const [mode, setMode] = useState(false);
  const [title, setTitle] = useState(props.item.title);
  return (
    <li>
      <p>
        <input
          type="checkbox"
          checked={props.item.done ? "checked" : ""}
          onChange={(e) => {
            props.item.done = e.target.checked;
            props.updateItem();
          }}
        />
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className={props.item.done ? "done" : "not-done"}
          type="text"
          readOnly={mode ? "" : "readonly"}
          onClick={(e) => {
            console.log("clicked!");
            setMode(true);
          }}
          onBlur={(e) => {
            console.log("blur!");
            props.item.title = title;
            props.updateItem(props.item);
            setMode(false);
          }}
        />
        <button
          onClick={(e) => {
            setMode(!mode);
            if (mode) {
              props.item.title = title;
              props.updateItem();
            } else {
            }
          }}
        >
          {mode ? "수정완료" : "수정"}
        </button>
        <button
          onClick={(e) => {
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
