
//importing modules
const express = require('express');
const app = express();
const path = require('path');
const exph = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const upload = require('express-fileupload');

mongoose.connect('mongodb://localhost:27017/obkyc').then((db) => {

    console.log('Mongo Connected');

}).catch(error => console.log(error));


app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine
app.engine('handlebars', exph({ extname: 'handlebars', defaultLayout: 'default' }));
app.set('view engine', 'handlebars');

//Upload Module
app.use(upload());
//Using Body-Parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//load routes
const home = require('./routes/home/index');
const createTenant = require('./routes/createTenant/index');




// Use Routes
app.use('/', home);
app.use('/createTenant', createTenant);



app.listen(1115, () => {
    console.log(`listening on port 1115`);
});