var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gun_controler = require('../controllers/gun');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// gun ROUTES ///
// POST request for creating a gun.
router.post('/gun', gun_controler.gun_create_post);
// DELETE request to delete gun.
router.delete('/gun/:id', gun_controler.gun_delete);
// PUT request to update gun.
router.put('/gun/:id', gun_controler.gun_update_put);
// GET request for one gun.
router.get('/gun/:id', gun_controler.gun_detail);
// GET request for list of all gun items.
router.get('/gun', gun_controler.gun_list);
 
 
module.exports = router;