
const express = require('express');
const { shop } = require('../controllers/shop');
const router = express.Router();

const { getIndex, getProducts, getCart, getCheckout, getOrders, getProductById, postCart } = shop;

router.get('/', getIndex);

router.get('/products', getProducts);

router.get('/products/:productId', getProductById);

router.post('/cart', postCart);

router.get('/cart', getCart);

router.get('/orders', getOrders);

router.get('/checkout', getCheckout);

module.exports = router;