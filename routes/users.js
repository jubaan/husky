var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/signup', usersController.signup);
router.post('/signup', usersController.signupProcess);
router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess);

module.exports = router;
