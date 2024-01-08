const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./utils/database');
const User = require('./models/user');
const cors = require('cors');

const app = express();


  
app.use(cors());
  


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactUs');
const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use('/user',userRoutes);
app.use('/expense',expenseRoutes);




app.use(errorController.get404);

sequelize.sync()
.then(() => {
    app.listen(3000);
})
.catch(err => console.log(err));
