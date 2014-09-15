/*
(function(){
    var Class = require('better-js-class');
    var cps = require('cps');
    var mysql = require('mysql');
    var $U = require('underscore');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'wordpressuser',
        password : 'webonise6186',
        database : 'ph_wordpress'
    });

    connection.connect();
    var length = connection.query('SELECT * FROM wp_posts  AS solution', function(err, rows, fields) {
        if (err) throw err;

        console.log('The solution is: ', rows);
        return rows.length;
    });
    connection.end();
})();
*/


var http = require('http');
var mysql = require('mysql');
// Create a connection to MySql Server and Database
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'wordpressuser',
    password : 'webonise6186',
    database : 'ph_wordpress'
});
// Create a simple Web Server to respond to requests
http.createServer(function(req, res){
    // RECEIVED A REQUEST!
    // for this example respond with a HTTP 200 OK
    res.writeHeader(200);
    res.write('Connect to mySql\n');
    // Connect to mySql (if there is an erro, report it and terminate de request)
    connection.connect(function(err){
        if(err != null) {
            res.end('Error connecting to mysql:' + err+'\n');
        }
    });
    // Query the database to some data
    connection.query("SELECT * FROM `wp_posts` LIMIT 0 , 30", function(err, rows){
        // There was a error or not?
        if(err != null) {
            res.end("Query error:" + err);
        } else {
            // Shows the result on console window
            console.log(rows[0]);
            res.end("Success!");
        }
        // Close connection
        connection.end();
    });
// The server will be listen on port 8080
}).listen(8080);

/*

*/
/**
 * Module dependencies.
 *//*

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var  ejs = require('ejs');
var compression = require('compression');

//load customers route
var customers = require('./routes/customers');
var app = express();
var connection  = require('express-myconnection');
var mysql = require('mysql');

// all environments
app.set('port', process.env.PORT || 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

*/
/*------------------------------------------
 connection peer, register as middleware
 type koneksi : single,pool and request
 -------------------------------------------*//*

app.use(

    connection(mysql,{

        host: 'localhost',
        user: 'root',
        password : '',
        port : 3306, //port mysql
        database:'nodejs'
    },'request')
);

//route index, hello world
app.get('/', routes.index);

//route customer list
app.get('/customers', customers.list);

//route add customer, get n post
app.get('/customers/add', customers.add);
app.post('/customers/add', customers.save);

//route delete customer
app.get('/customers/delete/:id', customers.delete_customer);

//edit customer route , get n post
app.get('/customers/edit/:id', customers.edit);
app.post('/customers/edit/:id',customers.save_edit);


app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){

    console.log('Express server listening on port ' + app.get('port'));
});*/
