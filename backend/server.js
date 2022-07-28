require("dotenv").config(); 
const express = require ("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectDB();

const app = express();

app.use(express.json());

const indexRoutes = require("./routes/productRoutes")

app.get("/", (req, res) => {
    res.json({ message: "This API is working" });
  });

app.use("/",productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`) )