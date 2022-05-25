const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const mongoose = require('mongoose');
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://admin:admin1234@webdev.5dac7.mongodb.net/UsersDB?retryWrites=true&w=majority";

//create server
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));

//get the default localhost:port/ and redirect to homepage
app.get('/', (_req, res) => {
    res.redirect('/home');
});

app.listen(8080);

mongoose.connect(uri);

var userTemplate = new mongoose.Schema({
	FirstName: String,
	LastName: String,
	Address: String,
	Phone: String,
	Email: String,
	Password: String
});

var User = mongoose.model("User", userTemplate);

//post methodos apoyhikeyei ta dedomena sth basi
app.post('/signUp', (req, res) => {
  var myData = new User(req.body);

  myData.save().then(item => {
      res.status(200);
    }).catch(err => {
      res.status(400);
    });
});