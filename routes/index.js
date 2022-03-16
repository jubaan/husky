var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/models', function (req, res, next) {
  let modelId = req.params.id;

  res.render(`models`, { title: 'Express' });
});

router.get('/model/:id', function (req, res, next) {
  let modelId = req.params.id;

  res.render(`modelDetails`, { title: 'Express' });
});

router.get('/cart', function (req, res, next) {
  let modelId = req.params.id;

  res.render(`cart`, { title: 'Express' });
});

router.get('/login', function (req, res, next) {
  let modelId = req.params.id;

  res.render(`login`, { title: 'Express' });
});

router.get('/signup', function (req, res, next) {
  let modelId = req.params.id;

  res.render(`signup`, { title: 'Express' });
});

module.exports = router;
