var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;

/* GET users listing. */
router.get('/login', function(req, res, next) {
    res.render('layouts/users/login',{register:-1,login:-1});
});

/* GET users listing. */
router.post('/register', function(req, res, next) {
    console.log(req.body);
    var client = new Client();
// set content-type header and data as json in args parameter
    var args = {
        data: {
            user_email: req.body.user_email,
            user_name: req.body.user_name,
            user_mobile: req.body.user_mobile,
            user_pass: req.body.user_pass
        },
        headers: { "Content-Type": 'application/x-www-form-urlencoded' }
    };
    client.post("http://data.tiengnhat2s.com/wp-json/users/create", args, function (data, response) {
        // parsed response body as js object
        res.render('layouts/users/login',{register:data.status,login:-1});
    });
});
/* GET users listing. */
router.get('/register', function(req, res, next) {
    res.render('layouts/users/login',{register:-1,login:-1});
});

module.exports = router;
