const Product = require('../Models/Product');

//GET Create Form
const getProducts = (req, res, next) => {
    Product.fetchAll(prod => {
        res.render('admin/products', {
            prods: prod,
            PageTitle: "Admin Products",
            path: '/products'
        });
    });
}
const getAddProduct = (req, res, next) => {
    const p = new Product();
    const editProdVM = {
        prod: p,
        PageTitle: "Add",
        path: '/admin/add-product',
        editMode: false
    }
    console.log(`editMode: ${editProdVM.editMode}`);
    res.render('admin/edit-product', editProdVM);
};
//POST Prod Form
const postAddProduct = (req, res, next) => {
    const { title, imgurl, price, description } = req.body;
    const product = new Product(null, title, imgurl, price, description);
    product.save();
    res.redirect("/");
};

const getEditProduct = (req, res, next) => {
    const { editMode } = req.query;
    console.log(`editMode: ${editMode}`);
    const editProdVM = {
        PageTitle: "Edit Product",
        path: '/admin/edit-product',
        editMode: true
    }

    if (!editMode) {
        return res.redirect('/');
    }

    const { prodId } = req.params;
    console.log("prodId: " + prodId);
    Product.findById(prodId, prod => {
        console.log("prod: " + prod);
        if (!prod)
            res.redirect("/");
        editProdVM.prod = prod;
        res.render('admin/edit-product', editProdVM);
    });
};
//POST
const postEditProduct = (req, res, next) => {
    const { prodId, title, imgurl, price, description } = req.body;
    console.log('Update: prodId: ' + prodId);
    const product = new Product(prodId, title, imgurl, price, description);
    product.save();
    res.redirect('/admin/products');
}
const postDeleteProduct = (req, res, next) => {
    const { prodId } = req.body;
    console.log("prodId: " + prodId);
    res.redirect('/admin/products');
}



exports.admin = { postAddProduct, getAddProduct, getProducts, getEditProduct, postEditProduct, postDeleteProduct };