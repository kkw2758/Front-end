import React from "react";
import { useParams } from "react-router-dom";

function Delete(props) {
  console.log("A");
  const params = useParams();
  const delNo = Number(params.no);
  return (
    <>
      <h1>Delete Product</h1>
      <h3>Are you sure?</h3>
      <button
        onClick={(e) => {
          props.deleteProduct(delNo);
          window.location.href = "/Read";
        }}
      >
        YES
      </button>
      <button
        onClick={(e) => {
          window.location.href = "/Read";
        }}
      >
        NO
      </button>
    </>
  );
}

export default Delete;
