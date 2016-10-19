var express = require('express');
var morgan      = require('morgan');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// use morgan to log requests to the console
app.use(morgan('dev'));

var pets = require('./routes/pet.js')(app);

var server = app.listen(3002, function () {
   console.log('Server running at http://127.0.0.1:3002/');
});
