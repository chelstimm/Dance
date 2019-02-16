var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();

// serve static content
app.use(express.static('public'));

// parse body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup handlebars
var expresshb = require('express-handlebars');
app.engine('handlebars', expresshb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// import routes
const routes = require('./controllers/dance_controller.js');
app.use(routes);

// start server
app.listen(PORT, function() {
    console.log('DANCES ready at http://localhost:' + PORT);
})