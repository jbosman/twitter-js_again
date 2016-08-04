var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(express.static('public'));

// router.get('/stylesheets/style.css', function(req, res ){
// 	res.sendFile("/stylesheets/style.css", { root: __dirname + "/../public/"});
// });

module.exports = router;