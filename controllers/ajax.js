var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();
/* GET home page. */
router.get('/get-menu', function(req, res, next) {
    request({
        url: "http://data.tiengnhat2s.com/wp-json/menu/get-main-menu",
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.render('layouts/mainmenu',{dataMenu:body});
        }
    })
});

module.exports = router;
