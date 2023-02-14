import React from "react";

function Main(props) {
  console.log(props.productList);
  return (
    <>
      <h1>Read Products</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        {props.productList.map((item, index) => {
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>300</td>
            </tr>
          </tbody>;
        })}
      </table>
    </>
  );
}

export default Main;
