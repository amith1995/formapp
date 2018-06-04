const express = require('express');

const router = express.Router();


router.all('/*',(req, res, next)=>{

    req.app.locals.layout = 'home';
    next();
});

router.get('/', (req, res) => {
    res.render('home/index');
});

router.get('/createTenant', (req, res) => {
    res.render('createTenant/index');
});

router.get('/login', (req, res) => {
    res.render('home/login');
});


module.exports = router;