var express = require('express');
const gun_controlers= require('../controllers/gun');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('gun', { title: 'Search Result gun' });
// });
router.get('/', gun_controlers.gun_view_all_Page);
module.exports = router;

/* GET detail gun page */
router.get('/detail', gun_controlers.gun_view_one_Page);

/* GET create gun page */
router.get('/create', gun_controlers.gun_create_Page);

/* GET create update page */
router.get('/update', gun_controlers.gun_update_Page);

/* GET delete gun page */
router.get('/delete', gun_controlers.gun_delete_Page);
