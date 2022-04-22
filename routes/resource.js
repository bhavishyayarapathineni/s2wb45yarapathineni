var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var organicfruits_controller = require('../controllers/organicfruits');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// organicfruits ROUTES ///
// POST request for creating a organicfruits.
router.post('/organicfruits', organicfruits_controller.organicfruits_create_post);
// DELETE request to delete organicfruits.
router.delete('/organicfruits/:id', organicfruits_controller.organicfruits_delete);
// PUT request to update organicfruits.
router.put('/organicfruits/:id',organicfruits_controller.organicfruits_update_put);
// GET request for one organicfruits.
router.get('/organicfruits/:id', organicfruits_controller.organicfruits_detail);
// GET request for list of all organicfruits items.
router.get('/organicfruits', organicfruits_controller.organicfruits_list);
module.exports = router;