import "./App.css";
import React, { useEffect, useState } from "react";
import InputItem from "./component/InputItem";
import TodoList from "./component/TodoList";

const App = () => {
  // App 컴포넌트가 mount되면 실행
  // useEffect(() => {
  //   let localTodoList = localStorage.getItem("todoList");
  //   console.log("EFFECT", localTodoList);

  //   if (localTodoList === null) {
  //     console.log("EFFECT 발동");
  //     localTodoList = [
  //       { no: 1, title: "점심 먹기", done: false },
  //       { no: 2, title: "산책 하기", done: false },
  //       { no: 3, title: "배운 것 복습하기", done: false },
  //       { no: 4, title: "내일 수업 예습하기", done: false },
  //     ];
  //     localStorage.setItem("todoList", JSON.stringify(localTodoList));
  //   }
  // }, []);

  let localTodoList = localStorage.getItem("todoList");
  console.log("A");
  if (localTodoList == null) {
    localTodoList = [
      { no: 1, title: "점심 먹기", done: false },
      { no: 2, title: "산책 하기", done: false },
      { no: 3, title: "배운 것 복습하기", done: false },
      { no: 4, title: "내일 수업 예습하기", done: false },
    ];
    localStorage.setItem("todoList", JSON.stringify(localTodoList));
  }

  const parsedLocalTodoList = localStorage.getItem("todoList");
  const [noCount, setnoCount] = useState(5);
  const [todoList, setTodoList] = useState(JSON.parse(parsedLocalTodoList));

  function removeItem(deleteNo) {
    // deleteNo에 해당되는 값 제외된 newArr
    const newArr = todoList.filter((item, idx) => {
      return item.no !== deleteNo;
    });
    setTodoList(newArr);
    // localStorage 값 갱신
    localStorage.setItem("todoList", JSON.stringify(newArr));
  }

  function appendItem(item) {
    const newArr = [...todoList, { no: noCount, title: item, done: false }];
    setTodoList(newArr);
    setnoCount((now) => now + 1);
    localStorage.setItem("todoList", JSON.stringify(newArr));
  }
  function onToggle(targetNo) {
    const newArr = [];
    todoList.map((item, index) => {
      if (item.no == targetNo) {
        item.done = !item.done;
      }
      newArr.push(item);
    });
    console.log(newArr);
  }
  return (
    <>
      <h1>Todo List</h1>
      <InputItem appendItem={appendItem} />
      <hr />
      {
        //화면 출력 부분
      }
      <TodoList
        todoList={todoList}
        removeItem={removeItem}
        onToggle={onToggle}
      />
    </>
  );
};

export default App;
