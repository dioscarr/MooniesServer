const adminController = require('../controllers/admin');
const express = require('express');

const router = express.Router();

//url: /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

//url: /admin/products => GET
router.get('/products', adminController.getProducts);

//url: /admin/product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports.routes = router;
