const express = require('express');
const app = express();
const path = require('path');
const exph = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exph({defaultLayout: 'home'}));
app.set('view engine' ,'handlebars');


app.get('/',(req,res)=>{



    res.render('home/index');
})

app.listen(1115, ()=>{
    console.log(`listening on port 1115`);

});