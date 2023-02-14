import React, { useState } from "react";

// props.createProduct
function Create(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

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
      <form>
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
            e.preventDefault();
            const formData = {
              name: name,
              description: description,
              price: price,
              category: category,
            };
            props.createProduct(formData);
            console.log(formData);
          }}
        >
          Save
        </button>
      </form>
    </>
  );
}

export default Create;
