require("dotenv").config(); 
const express = require ("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors")

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/", (req, res) => {
    res.json({ message: "This API is working" });
  });

app.use("/",productRoutes =>{
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`) )