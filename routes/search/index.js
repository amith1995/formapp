const express = require('express');
const route = express.Router();
const Save = require('../../models/SaveTenant');

route.get('/:string',(req, res)=>{

    Save.find({accountName : "req.%"}).then(obkycs=>{
        res.render('search/index',{obkycs : obkycs});
        }).catch;
});
