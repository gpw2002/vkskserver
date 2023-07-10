var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Type = require('../model/type');
require('../dbcon/dbc')

router.get('/type-std/', async (req, res, next) => {

    try {
        let byUsername = await Type.find({})
        return res.json({ data: byUsername });
    }
    catch (err) {
        console.log(err);
        res.json({ error: "Failed" });
    }
});

router.get('/type-name-std/', async (req, res, next) => {

    try {
        let byUsername = await Type.distinct("type")
        return res.json({ data: byUsername });
    }
    catch (err) {
        console.log(err);
        res.json({ error: "Failed" });
    }
});

router.get('/type-seed-std/', async (req, res, next) => {

    try {
        let byUsername = await Type.find({type:'seed'})
        return res.json({ data: byUsername });
    }
    catch (err) {
        console.log(err);
        res.json({ error: "Failed" });
    }
});

router.get('/type-pesticide-std/', async (req, res, next) => {

    try {
        let byUsername = await Type.find({type:'pesticide'})
        return res.json({ data: byUsername });
    }
    catch (err) {
        console.log(err);
        res.json({ error: "Failed" });
    }
});

router.get('/type-fertilizer-std/', async (req, res, next) => {

    try {
        let byUsername = await Type.find({type:'fertilizer'})
        return res.json({ data: byUsername });
    }
    catch (err) {
        console.log(err);
        res.json({ error: "Failed" });
    }
});

router.get('/type-equipment-std/', async (req, res, next) => {

    try {
        let byUsername = await Type.find({type:'equipment'})
        return res.json({ data: byUsername });
    }
    catch (err) {
        console.log(err);
        res.json({ error: "Failed" });
    }
});

module.exports = router;