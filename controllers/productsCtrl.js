const mongoose = require('mongoose');
const productsSchema = require('../models/products');
const productsModel = mongoose.model('Product', productsSchema);

function getProductsFromDb(req, res) {
    productsModel
        .find({})
        .exec((err, data) => {
            if (err) console.log(err);
            res.send(data);
        })
}

function getCategoriesFromDb(req, res) {
    productsModel
        .find({})
        .exec((err, data) => {
            if (err) console.log(err);
            res.send(data);
        })
}

function getForbidenFromDb(req, res) {
    productsModel
        .find({ category: 'forbidden' })
        .exec((err, data) => {
            if (err) console.log(err);
            res.send(data);
        })
}

function getPermittedFromDb(req, res) {
    productsModel
        .find({ category: 'permitted' })
        .exec((err, data) => {
            if (err) console.log(err);
            res.send(data);
        })
}

exports.getProducts = (req, res) => {
    getProductsFromDb(req, res);
}

exports.getCategories = (req, res) => {
    getCategoriesFromDb(req, res);
}

exports.getForbidden = (req, res) => {
    getForbidenFromDb(req, res);
}

exports.getPermitted = (req, res) => {
    getPermittedFromDb(req, res);
}