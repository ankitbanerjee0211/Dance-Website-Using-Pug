const express = require('express');
const path = require('path');
const app = express();
// Step - 11
// making a database named 'contactDance'
// and connecting and importing mongoose
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

// For Local db
// mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});
// For Mongo Atlas
const connection = "mongodb+srv://ankit:Ankitb@n12345@dance-website-using-pug.hfja9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

// mongodb+srv://ankit:Ankitb@n12345@dance-website-using-pug.hfja9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

sample_mflix
const port = process.env.PORT || 8000;
// Requiring body-parser
const bodyparser = require('body-parser');

// Define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});
// Making a model out of predefined schema
const Contact = mongoose.model('Contact', contactSchema);

//// Step-1 creating package.json
/// 'npm init' in terminal

/// Step-2 installing express and pug
// 'npm i package_name' in terminal

/// Step-3 creating static and views folder

//// EXPRESS SPECIFIC STUFF
/// Step-5 for serving static files(
app.use('/static', express.static('static'));

/// Step-6 to stop showing req data in the url
app.use(express.urlencoded());

//// PUG SPECIFIC STUFF
/// Step-7 set the template engine as pug
app.set('view engine', 'pug');
/// Step-8 set the views directory
app.set('views', path.join(__dirname, 'views')); //(setting, file path)

/// Step-9 endpoints
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
    const params = {};
    res.status(200).render('contact.pug');
})

app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("Your complaint/request is successfully lodged.")
    }).catch(()=>{
        res.status(404).send("Your complaint/request is not saved to the database.")
    })
    // catch is used for error cases

    // res.status(200).render('contact.pug', params);
})

//// Step-12 install body-parser


//// Step-10 start the server
// Listen to the port
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});