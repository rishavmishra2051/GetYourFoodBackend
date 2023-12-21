const mongoose = require('mongoose')

const { Schema } = mongoose;

const ItemSchema = new Schema({
    CategoryName: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    price: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },

});

module.exports = mongoose.model('item', ItemSchema)
