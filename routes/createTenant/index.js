const express = require('express');
const router = express.Router();
const Save = require('../../models/SaveTenant');
const { isEmpty } = require('../../helpers/upload-helper');
const viewTenant = require('../viewTenant/index');

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'createTenant';
    next();
});

router.get('/', (req, res) => {
    res.render('createTenant/index');
});


// router.get('/save', (req, res) => {
//     Save.find({}).then(obkycs=>{
//         res.render('createTenant/save',{obkycs: obkycs});
//         console.log(obkycs);
//     });
    
// });

router.post('/save', (req, res) => {

    let fileName = '';
    if (!isEmpty(req.files)) {
        let file = req.files.file;
        fileName = file.name;
    }



    // file.mv();

    const newSave = new Save({
        accountName: req.body.accountName,
        tenantId: req.body.tenantId,
        obProductionUserName: req.body.obProductionUserName,
        obProductionPassword: req.body.obProductionPassword,
        obSandboxUserName: req.body.obSandboxUserName,
        obSandboxPassword: req.body.obSandboxPassword,
        customerName: req.body.customerName,
        customerEmail: req.body.customerEmail,
        supportLead: req.body.supportLead,
        onboardingLead: req.body.onboardingLead,
        ftpusername: req.body.ftpusername,
        ftppassword: req.body.ftppassword,
        proactiveUserName: req.body.proactiveUserName,
        proactivePassword: req.body.proactivePassword,
        file: fileName

    })

    newSave.save().then(savedAccount => {
            console.log(savedAccount);
           res.render('createTenant/save',{savedAccount: savedAccount});
       
    }).catch(error => {
        console.log(error);
    });


});
module.exports = router;


