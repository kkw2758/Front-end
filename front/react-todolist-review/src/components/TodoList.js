import React from "react";
import ItemRow from "./ItemRow";

function TodoList(props) {
  return (
    <div>
      <ol>
        {props.todoList.map((item, index) => {
          return (
            <ItemRow
              key={item.no}
              removeItem={props.removeItem}
              updateItem={props.updateItem}
              item={item}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default TodoList;
