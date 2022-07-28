const { Router } = require("express");
const express = require("express");
const Product =require("../models/Product");

const router = express();

router.get("/getAllProducts", async (req, res) =>{
    try{
        const products = await Product.find({});
        res.json(products);
    } catch (error){
        console.error(error);
        res.status(500).json({message: "SERVER ERROR"});
    }
});

module.exports = router;


