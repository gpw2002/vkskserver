const mongoose = require('mongoose')
require('../dbcon/dbc')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    contact: {
        type: Number,
    }
}) 
const User = mongoose.model('users',userSchema)
module.exports = User