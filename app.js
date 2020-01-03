const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

//app.use('/',()=>{console.log("this always run");next();});

app.use('/add-product',(req, res, next)=>{
    console.log("in another middlewear");
    let form = `
    <form action="/product" method="POST">
    <input type="text" name="title">
    <button type="submit">Add Product</button>
    </form>
    `
    res.send(form)
});
app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect("/");
});
app.use('/',(req, res, next)=>{
    console.log("in another middlewear"); 
    res.send(`<h1>Hello from another world</h1><a href="/add-product">Add Production</a>`)
});
app.listen(6001);
