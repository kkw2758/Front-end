import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Read from "./components/Read";
import Delete from "./components/Delete";
import Create from "./components/Create";
import Update from "./components/Update";
import "./App.css";

function App() {
  console.log("App 컴포넌트 실행");
  const [productList, setProductList] = useState([]);
  const [noCount, setNoCount] = useState(1);
  useEffect(() => {
    const localStorageData = localStorage.getItem("productListData");
    if (localStorageData) {
      console.log("useEffect내 set함수 실행");
      let objData = JSON.parse(localStorageData);
      setProductList(objData.productList);
      setNoCount(objData.noCount);
    }
  }, []);

  function saveLocalStorage(newProductList, noCnt) {
    localStorage.setItem(
      "productListData",
      JSON.stringify({ productList: newProductList, noCount: noCnt })
    );
  }

  function createProduct(formData) {
    const newList = [...productList, { no: noCount, ...formData }];
    const noCnt = noCount + 1;
    setProductList(newList);
    setNoCount(noCnt);
    saveLocalStorage(newList, noCnt);
  }

  function updateProduct() {
    const newList = [...productList];
    setProductList(newList);
    saveLocalStorage(newList, noCount);
  }

  function deleteProduct(delNo) {
    const newList = productList.filter((item, index) => {
      return item.no !== delNo;
    });
    setProductList(newList);
    saveLocalStorage(newList, noCount);
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/read"
            element={<Read productList={productList} />}
          ></Route>
          <Route
            path="/create"
            element={<Create createProduct={createProduct} />}
          ></Route>
          <Route
            path="/update/:no"
            element={
              <Update productList={productList} updateProduct={updateProduct} />
            }
          ></Route>
          <Route
            path="/delete/:no"
            element={<Delete deleteProduct={deleteProduct} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
