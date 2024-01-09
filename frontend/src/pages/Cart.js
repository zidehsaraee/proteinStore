import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [cart, setCart] = useState([]);

  const handleQuantityChange = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.product._id === productId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  };

  const handleDeleteItem = async (productId) => {
    try {
      await fetch(`http://localhost:5001/api/cart/${productId}`, {
        method: "DELETE",
      });
      setCart((prevCart) =>
        prevCart.filter((item) => item.product._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting item from cart:", error);
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/cart");
        if (!response.ok) {
          console.error("Failed to fetch cart:", response.statusText);
          return;
        }
        const data = await response.json();
        setCart(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  return (
    <div className="cart-Wrapper">
      <h1 className="cart-page-title">Cart</h1>

      <div className="cart-content-wrapper">
        <table>
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => {
              console.log(cartItem.product.price);
              const total = cartItem.product.price * cartItem.quantity;
              return (
                <tr key={cartItem.product._id}>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(cartItem.product._id)}
                    >
                      <span className="material-symbols-outlined Delete">Delete</span>
                    </button>
                  </td>
                  <td>
                    <img src={cartItem.product.image} alt="" />
                  </td>
                  <td>{cartItem.product.name}</td>
                  <td>£{cartItem.product.price}</td>
                  <td>
                    <select
                      value={cartItem.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          cartItem.product._id,
                          parseInt(e.target.value, 10)
                        )
                      }
                    >
                      {[...Array(cartItem.product.countInStock).keys()].map(
                        (i) => (
                          <option key={i} value={i + 1}>
                            {i + 1}
                          </option>
                        )
                      )}
                    </select>
                  </td>
                  <td>£{total.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
