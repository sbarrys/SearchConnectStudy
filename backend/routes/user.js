// var express  = require('express');
// var router   = express.Router();
// var User     = require('../models/UserSchema');
// var util     = require('../models/util');

// // index
// router.get('/', util.isLoggedin, function(req,res,next){
//     User.find({})
//     .sort({username:1})
//     .exec(function(err,users){
//       res.json(err||!users? util.successFalse(err): util.successTrue(users)); //실패하면 오류메세지,  성공하면 유저와 함꼐 성공메세지
//     });
// });

// //find by _id
// router.get('/:id',util.isLoggedin)
  
// // create
// router.post('/', function(req,res,next){
//     var user = new User(req.body);
//     user.save(function(err,user){
//       res.json(err||!user? util.successFalse(err): util.successTrue(user));
//     });//성공하면 user보낸다. ##이거를 로그인 페이지로 이동하게 해주면 딱좋음
// });


// // show
// router.get('/:name', util.isLoggedin, function(req,res,next){
//     User.findOne({name:req.params.name})
//     .exec(function(err,user){
//       res.json(err||!user? util.successFalse(err): util.successTrue(user));
//     });
// });


// // destroy 
// router.delete('/:name', util.isLoggedin, checkPermission, function(req,res,next){
//     User.findOneAndRemove({name:req.params.name})
//     .exec(function(err,user){
//       res.json(err||!user? util.successFalse(err): util.successTrue(user));
//     });
//   });//로그인되어있는지 확인후 삭제해준다.

  
// module.exports = router;

// // private functions
// //token의 _id와 DB에서 찾은 user의 _id를 확인하는 것으로 바뀌었습니다.
// function checkPermission(req,res,next){ //*
//     User.findOne({username:req.params.username}, function(err,user){
//       if(err||!user) return res.json(util.successFalse(err));
//       else if(!req.decoded || user._id != req.decoded._id) 
//         return res.json(util.successFalse(null,'You don\'t have permission'));
//       else next();
//     });
//   }