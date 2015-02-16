var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/student', function(req, res, next) {
	var db = req.db;
	db.collection('student').find().toArray(function(err,items){
		res.json(items);
	});
});

module.exports = router;
