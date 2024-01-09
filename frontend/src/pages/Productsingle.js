import { useParams, Link } from "react-router-dom";
import Rating from "react-rating";
import React, { useState, useEffect } from "react";
import "./Productsingle.css";

export default function Productsingle({ addToCart }) {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          console.log("Fetching product with ID:", id);
          const response = await fetch(
            `http://localhost:5001/api/products/${id}`
          );

          if (response.ok) {
            const data = await response.json();
            setProduct(data);
          } else {
            console.error("Failed to fetch product:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);


  const handleAddToCart = async () => {
    try {
      if (product && product._id) {
        console.log("Adding to cart:", { productId: product._id, quantity: 1 });
        await fetch("http://localhost:5001/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: product._id, quantity: 1 }),
        });
        addToCart({ product, quantity: 1 });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };


  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <div className="single-product-wraper">
        <div className="single-card">
          <img src={product.image} alt="" />
        </div>
        <div className="single-pro-details">
          <div className="single-product-content">
            <h4 className="pro-title">{product.name}</h4>
            <p className="pro-short-desc">{product.longDescription}</p>
            <span className="price">£{product.price}</span>
            <div className="pro-footer">
              <div className="rate">
                <Rating
                  initialRating={product.Rating}
                  emptySymbol={<i className="far fa-star"></i>}
                  fullSymbol={<i className="fas fa-star"></i>}
                />
              </div>
              <Link to="/cart">
                <button className="add-to-care-btn" onClick={handleAddToCart}>
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
