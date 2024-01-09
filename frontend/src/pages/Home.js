import React, { useState, useEffect } from "react";
import Product from "../Components/Product";
import "./Home.css";

export default function Home({ addToCart }) {
  const [productsData, setProductsData] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/products");
      console.log("Server Response:", response);

      const data = await response.json();
      setProductsData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="theInfo">
      <h1 className="TitleTitle">MuscleGrowth</h1>
        <h3>Feel free to look around</h3>
        <p>whatever catches your eye, get it</p>
      </div>
      <h1>Our Products</h1>
      <div className="products-wraper">
        {
          productsData.map((product) => (
            <Product
              key={`${product._id}`}
              product={product}
              addToCart={addToCart}
            />
          ))}
      </div>
    </div>
  );
}