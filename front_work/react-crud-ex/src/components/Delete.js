import React from "react";
import { useParams } from "react-router-dom";
import "./Delete.css";
function Delete(props) {
  console.log("A");
  const params = useParams();
  const delNo = Number(params.no);
  return (
    <>
      <h1>Delete Product</h1>
      <hr />
      <div className="container">
        <h3>Are you sure?</h3>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            props.deleteProduct(delNo);
            window.location.href = "/";
          }}
        >
          YES
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            window.location.href = "/";
          }}
        >
          NO
        </button>
      </div>
    </>
  );
}

export default Delete;
