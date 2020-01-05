
const Product = require('../Models/Product');
const { Cart } = require('../Models/Cart');
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
    Product.fetchAll(prods => {
        const ProdsVM = {
            prods: prods,
            PageTitle: "Shop",
            path: '/products',
            hasProduct: prods.length > 0,
            activeShop: true,
            productCSS: true
        };
        res.render('shop/product-list', ProdsVM);
    });
};


const getProductById = (req, res, next) => {
    const productId = req.params.productId;
    Product.findById(productId, p => {
        const prodVM = { prod: p, PageTitle: 'Product Detail', path: 'product-detail' };
        res.render('shop/product-detail', prodVM);
    });
};

const getCart = (req, res, next) => {
    const CartVM = {
        PageTitle: "Your Cart",
        path: '/cart'
    };

    res.render('shop/cart', CartVM);
}
const postCart = (req, res, next) => {
    console.log('postCart');

    const { productId } = req.body;

    Product.findById(productId, prod => {
        Cart.addProduct(prod.id, prod.price)
    });

    res.redirect('/cart');
}

const getCheckout = (req, res, next) => {
    const CheckoutVM = {
        PageTitle: "Checkout",
        path: '/checkout'
    };

    res.render('shop/checkout', CheckoutVM);
}

const getOrders = (req, res, next) => {


    Product.fetchAll(prod => {
        res.render('shop/orders', {
            PageTitle: "Orders",
            path: '/orders'
        });
    });
};





exports.shop = { getIndex, getProducts, getCart, getCheckout, getOrders, getProductById, postCart };