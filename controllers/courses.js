var express = require('express');
var router = express.Router();
var request = require('request');
var Client = require('node-rest-client').Client;
/* GET home page. */
router.get('/minano-nihongo', function (req, res, next) {
    var client = new Client();

// direct way
    client.get("http://data.tiengnhat2s.com/wp-json/mina/get_categories", function (data, response) {
        // parsed response body as js object
        console.log(data);
        res.render('category-mina', {'title': "MINANO NIHONGO", items: data});

    });


});

router.get('/kanji-look-and-learn', function (req, res, next) {
    var client = new Client();

// direct way
    client.get("http://data.tiengnhat2s.com/wp-json/kanji-look-and-learn/get-categories", function (data, response) {
        // parsed response body as js object
        res.render('category-kanjilookandlearn', {'title': "KANJI LOOK AND LEARN", items: data});

    });
});

router.get('/kanji-look-and-learn/:slug', function (req, res, next) {
    var client = new Client();
    if(!req.query.pid){
        // direct way
        client.get("http://data.tiengnhat2s.com/wp-json/kanji-look-and-learn/get-cat-lessons?slug="+req.params.slug, function (data, response) {
            // parsed response body as js object
            data.path = "/kanji-look-and-learn/"+req.params.slug;
            data.nav = [{name:"Kanji look and learn",url:'/kanji-look-and-learn'},{name:req.params.slug,url:'/kanji-look-and-learn/'+req.params.slug}];
            res.render('single', {title:"Kanji Look and Learn",getAjaxHtml: "",includePartials:"kanjilookandlearnlessons",data:data});
        });
    }else {

        client.get("http://data.tiengnhat2s.com/wp-json/kanji-look-and-learn/get-detail?pid="+req.query.pid, function (data, response) {
            if(data === 0){
                res.render('404error');
            }else {
                res.render('single', {title:data.post.post_title,getAjaxHtml: "",includePartials:data.detail.template_lessson[0],data:data});
            }

        });
    }
});


router.get('/800-han-tu-va-tu-ghep', function (req, res, next) {
    var client = new Client();

    if(!req.query.pid){
        client.get("http://data.tiengnhat2s.com/wp-json/800-han-tu-va-tu-ghep/get-all-lessons", function (data, response) {
            // parsed response body as js object
            res.render('category-800hantu', {'title': "800 Hán tự và từ ghép", items: data});
        });
    }else{
        client.get("http://data.tiengnhat2s.com/wp-json/800-han-tu-va-tu-ghep/get-detail?pid="+req.query.pid, function (data, response) {
            if(data === 0){
                res.render('404error');
            }else {
                res.render('single', {title:data.post.post_title,getAjaxHtml: "",includePartials:"800hantu",data:data});
            }

        });
    }

});

router.get('/shadowing-1', function (req, res, next) {
    var client = new Client();
    if(!req.query.pid){
        client.get("http://data.tiengnhat2s.com/wp-json/shadowing-1/get_categories", function (data, response) {
            // parsed response body as js object
            res.render('category-shadowing', {'title': "SHADOWING 1",image:"shadowing1.jpg",path:"/shadowing-1", items: data});

        });
    }else{
        client.get("http://data.tiengnhat2s.com/wp-json/shadowing-1/get-detail?pid="+req.query.pid, function (data, response) {
            if(data === 0){
                res.render('404error');
            }else {
                res.render('single', {title:data.post.post_title,getAjaxHtml: "",includePartials:"shadowing",data:data});
            }

        });
    }


});

router.get('/shadowing-2', function (req, res, next) {
    var client = new Client();

    if(!req.query.pid){
        client.get("http://data.tiengnhat2s.com/wp-json/shadowing-2/get_categories", function (data, response) {
            // parsed response body as js object
            res.render('category-shadowing', {'title': "SHADOWING 2",path:"/shadowing-1",image:"shadowing2.jpg", items: data});

        });
    }else{
        client.get("http://data.tiengnhat2s.com/wp-json/shadowing-2/get_categories", function (data, response) {
            // parsed response body as js object
            res.render('single', {'title': "SHADOWING 2",path:"/shadowing-1",image:"shadowing2.jpg", items: data});

        });
    }

});



module.exports = router;
