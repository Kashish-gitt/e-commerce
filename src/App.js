import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import ProductList from './components/ProductList';
import {CategoryContextProvider} from './components/CategoryContext'
import ProductDetails from './components/ProductDetails';
import AddToCartPage from './components/AddToCart';
function App() {
  return (
    <Router>
      <CategoryContextProvider>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/add-to-cart" element={<AddToCartPage/>} />
        <Route path="/categories/:category" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails/>} />

      </Routes>
      </CategoryContextProvider>
    </Router>
  );
}

export default App;
