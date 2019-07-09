const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('User', Schema);