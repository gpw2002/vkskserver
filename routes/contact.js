var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../model/user');
var Product = require('../model/product');
require('../dbcon/dbc')

router.post('/reg-std', async (req, res, next) => {
    const { uname, email, description } = req.body
    console.log(req.body)
    if (!uname || !email || !description) {
        return res.json({ error: "Fill all details" })
    }
    try {
        let isRegisterAvailable = await
            User.findOne({ username: email })
        if (isRegisterAvailable) {
            return res.json({ error: "Duplicate data" })
        }
        const register = new User({ uname, email, description })
        await register.save()
        return res.json({ Success: "Registration successful" })
    }
    catch (err) {
        console.log(err)
        res.json({ error: "Failed" })
    }
});

router.get('/log1-std/', async (req, res, next) => {

    try {
        let byUsername = await User.find()
        return res.json({ data: byUsername });
    }
    catch (err) {
        console.log(err);
        res.json({ error: "Failed" });
    }
});

module.exports = router;