import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Productsingle from "./pages/Productsingle";
import Cart from "./pages/Cart";
import Footer from "./Components/Footer";
import About from './pages/About';
import Contact from './pages/Contact';
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.product._id === product._id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <Navbar cart={cart} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/product/:id" element={<Productsingle addToCart={addToCart} />} />
          <Route path="/cart/" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;