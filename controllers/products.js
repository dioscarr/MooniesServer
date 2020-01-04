
const Product = require('../Models/product');
//GET Create Form
exports.getAddProduct = (req, res, next)=>{
    res.render('add-product',{PageTitle:"Add"});
};
//POST Prod Form
exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};
//GET Prods
exports.getProducts = (req, res, next)=>{
    Product.fetchAll(prod =>{
        res.render('shop',{prods:prod,PageTitle:"Shop"});
    })

};