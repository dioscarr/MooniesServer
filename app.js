const path = require('path');
const rootDir = require('./util/path');
const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


const expressHbs = require('express-handlebars');



const app = express();

// app.engine('hbs',expressHbs());
 app.set('view engine', 'pug');
 app.set('views','views');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(rootDir,'public')));

app.use('/admin',adminData.routes);
app.use('/',shopRoutes);
app.use((req,res,next)=>{
    res.status(404).render('404',{message:'Page Not Found1'});
});


app.listen(6001);
