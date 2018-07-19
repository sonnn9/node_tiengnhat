var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/bang-chu-cai-tieng-nhat', function (req, res, next) {
    res.render('single', {title: 'Express'});
});
router.get('/bang-chu-cai-tieng-nhat/:alphabe', function (req, res, next) {
    if(req.params.alphabe == "hiragana"){
        res.render('single', {title:"Bảng chữ cái Hiragana",getAjaxHtml: "",includePartials:"hiragana",data:""});
    }else {
        res.render('single', {title:"Bảng chữ cái  Katakana",getAjaxHtml: "",includePartials:"katakana",data:""});
    }
});
router.get('/kanji-strokes', function (req, res, next) {
    var client = new Client();

// direct way
    client.get("http://data.tiengnhat2s.com/wp-json/kanji-strokes/get-kanji-strokes", function (data, response) {
        // parsed response body as js object
        console.log(data);
        res.render('single', {title:"Tập viết Kanji",getAjaxHtml: "",includePartials:"kanji_strokes",data:data});

    });
});

module.exports = router;
