const fs = require('fs');
const path = require('path');
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
    constructor(title) {
        this.title = title;
        this.description = `Lorem ipsum dolor sit amet, llis turpis consectetuer sit, aliquam mauris enim, malesuada eget nec nulla, amet quam adipiscing risus, ante consequat. Nec enim, velit fringilla magnis nam duis mauris aliquam.`;
        this.price = `$251`;
    }
    save() {
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }
    static fetchAll(cb) {
        getProductFromFile(cb);
    }



}


