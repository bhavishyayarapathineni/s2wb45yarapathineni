var express = require('express');
const organicfruits_controlers= require('../controllers/organicfruits');
var router = express.Router();
/* GET organicfruits */
router.get('/', organicfruits_controlers.organicfruits_view_all_Page );
module.exports = router;

/* GET detail organicfruits page */
router.get('/detail', organicfruits_controlers.organicfruits_view_one_Page);

/* GET create costume page */
router.get('/create', organicfruits_controlers.organicfruits_create_Page);

/* GET create update page */
router.get('/update', organicfruits_controlers.organicfruits_update_Page);

/* GET delete costume page */
router.get('/delete', organicfruits_controlers.organicfruits_delete_Page);