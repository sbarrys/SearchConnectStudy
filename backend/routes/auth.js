// api/auth.js

var express  = require('express');
var router   = express.Router();
var User     = require('../models/userSchema');
var util     = require('../models/util.js');
var jwt      = require('jsonwebtoken');

// login
router.post('/login',
  function(req,res,next){
    var isValid = true;
    var validationError = {
      name:'ValidationError',
      errors:{}
    };

    if(!req.body.id){ //id가 없다면 오류처리
      isValid = false;
      validationError.errors.id = {message:'id is required!'};
    }
    if(!req.body.password){ //비밀번호없다면 오류처리
      isValid = false;
      validationError.errors.password = {message:'Password is required!'};
    }

    if(!isValid) return res.json(util.successFalse(validationError));  //util의 에러 메세지 응답해주는 함수이용
    else next();    //아니라면 다음함수로 넘어감
  },
  //아이디와 패스워드가 있다면 넘어오는 함수
  function(req,res,next){
    User.findOne({id:req.body.id})
    .select({password:1,id:1,name:1,major:1,gender:1 }) //비밀번호, 아이디, 이름, 전공, 성을 상위한개만 가져온다.
    .exec(function(err,user){
      if(err)
      return res.json(util.successFalse(err));
    
      if(!user){
        return res.json(util.successFalse(null,'id or Password is invalid'));
      }
      if(!user.authenticate(req.body.password))//true
         return res.json(util.successFalse(null,'id or Password is invalid'));

      else {

        var payload = {     //토큰에 들어갈정보 이것이 암호화되서 토큰에 실린다.
          _id : user._id,
          id: user.id
        };
        var secretOrPrivateKey ="abcd"  //process.env.JWT_SECRET;
        var options = {expiresIn: 60*60*24};
        jwt.sign(payload, secretOrPrivateKey, options, function(err, token){
          if(err) {return res.json(util.successFalse(err));}        
          res.json(util.successTrue({token:token , id: user.id, idx: user._id}));                //토큰 보내준다.
        });
      }
    });
  }
);

// me
//토큰을 해독해서 DB에서 user정보 return
router.get('/me',util.isLoggedin,
 //util.isLoggedin 라는 함수에서 토큰을 인증하고, decoded에 싣는다.
 //미들웨어로 token이 있는지 없는지 확인하고 token이 있다면 jwt.verify함수를 이용해서 토큰 hash를 확인하고 토큰에 들어있는 정보를 해독합니다.
 // 해독한 정보는 req.decoded에 저장하고 있으며
 // 이후 로그인 유무는 decoded가 있는지 없는지를 통해 알 수 있습니다.  
  function(req,res,next) {
    User.findById(req.decoded._id)
    .exec(function(err,user){
      if(err||!user) return res.json(util.successFalse(err));
      res.json(util.successTrue(user));
    });
  }
);

// refresh
//토큰 유효기간 끝나기전 토큰발행
router.get('/refresh', util.isLoggedin,
  function(req,res,next) {
    User.findById(req.decoded._id)
    .exec(function(err,user){
      if(err||!user) return res.json(util.successFalse(err));
      else {
        var payload = {
          _id : user._id,
          id: user.id
        };
        var secretOrPrivateKey = "abcd"//process.env.JWT_SECRET;
        var options = {expiresIn: 60*60*24};
        jwt.sign(payload, secretOrPrivateKey, options, function(err, token){
          if(err) return res.json(util.successFalse(err));
          res.json(util.successTrue(token));
        });
      }
    });
  }
);

module.exports = router;