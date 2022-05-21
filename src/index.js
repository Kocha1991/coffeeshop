import React from "react";
import { render } from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import MainPage from "./pages/MainPage";
import AboutIt from "./pages/AboutIt";
import OtherProducts from "./pages/OtherProducts";

const rootElement = document.getElementById("root");

render(
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="products" element={<Products />} />
      <Route path="aboutIt/:id" element={<AboutIt />} />
      <Route path="otherProducts" element={<OtherProducts />} />
    </Routes>
  </Router>,
  rootElement
);
