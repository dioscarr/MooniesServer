const fs = require('fs');
const path = require('path');

const cartJsonPath = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(cartJsonPath, (err, fileContent) => {
            let cart = { products: [], tototalPrice: 0 }
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            }
            else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.tototalPrice = cart.tototalPrice + +productPrice;
            fs.writeFile(cartJsonPath, JSON.stringify(cart), (err) => {
                console.log(err);
            });

        });
    }
    static removeById = (prodId) => {
        fs.readFile(cartJsonPath, (err, fileContent) => {
            if (!err) {
                let updatedCart = JSON.parse(fileContent).filter(item => item.id !== prodId);
                console.log('total: ' + updatedCart.tototalPrice);
                let removedTotal = Product.find(itm => item).price * JSON.parse(fileContent).filter(item => item.id === prodId).qty;
                console.log('removedTotal: ' + removedTotal);
                updatedCart.tototalPrice = updatedCart.tototalPrice - removedTotal;
                console.log(' updatedCart.tototalPrice: ' + updatedCart.tototalPrice);
                fs.writeFile(cartJsonPath, JSON.stringify(updatedCart), (err) => {
                    console.log(err);
                });
            }
        });
    }
}

exports.Cart = Cart;