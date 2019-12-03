
var express = require('express'); // express 모듈 사용하기 위함
var router = express.Router();
var passport = require('passport');

router.post('/', function (req, res) {
  req.logout();
  res.redirect('/login');
});

module.exports = router;