const mongoose = require('mongoose');
const productsSchema = require('../models/products');
const productsModel = mongoose.model('Product', productsSchema);

function returnProducts(req, res) {
    productsModel
        .find({})
        .exec((err, data) => {
            if (err) console.log(err);
            res.send(data);
        })
}

exports.getProducts = (req, res) => {
    returnProducts(req, res);
}