var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Organicfruits', { title: 'search result Organicfruits' });
});

module.exports = router;
