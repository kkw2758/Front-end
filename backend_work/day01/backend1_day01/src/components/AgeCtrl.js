import React from "react";
import { useDispatch, useSelector } from "react-redux";

function AgeCtrl(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.age;
  });
  return (
    <>
      <fieldset>
        <h3>age Controller</h3>
        <p>
          직접 입력:{" "}
          <input
            type="text"
            value={count}
            onChange={(e) => {
              dispatch({ type: "changeAge", age: e.target.value });
            }}
          />
        </p>
        <button
          onClick={() => {
            dispatch({ type: "age증가" });
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            dispatch({ type: "age감소" });
          }}
        >
          감소
        </button>
      </fieldset>
    </>
  );
}

export default AgeCtrl;
