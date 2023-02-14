import React from "react";
import ItemRow from "./ItemRow";

// 화면 출력 컴포넌트
function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todoList.map((item, idx) => {
          return (
            <ItemRow
              key={item.no}
              item={item}
              removeItem={props.removeItem}
              updateItem={props.updateItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
