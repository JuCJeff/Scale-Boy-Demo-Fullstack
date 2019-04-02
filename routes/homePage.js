var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homePage', { title: 'Express' });
});

module.exports = router;
