var express = require('express'); // express 모듈 사용하기 위함
var router = express.Router();
var passport = require('passport');
require('../passport');
 router.get('/',function(req,res){
     res.render('/index');
});

// 로그인 라우팅 POST /login
router.post('/', function(req, res, next) {

    //  패스포트 모듈로 인증 시도
    passport.authenticate('local', function (err, user, info) {
    //   var error = err || info;
    //   if (error) return res.json(401, error);
    //   if (!user) return res.json(404, {message: 'Something went wrong, please try again.'});
    

      // 인증된 유저 정보로 응답
        var user =req.user;
        res.json(user);
    })(req, res, next);
  });

module.exports = router;