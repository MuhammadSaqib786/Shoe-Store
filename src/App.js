import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { Products } from "./Components/Products";
import { ProductDetails } from "./Components/ProductDetails";
import { ProductIndex } from "./Components/ProductIndex";
import { ProductMen } from "./Components/ProductMen";
import { ProductWomen } from "./Components/ProductWomen";
function NotFound() {
  return (
    <div>
      <span style={{ color: "red" }}>Page Not Found</span>
    </div>
  );
}
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="men" element={<ProductMen />}></Route>
          <Route path="women" element={<ProductWomen />}></Route>
          <Route path="products" element={<Products />}>
            <Route path="/" element={<ProductIndex />}></Route>
            <Route path=":productId" element={<ProductDetails />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
