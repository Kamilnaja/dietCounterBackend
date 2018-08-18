const express = require('express');
const router = express.Router();
const productsCtrl = require('./controllers/productsCtrl');

router.get('/allProducts', productsCtrl.getProducts);

module.exports = router;