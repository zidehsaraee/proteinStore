import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { Link } from "react-router-dom";

export default function Product({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

 
  const handleAddToCart = async () => {
    try {
      console.log("Adding to cart:", { productId: product._id, quantity });
      await fetch("http://localhost:5001/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: product._id, quantity }),
      });

      addToCart({ product, quantity });
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };


  const [productRating, setProductRating] = useState(0);
  const handleRatingChange = (value) => {
    setProductRating(value);
  };

  return (
    <div className="card">
      <Link to={`/product/${product._id}`}>
        <img src={product.image} alt="" />
        <div className="product-content">
          <h4 className="pro-title">{product.name}</h4>
          <p className="pro-short-desc">{product.shortDescription}</p>
          <div className="pro-footer">
            <span className="price">£{product.price}</span>
            <div className="rate">
              <Rating
                initialRating={productRating}
                emptySymbol={<i className="far fa-star"></i>}
                fullSymbol={<i className="fas fa-star"></i>}
                onChange={handleRatingChange}
              />
            </div>
          </div>
        </div>
      </Link>
      <button className="add-to-care-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
