
const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();
//routes
router.get('/',productsController.getProducts);
module.exports = router;