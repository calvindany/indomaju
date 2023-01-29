const express = require('express');

const adminRoute = require('./router/Admin');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminRoute);



app.listen(3000);