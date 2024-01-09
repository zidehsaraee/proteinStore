const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: Number,
  Rating: Number,
  countInStock: Number,
  name: String,
  image: String,
  price: Number,
  shortDescription: String,
  longDescription: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
 
