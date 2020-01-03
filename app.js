const path = require('path');
//util
const rootDir = require('./util/path');
//Third Party libs
const express = require('express');
const bodyParser = require('body-parser');
//routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/',shopRoutes);

app.use((req,res,next)=>
res.status(404).sendFile(path.join(rootDir, 'views','404.html'))
)


app.listen(6001);
