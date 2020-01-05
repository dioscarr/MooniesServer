const { admin } = require('../controllers/admin');
const express = require('express');

const router = express.Router();

const { getAddProduct, getProducts, getOrders, postAddProduct, getEditProduct, postEditProduct, postDeleteProduct } = admin

//url: /admin/add-product => GET
router.get('/add-product', getAddProduct);

//url: /admin/products => GET
router.get('/products', getProducts);

//url: /admin/products => GET
router.get('/edit-product/:prodId', getEditProduct);

//url: /admin/edit-product POST
router.post('/edit-product', postEditProduct);

//url: /admin/product => POST
router.post('/add-product', postAddProduct);

//url: /admin/product => POST
router.post('/delete-product', postDeleteProduct);

module.exports.routes = router;
