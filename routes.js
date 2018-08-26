const express = require('express');
const router = express.Router();
const productsCtrl = require('./controllers/productsCtrl');
const diaryEntryCtrl = require('./controllers/diaryEntryCtrl');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.get('/all', productsCtrl.getProducts);
router.post('/addProduct', productsCtrl.addProduct);
router.get('/categories', productsCtrl.getCategories);
router.get('/forbidden', productsCtrl.getForbidden);
router.get('/permitted', productsCtrl.getPermitted);

router.get('/diaryEntry', diaryEntryCtrl.getDiaryEntry);

module.exports = router;