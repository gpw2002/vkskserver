const mongoose = require('mongoose')
require('../dbcon/dbc')
const userSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}) 
const User = mongoose.model('contact',userSchema)

module.exports = User