const fs = require('fs');
const path = require('path');


module.exports =class product{
    constructor(title){
        this.title = title;
        this.description= `Lorem ipsum dolor sit amet, llis turpis consectetuer sit, aliquam mauris enim, malesuada eget nec nulla, amet quam adipiscing risus, ante consequat. Nec enim, velit fringilla magnis nam duis mauris aliquam.`;
        this.price = `$251`;
    }
    save(){

        const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json');

        fs.readFile(p,(err, fileContent)=>{
            let products=[];
            if(!err)
            {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err)=>
            {
                console.log(err);
            });
        });



    }
    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json');
        fs.readFile(p,(err, fileContent)=>{
            if(err)
            {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });


    }

}