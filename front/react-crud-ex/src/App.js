import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Delete from "./components/Delete";
import Create from "./components/Create";
import Update from "./components/Update";
import "./App.css";

function App() {
  const [productList, setProductList] = useState([]);
  function createProduct(formData) {
    const newList = [...productList, formData];
    setProductList(newList);
    console.log(newList);
  }
  console.log("productList", productList);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main productList={productList} />}></Route>
          <Route
            path="/create"
            element={<Create createProduct={createProduct} />}
          ></Route>
          <Route path="/update" element={<Update />}></Route>
          <Route path="/delete" element={<Delete />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
