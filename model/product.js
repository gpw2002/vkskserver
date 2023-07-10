const mongoose = require('mongoose')
require('../dbcon/dbc')

const userSchema = new mongoose.Schema({
    productid: {
        type: String,
        required: true
    },
    productname: {
        type: String,
        required: true
    },
    productimage: {
        type: String,
        required: true
    },
    productcompany: {
        type: String,
        required: true
    },
    producttype: {
        type: String,
        required: true
    },
    productcrop: {
        type: String,
        required: true
    },
    productmrp: {
        type: Number,
        required: true
    },
    productsellprice: {
        type: Number,
        required: true
    },
    productweight: {
        type: String,
        required: true
    },
    productdescription: {
        type: String,
        required: true
    }
}) 
const Product = mongoose.model('products',userSchema)

module.exports = Product