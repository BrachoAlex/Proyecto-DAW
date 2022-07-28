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
router.post("/addProduct", async(req,res) =>{
    let product = new Product(req.body);
    
    await product.save();
    res.json(product);
});

router.delete("/deleteProduct",async(req,res) =>{
    let product =await Product.findById(req.body.id)
    if (product){
        await product.delete()
        res.json({msg: "PRODUCT DELETED"})
    }
    else {
        res.json({msg: "COULD NOT DELETE PRODUCT"})
    }
});
module.exports = router;


