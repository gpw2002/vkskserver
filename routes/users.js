var express = require('express');
var router = express.Router();
var Users = require('../model/ls');
require('../dbcon/dbc')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/users-std/', async (req, res, next) => {
  try {
    let byUsername = await Users.find()
    return res.json({ data: byUsername });
  }
  catch (err) {
    console.log(err);
    res.json({ error: "Failed" });
  }
});

module.exports = router;
