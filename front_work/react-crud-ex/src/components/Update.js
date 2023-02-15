import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Update(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [idx, setIdx] = useState(-1);
  const params = useParams();
  const editNo = Number(params.no);

  useEffect(() => {
    const localStorageData = localStorage.getItem("productListData");
    if (localStorageData) {
      let objData = JSON.parse(localStorageData).productList;
      const targetIdx = objData.findIndex((item, index) => {
        return item.no === editNo;
      });
      setIdx(targetIdx);
      setName(objData[targetIdx].name);
      setDescription(objData[targetIdx].description);
      setPrice(objData[targetIdx].price);
      setCategory(objData[targetIdx].category);
    }
  }, [editNo]);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <h1>Update Products</h1>
      <hr />
      <div className="mb-3 row">
        <label htmlFor="name" className="col-sm-2 col-form-label">
          Name:
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            value={name}
            onChange={handleName}
            id="name"
            name="name"
            type="text"
          />
        </div>

        <label htmlFor="description" className="col-sm-2 col-form-label">
          Description:
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            value={description}
            onChange={handleDescription}
            id="description"
            name="description"
            type="text"
          />
        </div>

        <label htmlFor="price" className="col-sm-2 col-form-label">
          Price:
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            value={price}
            onChange={handlePrice}
            id="price"
            name="price"
            type="text"
          />
        </div>
        <label htmlFor="category" className="col-sm-2 col-form-label">
          Category:
        </label>
        <div className="col-sm-10">
          <select
            value={category}
            onChange={handleCategory}
            name="category"
            id="category"
          >
            <option value="notSelected">-선택-</option>
            <option value="sports">Sports</option>
            <option value="personal">Personal</option>
          </select>
        </div>
      </div>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          console.log(props.productList[idx]);
          props.productList[idx].name = name;
          props.productList[idx].description = description;
          props.productList[idx].price = price;
          props.productList[idx].category = category;

          props.updateProduct();
          window.location.href = "/";
        }}
      >
        Save
      </button>
    </>
  );
}

export default Update;
