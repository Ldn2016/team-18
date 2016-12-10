//route our app

var express = require('express');
var path = require('path');

var router = express.Router();


module.exports = router;

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/donate', function(req, res){
	res.sendFile(path.join(__dirname, '../public/donateform.html'));
});

router.post("/donate", function (req, res) {

	//function saving to a file


    // var db = new sqlite3.Database(mainDatabase);
    // var posts = [];

    // db.serialize(function() {
    //     db.each("SELECT * FROM blog_posts", function(err, row) {
    //         posts.push({title: row.post_title, date: row.post_date, text: row.post_text})
    //     })
    // })

    // res.redirect("/", {title: "Dynamic", posts: posts});

     res.redirect(req.get('origin')+req.url);
});