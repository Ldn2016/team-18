var express = require('express');
var app = express();
//var chart = require('/chart.js')
var port = 8080;
var path = require('path');


//set routes
var router = require('./app/routes');
app.use('/', router);

//set static files

//app.use(express.static(__dirname + '/public/css'));
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(port, function(){
	console.log('started');
});
