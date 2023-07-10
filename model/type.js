const mongoose = require('mongoose')
require('../dbcon/dbc')

const userSchema = new mongoose.Schema({
    typeid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    imagename: {
        type: String,
        required: true
    }
}) 
const Type = mongoose.model('types',userSchema)

module.exports = Type