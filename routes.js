const express = require('express');
const router = express.Router();
const productsCtrl = require('./controllers/productsCtrl');

router.get('/allProducts', productsCtrl.getProducts);

router.get('/categories', productsCtrl.getCategories);

router.get('/forbidden', productsCtrl.getForbidden);

router.get('/permitted', productsCtrl.getPermitted);

module.exports = router; 