
const path = require('path');
//util
const rootDir = require('../util/path');
const express = require('express');

const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log("in another middlewear");
    console.log(rootDir);
    res.sendFile(path.join(rootDir,'views','shop.html'))
});

module.exports = router;