// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

/*app.set('view engine', 'ejs'); // set up ejs for templating*/
app.use(express.static(__dirname + '/assets'));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.set('view options',{
    open: '<%',
    close: '%>'
});

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
/*

app.use(express.static(__dirname + '/assets'));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.set('view options',{
   open: '<%',
    close: '%>'
});
app.get('/', function(req,res){
   res.render('pages/login');
});
app.get('/login', function(req,res){
    res.render('pages/index');
});
console.log('server is running on 8080. ctrl + c to shutdown');
app.listen(8080);*/