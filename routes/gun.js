var express = require('express');
var passport = require('passport');
const gun_controlers = require('../controllers/gun');
var router = express.Router();


// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('gun', { title: 'Search Result gun' });
// });
router.get('/', gun_controlers.gun_view_all_Page);
module.exports = router;

/* GET detail gun page */
router.get('/detail', gun_controlers.gun_view_one_Page);

/* GET create gun page */
router.get('/create', secured, gun_controlers.gun_create_Page);

/* GET create update page */
router.get('/update', secured, gun_controlers.gun_update_Page);

/* GET delete gun page */
router.get('/delete', secured, gun_controlers.gun_delete_Page);


router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});

module.exports = router;
