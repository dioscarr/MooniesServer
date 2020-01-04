
const Product = require('../Models/Product');

const getIndex = (req, res, next) => {
    Product.fetchAll(prod_model => {
        const ShopVM = {
            prods: prod_model,
            PageTitle: "shop",
            path: '/',
            hasProduct: prod_model.length > 0,
            activeShop: true,
            productCSS: true
        }

        res.render('shop/index', ShopVM);
    });
}

const getProducts = (req, res, next) => {
    Product.fetchAll(prod => {
        const ProdsVM = {
            prods: prod,
            PageTitle: "Shop",
            path: '/products',
            hasProduct: prod.getProducts.length > 0,
            activeShop: true,
            productCSS: true
        };

        res.render('shop/product-list', ProdsVM);
    });
};

const getCart = (req, res, next) => {
    const CartVM = {
        PageTitle: "Your Cart",
        path: '/cart'
    };

    res.render('shop/cart', CartVM);
}

const getCheckout = (req, res, next) => {
    const CheckoutVM = {
        PageTitle: "Checkout",
        path: '/checkout'
    };

    res.render('shop/chckout', CheckoutVM);
}

exports.shop = { getIndex, getProducts, getCart, getCheckout };