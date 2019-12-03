var express = require('express');
var router = express.Router();
//https://m.blog.naver.com/PostView.nhn?blogId=kangminser88&logNo=221152151491&proxyReferer=https%3A%2F%2Fwww.google.com%2F
//https://velopert.com/406
/* GET users listing. */
router.get('/', function(req, res, next) {
  //세션 초기 설정
  sess = req.session;
  console.log(sess)
  res.send('req-session: debug-> \n'+sess);
});

router.post('/login', function(req, res, next) {
  // res.send(req.body);
  console.log(req.body)
  res.json({id:req.body.id})
});

router.post('/signup', function(req, res, next) {
  res.send(req.body);
});

router.get('/logincheck', function(req,res,next){
  res.send(req.body);
})



module.exports = router;
