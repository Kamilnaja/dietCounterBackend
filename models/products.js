const mongoose = require('mongoose');
const productsSchema = mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    kcal: {
        type: Number
    },
    info: {
        type: String
    },
    category: {
        type: String
    }
})

module.exports = productsSchema;