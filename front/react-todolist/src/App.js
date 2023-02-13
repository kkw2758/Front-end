import "./App.css";
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
        }}
      >
        추가
      </button>
    </div>
  );
}

// todoList 각한줄
function ItemRow(props) {
  return (
    <li>
      <p>
        <input type="checkbox" />
        <input type="text" value={props.item.title} disabled />
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

// 화면 출력 컴포넌트
function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todoList.map((item, idx) => {
          return (
            <ItemRow key={item.no} item={item} removeItem={props.removeItem} />
          );
        })}
      </ul>
    </div>
  );
}

const App = () => {
  const [noCount, setnoCount] = useState(5);
  const [todoList, setTodoList] = useState([
    { no: 1, title: "점심 먹기", done: false },
    { no: 2, title: "산책 하기", done: false },
    { no: 3, title: "배운 것 복습하기", done: false },
    { no: 4, title: "내일 수업 예습하기", done: false },
  ]);

  function removeItem(deleteNo) {
    setTodoList(
      todoList.filter((item, idx) => {
        return item.no !== deleteNo;
      })
    );
  }

  function appendItem(item) {
    setTodoList([...todoList, { no: noCount, title: item, done: false }]);
    setnoCount((now) => now + 1);
  }
  return (
    <>
      <h1>Todo List</h1>
      <InputItem appendItem={appendItem} />
      <hr />
      {
        //화면 출력 부분
      }
      <TodoList todoList={todoList} removeItem={removeItem} />
    </>
  );
};

export default App;
