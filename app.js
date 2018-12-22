var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite = require('sqlite3');
var env = require('dotenv').load();
var port = process.env.PORT || 8000;

var models = require("./models");
var client = require('./routes/client');
var car = require('./routes/car');


models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/client', client);
app.use('/car', car);


app.get('/', function(req, res){
    console.log('app listening on port: '+port);
    res.send('tes express nodejs sqlite')
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});

module.exports = app;