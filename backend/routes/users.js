var express = require('express');
var router = express.Router();
var User = require('../models/UserSchema');
var util = require('../models/util');
const multer = require('multer')
var path = require('path');
var fs = require('fs');    			// 파일시스템 모듈

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname + '/uploads/'));

  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});
const upload = multer({ storage: storage, limits: { fileSize: 1024 * 1000 * 5 } });

router.put('/:id/scheduleImg', upload.single('scheduleImg'), function (req, res) {
  if (!req.file) return res.send('Please upload a file');
  User.findByIdAndUpdate(req.params.id, { $set: { scheduleImg: req.file.path } }).exec((err, user) => {
    if (err) {
      res.json(util.successFalse(err));
    }
    else res.json(util.successTrue(user))
  })
});
//10분부터

router.get('/:id/scheduleImg', function (req, res) {
  User.findById(req.params.id).exec((err, user) => {
    if (err) {
      res.json(util.successFalse(err));
    }
    else {
      fs.readFile(user.scheduleImg, (err,data)=>{
        // res.writeHead(200,{ "Context-Type": "image/jpg" })
        // var buf = Buffer.from(data, 'base64');

        res.json({scheduleImg:data})
        console.log(data)
        res.end()
      })
        // res.json({scheduleImg: user.scheduleImg, aaa: exists })
    }
  })
});

// index
router.get('/', util.isLoggedin, function(req,res,next){
    User.find({}).populate([{path:'studyList'}])
    .sort({username:1})
    .exec(function(err,users){
      res.json(err||!users? util.successFalse(err): util.successTrue(users)); //실패하면 오류메세지,  성공하면 유저와 함꼐 성공메세지
    });
});

// create
router.post('/signup', function (req, res, next) {
  var user = new User(req.body);
  user.save(function (err, user) {
    res.json(err || !user ? util.successFalse(err) : util.successTrue(user));
  });//성공하면 user보낸다. ##이거를 로그인 페이지로 이동하게 해주면 딱좋음
});


// show
router.get('/:id', util.isLoggedin, function(req,res,next){
    User.findOne({id:req.params.id})
    .exec(function(err,user){
      res.json(err||!user? util.successFalse(err): util.successTrue(user));
    });
});

router.get('/:id/study', util.isLoggedin, function(req,res,next){
  User.findById(req.params.id).populate('studyList')
  .exec(function(err,user){
    console.log(user)

    res.json(err||!user? util.successFalse(err): util.successTrue(user));
  });
});


// destroy 
router.delete('/:id', util.isLoggedin, checkPermission, function(req,res,next){
    User.findOneAndRemove({id:req.params.id})
    .exec(function(err,user){
      res.json(err||!user? util.successFalse(err): util.successTrue(user.studyList));
    });
});//로그인되어있는지 확인후 삭제해준다.


module.exports = router;

// private functions
//token의 _id와 DB에서 찾은 user의 _id를 확인하는 것으로 바뀌었습니다.
function checkPermission(req, res, next) { //*
  User.findOne({ username: req.params.username }, function (err, user) {
    if (err || !user) return res.json(util.successFalse(err));
    else if (!req.decoded || user._id != req.decoded._id)
      return res.json(util.successFalse(null, 'You don\'t have permission'));
    else next();
  });
}