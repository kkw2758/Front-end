import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// react-redux 관련 모듈 import
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

// 세터, 관리해주는것 리듀서
const currentState = { count: 10, age: 21 };

function reducer(state = currentState, action) {
  if (currentState === undefined) {
    return { count: 10 };
  }
  if (action.type === "changeCnt") {
    state.count = action.count;
  }
  if (action.type === "count증가") {
    console.log("증가");
    state.count++;
  }
  if (action.type === "count감소") {
    state.count--;
  }
  if (action.type === "changeAge") {
    state.age = action.age;
  }
  if (action.type === "age증가") {
    state.age++;
  }
  if (action.type === "age감소") {
    state.age--;
  }
  const newState = { ...state };
  return newState;
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
