var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productController');

router.get('/', productsController.index);
router.get('/:id', productsController.show);

module.exports = router;