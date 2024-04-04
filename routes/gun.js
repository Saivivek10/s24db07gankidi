var express = require('express');
const gun_controlers= require('../controllers/gun');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('gun', { title: 'Search Result gun' });
// });
router.get('/', gun_controlers.gun_view_all_Page);
module.exports = router;
