import React from 'react';
import './style.css';
import Header from './containers/Header.js';
import ProductDetails from './containers/ProductDetails.js';
import ProductListing from './containers/ProductListing.js';
import Cart from './containers/Cart.js';

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="*">404 darling</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
