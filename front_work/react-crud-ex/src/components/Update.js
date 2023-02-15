import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Update(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const params = useParams();
  const editNo = Number(params.no);
  const idx = props.productList.findIndex((item, idx) => {
    return item.no === editNo;
  });
  console.log("idx", idx);
  console.log(editNo);
  if (idx !== -1) {
    setName(props.productList[idx].name);
    setDescription(props.productList[idx].description);
    setPrice(props.productList[idx].price);
    setCategory(props.productList[idx].category);
  }
  // console.log(props.productList[idx].no);

  const handleName = (event) => {
    setName(event.target.value);
    // console.log(name);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
    // console.log(description);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
    // console.log(price);
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          value={name}
          onChange={handleName}
          id="name"
          name="name"
          type="text"
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          value={description}
          onChange={handleDescription}
          id="description"
          name="description"
          type="text"
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          value={price}
          onChange={handlePrice}
          id="price"
          name="price"
          type="text"
        />
        <br />
        <label htmlFor="category">Category:</label>
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
        <br />
        <button
          onClick={(e) => {
            const formData = {
              name: name,
              description: description,
              price: price,
              category: category,
            };
            props.createProduct(formData);
            console.log(formData);
            window.location.href = "./Read";
          }}
        >
          Save
        </button>
      </div>
    </>
  );
}

export default Update;