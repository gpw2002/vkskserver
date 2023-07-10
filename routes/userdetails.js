var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userdetails = require('../model/userdetails');
require('../dbcon/dbc')

router.get('/userdetails-std/', async (req, res, next) => {

    try {
        let byUsername = await userdetails.find()
        return res.json({ data: byUsername });
    } 
    catch (err) {
        console.log(err);
        res.json({ error: "Failed" });
    }
});

module.exports = router;