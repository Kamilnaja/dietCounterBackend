const mongoose = require('mongoose');
const productsSchema = require('../models/productsModel');
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
            let filteredData = data;
            let categories = [];
            console.log(typeof filteredData);

            for (data in filteredData) {
                if (!categories.includes(filteredData[data].category)) {
                    categories.push(filteredData[data].category);
                }
                console.log(categories);
            }
            res.send(categories);
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

function addProductToDb(req, res) {
    var sent_data = req.body;

    var payload = new productsModel({
        name: req.body.name,
        kcal: req.body.kcal,
        category: req.body.category
    });
    payload.save((err) => {
        if (err) console.log(err);
        productsModel.find({}).exec((err, data) => {
            if (err) console.log(err);
            res.send(data);
        })
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

exports.addProduct = (req, res) => {
    addProductToDb(req, res);
}