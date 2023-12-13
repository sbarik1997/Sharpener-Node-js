const path = require('path');

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const errorController = require('./controllers/error404');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactRoute = require('./routes/contactUs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute);
app.use('/', shopRoute);
app.use(contactRoute);


app.use(errorController.errorPage);

app.listen(3000);

