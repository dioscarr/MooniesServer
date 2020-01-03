const express = require('express');

const app = express();

app.use('/',(req, res, next)=>{console.log('Alway Runs');next();});
app.use('/b',(req, res, next)=>{console.log('Middlewear B');res.send("<h2>Middlewear B</h2>");});
app.use('/',(req, res, next)=>{console.log('Middlerwear A'); res.send("<h2>Middlewear A</h2>");});
app.listen(6002);