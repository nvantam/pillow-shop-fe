import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import HomePage from './View/Page/HomePage/HomePage';
import Product from './View/Page/ProductPage/Product';
import Blog from './View/Page/BlogPage/Blog';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from './View/Page/ProductDetails/ProductDetails';
import Cart from './View/Page/CartPage/Cart';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<HomePage />} />
          <Route path="Product" element={<Product />} />
          <Route path="HomePage" element={<HomePage />} />
          <Route path="ProductDetails/:productId" element={<ProductDetails />} />
          <Route path="Cart/:productId" element={<Cart />} />
          <Route path="Blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
