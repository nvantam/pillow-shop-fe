import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import HomePage from './View/Page/HomePage/HomePage';
import Product from './View/Page/ProductPage/Product';
import Blog from './View/Page/BlogPage/Blog';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from './View/Page/ProductDetails/ProductDetails';
import Cart from './View/Page/CartPage/Cart';
import Login from './View/Page/LoginPage/Login';
// import Forgetpass from './View/Page/LoginPage/Forgetpass';
import Signup from './View/Page/LoginPage/Signup';
import Pay from './View/Page/PayPage/Pay';
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
          <Route path="Cart" element={<Cart />} />
          <Route path="GioiThieu" element={<Blog />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="/Pay" element={<Pay />} />
          {/* <Route path="Forgetpass" element={<Forgetpass />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
