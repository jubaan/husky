var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/', productsController.index);
router.get('/create', productsController.create);
router.post('/save', productsController.save);
router.get('/:id', productsController.show);
router.get('/:id/edit', productsController.edit);
router.patch('/:id/edit', productsController.update);
router.delete('/:id/delete', productsController.delete);

module.exports = router;