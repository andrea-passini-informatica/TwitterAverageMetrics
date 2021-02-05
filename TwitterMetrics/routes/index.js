var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Twitter Metrics',
		footer: 'Andrea Passini -  Università degli Studi di Milano.',
	});
});

module.exports = router;
