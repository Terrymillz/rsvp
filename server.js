var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//mongoose
require('./server/config/mongoose.js');

//routes
var routes_setter = require('./server/config/routes');
routes_setter(app);




app.listen(8000, function() {
    console.log("listening on port 8000");
})
