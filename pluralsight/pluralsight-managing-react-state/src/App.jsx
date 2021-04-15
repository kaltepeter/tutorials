import React, {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom';
import "./App.css";
import Cart from "./Cart";
import Detail from "./Detail";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('cart')) || [];
    } catch(e) {
      console.error('The cart could not be parsed into json');
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (id, sku) => {
    setCart((items) => {
      const itemInCart = items.find(i => i.sku === sku);
      if (itemInCart) {
       return items.map((i) => i.sku === sku ? {...i, quantity: i.quantity + 1} : i) 
      } else {
        return [...items, {id, sku, quantity: 1}]
      }
    })
  }

  function updateQuantity(sku, quantity) {
    setCart((items) => {
      return (quantity === 0) ? items.filter(i => i.sku !== sku) :items.map(i => i.sku === sku ? {...i, quantity} : i);
    })
  }

  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Welcome to Carved Rock Fitness</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
