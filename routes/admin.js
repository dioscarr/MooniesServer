const path = require('path');
const rootDir = require('../util/path');
const express = require('express');
const router = express.Router();
const products = [];
router.get('/add-product',(req, res, next)=>{
    //res.sendFile(path.join(rootDir,'views','add-product.html'))
    res.render('add-product',{PageTitle:"Add"});
});
router.post('/product',(req, res, next)=>{
    console.log(req.body);
    products.push(
        {   title:req.body.title,
            description:`Lorem ipsum dolor sit amet, llis turpis consectetuer sit, aliquam mauris enim, malesuada eget nec nulla, amet quam adipiscing risus, ante consequat. Nec enim, velit fringilla magnis nam duis mauris aliquam.`,
            price: `$251`
        });
    res.redirect("/");
});
module.exports.routes = router;
module.exports.products = products