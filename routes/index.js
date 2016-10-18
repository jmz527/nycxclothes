var express = require('express');
var router = express.Router();
var fs = require("fs");
var axios = require('axios');

function instaGram(item, idx) {
  return {
    idx: idx,
    code: item.code,
    link: item.link,
    low_resolution: item.images.low_resolution,
    standard_resolution: item.images.standard_resolution,
    thumbnail: item.images.thumbnail,
    like_count: item.likes.count,
    created_time: item.created_time,
    text: item.caption.text,
    comment_count: item.comments.count,
    data: item.comments.data
  }
}

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


router.get('/pic/:id', function(req, res, next) {
  var data, item, title = 'NYCxClothes | '+req.params.id;

  if (fs.existsSync('public/data.json'))
    data = JSON.parse(fs.readFileSync('public/data.json', 'utf8'));

  item = instaGram(data.items[0], 0);

  res.render('pages/pic', { title: title, id: req.params.id, pic: item });
});


router.get('/instagram', function(req, res, next) {
  var data;

  if (fs.existsSync('public/data.json'))
    data = JSON.parse(fs.readFileSync('public/data.json', 'utf8'));

	// // Make a request for a user with a given ID
	// axios.get('https://www.instagram.com/nycxclothes/media/')
	//   .then(function (res) {
	//   	if (res.data.status=="ok") {
	//   		console.log(res.data.status);

	//   		// res.data.items.map(function(item) {

	//   		// });
	//   	}

	//     // console.log(res.data);


	//   })
	//   .catch(function (err) {
	//     console.log(err);
	//   });


	function picFormation(data) {
		console.log('status: '+data.status);
		console.log('length: '+data.items.length);

    var reducedItems = [];

    data.items.forEach(function(curVal, idx) {
      reducedItems.push(instaGram(curVal, idx));
    });

    return reducedItems;
	}

	data = picFormation(data);

	res.render('pages/insta', { 'title': 'NYCxClothes | instagram', 'pics': data });
});


module.exports = router;