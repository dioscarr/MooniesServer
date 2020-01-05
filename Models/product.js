const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
const getProductFromFile = cb => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        else {
            return cb(JSON.parse(fileContent));
        }
    });
}


module.exports = class Product {
    constructor(id, title, imgurl, price, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgurl = imgurl;
        this.price = price;
    }
    save() {

        getProductFromFile(products => {

            if (this.id) {
                const crrProdIndx = products.findIndex(prod => prod.id === this.id);
                console.log("crrProdIndx: " + crrProdIndx);
                if (crrProdIndx !== null) {
                    let updatedProds = [...products];
                    //console.log("updatedProds: " + JSON.stringify(updatedProds));


                    console.log("this: " + JSON.stringify(this));
                    updatedProds[crrProdIndx] = this;
                    console.log("updatedProds[crrProdIndx]: " + JSON.stringify(updatedProds[crrProdIndx]));
                    fs.writeFile(p, JSON.stringify(updatedProds), (err) => {
                        console.log(err);
                    });
                }
            } else {
                this.id = Math.round().toString();
                products.push(this);
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    console.log(err);
                });
            }


        });
    }
    static fetchAll(cb) {
        getProductFromFile(cb);
    }
    static findById(id, cb) {
        getProductFromFile(item => {
            const prod = item.find(p => p.id === id);
            cb(prod)
        });
    }
    static findById(id) {
        getProductFromFile(items => {
            const prods = items.filter(p => p.id !== id);
            fs.writeFile(p, JSON.stringify(prods), (err) => {
                console.log(err);
            });
        });
    }
}


