var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
	console.log("__dirname--------------------   ---- ");
	console.log(__dirname);
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

module.exports = router;
