import React from "react";

function Read(props) {
  console.log("props.productList", props.productList);
  return (
    <>
      <h1>Read Products</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          window.location.href = "/create/";
        }}
      >
        Create Button
      </button>
      <table className="table">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        {props.productList.map((item, index) => {
          return (
            <tbody key={item.no}>
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      window.location.href = "/update/" + item.no;
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      window.location.href = "/delete/" + item.no;
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default Read;
