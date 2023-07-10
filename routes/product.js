var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../model/product');
require('../dbcon/dbc')

router.post('/add-product-std', async (req, res, next) => {
    const { productid, productname, productcompany, producttype, productcrop, productmrp, productsellprice, productimage, productdescription, productweight } = req.body
    console.log(req.body)
    if (!productid || !productname || !productcompany || !producttype || !productcrop || !productmrp || !productsellprice || !productimage || !productdescription || !productweight) {
        return res.json({ error: "Fill all details" })
    }
    try {
        const register = new Product({ productid, productname, productcompany, producttype, productcrop, productmrp, productsellprice, productimage, productdescription, productweight })
        await register.save()
        return res.json({ Success: "Registration successful" })
    }
    catch (err) {
        console.log(err)
        res.json({ error: "Failed" })
    }
});

router.get('/product-std/', async (req, res, next) => {

    try {
        let byUsername = await Product.find()
        return res.json({ data: byUsername });
    } 
    catch (err) {
        console.log(err);
        res.json({ error: "Failed" });
    }
});

module.exports = router;