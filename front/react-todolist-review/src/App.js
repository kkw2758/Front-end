import React, { useState, useEffect } from "react";
import InputItem from "./components/InputItem";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [noCount, setNoCount] = useState(1);

  useEffect(() => {
    const localStorageData = localStorage.getItem("todoListData");
    if (localStorageData) {
      let objData = JSON.parse(localStorageData);
      setTodoList(objData.todoList);
      setNoCount(objData.noCount);
    }
  }, []);

  function saveLocalStorage(newList, noCnt) {
    localStorage.setItem(
      "todoListData",
      JSON.stringify({ todoList: newList, noCount: noCnt })
    );
  }

  function appendItem(newItem) {
    let newList = [...todoList, { no: noCount, title: newItem, done: false }];
    let noCnt = noCount + 1;
    setTodoList(newList);
    setNoCount(noCnt);
    saveLocalStorage(newList, noCnt);
  }

  function updateItem() {
    const newList = [...todoList];
    setTodoList(newList);
    saveLocalStorage(newList, noCount);
  }

  function removeItem(delNo) {
    const newList = todoList.filter((item, index) => {
      return item.no !== delNo;
    });
    setTodoList(newList);
    saveLocalStorage(newList, noCount);
  }
  return (
    <>
      <h1>TodoList</h1>
      <InputItem appendItem={appendItem} />
      <TodoList
        todoList={todoList}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </>
  );
}

export default App;
