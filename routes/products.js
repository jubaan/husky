var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.index);
router.get('/create', productsController.create);
router.get('/:id', productsController.show);
router.delete('/:id/delete', productsController.delete);

module.exports = router;