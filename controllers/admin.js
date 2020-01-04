const Product = require('../Models/Product');

//GET Create Form
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { PageTitle: "Add", path: '/admin/add-product' });
};

//POST Prod Form
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(prod => {
        res.render('admin/products', {
            prods: prod,
            PageTitle: "Admin Products",
            path: 'admin/products'
        });
    });
};