import React, { useState } from "react";
// props.createProduct
function Create(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

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
      <div>
        <h1>Create Products</h1>
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
      </div>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          const formData = {
            name: name,
            description: description,
            price: price,
            category: category,
          };
          props.createProduct(formData);
          console.log(formData);
          window.location.href = "/";
        }}
      >
        Save
      </button>
    </>
  );
}

export default Create;
