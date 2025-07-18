const mongoose = require('mongoose');

const users = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    }
})


const Users = mongoose.model("Users", users);
module.exports = Users;