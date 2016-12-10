//route our app

var express = require('express');
var path = require('path');

var router = express.Router();


module.exports = router;

router.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/about', function(req, res){
	res.sendFile(path.join(__dirname, '../public/about.html'));
});

router.get('/contact');
router.post('/contact');