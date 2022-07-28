require("dotenv").config(); 
const express = require ("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const productsData = require("./data/products");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.json({ message: "This API is working" });
  });
app.get("/api/productData", function(req, res){
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Origin", "*");
  return res.json(productsData);
});
app.use("api/products",productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`) )