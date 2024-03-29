var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hi Sai Vivek Reddy Gankidi' });
});

module.exports = router;
