var express = require('express');
var router = express.Router();
var fs = require("fs");
var axios = require('axios');

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

  item = {
    idx: 0,
    code: data.items[0].code,
    link: data.items[0].link,
    low_resolution: data.items[0].images.low_resolution,
    standard_resolution: data.items[0].images.standard_resolution,
    thumbnail: data.items[0].images.thumbnail,
    like_count: data.items[0].likes.count,
    created_time: data.items[0].created_time,
    text: data.items[0].caption.text,
    comment_count: data.items[0].comments.count,
    data: data.items[0].comments.data
  }

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
      reducedItems.push({
          idx: idx,
          code: curVal.code,
          link: curVal.link,
          low_resolution: curVal.images.low_resolution,
          standard_resolution: curVal.images.standard_resolution,
          thumbnail: curVal.images.thumbnail,
          like_count: curVal.likes.count,
          created_time: curVal.created_time,
          text: curVal.caption.text,
          comment_count: curVal.comments.count,
          data: curVal.comments.data
        });
    });

    return reducedItems;
	}

	data = picFormation(data);

	res.render('pages/insta', { 'title': 'NYCxClothes | instagram', 'pics': data });
});


module.exports = router;