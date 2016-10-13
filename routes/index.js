var express = require('express');
var router = express.Router();
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


router.get('/instagram', function(req, res, next) {
	var data = { "items" : [ { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1476311487",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17843230291159614",
            "text" : "#RealTalkWednesday People talk a lot about the fashion industry being a superficial space and I will tell you that it's true in many cases. Some people only care about your following, a pass to your fancy events or some free promo. Others will forget you once they reach new heights and you'll be disappointed once or twice. But you also meet some genuine people and it's really all that's worth focusing on.\n\nAnd well, that's life. You live and you learn. But most importantly, never change to fit someone's expectations. They may be few but the right ones will naturally stick with you. 📸: @nellymirabel"
          },
        "code" : "BLes72qBPpB",
        "comments" : { "count" : 21,
            "data" : [ { "created_time" : "1476329088",
                  "from" : { "full_name" : "camille carter",
                      "id" : "2241272670",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14026591_1816685521897198_1129081169_a.jpg",
                      "username" : "charmedbycamille"
                    },
                  "id" : "17843231383159614",
                  "text" : "😘😘😘 thank you!"
                },
                { "created_time" : "1476333437",
                  "from" : { "full_name" : "Sara Pope",
                      "id" : "259238339",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14294770_1233360963342745_1574778423690133504_a.jpg",
                      "username" : "sarapopepourri"
                    },
                  "id" : "17843232748159614",
                  "text" : "Love this caption💕 sad but so true"
                },
                { "created_time" : "1476335732",
                  "from" : { "full_name" : "Bella Bucchiotti",
                      "id" : "22751819",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14478326_1074935059291080_7218366073404391424_a.jpg",
                      "username" : "bellabucchiotti"
                    },
                  "id" : "17843233534159614",
                  "text" : "Stunning"
                },
                { "created_time" : "1476336099",
                  "from" : { "full_name" : "Rori FB",
                      "id" : "30480176",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14487447_1592304534399280_9067936633541623808_a.jpg",
                      "username" : "beezsteez"
                    },
                  "id" : "17843233603159614",
                  "text" : "I am!!! I was actually just in the city for fall break"
                }
              ]
          },
        "created_time" : "1476311487",
        "id" : "1359721764695112257_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/l/t51.2885-15/s320x320/e35/14718126_1653716521585585_3281500488981282816_n.jpg?ig_cache_key=MTM1OTcyMTc2NDY5NTExMjI1Nw%3D%3D.2.l",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/l/t51.2885-15/s640x640/sh0.08/e35/14718126_1653716521585585_3281500488981282816_n.jpg?ig_cache_key=MTM1OTcyMTc2NDY5NTExMjI1Nw%3D%3D.2.l",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/14712161_928310787274149_1253073609304309760_n.jpg?ig_cache_key=MTM1OTcyMTc2NDY5NTExMjI1Nw%3D%3D.2.c",
                "width" : 150
              }
          },
        "likes" : { "count" : 272,
            "data" : [ { "full_name" : "Léthicia P. 🇭🇹",
                  "id" : "13894615",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12917995_1157106654322710_369273774_a.jpg",
                  "username" : "lettuce_slay"
                },
                { "full_name" : "",
                  "id" : "1695629972",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14027140_1218019618243060_148649131_a.jpg",
                  "username" : "choucouneladivademonpays"
                },
                { "full_name" : "💋D i A n A  C r I S T i N a 👑",
                  "id" : "1299014384",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14591141_1679370915713944_6718109362465800192_a.jpg",
                  "username" : "dianacere_13"
                },
                { "full_name" : "Tayou",
                  "id" : "1220603781",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13774314_152847685151034_1403928821_a.jpg",
                  "username" : "earthytayou"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BLes72qBPpB/",
        "location" : null,
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1476221896",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17843200186136312",
            "text" : "Calling all our coffee shop lovers & Insta bloggers! You asked, we listened. We filmed a fun roundup of our favorite, most Instagrammable places in Brooklyn for your creative inspo 😉 Check it out in our bio 👆🏾🎥 Let us know which one you liked best!"
          },
        "code" : "BLcCDeYByIL",
        "comments" : { "count" : 19,
            "data" : [ { "created_time" : "1476242353",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843206489136312",
                  "text" : "@gparrish ☺️"
                },
                { "created_time" : "1476242425",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843206510136312",
                  "text" : "@berkshirelovebird Thank you ☺️"
                },
                { "created_time" : "1476242586",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843206567136312",
                  "text" : "@daniella_schutze Thanks girl 💞"
                },
                { "created_time" : "1476242681",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843206609136312",
                  "text" : "@pendasarr Thanks boo ☺️ Hope you liked it!"
                }
              ]
          },
        "created_time" : "1476221896",
        "id" : "1358970222425874955_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14718114_1258060250882162_1386145220986404864_n.jpg?ig_cache_key=MTM1ODk3MDIyMjQyNTg3NDk1NQ%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14718114_1258060250882162_1386145220986404864_n.jpg?ig_cache_key=MTM1ODk3MDIyMjQyNTg3NDk1NQ%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14718114_1258060250882162_1386145220986404864_n.jpg?ig_cache_key=MTM1ODk3MDIyMjQyNTg3NDk1NQ%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 202,
            "data" : [ { "full_name" : "Gizela Pauline",
                  "id" : "204580636",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13741454_1766722486884446_2039192384_a.jpg",
                  "username" : "gizeluh"
                },
                { "full_name" : "e v e l y n  e s l a v a",
                  "id" : "8466676",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14549999_127862164344834_4884444938831396864_a.jpg",
                  "username" : "evelyneslava_"
                },
                { "full_name" : "Lisette Melendez",
                  "id" : "13804437",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13381082_1577701949195996_1577894613_a.jpg",
                  "username" : "ohsnapitzlizzie"
                },
                { "full_name" : "Taliyah",
                  "id" : "1343989517",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/14597312_1344994962234055_2246440978695061504_a.jpg",
                  "username" : "liyahthelion"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BLcCDeYByIL/",
        "location" : { "name" : "Maman Greenpoint" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1475876196",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17843018917181413",
            "text" : "\"The weird thing about houses is that they almost always look like nothing is happening inside of them, even though they contain most of our lives.\" -John Green 📸 :@pixelpursuit"
          },
        "code" : "BLRury-h8uS",
        "comments" : { "count" : 51,
            "data" : [ { "created_time" : "1476207367",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843142133181413",
                  "text" : "@miansai Thank you 🙆🏾😊😚"
                },
                { "created_time" : "1476207403",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843142142181413",
                  "text" : "@thenamestesa Thanks love!"
                },
                { "created_time" : "1476335746",
                  "from" : { "full_name" : "Bella Bucchiotti",
                      "id" : "22751819",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14478326_1074935059291080_7218366073404391424_a.jpg",
                      "username" : "bellabucchiotti"
                    },
                  "id" : "17843188609181413",
                  "text" : "Love the perspective"
                },
                { "created_time" : "1476337939",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843189050181413",
                  "text" : "@bellabucchiotti Thanks Bella ✨"
                }
              ]
          },
        "created_time" : "1475876196",
        "id" : "1356070282628418450_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14487347_195773957513003_1904397235009880064_n.jpg?ig_cache_key=MTM1NjA3MDI4MjYyODQxODQ1MA%3D%3D.2.l",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14487347_195773957513003_1904397235009880064_n.jpg?ig_cache_key=MTM1NjA3MDI4MjYyODQxODQ1MA%3D%3D.2.l",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/14533532_313821708988778_5371786081815494656_n.jpg?ig_cache_key=MTM1NjA3MDI4MjYyODQxODQ1MA%3D%3D.2.c",
                "width" : 150
              }
          },
        "likes" : { "count" : 312,
            "data" : [ { "full_name" : "Penda Sarr",
                  "id" : "200180330",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14280356_1747137385511120_3804295925568897024_a.jpg",
                  "username" : "pendasarr"
                },
                { "full_name" : "+ Joselyn Dontfraid +",
                  "id" : "53517833",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/10706928_657735487664741_1993689908_a.jpg",
                  "username" : "joselynelina"
                },
                { "full_name" : "Vivek 🔺👽🌏",
                  "id" : "1447766671",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13534030_245933432456336_1688064640_a.jpg",
                  "username" : "vivekvishisht"
                },
                { "full_name" : "James Rutledge",
                  "id" : "2074513016",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/11381422_430614810397097_548038101_a.jpg",
                  "username" : "jmz527"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BLRury-h8uS/",
        "location" : { "name" : "Brooklyn Heights" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : true
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1475793030",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17842975825179809",
            "text" : "Quiet and productive afternoons are the best. Wishing I wasn't studying for my finance test but this cute place makes it better 💭📘"
          },
        "code" : "BLPQDrnB1q2",
        "comments" : { "count" : 25,
            "data" : [ { "created_time" : "1476023915",
                  "from" : { "full_name" : "Wpromote",
                      "id" : "405711725",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12142243_973483516074867_386297787_a.jpg",
                      "username" : "wpromoteinc"
                    },
                  "id" : "17843065099179809",
                  "text" : "👌"
                },
                { "created_time" : "1476032923",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843070490179809",
                  "text" : "@wpromoteinc Thank you!"
                },
                { "created_time" : "1476114950",
                  "from" : { "full_name" : "Penda Sarr",
                      "id" : "200180330",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14280356_1747137385511120_3804295925568897024_a.jpg",
                      "username" : "pendasarr"
                    },
                  "id" : "17843100127179809",
                  "text" : "Love this! You guys have such an artistic eye"
                },
                { "created_time" : "1476115350",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843100313179809",
                  "text" : "@pendasarr Thanks babe 💞"
                }
              ]
          },
        "created_time" : "1475793030",
        "id" : "1355372634590108342_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14624416_738256582978894_2447718260175536128_n.jpg?ig_cache_key=MTM1NTM3MjYzNDU5MDEwODM0Mg%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14624416_738256582978894_2447718260175536128_n.jpg?ig_cache_key=MTM1NTM3MjYzNDU5MDEwODM0Mg%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14624416_738256582978894_2447718260175536128_n.jpg?ig_cache_key=MTM1NTM3MjYzNDU5MDEwODM0Mg%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 277,
            "data" : [ { "full_name" : "Mariah",
                  "id" : "392646443",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14448434_340317752980364_5824195839169396736_a.jpg",
                  "username" : "eemaarie"
                },
                { "full_name" : "P A R A K L E T O S",
                  "id" : "3309187370",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13298168_1733675990242106_502005205_a.jpg",
                  "username" : "weareparakletos"
                },
                { "full_name" : "Corinne Elise Cherduville🌹",
                  "id" : "40674487",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12145508_806477766123336_1352512588_a.jpg",
                  "username" : "c0c0_cherii"
                },
                { "full_name" : "Wasi Ferdus",
                  "id" : "12029346",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13116543_495784447284043_1473205323_a.jpg",
                  "username" : "iwasii"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BLPQDrnB1q2/",
        "location" : { "name" : "The Bakeshop By Woops" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : true
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1475705339",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17857005085070363",
            "text" : "I've come to develop a special relationship with New York. The fast pace always keeps me focused, but it also reminds me to value the little things and take a break every now and then. This city's like the toughest teacher but the lessons are all worth it! #nycxstories. What's your NYC story?"
          },
        "code" : "BLMozOEBs56",
        "comments" : { "count" : 19,
            "data" : [ { "created_time" : "1475763442",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17857040914070363",
                  "text" : "@sarapopepourri Thanks babe! Happy almost Friday 💘"
                },
                { "created_time" : "1475763525",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17857040977070363",
                  "text" : "@amanda.alyssa Thanks so much for sharing! I can totally relate. I feel like living here is an act of bravery, but I wouldn't have it any other way tbh 💪🏾"
                },
                { "created_time" : "1476335765",
                  "from" : { "full_name" : "Bella Bucchiotti",
                      "id" : "22751819",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14478326_1074935059291080_7218366073404391424_a.jpg",
                      "username" : "bellabucchiotti"
                    },
                  "id" : "17857446580070363",
                  "text" : "Love this image. It looks so lonely there"
                },
                { "created_time" : "1476338155",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17857447441070363",
                  "text" : "@bellabucchiotti Thank you ☺️ It's usually pretty empty during the day. You should definitely check it out if you ever come to New York ✨"
                }
              ]
          },
        "created_time" : "1475705339",
        "id" : "1354637029585374842_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14498890_301354263590486_1294507781579079680_n.jpg?ig_cache_key=MTM1NDYzNzAyOTU4NTM3NDg0Mg%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14498890_301354263590486_1294507781579079680_n.jpg?ig_cache_key=MTM1NDYzNzAyOTU4NTM3NDg0Mg%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14498890_301354263590486_1294507781579079680_n.jpg?ig_cache_key=MTM1NDYzNzAyOTU4NTM3NDg0Mg%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 248,
            "data" : [ { "full_name" : "Débora",
                  "id" : "49200972",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14369023_587294038123865_356023692_a.jpg",
                  "username" : "msnerdychica"
                },
                { "full_name" : "🐝",
                  "id" : "50264315",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14360062_913406028803947_338219255_a.jpg",
                  "username" : "brittany__b"
                },
                { "full_name" : "John Frattasi",
                  "id" : "14669398",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12568969_169177716786985_221037924_a.jpg",
                  "username" : "johnnybegusto"
                },
                { "full_name" : "Erik Rodriguez",
                  "id" : "1902898929",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12965665_1090301947701837_580466636_a.jpg",
                  "username" : "eyeconic_captures"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BLMozOEBs56/",
        "location" : { "name" : "Brooklyn Bridge Carousel" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1475620001",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17864015173057682",
            "text" : "\"The only darkness we should allow into our lives is the night, for even then, we have the moon.\" - Warsan Shire 📸: @pixelpursuit"
          },
        "code" : "BLKGB6PB91u",
        "comments" : { "count" : 21,
            "data" : [ { "created_time" : "1475669420",
                  "from" : { "full_name" : "Martha Suárez",
                      "id" : "292596333",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13402719_620713358084264_960066743_a.jpg",
                      "username" : "marthasuarezcollection"
                    },
                  "id" : "17864034961057682",
                  "text" : "Great pic"
                },
                { "created_time" : "1475670928",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17864035582057682",
                  "text" : "@marthasuarezcollection Thank you 😊"
                },
                { "created_time" : "1475694849",
                  "from" : { "full_name" : "Sibel, 20",
                      "id" : "280990965",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/l/t51.2885-19/s150x150/14073224_1181210265276525_1673217645_a.jpg",
                      "username" : "sibelicious"
                    },
                  "id" : "17864047495057682",
                  "text" : "This is such a beautiful capture! Spreads all the love 😍🙏🏻✨"
                },
                { "created_time" : "1475699746",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17864050087057682",
                  "text" : "@sibelicious Thank you!! Positive vibes always 🤗✨"
                }
              ]
          },
        "created_time" : "1475620001",
        "id" : "1353921157505998190_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14448339_1826432987590398_4106805616280862720_n.jpg?ig_cache_key=MTM1MzkyMTE1NzUwNTk5ODE5MA%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14448339_1826432987590398_4106805616280862720_n.jpg?ig_cache_key=MTM1MzkyMTE1NzUwNTk5ODE5MA%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14448339_1826432987590398_4106805616280862720_n.jpg?ig_cache_key=MTM1MzkyMTE1NzUwNTk5ODE5MA%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 258,
            "data" : [ { "full_name" : "Reon",
                  "id" : "31661950",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13183505_242609756101568_1583513671_a.jpg",
                  "username" : "rerechangg"
                },
                { "full_name" : "Joyce Gail Jumalon",
                  "id" : "11087516",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13269397_1572464139714914_1437844510_a.jpg",
                  "username" : "jgjumalon"
                },
                { "full_name" : "e v e l y n  e s l a v a",
                  "id" : "8466676",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14549999_127862164344834_4884444938831396864_a.jpg",
                  "username" : "evelyneslava_"
                },
                { "full_name" : "Leandra Guillet",
                  "id" : "254200477",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13285488_1599239363738212_143937360_a.jpg",
                  "username" : "leandraguillet"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BLKGB6PB91u/",
        "location" : null,
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1475534801",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17852684092085040",
            "text" : "You deserve everything you ever dreamed of: that vacation to Greece, that writing career or even that new Dior bag. Work hard, but remember to celebrate your wins - however big or small 🌟"
          },
        "code" : "BLHjhoZhqx7",
        "comments" : { "count" : 25,
            "data" : [ { "created_time" : "1475684170",
                  "from" : { "full_name" : "Tesa",
                      "id" : "408175718",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13117949_1722010501402346_1842303672_a.jpg",
                      "username" : "thenamestesa"
                    },
                  "id" : "17852732137085040",
                  "text" : "obsessed with your shoes, gorgeous! ✨"
                },
                { "created_time" : "1475688011",
                  "from" : { "full_name" : "Katerina",
                      "id" : "144947906",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13827380_850997931697038_1568070610_a.jpg",
                      "username" : "throughkatseyes"
                    },
                  "id" : "17852733409085040",
                  "text" : "LOVE!!!!!"
                },
                { "created_time" : "1475690535",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17852734267085040",
                  "text" : "@thenamestesa Thanks love 💞 Happy Wednesday 💫"
                },
                { "created_time" : "1475690548",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17852734270085040",
                  "text" : "@throughkatseyes 😘"
                }
              ]
          },
        "created_time" : "1475534801",
        "id" : "1353206455796673659_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14360095_1335169466507547_5936923943116996608_n.jpg?ig_cache_key=MTM1MzIwNjQ1NTc5NjY3MzY1OQ%3D%3D.2.l",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14360095_1335169466507547_5936923943116996608_n.jpg?ig_cache_key=MTM1MzIwNjQ1NTc5NjY3MzY1OQ%3D%3D.2.l",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/14474338_887326178067026_8955786331544354816_n.jpg?ig_cache_key=MTM1MzIwNjQ1NTc5NjY3MzY1OQ%3D%3D.2.c",
                "width" : 150
              }
          },
        "likes" : { "count" : 265,
            "data" : [ { "full_name" : "Erica",
                  "id" : "10916148",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14561860_1718543378471752_649009102189494272_a.jpg",
                  "username" : "ericawilson"
                },
                { "full_name" : "Vanessa",
                  "id" : "3227719513",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14487381_1711183065870449_8513317005414105088_a.jpg",
                  "username" : "the_vanessav"
                },
                { "full_name" : "Oumou Sarr",
                  "id" : "1125496596",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14726358_345544459127589_2999862466722136064_a.jpg",
                  "username" : "oumousarr"
                },
                { "full_name" : "Vanessa. Short And Nerdy🤓",
                  "id" : "1469398371",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14474023_296795240705931_2133451148030377984_a.jpg",
                  "username" : "rutharella.vp"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BLHjhoZhqx7/",
        "location" : { "name" : "Brooklyn Heights" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : "https://scontent-iad3-1.cdninstagram.com/t50.2886-16/14515306_1117687728327905_7182500004106338304_n.mp4",
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1475276120",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17842786183139704",
            "text" : "Cheers to the weekend 👯"
          },
        "code" : "BK_2IP2h5W2",
        "comments" : { "count" : 34,
            "data" : [ { "created_time" : "1475688034",
                  "from" : { "full_name" : "Katerina",
                      "id" : "144947906",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13827380_850997931697038_1568070610_a.jpg",
                      "username" : "throughkatseyes"
                    },
                  "id" : "17842943443139704",
                  "text" : "You ladies are such Renaissance Women with 21st century swag! I love it!😍"
                },
                { "created_time" : "1475688545",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17842943587139704",
                  "text" : "@throughkatseyes Aww this is the sweetest compliment we've ever received! Thanks so much pretty 💞💞"
                },
                { "created_time" : "1475804997",
                  "from" : { "full_name" : "Chelsea H💕",
                      "id" : "15190225",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14052744_619724211539759_1146733000_a.jpg",
                      "username" : "chelseaasoflate"
                    },
                  "id" : "17843001376139704",
                  "text" : "You two😍😍"
                },
                { "created_time" : "1475805040",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843001388139704",
                  "text" : "@chelseaasoflate Thanks Chelsea!! Love your feed 💙"
                }
              ]
          },
        "created_time" : "1475276120",
        "id" : "1351036474522834358_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e15/14547657_185985625162657_1339827374543339520_n.jpg?ig_cache_key=MTM1MTAzNjQ3NDUyMjgzNDM1OA%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/e15/14547657_185985625162657_1339827374543339520_n.jpg?ig_cache_key=MTM1MTAzNjQ3NDUyMjgzNDM1OA%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e15/14547657_185985625162657_1339827374543339520_n.jpg?ig_cache_key=MTM1MTAzNjQ3NDUyMjgzNDM1OA%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 273,
            "data" : [ { "full_name" : "CHRISTINA, RN",
                  "id" : "17049379",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/11939597_134572860218979_1467329385_a.jpg",
                  "username" : "qaristee"
                },
                { "full_name" : "R. CRAWFORD",
                  "id" : "6604660",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13573472_1182015781828921_1886208422_a.jpg",
                  "username" : "somethingcustom"
                },
                { "full_name" : "Da1na",
                  "id" : "6442484",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14592144_645473152279686_9037379972750114816_a.jpg",
                  "username" : "raziya_ave"
                },
                { "full_name" : "yo soy sam 💙💭",
                  "id" : "2529195289",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14564978_306764953039019_1589583124419837952_a.jpg",
                  "username" : "ughhh_.sxmxnthx"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BK_2IP2h5W2/",
        "location" : { "name" : "Loosie's Kitchen" },
        "type" : "video",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false,
        "video_views" : 517,
        "videos" : { "low_bandwidth" : { "height" : 480,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t50.2886-16/14547215_163242804126879_1155278737277714432_n.mp4",
                "width" : 480
              },
            "low_resolution" : { "height" : 480,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t50.2886-16/14547215_163242804126879_1155278737277714432_n.mp4",
                "width" : 480
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t50.2886-16/14515306_1117687728327905_7182500004106338304_n.mp4",
                "width" : 640
              }
          }
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1475180362",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17852538277095296",
            "text" : "In honor of the drink that fuels all hustle, happy #nationalcoffeeday ☕️ Chris and I aren't big coffee drinkers (I'll take a chai any day) but we love meeting people at coffee shops and hearing what they're working on. So here's to our coffee lovers and hard workers 👏"
          },
        "code" : "BK8_fDTBnAd",
        "comments" : { "count" : 10,
            "data" : [ { "created_time" : "1475262692",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17852565670095296",
                  "text" : "@orobru Cheers 👏"
                },
                { "created_time" : "1475262697",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17852565676095296",
                  "text" : "@sarapopepourri 🙌"
                },
                { "created_time" : "1475269033",
                  "from" : { "full_name" : "Humble & Whole",
                      "id" : "3440040160",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13649346_666341063522345_235999532_a.jpg",
                      "username" : "humbleandwhole"
                    },
                  "id" : "17852568112095296",
                  "text" : "Ahh I LOVE coffee shops! Looks like a lovely shop :)"
                },
                { "created_time" : "1475334592",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17852602735095296",
                  "text" : "@humbleandwhole It really is! You should definitely check it out 😊"
                }
              ]
          },
        "created_time" : "1475180362",
        "id" : "1350233199078699037_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14515704_732348993597056_5058029383583793152_n.jpg?ig_cache_key=MTM1MDIzMzE5OTA3ODY5OTAzNw%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14515704_732348993597056_5058029383583793152_n.jpg?ig_cache_key=MTM1MDIzMzE5OTA3ODY5OTAzNw%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14515704_732348993597056_5058029383583793152_n.jpg?ig_cache_key=MTM1MDIzMzE5OTA3ODY5OTAzNw%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 197,
            "data" : [ { "full_name" : "nicole 🌹",
                  "id" : "3319233",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13561756_153746845045923_1418577002_a.jpg",
                  "username" : "nicolenelson"
                },
                { "full_name" : "Lex",
                  "id" : "35929934",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13525389_501519430043010_2128530729_a.jpg",
                  "username" : "alexis_9_6"
                },
                { "full_name" : "Lyndsay Rinere",
                  "id" : "6750406",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13102393_817722705027552_1324995689_a.jpg",
                  "username" : "lynzrin"
                },
                { "full_name" : "Sel Rrose",
                  "id" : "251967072",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/10296637_662762310463676_485999249_a.jpg",
                  "username" : "selrrose"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BK8_fDTBnAd/",
        "location" : { "name" : "Sel Rrose" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1475109069",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17842736035188174",
            "text" : "There's so much pressure in the blogging world to blend in and follow trends it defeats the purpose. Don't spread yourself thin trying to please everyone. Be you, no matter what 🌟 || 📸: @ingridgoesto"
          },
        "code" : "BK63gTFheAJ",
        "comments" : { "count" : 20,
            "data" : [ { "created_time" : "1475334638",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17842820080188174",
                  "text" : "☺️☺️ @sjerstinhope"
                },
                { "created_time" : "1475539811",
                  "from" : { "full_name" : "Ankita Dhawan",
                      "id" : "54859992",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14730671_1825248284388001_1665270408204517376_a.jpg",
                      "username" : "wearsthatfrom"
                    },
                  "id" : "17842900273188174",
                  "text" : "Beautiful 💕"
                },
                { "created_time" : "1475540938",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17842900603188174",
                  "text" : "@wearsthatfrom Thanks Ankita 💞"
                },
                { "created_time" : "1476317871",
                  "from" : { "full_name" : "#PartyWithKing™",
                      "id" : "233745546",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13703139_1777359892551455_430859354_a.jpg",
                      "username" : "kingthepromoter"
                    },
                  "id" : "17843199724188174",
                  "text" : "Dope 👌 👌"
                }
              ]
          },
        "created_time" : "1475109069",
        "id" : "1349635150426005513_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14359367_310603152643125_26220534823911424_n.jpg?ig_cache_key=MTM0OTYzNTE1MDQyNjAwNTUxMw%3D%3D.2.l",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14359367_310603152643125_26220534823911424_n.jpg?ig_cache_key=MTM0OTYzNTE1MDQyNjAwNTUxMw%3D%3D.2.l",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/14350489_1183542535002207_2240484275667337216_n.jpg?ig_cache_key=MTM0OTYzNTE1MDQyNjAwNTUxMw%3D%3D.2.c",
                "width" : 150
              }
          },
        "likes" : { "count" : 238,
            "data" : [ { "full_name" : "Maïmaï",
                  "id" : "2294162221",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14504932_1300442576661974_1579425208937218048_a.jpg",
                  "username" : "amaia.pelletier"
                },
                { "full_name" : "Lisha Wang",
                  "id" : "17467499",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14350432_1117370681683935_3691359000311365632_a.jpg",
                  "username" : "lissshhhaaa"
                },
                { "full_name" : "Lindsay Yates",
                  "id" : "3047941230",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14052478_1832232643676434_423516816_a.jpg",
                  "username" : "stylezbylinz"
                },
                { "full_name" : "my name is Zinta",
                  "id" : "1109775595",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/11350971_103091233361858_1766016792_a.jpg",
                  "username" : "zintapolo"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BK63gTFheAJ/",
        "location" : { "name" : "Supreme Court, New York County" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1475025862",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17842690171179498",
            "text" : "How about both? 😋\nLate night cravings are real 😕"
          },
        "code" : "BK4YzSmB5tP",
        "comments" : { "count" : 23,
            "data" : [ { "created_time" : "1475255895",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17842754740179498",
                  "text" : "@lehoarder Couldn't agree more 😉"
                },
                { "created_time" : "1475898890",
                  "from" : { "full_name" : "Natural Roots",
                      "id" : "2218416162",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13398536_1027295520690170_467837596_a.jpg",
                      "username" : "naturalrootsnyc"
                    },
                  "id" : "17843042233179498",
                  "text" : "Is this the place in Williamsburg?@nycxclothes"
                },
                { "created_time" : "1475899222",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17843042383179498",
                  "text" : "@naturalrootsnyc It's in the Seaport district in Manhattan 😊"
                },
                { "created_time" : "1475899773",
                  "from" : { "full_name" : "Natural Roots",
                      "id" : "2218416162",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13398536_1027295520690170_467837596_a.jpg",
                      "username" : "naturalrootsnyc"
                    },
                  "id" : "17843042605179498",
                  "text" : "Ahhh ok"
                }
              ]
          },
        "created_time" : "1475025862",
        "id" : "1348937166172429135_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14449252_559296847610353_8169920437224996864_n.jpg?ig_cache_key=MTM0ODkzNzE2NjE3MjQyOTEzNQ%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14449252_559296847610353_8169920437224996864_n.jpg?ig_cache_key=MTM0ODkzNzE2NjE3MjQyOTEzNQ%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14449252_559296847610353_8169920437224996864_n.jpg?ig_cache_key=MTM0ODkzNzE2NjE3MjQyOTEzNQ%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 212,
            "data" : [ { "full_name" : "CJ",
                  "id" : "1365836778",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12940064_210872562622328_1039675820_a.jpg",
                  "username" : "cj.tattoo"
                },
                { "full_name" : "Jon",
                  "id" : "242109575",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/11084908_1680732298815708_1288187405_a.jpg",
                  "username" : "llsmooothjay"
                },
                { "full_name" : "Alexandra Guillot",
                  "id" : "389670351",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13741329_1078616855587318_664049776_a.jpg",
                  "username" : "alexandra_guillot"
                },
                { "full_name" : "Jaila ♡",
                  "id" : "201529906",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14540664_1677489042564572_7817281863919075328_a.jpg",
                  "username" : "jaichanel"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BK4YzSmB5tP/",
        "location" : { "name" : "Tacos vs Burritos" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1474845172",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17863362034024932",
            "text" : "Mood: Never letting go of summer 🌟"
          },
        "code" : "BKzAKTfBIAz",
        "comments" : { "count" : 16,
            "data" : [ { "created_time" : "1474937904",
                  "from" : { "full_name" : "travel. lifestyle. fashion.",
                      "id" : "1510286792",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/11910104_1618298668422113_100883644_a.jpg",
                      "username" : "dayinmydreams"
                    },
                  "id" : "17863410712024932",
                  "text" : "me either!"
                },
                { "created_time" : "1474946915",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17863414951024932",
                  "text" : "@dayinmydreams Let's brace ourselves!!"
                },
                { "created_time" : "1475050517",
                  "from" : { "full_name" : "NYC4ALL",
                      "id" : "1472107627",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/10983667_769138379830261_397793835_a.jpg",
                      "username" : "newyorkcity4all"
                    },
                  "id" : "17863471570024932",
                  "text" : "good job !"
                },
                { "created_time" : "1475069327",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17863478128024932",
                  "text" : "Thank you @newyorkcity4all ☺️"
                }
              ]
          },
        "created_time" : "1474845172",
        "id" : "1347421421630160947_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14449333_292701571112940_537080880066199552_n.jpg?ig_cache_key=MTM0NzQyMTQyMTYzMDE2MDk0Nw%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14449333_292701571112940_537080880066199552_n.jpg?ig_cache_key=MTM0NzQyMTQyMTYzMDE2MDk0Nw%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14449333_292701571112940_537080880066199552_n.jpg?ig_cache_key=MTM0NzQyMTQyMTYzMDE2MDk0Nw%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 198,
            "data" : [ { "full_name" : "Rebecca Ou Photography",
                  "id" : "1362759545",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12501534_225663834456005_942581730_a.jpg",
                  "username" : "rebokeh"
                },
                { "full_name" : "Lucas Klesch",
                  "id" : "2217042169",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12276904_1663708390574530_1465760541_a.jpg",
                  "username" : "thefreschklesch"
                },
                { "full_name" : "Crystal",
                  "id" : "15737537",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14718110_182752192167355_7197190046389108736_a.jpg",
                  "username" : "terrycrys"
                },
                { "full_name" : "Kassandra",
                  "id" : "2210415629",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14499143_1784496001839410_3761624961626669056_a.jpg",
                  "username" : "kcerd"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BKzAKTfBIAz/",
        "location" : { "name" : "Frying Pan Pier 66" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1474585406",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17852240050087626",
            "text" : "Bring on the layers & pumpkin spice lattes! Happy first day of fall guys 🍃🍂 We highlighted our best summer moments on the snap today (@nycxclothes). Check it out and share with us your favorite summer memories 😋 || 📸: @kxngcrwn"
          },
        "code" : "BKrQspnBToB",
        "comments" : { "count" : 43,
            "data" : [ { "created_time" : "1475678856",
                  "from" : { "full_name" : "the•crazy•child",
                      "id" : "3175649807",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13092227_1708873706049309_1562192015_a.jpg",
                      "username" : "thecrazychilddd"
                    },
                  "id" : "17852657098087626",
                  "text" : "You ladies are beautiful!!"
                },
                { "created_time" : "1475679531",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17852657311087626",
                  "text" : "@thecrazychilddd Thanks so much!!"
                },
                { "created_time" : "1476300728",
                  "from" : { "full_name" : "Poetic Licence Shoes",
                      "id" : "1722588679",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/11024318_1421022681525306_181058727_a.jpg",
                      "username" : "poeticlicenceshoes"
                    },
                  "id" : "17852998210087626",
                  "text" : "You ladies have such lovely style! ❤️"
                },
                { "created_time" : "1476303430",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17852999269087626",
                  "text" : "@poeticlicenceshoes Thank you so much!! 💞"
                }
              ]
          },
        "created_time" : "1474585406",
        "id" : "1345242350779447809_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14310698_176596719413825_948415863713693696_n.jpg?ig_cache_key=MTM0NTI0MjM1MDc3OTQ0NzgwOQ%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14310698_176596719413825_948415863713693696_n.jpg?ig_cache_key=MTM0NTI0MjM1MDc3OTQ0NzgwOQ%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14310698_176596719413825_948415863713693696_n.jpg?ig_cache_key=MTM0NTI0MjM1MDc3OTQ0NzgwOQ%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 289,
            "data" : [ { "full_name" : "Tesa",
                  "id" : "408175718",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13117949_1722010501402346_1842303672_a.jpg",
                  "username" : "thenamestesa"
                },
                { "full_name" : "Claudia Raba",
                  "id" : "494147547",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/10995079_1011929898886487_758142003_a.jpg",
                  "username" : "claudiaraba"
                },
                { "full_name" : "MiDiTa",
                  "id" : "1604825158",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13707049_642529429232167_746802185_a.jpg",
                  "username" : "smideen"
                },
                { "full_name" : "Selma Ali",
                  "id" : "1445429462",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13827362_1075862882499672_1063771474_a.jpg",
                  "username" : "laselmastyle"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BKrQspnBToB/",
        "location" : { "name" : "Vivrant Beauty" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1474558140",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17862700750015022",
            "text" : "Been to a lot of brunch places and this one is still among our favorites. From the location to the deco, down to the service and food, it won our heart 💘"
          },
        "code" : "BKqcsR9hdwO",
        "comments" : { "count" : 15,
            "data" : [ { "created_time" : "1474578092",
                  "from" : { "full_name" : "Mae Van Der Weide💫",
                      "id" : "212322024",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14583394_1676362842692904_2155063870140448768_a.jpg",
                      "username" : "maevdw"
                    },
                  "id" : "17862711064015022",
                  "text" : "Pretty awesome :)"
                },
                { "created_time" : "1474642621",
                  "from" : { "full_name" : "Lindsey Andrews",
                      "id" : "3780309",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13658497_163212094085073_1333972010_a.jpg",
                      "username" : "linzandrews"
                    },
                  "id" : "17862740068015022",
                  "text" : "Looks like a very cool place!"
                },
                { "created_time" : "1474651587",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17862745441015022",
                  "text" : "@linzandrews we love it there 😻"
                },
                { "created_time" : "1474651617",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17862745459015022",
                  "text" : "Thanks 😊 @maevdw"
                }
              ]
          },
        "created_time" : "1474558140",
        "id" : "1345013626968595470_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14373988_1122414991176167_94314440983314432_n.jpg?ig_cache_key=MTM0NTAxMzYyNjk2ODU5NTQ3MA%3D%3D.2.l",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14373988_1122414991176167_94314440983314432_n.jpg?ig_cache_key=MTM0NTAxMzYyNjk2ODU5NTQ3MA%3D%3D.2.l",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/14334564_298580817182505_6993188295354089472_n.jpg?ig_cache_key=MTM0NTAxMzYyNjk2ODU5NTQ3MA%3D%3D.2.c",
                "width" : 150
              }
          },
        "likes" : { "count" : 199,
            "data" : [ { "full_name" : "CLAVON MTM",
                  "id" : "1975053777",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/11325293_946379442080558_893880345_a.jpg",
                  "username" : "clavonmtm"
                },
                { "full_name" : "Constance Ecker",
                  "id" : "180150156",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14052267_1780883042196532_72853788_a.jpg",
                  "username" : "constance_ckr"
                },
                { "full_name" : "Thea Natalia",
                  "id" : "307055138",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14156478_1675781786081888_1922624514_a.jpg",
                  "username" : "thea4k"
                },
                { "full_name" : "Reon",
                  "id" : "31661950",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13183505_242609756101568_1583513671_a.jpg",
                  "username" : "rerechangg"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BKqcsR9hdwO/",
        "location" : { "name" : "Oficina 1 M" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1474407145",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17853876445072209",
            "text" : "Bring out the nudes cause fall is here 😏🍃🍂 PS: See how we're transitioning to the new season in our latest video (link in bio) 🎥"
          },
        "code" : "BKl8sSxh_4s",
        "comments" : { "count" : 46,
            "data" : [ { "created_time" : "1475702277",
                  "from" : { "full_name" : "Hannah Lyter",
                      "id" : "16645547",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14099756_1801979346680623_1046309634_a.jpg",
                      "username" : "hannahlyter"
                    },
                  "id" : "17854589815072209",
                  "text" : "Ahhh so good! 💣"
                },
                { "created_time" : "1475703025",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17854590166072209",
                  "text" : "@hannahlyter Thanks Hannah!! Hope you have a great evening ☺️"
                },
                { "created_time" : "1476029615",
                  "from" : { "full_name" : "Brenda Valadez",
                      "id" : "2248773729",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14276390_1274314305933113_2993137660333129728_a.jpg",
                      "username" : "valadezstyle"
                    },
                  "id" : "17854805377072209",
                  "text" : "Love this!!"
                },
                { "created_time" : "1476030234",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17854805803072209",
                  "text" : "@valadezstyle Thank you 😊😊"
                }
              ]
          },
        "created_time" : "1474407145",
        "id" : "1343746990445952556_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14288069_176371309469220_7888722558919376896_n.jpg?ig_cache_key=MTM0Mzc0Njk5MDQ0NTk1MjU1Ng%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14288069_176371309469220_7888722558919376896_n.jpg?ig_cache_key=MTM0Mzc0Njk5MDQ0NTk1MjU1Ng%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14288069_176371309469220_7888722558919376896_n.jpg?ig_cache_key=MTM0Mzc0Njk5MDQ0NTk1MjU1Ng%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 273,
            "data" : [ { "full_name" : "Julie",
                  "id" : "955124796",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/927092_253455784850037_75873933_a.jpg",
                  "username" : "julie_mede"
                },
                { "full_name" : "Lex ▲",
                  "id" : "13234901",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13744143_1748003912105361_1941637367_a.jpg",
                  "username" : "thatchiclex"
                },
                { "full_name" : "h i e u 💫",
                  "id" : "310996639",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14262608_302684906761068_659615355_a.jpg",
                  "username" : "hue.e"
                },
                { "full_name" : "Hannah Roslie",
                  "id" : "291504735",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14487452_619711674874095_5008987286629515264_a.jpg",
                  "username" : "o.hannahh"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BKl8sSxh_4s/",
        "location" : null,
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1474307753",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17862588334013965",
            "text" : "Wishing our Monday looked like this, but it's actually a mix of rain and weekend blues. The hustle never stops though 💪👊"
          },
        "code" : "BKi_HbLBSoN",
        "comments" : { "count" : 10,
            "data" : [ { "created_time" : "1474386140",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17862619531013965",
                  "text" : "@thenamestesa Loved this place so much!"
                },
                { "created_time" : "1474386145",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17862619534013965",
                  "text" : "Thanks @alphahype!"
                },
                { "created_time" : "1474386323",
                  "from" : { "full_name" : "Noémie, aime la viiiiie 🌌",
                      "id" : "498419719",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13437204_260424517649646_432641317_a.jpg",
                      "username" : "noem_hrbt"
                    },
                  "id" : "17862619609013965",
                  "text" : "Love your account !! ❤️❤️"
                },
                { "created_time" : "1474386576",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17862619744013965",
                  "text" : "@noem_hrbt Thank you!! Love yours too. So much wanderlust 😍"
                }
              ]
          },
        "created_time" : "1474307753",
        "id" : "1342913226052282893_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14369051_1168669919911297_1727358773_n.jpg?ig_cache_key=MTM0MjkxMzIyNjA1MjI4Mjg5Mw%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14369051_1168669919911297_1727358773_n.jpg?ig_cache_key=MTM0MjkxMzIyNjA1MjI4Mjg5Mw%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14369051_1168669919911297_1727358773_n.jpg?ig_cache_key=MTM0MjkxMzIyNjA1MjI4Mjg5Mw%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 172,
            "data" : [ { "full_name" : "m⃠i⃠n⃠o⃠r⃠i⃠",
                  "id" : "1522490997",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14310749_229732037429701_2049171813_a.jpg",
                  "username" : "callmemino"
                },
                { "full_name" : "jas 🌹",
                  "id" : "31256882",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14374477_1127420944010196_3439616072146223104_a.jpg",
                  "username" : "jasminekng"
                },
                { "full_name" : "Carmen",
                  "id" : "21256285",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13248679_301855500145878_1359633579_a.jpg",
                  "username" : "hellocrmn"
                },
                { "full_name" : "Настя Приходько",
                  "id" : "1174769696",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/12748162_1575137502811077_1463530936_a.jpg",
                  "username" : "nastia_pri"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BKi_HbLBSoN/",
        "location" : { "name" : "AP Café" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1474158929",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17856123739066244",
            "text" : "Every blogger knows that every good shot is the product of at least 10 failed ones 😂 Throwback to one of our favorite shoots 📸: @pixelpursuit"
          },
        "code" : "BKejQbuhQrB",
        "comments" : { "count" : 23,
            "data" : [ { "created_time" : "1474643437",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17856202432066244",
                  "text" : "@linzandrews Zara has everything!! Thank you 😊"
                },
                { "created_time" : "1474643457",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17856202441066244",
                  "text" : "@fiao_failureisanoption Couldn't agree more!!"
                },
                { "created_time" : "1476300034",
                  "from" : { "full_name" : "Sherelle Naturelle",
                      "id" : "1633715924",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14487189_1770199389920224_2168411266991783936_a.jpg",
                      "username" : "sherelle_naturelle"
                    },
                  "id" : "17857305448066244",
                  "text" : "You ladies are such gorgeous sisters. Loving your fashion and photos! 💕"
                },
                { "created_time" : "1476300291",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17857305679066244",
                  "text" : "@sherelle_naturelle Aww thanks so much Sherelle!"
                }
              ]
          },
        "created_time" : "1474158929",
        "id" : "1341664799914003137_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14240741_721777431307418_1208615753_n.jpg?ig_cache_key=MTM0MTY2NDc5OTkxNDAwMzEzNw%3D%3D.2.l",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14240741_721777431307418_1208615753_n.jpg?ig_cache_key=MTM0MTY2NDc5OTkxNDAwMzEzNw%3D%3D.2.l",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/c0.134.1080.1080/14374424_1758788464393299_722744347_n.jpg?ig_cache_key=MTM0MTY2NDc5OTkxNDAwMzEzNw%3D%3D.2.c",
                "width" : 150
              }
          },
        "likes" : { "count" : 260,
            "data" : [ { "full_name" : "",
                  "id" : "2290377072",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14295569_665590996939212_1261238162_a.jpg",
                  "username" : "kambamthankyoumaam"
                },
                { "full_name" : "MiDiTa",
                  "id" : "1604825158",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13707049_642529429232167_746802185_a.jpg",
                  "username" : "smideen"
                },
                { "full_name" : "(Kyla Ann) Seleno",
                  "id" : "359243200",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14478399_1785799341664237_7582987845984321536_a.jpg",
                  "username" : "kseleno"
                },
                { "full_name" : "djenn",
                  "id" : "609351985",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/1740492_1037101916349980_323368948_a.jpg",
                  "username" : "djenn94"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BKejQbuhQrB/",
        "location" : { "name" : "DUMBO, Brooklyn" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1474069421",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17852551264113132",
            "text" : "What we love most about New York is the substance you find at every corner. Everyone is hustling. Everyone has a dream they believe in. There's this creative energy that just can't be found anywhere else ✨ // We're launching an #nycxstories campaign for you guys to share why you love this magical city. We designate you all to kick it off! Tag us under your pictures and we'll share our favorites 💙"
          },
        "code" : "BKb4iJdBCA7",
        "comments" : { "count" : 25,
            "data" : [ { "created_time" : "1474314456",
                  "from" : { "full_name" : "Marie-Pascale Rolland",
                      "id" : "36697896",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13422813_1123496077711902_237954223_a.jpg",
                      "username" : "mariepascalerolland"
                    },
                  "id" : "17852660167113132",
                  "text" : "Nice place 👌🏻"
                },
                { "created_time" : "1474315805",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17852660689113132",
                  "text" : "@mariepascalerolland Isn't it the cutest? 😻"
                },
                { "created_time" : "1474393672",
                  "from" : { "full_name" : "e v e l y n  e s l a v a",
                      "id" : "8466676",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14549999_127862164344834_4884444938831396864_a.jpg",
                      "username" : "evelyneslava_"
                    },
                  "id" : "17852692228113132",
                  "text" : "Loving your IG!"
                },
                { "created_time" : "1474401180",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17852696728113132",
                  "text" : "@evelyneslava_ Thanks Evelyn!! We love yours too 💘"
                }
              ]
          },
        "created_time" : "1474069421",
        "id" : "1340913951290171451_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14374219_652071764967510_116701406_n.jpg?ig_cache_key=MTM0MDkxMzk1MTI5MDE3MTQ1MQ%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14374219_652071764967510_116701406_n.jpg?ig_cache_key=MTM0MDkxMzk1MTI5MDE3MTQ1MQ%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14374219_652071764967510_116701406_n.jpg?ig_cache_key=MTM0MDkxMzk1MTI5MDE3MTQ1MQ%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 238,
            "data" : [ { "full_name" : "a n c h a l e e",
                  "id" : "14648629",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13707281_1841471196074060_749554455_a.jpg",
                  "username" : "vnchvlee"
                },
                { "full_name" : "Sharon Young",
                  "id" : "424597868",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13597813_618593054974247_987727641_a.jpg",
                  "username" : "sharon_silver"
                },
                { "full_name" : "Shomari Roberts",
                  "id" : "12395250",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14334306_300798703626594_1524409496_a.jpg",
                  "username" : "imprlsham"
                },
                { "full_name" : "CLAVON MTM",
                  "id" : "1975053777",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/11325293_946379442080558_893880345_a.jpg",
                  "username" : "clavonmtm"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BKb4iJdBCA7/",
        "location" : { "name" : "Sel Rrose" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1473996179",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17863521535048427",
            "text" : "\"Release yourself from wanting what others want for your life. Take the time to explore what you want for yourself.\" PS: Summer to Fall Lookbook video (link in bio). 📽"
          },
        "code" : "BKZs1gLhGp0",
        "comments" : { "count" : 19,
            "data" : [ { "created_time" : "1474204725",
                  "from" : { "full_name" : "Philly",
                      "id" : "13138963",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/10525546_916749345026605_199944181_a.jpg",
                      "username" : "hutchins_photo"
                    },
                  "id" : "17863639336048427",
                  "text" : "Wow 🙌🏽"
                },
                { "created_time" : "1474308153",
                  "from" : { "full_name" : "Kristen Ashley",
                      "id" : "230717312",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14730722_1745334915730748_578070690729558016_a.jpg",
                      "username" : "thedreamingrebelle"
                    },
                  "id" : "17863688944048427",
                  "text" : "🙌🏾💣❤️"
                },
                { "created_time" : "1474386176",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17863731802048427",
                  "text" : "Thank you @hutchins_photo !! 😊"
                },
                { "created_time" : "1474386191",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17863731811048427",
                  "text" : "Thanks Kristen @thedreamingrebelle !! Have a great day 😚"
                }
              ]
          },
        "created_time" : "1473996179",
        "id" : "1340299554851154548_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14360042_1118125121596693_789226371_n.jpg?ig_cache_key=MTM0MDI5OTU1NDg1MTE1NDU0OA%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14360042_1118125121596693_789226371_n.jpg?ig_cache_key=MTM0MDI5OTU1NDg1MTE1NDU0OA%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14360042_1118125121596693_789226371_n.jpg?ig_cache_key=MTM0MDI5OTU1NDg1MTE1NDU0OA%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 257,
            "data" : [ { "full_name" : "Stina🦄",
                  "id" : "1561332292",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13774317_1132196336852245_1268586762_a.jpg",
                  "username" : "havfruenblogg"
                },
                { "full_name" : "a n c h a l e e",
                  "id" : "14648629",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13707281_1841471196074060_749554455_a.jpg",
                  "username" : "vnchvlee"
                },
                { "full_name" : "Jaila ♡",
                  "id" : "201529906",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14540664_1677489042564572_7817281863919075328_a.jpg",
                  "username" : "jaichanel"
                },
                { "full_name" : "Alexandra Guillot",
                  "id" : "389670351",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13741329_1078616855587318_664049776_a.jpg",
                  "username" : "alexandra_guillot"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BKZs1gLhGp0/",
        "location" : null,
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      },
      { "alt_media_url" : null,
        "can_delete_comments" : false,
        "can_view_comments" : true,
        "caption" : { "created_time" : "1473823736",
            "from" : { "full_name" : "by Shelcy & Christy",
                "id" : "1456981694",
                "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                "username" : "nycxclothes"
              },
            "id" : "17842315159183030",
            "text" : "Playtime's over! Chris and I have been in a creative slump with YouTube, but summer leaving sure kicked us in the butt || We're back with a new video to make the much dreaded summer to fall transition easier. Let us know what you think! Link in bio 📽"
          },
        "code" : "BKUj7XABdrL",
        "comments" : { "count" : 36,
            "data" : [ { "created_time" : "1475551528",
                  "from" : { "full_name" : "Nehemie Pierre",
                      "id" : "2189896638",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14063549_1252721378095055_1505679310_a.jpg",
                      "username" : "modelnehemie"
                    },
                  "id" : "17842914430183030",
                  "text" : "Love this ❤️"
                },
                { "created_time" : "1475551988",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17842914580183030",
                  "text" : "@modelnehemie Thanks girl 😘"
                },
                { "created_time" : "1475764112",
                  "from" : { "full_name" : "monique beasley",
                      "id" : "9938997",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14561805_1009371612542141_3123472020638007296_a.jpg",
                      "username" : "mo_bees"
                    },
                  "id" : "17842983334183030",
                  "text" : "You girls are stunning!"
                },
                { "created_time" : "1475764204",
                  "from" : { "full_name" : "by Shelcy & Christy",
                      "id" : "1456981694",
                      "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
                      "username" : "nycxclothes"
                    },
                  "id" : "17842983364183030",
                  "text" : "@mo_bees Aww thank you!! Have a good one 😊"
                }
              ]
          },
        "created_time" : "1473823736",
        "id" : "1338853000009341643_1456981694",
        "images" : { "low_resolution" : { "height" : 320,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s320x320/e35/14269037_1573199946321713_881999727_n.jpg?ig_cache_key=MTMzODg1MzAwMDAwOTM0MTY0Mw%3D%3D.2",
                "width" : 320
              },
            "standard_resolution" : { "height" : 640,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/14269037_1573199946321713_881999727_n.jpg?ig_cache_key=MTMzODg1MzAwMDAwOTM0MTY0Mw%3D%3D.2",
                "width" : 640
              },
            "thumbnail" : { "height" : 150,
                "url" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-15/s150x150/e35/14269037_1573199946321713_881999727_n.jpg?ig_cache_key=MTMzODg1MzAwMDAwOTM0MTY0Mw%3D%3D.2",
                "width" : 150
              }
          },
        "likes" : { "count" : 284,
            "data" : [ { "full_name" : "Nina Vasiljevic",
                  "id" : "509535433",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/12237518_1661669687409480_1068018869_a.jpg",
                  "username" : "ninavasil"
                },
                { "full_name" : "desire be, desire go 🌿",
                  "id" : "590262187",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/14566514_110248146111098_9198081650213257216_a.jpg",
                  "username" : "superrichkid624"
                },
                { "full_name" : "Fabine B",
                  "id" : "26606161",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13628199_924154587712300_302453110_a.jpg",
                  "username" : "fabflawless"
                },
                { "full_name" : "E.T 🌰✨",
                  "id" : "498642144",
                  "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13256622_1029677403765002_230271696_a.jpg",
                  "username" : "titaw_1905"
                }
              ]
          },
        "link" : "https://www.instagram.com/p/BKUj7XABdrL/",
        "location" : { "name" : "Freemans" },
        "type" : "image",
        "user" : { "full_name" : "by Shelcy & Christy",
            "id" : "1456981694",
            "profile_picture" : "https://scontent-iad3-1.cdninstagram.com/t51.2885-19/s150x150/13651916_877765259026515_1653023742_a.jpg",
            "username" : "nycxclothes"
          },
        "user_has_liked" : false
      }
    ],
  "more_available" : true,
  "status" : "ok"
};

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

		data.items.forEach(function(item) {

			// console.log(item.caption.text);
			console.log(item.code);
			console.log(item.link);

		});

	}

	picFormation(data);


	res.render('pages/pics', { 'title': 'NYCxClothes | pics', 'pics': 'data' });
});


module.exports = router;