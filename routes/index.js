var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Sachin | Profile' });
});

router.get('/records', function (req, res, next) {
  res.render('index', { title: 'Sachin | Records' });
});

router.get('/stats', function (req, res, next) {
  res.render('index', { title: 'Sachin | Stats' });
});

router.get('/matches', function (req, res, next) {
  res.render('index', { title: 'Sachin | Matches' });
});

module.exports = router;
