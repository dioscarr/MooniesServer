
const path = require('path');
//util
const rootDir = require('../util/path');
const adminData = require('./admin');
const express = require('express');

const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log("GET:/ Shop Route");
    const tempproducts = adminData.products;
    console.log(tempproducts);
    //res.sendFile(path.join(rootDir,'views','shop.html'))
    res.render('shop',{prods:tempproducts,PageTitle:"Shop"});
});

module.exports = router;