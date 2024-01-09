const cart = [];
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/productModels.js");
const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)

.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));


app.get("/api/products", async (req, res) => {
    try {
      const products = await Product.find();
      console.log("Products from MongoDB:", products);
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    const productId = req.params.id;
    console.log("Product id :",productId)
  
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error("Error fetching product by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.get("/api/cart", (req, res) => {
    console.log("Fetching Cart Data:", cart);
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Pragma", "no-cache");
    res.json(cart);
  })

  app.post("/api/cart", async (req, res) => {
    try {
      console.log("Request body:", req.body);
      const { productId, quantity } = req.body;
      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
  
      const cartItem = {
        product,
        quantity,
      };
      cart.push(cartItem);

      console.log("Updated Cart:", cart);

      res.status(201).json({ success: true, cart: cartItem });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.delete("/api/cart/:productId", (req, res) => {
    const productIdToDelete = req.params.productId;
    const index = cart.findIndex((item) => item.product._id === productIdToDelete);
  
    if (index !== -1) {
      cart.splice(index, 1);
      res.json({ success: true, message: "Item removed from the cart" });
    } else {
      res.status(404).json({ error: "Item not found in the cart" });
    }
  });

  // Start server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
