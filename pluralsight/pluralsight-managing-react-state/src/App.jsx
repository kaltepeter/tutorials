import React from "react";
import {Routes, Route} from 'react-router-dom';
import "./App.css";
import Cart from "./Cart";
import Detail from "./Detail.class";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import Checkout from './Checkout.class'
import {useCart} from './cartContext';

export default function App() {
  const {dispatch} = useCart();

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout dispatch={dispatch} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
