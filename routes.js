const express = require('express');
const router = express.Router();
const productsCtrl = require('./controllers/productsCtrl');
const diaryEntryCtrl = require('./controllers/diaryEntryCtrl');

router.get('/allProducts', productsCtrl.getProducts);
router.get('/categories', productsCtrl.getCategories);
router.get('/forbidden', productsCtrl.getForbidden);
router.get('/permitted', productsCtrl.getPermitted);

router.get('/diaryEntry', diaryEntryCtrl.getDiaryEntry);

module.exports = router;