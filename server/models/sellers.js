const mongoose = require('mongoose');

const sellers = new mongoose.Schema({
    
    userId: {
        type: String,
        required: true,
        unique: true
    },
    
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    number: {
        type: Number,
        unique: true
    },

    website: {
        type: String,
        unique: true
    },

    pdf: {
        type: String,   
    },
    
    gigs: [
        {
        category: String,
        price: Number,
        description: String
        }
    ]


})


const Sellers = mongoose.model("Sellers", sellers);
module.exports = Sellers;