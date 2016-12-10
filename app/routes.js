//route our app

var express = require('express');
var path = require('path');
var sqlite3 = require('sqlite3');
var qs = require('querystring');
var router = express.Router();

var mainDatabase = '/Users/annabanasik/Downloads/dbsqlite';

module.exports = router;

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/donate', function(req, res){
	res.sendFile(path.join(__dirname, '../public/donateform.html'));
});

router.post("/donate", function (req, res) {

	//function saving to a file


    var db = new sqlite3.Database(mainDatabase);
    var posts = [];

    db.serialize(function() {
        db.prepare("INSERT INTO Donation (name) values(?)").run(qs.parse(req.body).name).finalize();
    })

    //res.redirect("/", {title: "Dynamic", posts: posts});

     res.redirect(req.get('origin')+req.url);
});