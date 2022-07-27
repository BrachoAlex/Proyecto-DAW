const express = require("express");
const router = express.Router();

const {getAllProducts, getProductById} = require("../controller/productControllers");

//GET ALL ITEMS/PRODUCTS FROM DB
//ROUTE: /api/products

router.get("/", getAllProducts);

//GET SINGLE ITEM/PRODUCT BY ID FROM DB
//ROUTE: /api/products/:id

router.get("/",getProductById);

module.exports = router;