
const express = require('express');
const { shop } = require('../controllers/shop');
const router = express.Router();

const { getIndex, getProducts, getCart, getCheckout } = shop;

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/cart', getCart);

router.get('/checkout', getCheckout);

module.exports = router;