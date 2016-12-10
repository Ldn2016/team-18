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
    //console.log(req.body.name);
    console.log(req.post);
});