import React, { useState } from "react";
import "./App.css";

function ItemRow({ item, removeItem }) {
  return (
    <li>
      <p>
        <input type="checkbox" />
        <input type="text" value={item.title} disabled />
        <button
          onClick={(e) => {
            removeItem(item.no);
          }}
        >
          삭제
        </button>
      </p>
    </li>
  );
}

function InputItem(props) {
  const [newWork, setNewWork] = useState("");
  return (
    <div>
      할일 :{" "}
      <input
        type="text"
        value={newWork}
        onChange={(e) => {
          console.log(props);
          setNewWork(e.target.value);
          console.log(newWork);
        }}
      />
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

// 두번넘거야함 쓰지도않는데 넘기는데만 사용 > Redux가 해결
// 중간에 받아서 넘겨줘야함
function TodoList({ todoList, removeItem }) {
  return (
    <div>
      <ul>
        {todoList.map((item, idx) => {
          return <ItemRow key={item.no} item={item} removeItem={removeItem} />;
        })}
      </ul>
    </div>
  );
}

// State값이 업데이트 될때마다 컴포넌트가 재실행되기 때문입니다.

function App() {
  const [noCount, setNoCount] = useState(5);
  // 과제 1: 취소선 기능 추가
  // 과제 2: todolist 데이터를 LocalStorage에 저장.
  const [todoList, setTodoList] = useState([
    { no: 1, title: "점심 먹기", done: false },
    { no: 2, title: "산책 하기", done: false },
    { no: 3, title: "배운 것 복습하기", done: false },
    { no: 4, title: "내일 수업 예습하기", done: false },
  ]);

  // let noCount = 5;

  function appendItem(newItem) {
    console.log(noCount);
    setTodoList([...todoList, { no: noCount, title: newItem, done: false }]);
    setNoCount(noCount + 1);
  }
  // filter 사용
  function removeItem(no) {
    var newList = todoList.filter((item, idx) => {
      return item.no !== no;
    });
    setTodoList(newList);
  }
  return (
    <>
      <h1>Todo List</h1>
      <InputItem appendItem={appendItem} />
      <hr />
      <TodoList todoList={todoList} removeItem={removeItem} />
    </>
  );
}

export default App;
