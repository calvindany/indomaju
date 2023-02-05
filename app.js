const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const mongodb = require('mongodb');

const adminModels = require('./models/Admin');


const userRoute = require('./router/User');
const adminRoute = require('./router/Admin');
const Admin = require('./models/Admin');

const app = express();

const MONGODB_URI = "mongodb://localhost:27017/indomaju";

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoute);
app.use('/admin', adminRoute);


// mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI)
.then(result => {
    console.log('connected');

    return adminModels.find()

})
.then(admin => {
    if(admin.length < 1){
        const admin = new Admin({
            email : "calvindanystudy@gmail.com",
            password : "1234567890"
        });
        return admin.save();
    }
    return null;
})
.then( result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});