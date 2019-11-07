var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.render('result', {data: req.body}) // POST의 argument를 적용하여 layout/result 응답
});

module.exports = router;
