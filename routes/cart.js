var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.index);

module.exports = router;