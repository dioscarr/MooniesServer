const productController = require('../controllers/products');
const express = require('express');

const router = express.Router();

router.get('/add-product',productController.getAddProduct);
router.post('/product',productController.postAddProduct);

module.exports.routes = router;
