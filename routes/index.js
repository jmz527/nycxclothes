var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'NYCxClothes' });
});

router.get('/home', function(req, res, next) {
  res.render('pages/home', { title: 'NYCxClothes | home' });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'NYCxClothes | about' });
});

router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'NYCxClothes | contact' });
});


module.exports = router;