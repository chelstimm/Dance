var express = require('express');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 8080;
var app = express();

// serve static content
app.use(express.static(__dirname + '/public'));

//images
app.use(express.static('assets/images'));

// parse body
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(methodOverride("_method"));

// setup handlebars
var expresshb = require('express-handlebars');
app.engine('handlebars', expresshb({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// import routes
var routes = require('./controllers/dance_controller.js');
app.use("/", routes);


    // start server
    app.listen(PORT, function () {
        console.log('DANCES ready at http://localhost:' + PORT);
    });
