const express = require('express');
const router = express.Router();
const Save = require('../../models/SaveTenant');

router.all('/*',(req, res, next)=>{

    req.app.locals.layout = 'default';
    next();
});

router.get('/', (req,res)=>{
    
    res.render('viewTenant/index');
});

module.exports = router;
